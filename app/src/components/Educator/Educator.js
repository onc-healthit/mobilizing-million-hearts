import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import {
	AFRICAN_AMERICAN,
	FEMALE,
	IS_SMOKER,
	MALE,
	NOT_A_SMOKER,
	OTHER,
	WHITE,
	computeTenYearScore,
	FORMER_SMOKER,
} from '../../ascvd/ASCVDRisk';
import { ageEvent, buttonGroupEvent, sliderEvent } from '../../common/auditevents';
import { VALIDATION } from '../../common/constants';
import {
	calculateRiskCard,
	canCalculateScore,
	calculateMissingFields,
} from '../../ascvd/ASCVDValidator';

import AuditEventService from '../../services/AuditEventService';
import ButtonGroupElement from '../ButtonGroupElement/ButtonGroupElement';
import Chart from '../Chart/Chart';
import MissingFields from '../MissingFields/MissingFields';
import SliderFormElement from '../SliderFormElement/SliderFormElement';
import TextInput from '../TextInput/TextInput';
import Banner from '../Banner/Banner';

const copy = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

const calculateRisk = (patientInfo) => {
	return canCalculateScore(patientInfo) ? computeTenYearScore(patientInfo) : null;
};

const ranges = {
	ldl: [30, 300],
	hdl: [20, 100],
	totalChol: [130, 320],
	systolic: [90, 200],
	diastolic: [60, 130],
};

export default class Educator extends Component {
	constructor(props) {
		super(props);
		const cardInfo = calculateRiskCard(props.risk, props.patientInfo);
		this.auditEventService = new AuditEventService(props);
		this.state = {
			patientInfo: copy(props.patientInfo),
			estimatedRisk: calculateRisk(props.patientInfo),
			riskText: '',
			backgroundColor: 'white',
			...cardInfo,
			doubleFires: {},
		};
	}

	generateSetter = (path, optionalButtonMatchings) => {
		return (val) => {
			if (this.doubleFire(path)) {
				return;
			}
			let newValue = val;
			if (optionalButtonMatchings) {
				newValue = optionalButtonMatchings[val];
			}
			const patientInfo = copy(this.state.patientInfo);
			const newPatientInfo = _.set(patientInfo, path, newValue);
			const estimatedRisk = calculateRisk(newPatientInfo);
			const cardInfo = calculateRiskCard(estimatedRisk, newPatientInfo);
			this.setState({ patientInfo: newPatientInfo, estimatedRisk, ...cardInfo });
		};
	};

	totalCholestoralOnChange = (value) => {
		if (this.doubleFire('totalCholesterol.value')) {
			return;
		}

		const patientInfo = copy(this.state.patientInfo);
		const newPatientInfo = _.set(patientInfo, 'totalCholesterol.value', value);
		this.recomputeRiskAndCard(newPatientInfo);
	};

	systolicOnChange = (value) => {
		if (this.doubleFire('systolicBloodPressure.value')) {
			return;
		}

		const patientInfo = copy(this.state.patientInfo);
		const newPatientInfo = _.set(patientInfo, 'systolicBloodPressure.value', value);
		this.recomputeRiskAndCard(newPatientInfo);
	};

	hdlOnChange = (value) => {
		if (this.doubleFire('hdl.value')) {
			return;
		}

		const patientInfo = copy(this.state.patientInfo);
		const newPatientInfo = _.set(patientInfo, 'hdl.value', value);
		this.recomputeRiskAndCard(newPatientInfo);
	};

	diastolicOnChange = (value) => {
		if (this.doubleFire('diastolicBloodPressure.value')) {
			return;
		}

		const patientInfo = copy(this.state.patientInfo);
		const newPatientInfo = _.set(patientInfo, 'diastolicBloodPressure.value', value);
		this.recomputeRiskAndCard(newPatientInfo);
	};

	ldlOnChange = (value) => {
		if (this.doubleFire('ldl.value')) {
			return;
		}

		const patientInfo = copy(this.state.patientInfo);
		const newPatientInfo = _.set(patientInfo, 'ldl.value', value);
		this.recomputeRiskAndCard(newPatientInfo);
	};

	handleCurrentAgeChange = (e) => {
		const { name, description } = ageEvent;
		const re = /^[0-9\b]+$/;

		if (e.target.value === '' || (re.test(e.target.value) && e.target.value < 120)) {
			const { patientInfo: oldPatientInfo } = this.state;
			const patientInfo = copy(oldPatientInfo);
			patientInfo.age = e.target.value;
			const estimatedRisk = calculateRisk(patientInfo);
			const cardInfo = calculateRiskCard(estimatedRisk, patientInfo);
			this.auditEventService.create(name, { description, content: e.target.value });
			this.setState({ patientInfo, estimatedRisk, ...cardInfo });
		}
	};

