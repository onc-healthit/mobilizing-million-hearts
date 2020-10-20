import './App.css';

import FhirClient from 'fhirclient';
import React from 'react';
import {
	ascvdScore,
	missingInformation,
	smartOnFhirIssue,
	wentToEducator,
	wentToEstimator,
	wentToMedstarGuideliens,
	wentToACCGuidelines,
	userFeedback,
} from './common/auditevents';
import { calculateRiskCard, canCalculateScore } from './ascvd/ASCVDValidator';

import AuditEventService from './services/AuditEventService';
import ErrorTranslator from './services/ErrorTranslator';
import Disclaimer from './components/Disclaimer/Disclaimer';
import DeveloperLog from './components/DeveloperInfo/DeveloperLog';
import Educator from './components/Educator/Educator';
import Estimator from './components/Estimator/Estimator';
import Loader from './components/Loader/Loader';
import PatientInfo from './ascvd/PatientInfo';
import RiskService from './services/RiskService';
import { computeTenYearScore } from './ascvd/ASCVDRisk';
import { features, medstarGuidelines, accGuidelines } from './config';

const pages = {
	estimator: 'Estimator',
	educator: 'Educator',
	developerLog: 'DeveloperLog',
};

const unpackAuditInformationFromClient = (client) => {
	const { id: patient } = client.patient;
	const { tokenResponse } = client.state;
	const { encounter, user, tenant } = tokenResponse;
	return { patient, encounter, user, tenant };
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.auditEventService = new AuditEventService();
		this.errorTranslator = new ErrorTranslator();

		this.state = {
			patientInfo: new PatientInfo(),
			page: pages.estimator,
			risk: null,
			errored: false,
			loading: true,
			riskText: '',
			backgroundColor: 'white',
			missingData: false,
			missingFields: [],
			developerInfo: [],
		};
	}

	componentDidMount() {
		FhirClient.oauth2
			.ready()
			.then((client) => {
				const riskService = new RiskService(client, this.log);
				const auditInformation = unpackAuditInformationFromClient(client);
				this.auditEventService = new AuditEventService(auditInformation);

				return riskService.getRiskInformation(client.patient.id).then(async (patientInfo) => {
					const tenYearRisk = canCalculateScore(patientInfo)
						? computeTenYearScore(patientInfo)
						: null;
					const cardInfo = calculateRiskCard(tenYearRisk, patientInfo);
					if (cardInfo.missingData) {
						await this.submitMissingInformationEvent(cardInfo.missingFields);
					} else {
						await this.submitScoreAuditEvent(tenYearRisk);
					}
					this.setState({
						risk: tenYearRisk,
						loading: false,
						smart: client,
						patientInfo,
						...cardInfo,
						...auditInformation,
					});
				});
			})
			.catch(async (e) => {
				const display = this.errorTranslator.translate(e.toString());
				this.setState({ errored: display, loading: false });
				await this.submitErrorEvent(e);
			});
	}

	submitGoToEducatorEvent = () => {
		const { name, description } = wentToEducator;
		return this.auditEventService.create(name, { description });
	};

	submitGoToEstimatorEvent = () => {
		const { name, description } = wentToEstimator;
		return this.auditEventService.create(name, { description });
	};

	submitGoToMedstarGuidelinesEvent = () => {
		const { name, description } = wentToMedstarGuideliens;
		return this.auditEventService.create(name, { description });
	};

	submitGoToACCGuidelinesEvent = () => {
		const { name, description } = wentToACCGuidelines;
		return this.auditEventService.create(name, { description });
	};

	submitScoreAuditEvent = (risk) => {
		const { name, description } = ascvdScore;
		return this.auditEventService.create(name, { content: `${risk}`, description });
	};

	submitErrorEvent = (error) => {
		const { name, description } = smartOnFhirIssue;
		return this.auditEventService.create(name, { content: error.toString(), description });
	};

	submitUserFeedbackEvent = (feedback) => {
		const { name, description } = userFeedback;
		return this.auditEventService.create(name, { content: feedback, description });
	};

	submitMissingInformationEvent = (missingFields) => {
		const { name, description } = missingInformation;
		const missingFieldsFormatted = missingFields.join(', ');
		return this.auditEventService.create(name, { content: missingFieldsFormatted, description });
	};

	goToEducator = async () => {
		await this.submitGoToEducatorEvent();
		this.setState({ page: pages.educator });
	};

	goToEstimator = async () => {
		await this.submitGoToEstimatorEvent();
		this.setState({ page: pages.estimator });
	};

	goToMedstarGuidelines = async () => {
		await this.submitGoToMedstarGuidelinesEvent();
		window.open(medstarGuidelines);
	};

	goToACCGuidelines = async () => {
		await this.submitGoToACCGuidelinesEvent();
		window.open(accGuidelines);
	};

	log = (value) => {
		this.setState((prevState) => {
			return { developerInfo: prevState.developerInfo.concat(JSON.parse(JSON.stringify(value))) };
		});
	};

	render() {
		const { page, loading, errored, developerInfo } = this.state;
		const title = `ASCVD Risk ${page}`;

		let pageToRender;
		let log;

		// Have to manage what "page" we are on manually, as we cannot use a Router
		if (page === pages.estimator) {
			pageToRender = (
				<Estimator
					goToEducator={this.goToEducator}
					goToMedstarGuidelines={this.goToMedstarGuidelines}
					goToACCGuidelines={this.goToACCGuidelines}
					submitUserFeedback={this.submitUserFeedbackEvent}
					log={this.log}
					{...this.state}
				/>
			);
		} else if (page === pages.educator) {
			pageToRender = <Educator log={() => this.log} {...this.state} />;
		} else {
			pageToRender = <DeveloperLog log={developerInfo} />;
		}

		if (features.developerLog) {
			const { page: currentPage } = this.state;
			log =
				currentPage === 'DeveloperInfo' ? (
					<button
						type="button"
						className="ml-2 btn btn-primary"
						style={{ fontSize: '14px' }}
						onClick={() => this.goToEstimator()}
					>
						Back to Estimator
					</button>
				) : (
					<button
						type="button"
						className="ml-2 btn btn-primary"
						style={{ fontSize: '14px' }}
						onClick={() => this.setState({ page: 'DeveloperInfo' })}
					>
						Developer Log
					</button>
				);
		}

		return (
			<div className="App">
				<Loader active={loading} spinner>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12 line-bottom">
								{errored ? (
									<div
										className="alert alert-danger"
										style={{ display: 'inline-block' }}
										role="alert"
									>
										{errored.toString()}
									</div>
								) : null}
								<h1 style={{ fontSize: '24px', marginTop: '12px' }}>
									{title}
									{page === pages.estimator ? (
										<p hidden />
									) : (
										<button
											type="button"
											className="ml-2 btn btn-primary"
											style={{ fontSize: '14px' }}
											onClick={this.goToEstimator}
										>
											Back to Estimator
										</button>
									)}
								</h1>
								<Disclaimer />
							</div>
						</div>
						{pageToRender}
					</div>
				</Loader>
				{log}
			</div>
		);
	}
}

export default App;
