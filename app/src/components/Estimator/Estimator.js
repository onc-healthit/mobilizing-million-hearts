import * as _ from 'lodash';
import React, { Component } from 'react';

import { AFRICAN_AMERICAN, FEMALE, IS_SMOKER, WHITE } from '../../ascvd/ASCVDRisk';

import FormElement from '../FormElement/FormElement';
import HalfGroup from '../HalfGroup/HalfGroup';
import Feedback from '../Feedback/Feedback';

import MissingFields from '../MissingFields/MissingFields';
import RiskCard from '../RiskCard/RiskCard';

import { features, gitLastUpdated } from '../../config';
import { VALIDATION } from '../../common/constants';

const { feedback } = features;

const get = (obj, path, otherwise) => {
	const result = _.get(obj, path);
	return result !== undefined && result !== null ? result : otherwise;
};

const notNullOrUndefined = (val) => {
	return val !== undefined && val !== null;
};

const formatDate = (date) => {
	let month = `${date.getMonth() + 1}`;
	let day = `${date.getDate()}`;
	const year = date.getFullYear();

	if (month.length < 2) {
		month = `0${month}`;
	}
	if (day.length < 2) {
		day = `0${day}`;
	}

	return [month, day, year].join('/');
};

export default class Estimator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feedbackModal: false,
		};

		this.toggleFeedbackModal = this.toggleFeedbackModal.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (JSON.stringify(this.props.patientInfo) !== JSON.stringify(prevState.patientInfo)) {
			this.setState({
				patientInfo: this.props.patientInfo,
			});
		}
	}

	onNotesChange(e) {
		this.setState({ notes: e.target.value });
	}

	toggleFeedbackModal() {
		this.setState((prevState) => ({ feedbackModal: !prevState.feedbackModal }));
	}

	submitUserFeedback() {
		const { risk, riskText } = this.props;
		const notes = this.state.notes || '';
		this.setState({ loading: true });
		this.documentReferenceService
			.createDocumentReference({ risk, notes, riskText })
			.then(() => {
				this.setState({
					loading: false,
					submission: false,
					documentReferenceError: undefined,
				});
				this.refs.overlay.hide();
			})
			.catch((e) => {
				this.setState({
					loading: false,
					documentReferenceError: e.toString(),
				});
			});
	}

	render() {
		const { patientInfo, submitUserFeedback, loading } = this.props;

		const gitLastUpdatedDate = new Date(gitLastUpdated);

		const missingValue = '--';

		const systolic = get(patientInfo, 'systolicBloodPressure.value', missingValue);
		const diastolic = get(patientInfo, 'diastolicBloodPressure.value', missingValue);
		const totalCholesterol = get(patientInfo, 'totalCholesterol.value', missingValue);
		const hdl = get(patientInfo, 'hdl.value', missingValue);
		const ldl = get(patientInfo, 'ldl.value', missingValue);
		const age = get(patientInfo, 'age', missingValue);

		const diabetic = get(patientInfo, 'relatedFactors.diabetic');
		const diabeticDisplay = notNullOrUndefined(diabetic) ? (diabetic ? 'Yes' : 'No') : missingValue;

		const smoker = get(patientInfo, 'relatedFactors.smoker');
		const smokerDisplay = notNullOrUndefined(smoker)
			? smoker === IS_SMOKER
				? 'Yes'
				: 'No'
			: missingValue;

		const sex = get(patientInfo, 'sex');
		const sexDisplay = sex !== null ? (sex === FEMALE ? 'Female' : 'Male') : missingValue;

		const race = get(patientInfo, 'relatedFactors.race');
		let raceDisplay = missingValue;
		if (race) {
			switch (race) {
				case WHITE:
					raceDisplay = 'White';
					break;
				case AFRICAN_AMERICAN:
					raceDisplay = 'African American';
					break;
				default:
					raceDisplay = 'Other';
			}
		}

		const infoText = !this.props.missingData ? (
			<div className="col-md-12 pt-3 pb-3">
				<p>
					The patient’s ASCVD risk score was calculated during the exam using the ACC’s ASCVD Risk
					Estimator Plus. The patient’s risk score was found to be {this.props.risk}, indicating a{' '}
					{this.props.riskText} level of 10 year ASCVD risk.
				</p>
			</div>
		) : null;

		const hypertensionTreatment = get(patientInfo, 'relatedFactors.hypertensive');
		const hypertensionTreatmentDisplay =
			hypertensionTreatment !== undefined
				? hypertensionTreatment === true
					? 'Yes'
					: 'No'
				: missingValue;
		const statin =
			patientInfo && patientInfo.statin != null
				? patientInfo.statin === true
					? 'Yes'
					: 'No'
				: missingValue;
		const aspirin =
			patientInfo && patientInfo.aspirin != null
				? patientInfo.aspirin === true
					? 'Yes'
					: 'No'
				: missingValue;
		const relativeCholesterolDate =
			patientInfo && patientInfo.cholesterolRelativeDate
				? patientInfo.cholesterolRelativeDate
				: missingValue;
		const relativeBloodPressureDate =
			patientInfo && patientInfo.bloodPressureRelativeDate
				? patientInfo.bloodPressureRelativeDate
				: missingValue;
		const cholesterolDate =
			patientInfo && patientInfo.cholesterolDate ? patientInfo.cholesterolDate : missingValue;
		const bloodPressureDate =
			patientInfo && patientInfo.bloodPressureDate ? patientInfo.bloodPressureDate : missingValue;

		let banner;
		if (!this.props.loading) {
			banner =
				this.props.missingData === false ? (
					<div className="col-md-12 text-center" style={{ fontSize: '14px' }}>
						Risk of Having a Heart Attack or Stroke within 10 Years
					</div>
				) : (
					<MissingFields simple fields={this.props.missingFields} />
				);
		}

		const {
			totalCholesterol: totalCholesterolValidation,
			systolicBloodPressure,
			hdlCholesterol,
			diastolicBloodPressure,
			ldlCholesterol,
			age: ageValidation,
		} = VALIDATION;

		const [totalCholesterolNotFound, totalCholestrolOutOfRange] = totalCholesterolValidation;
		const [systolicBloodPressureNotFound, systolicBloodPressureOutOfRange] = systolicBloodPressure;
		const [hdlCholesterolNotFound, hdlCholesterolOutOfRange] = hdlCholesterol;
		const [
			diastolicBloodPressureNotFound,
			diastolicBloodPressureOutOfRange,
		] = diastolicBloodPressure;
		const [ldlCholesterolNotFound, ldlCholesterolOutOfRange] = ldlCholesterol;
		const [ageNotFound, ageOutOfRange] = ageValidation;

		return (
			<React.Fragment>
				<Feedback
					show={this.state.feedbackModal}
					handleClose={this.toggleFeedbackModal}
					handleSubmit={submitUserFeedback}
				/>
				<div className="row">
					<div className="col-md-8">
						<div className="row line-bottom">
							<HalfGroup>
								<FormElement name="Last Updated:" value={relativeCholesterolDate} />
								<FormElement
									name="Total Cholesterol (mg/dL):"
									value={totalCholesterol}
									date={cholesterolDate}
									notFound={totalCholesterolNotFound}
									outOfRange={totalCholestrolOutOfRange}
									min={130}
									max={320}
									loading={loading}
									dateHover
								/>
								<FormElement
									name="HDL Cholesterol (mg/dL):"
									value={hdl}
									date={cholesterolDate}
									notFound={hdlCholesterolNotFound}
									outOfRange={hdlCholesterolOutOfRange}
									min={20}
									max={100}
									loading={loading}
									dateHover
								/>
								<FormElement
									name="LDL Cholesterol (mg/dL):"
									value={ldl}
									date={cholesterolDate}
									notFound={ldlCholesterolNotFound}
									outOfRange={ldlCholesterolOutOfRange}
									min={30}
									max={300}
									loading={loading}
									dateHover
								/>
							</HalfGroup>
							<HalfGroup>
								<FormElement name="Last Updated:" value={relativeBloodPressureDate} />
								<FormElement
									name="Systolic Blood Pressure (mmHg):"
									value={systolic}
									date={bloodPressureDate}
									notFound={systolicBloodPressureNotFound}
									outOfRange={systolicBloodPressureOutOfRange}
									min={90}
									max={200}
									loading={loading}
									dateHover
								/>
								<FormElement
									name="Diastolic Blood Pressure (mmHg):"
									value={diastolic}
									date={bloodPressureDate}
									notFound={diastolicBloodPressureNotFound}
									outOfRange={diastolicBloodPressureOutOfRange}
									min={60}
									max={130}
									loading={loading}
									dateHover
								/>
							</HalfGroup>
						</div>
						<div className="row line-bottom">
							<HalfGroup>
								<FormElement
									name="Age:"
									value={age}
									notFound={ageNotFound}
									outOfRange={ageOutOfRange}
									loading={loading}
									min={40}
									max={79}
								/>
								<FormElement name="Sex:" value={sexDisplay} />
								<FormElement name="Race:" value={raceDisplay} />
							</HalfGroup>
							<HalfGroup>
								<FormElement name="History of Diabetes:" value={diabeticDisplay} />
								<FormElement name="Smoker:" value={smokerDisplay} padding={15} />
							</HalfGroup>
						</div>
						<div className="row line-bottom">
							<HalfGroup>
								<FormElement name="Hypertension Treatment:" value={hypertensionTreatmentDisplay} />
								<FormElement name="Statin:" value={statin} />
								<FormElement name="Aspirin Therapy:" value={aspirin} />
							</HalfGroup>
						</div>
					</div>
					<div className="col-md-4 line-left pl-3 pt-3">
						{banner}
						<div className="col-md-12 pt-3 pb-3">
							<RiskCard
								risk={this.props.risk}
								riskText={this.props.riskText}
								backgroundColor={this.props.backgroundColor}
							/>
						</div>
						{!this.props.loading ? (
							<>
								{infoText}
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									<button
										type="button"
										onClick={this.props.goToEducator}
										className="ml-2 btn btn-primary"
										style={{ fontSize: '18px' }}
									>
										Patient Risk Education Tool
									</button>
								</div>
							</>
						) : null}
					</div>
				</div>
				<div className="row">
					<div className="col-md-2 pt-2" style={{ textAlign: 'center' }}>
						<button
							type="button"
							onClick={this.props.goToACCGuidelines}
							className="btn btn-link"
							style={{ padding: 0 }}
						>
							<h4 style={{ fontSize: '16px' }}>ACC Guidelines</h4>
						</button>
					</div>
					<div className="col-md-2 pt-2" style={{ textAlign: 'center' }}>
						<button
							type="button"
							onClick={this.props.goToMedstarGuidelines}
							className="btn btn-link"
							style={{ padding: 0 }}
						>
							<h4 style={{ fontSize: '16px' }}>MedStar Guidelines</h4>
						</button>
					</div>
					{feedback ? (
						<div className="col-md-2 pt-2" style={{ textAlign: 'center' }}>
							<button
								type="button"
								onClick={this.toggleFeedbackModal}
								className="btn btn-link"
								style={{ padding: 0 }}
							>
								<h4 style={{ fontSize: '16px' }}>Provide Feedback</h4>
							</button>
						</div>
					) : null}
					<div className="col-md-2 pt-2" style={{ textAlign: 'center' }}>
						<h4 style={{ fontSize: '14px' }}>
							Calculations are made based on ACC guidelines. Last updated on{' '}
							{formatDate(gitLastUpdatedDate)}.
						</h4>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