	recomputeRiskAndCard(patientInfo) {
		const { missingFields } = calculateMissingFields(patientInfo);
		if (missingFields.length) {
			this.setState({ patientInfo, missingFields, missingData: true });
		} else {
			const risk = calculateRisk(patientInfo);
			const cardInfo = calculateRiskCard(risk, patientInfo);
			this.setState({
				patientInfo,
				missingFields: [],
				missingData: false,
				estimatedRisk: risk,
				...cardInfo,
			});
		}
	}

	assignByRange(min, max, val) {
		return val < min ? min : val > max ? max : val;
	}

	adjustRanges(patientInfo) {
		const newPatientInfo = copy(patientInfo);
		newPatientInfo.hdl.value = this.assignByRange(...ranges.hdl, newPatientInfo.hdl.value);
		newPatientInfo.ldl.value = this.assignByRange(...ranges.ldl, newPatientInfo.ldl.value);
		newPatientInfo.totalCholesterol.value = this.assignByRange(
			...ranges.ldl,
			newPatientInfo.totalCholesterol.value
		);
		newPatientInfo.systolicBloodPressure.value = this.assignByRange(
			...ranges.ldl,
			newPatientInfo.systolicBloodPressure.value
		);
		newPatientInfo.diastolicBloodPressure.value = this.assignByRange(
			...ranges.ldl,
			newPatientInfo.diastolicBloodPressure.value
		);
		return newPatientInfo;
	}

	// Due to a bug in the underlying react-slider library, when a value is below min, onChange
	// gets fired again with the min. We need to hackily ignore this doublefire
	doubleFire(path) {
		const { doubleFires } = this.state;
		let res;
		if (doubleFires[path]) {
			const last = doubleFires[path];
			const now = moment(new Date());
			const duration = moment.duration(now.diff(last));
			res = duration.asMilliseconds() < 65;
		}
		this.setState({ doubleFires: { ...doubleFires, [path]: moment(new Date()) } });
		return res;
	}

	sliderAudit(options) {
		const { subName, content } = options;
		const formattedSubName = subName
			.split(' ')
			.slice(0, -1) // Slice off units. Not necessary.
			.join('_')
			.toUpperCase();
		const { name, description } = sliderEvent;
		const formattedName = `${name}_${formattedSubName}`;
		return this.auditEventService.create(formattedName, { content, description });
	}

	buttonGroupAudit(options) {
		const { subName, content } = options;
		const formattedSubName = subName.split(' ').join('_').toUpperCase();
		const { name, description } = buttonGroupEvent;
		const formattedName = `${name}_${formattedSubName}`;
		return this.auditEventService.create(formattedName, { content, description });
	}

	render() {
		const { risk } = this.props;
		const {
			missingData,
			missingFields,
			patientInfo,
			estimatedRisk,
			riskText,
			backgroundColor,
		} = this.state;

		const smoking = {
			current: 'Yes',
			former: 'Former',
			not: 'No',
		}[patientInfo.relatedFactors.smoker];

		const race = {
			white: 'White',
			africanamerican: 'African American',
			other: 'Other',
		}[patientInfo.relatedFactors.race];

		// Validation display strings
		const {
			totalCholesterol,
			systolicBloodPressure,
			hdlCholesterol,
			diastolicBloodPressure,
			ldlCholesterol,
			age,
		} = VALIDATION;

		const [totalCholesterolNotFound, totalCholestrolOutOfRange] = totalCholesterol;
		const [systolicBloodPressureNotFound, systolicBloodPressureOutOfRange] = systolicBloodPressure;
		const [hdlCholesterolNotFound, hdlCholesterolOutOfRange] = hdlCholesterol;
		const [
			diastolicBloodPressureNotFound,
			diastolicBloodPressureOutOfRange,
		] = diastolicBloodPressure;
		const [ldlCholesterolNotFound, ldlCholesterolOutOfRange] = ldlCholesterol;
		const [ageNotFound, ageOutOfRange] = age;

		return (
			<React.Fragment>
				<div className="row">
					<div className="col-md-8 line-bottom">
						<div className="row">
							<SliderFormElement
								min={130}
								max={320}
								name="Total Cholesterol (mg/dL)"
								value={patientInfo.totalCholesterol.value}
								cb={this.totalCholestoralOnChange}
								audit={(options) => this.sliderAudit(options)}
								notFound={totalCholesterolNotFound}
								outOfRange={totalCholestrolOutOfRange}
							/>
							<SliderFormElement
								min={90}
								max={200}
								name="Systolic Blood Pressure (mmHg)"
								value={patientInfo.systolicBloodPressure.value}
								cb={this.systolicOnChange}
								audit={(options) => this.sliderAudit(options)}
								notFound={systolicBloodPressureNotFound}
								outOfRange={systolicBloodPressureOutOfRange}
							/>
							<SliderFormElement
								min={20}
								max={100}
								name="HDL Cholesterol (mg/dL)"
								value={patientInfo.hdl.value}
								cb={this.hdlOnChange}
								audit={(options) => this.sliderAudit(options)}
								notFound={hdlCholesterolNotFound}
								outOfRange={hdlCholesterolOutOfRange}
							/>
							<SliderFormElement
								min={60}
								max={130}
								name="Diastolic Blood Pressure (mmHg)"
								value={patientInfo.diastolicBloodPressure.value}
								cb={this.diastolicOnChange}
								audit={(options) => this.sliderAudit(options)}
								notFound={diastolicBloodPressureNotFound}
								outOfRange={diastolicBloodPressureOutOfRange}
							/>
							<SliderFormElement
								min={30}
								max={300}
								name="LDL Cholesterol (mg/dL)"
								value={patientInfo.ldl.value}
								cb={this.ldlOnChange}
								audit={(options) => this.sliderAudit(options)}
								notFound={ldlCholesterolNotFound}
								outOfRange={ldlCholesterolOutOfRange}
							/>
						</div>
						<div className="row">
							<div className="col-md-12 pl-0 pt-2">
								<div className="row m-2">
									<ButtonGroupElement
										values={['Yes', 'No']}
										selected={patientInfo.relatedFactors.hypertensive ? 'Yes' : 'No'}
										name="On Hypertensive Treatment"
										cb={this.generateSetter('relatedFactors.hypertensive', {
											Yes: true,
											No: false,
										})}
										audit={(options) => this.buttonGroupAudit(options)}
									/>
									<ButtonGroupElement
										values={['Yes', 'No']}
										selected={patientInfo.statin ? 'Yes' : 'No'}
										name="On a Statin"
										cb={this.generateSetter('statin', { Yes: true, No: false })}
										audit={(options) => this.buttonGroupAudit(options)}
									/>
									<ButtonGroupElement
										values={['Yes', 'No']}
										selected={patientInfo.aspirin ? 'Yes' : 'No'}
										name="On Aspirin Therapy"
										cb={this.generateSetter('aspirin', { Yes: true, No: false })}
										audit={(options) => this.buttonGroupAudit(options)}
									/>
								</div>
								<div className="row m-2">
									<ButtonGroupElement
										values={['Yes', 'No']}
										selected={patientInfo.relatedFactors.diabetic ? 'Yes' : 'No'}
										name="History of Diabetes"
										cb={this.generateSetter('relatedFactors.diabetic', { Yes: true, No: false })}
										audit={(options) => this.buttonGroupAudit(options)}
									/>
									<ButtonGroupElement
										values={['Yes', 'Former', 'No']}
										selected={smoking}
										name="Smoker"
										cb={this.generateSetter('relatedFactors.smoker', {
											Yes: IS_SMOKER,
											Former: FORMER_SMOKER,
											No: NOT_A_SMOKER,
										})} // Former is currently being treated as No
										audit={(options) => this.buttonGroupAudit(options)}
									/>
									<div className="col-md-offset-4" />
								</div>
								<div className="row m-2">
									<div className="col-md-4 justify-content-center">
										<TextInput
											label="Current Age"
											onChange={this.handleCurrentAgeChange}
											rows={1}
											cols={4}
											style={{ textAlign: 'center', overflow: 'hidden', resize: 'none' }}
											value={patientInfo.age}
											min={40}
											max={79}
											outOfRange={ageOutOfRange}
											notFound={ageNotFound}
										/>
									</div>
									<ButtonGroupElement
										values={['Female', 'Male']}
										selected={patientInfo.sex === MALE ? 'Male' : 'Female'}
										name="Sex"
										cb={this.generateSetter('sex', { Male: MALE, Female: FEMALE })}
										audit={(options) => this.buttonGroupAudit(options)}
									/>
									<ButtonGroupElement
										values={['White', 'African American', 'Other']}
										selected={race}
										name="Race"
										cb={this.generateSetter('relatedFactors.race', {
											White: WHITE,
											'African American': AFRICAN_AMERICAN,
											Other: OTHER,
										})}
										audit={(options) => this.buttonGroupAudit(options)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 line-left pl-3 pt-3">
						{!missingData ? (
							<Banner estimatedRisk={estimatedRisk} riskText={riskText} color={backgroundColor} />
						) : (
							<MissingFields simple fields={missingFields} />
						)}
						<div className="col-md-12 pl-0" style={{ height: '350px' }}>
							<Chart oldRisk={risk} estimatedRisk={estimatedRisk} />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
