import _ from 'lodash';
import moment from 'moment-timezone';

import {
	AFRICAN_AMERICAN,
	FEMALE,
	IS_SMOKER,
	MALE,
	NOT_A_SMOKER,
	OTHER,
	WHITE,
} from '../ascvd/ASCVDRisk';
import { bloodPressureCutoff, cholesterolCutoff } from '../config';

import PatientInfo from '../ascvd/PatientInfo';
import { RESOURCES } from '../common/constants';
import fhirCodes from '../common/fhirCodes';

const { OBSERVATION, CONDITION, MEDICATIONSTATEMENT } = RESOURCES;

/**
 * Makes FHIR API calls using a FHIRClient. Formats results.
 */
export default class RiskService {
	constructor(client, log) {
		this.client = client;
		this.log = log ? log : () => {};

		this.currentSmokerCodes = _.flatten(
			fhirCodes.observation.smokingStatus.isCurrentSmoker.map((coding) => coding.codes)
		);
		this.pastSmokerCodes = _.flatten(
			fhirCodes.observation.smokingStatus.isPastSmoker.map((coding) => coding.codes)
		);
		this.smokingObservationsCodes = _.flatten(
			fhirCodes.observation.smokingStatus.smokingObservation.map((coding) => coding.codes)
		);
	}

	/**
	 * Get information needed to make risk assessments.
	 * Will eventually require httpsHeaders and other parameters that will come from the client.
	 * There most certainly will require some logic to unpack FHIR responses in order to simplify
	 * the response to the client
	 *
	 * @param {string} patientId
	 */
	getRiskInformation(patientId) {
		const promises = [
			this.getPatient(patientId),
			this.getObservationsByPatient(patientId),
			this.getResourceByPatient(CONDITION, patientId),
			this.getResourceByPatient(MEDICATIONSTATEMENT, patientId, [
				{ name: 'status', value: 'active,intended' },
			]),
		];

		return Promise.all(promises).then((data) => {
			// Unpack each of the resources above, extracting the necessary fields to make a risk calculation
			const [
				patientResources,
				observationResources,
				conditionResources,
				medicationStatementsResources,
			] = data;

			const patient = this.parsePatient(patientResources);
			const observationInfo = this.parseObservations(observationResources);
			const condition = this.parseConditions(conditionResources);
			const medication = this.parseMedicationStatements(medicationStatementsResources);
			const smokerStatus = this.smokerValidation(observationInfo.smoker, condition.smoker);

			const { cholesterol, bloodPressure } = observationInfo;

			const relatedFactors = {
				smoker: smokerStatus,
			};

			return new PatientInfo({
				patient,
				relatedFactors,
				cholesterol,
				bloodPressure,
				medication,
				condition,
			});
		});
	}

	getPatient(patientId) {
		return this.client.request(`Patient?_id=${patientId}`).then((bundle) => {
			return bundle.entry[0];
		});
	}

	getObservationsByPatient(patientId) {
		const generalBloodPressureCodes = fhirCodes.observation.bloodPressure.general.loinc;
		const diastolicBloodPressureCodes = fhirCodes.observation.bloodPressure.diastolic.loinc;
		const systolicBloodPressureCodes = fhirCodes.observation.bloodPressure.systolic.loinc;
		const hdlCholesterol = fhirCodes.observation.cholesterol.hdl.loinc;
		const ldlCholesterol = fhirCodes.observation.cholesterol.ldl.loinc;
		const totalCholesterol = fhirCodes.observation.cholesterol.total.loinc;

		const smokingCodes = fhirCodes.observation.smokingStatus.smokingObservation[0];

		const allCodes = [
			generalBloodPressureCodes,
			diastolicBloodPressureCodes,
			systolicBloodPressureCodes,
			hdlCholesterol,
			ldlCholesterol,
			totalCholesterol,
			smokingCodes,
		];

		const queries = allCodes
			.map(({ system, codes }) => this.buildCodeQuery(system, codes))
			.join(',');
		return Promise.all([
			this.getResourceByPatient(OBSERVATION, patientId),
			this.getSocialHistory(patientId),
		]).then((results) => {
			const [observations, socialHistory] = results;
			return observations.concat(socialHistory);
		});
	}

	buildCodeQuery(system, codes) {
		const systemAndCodes = codes.map((code) => `${system}|${code}`).join(',');
		return systemAndCodes;
	}

	getSocialHistory(patientId) {
		return this.getResourceByPatient(OBSERVATION, patientId, [
			{ name: 'category', value: 'social-history' },
		]);
	}

	getResourceByPatient(resource, patientId, queries) {
		let request = `${resource}?patient=${patientId}`;
		if (queries) {
			const queryString = queries.map(({ name, value }) => `${name}=${value}`).join('&');
			request += `&${queryString}`;
		}
		return this.client.request(request, { pageLimit: 0 }).then((bundle) => {
			const pageMap = bundle.map((page) => page.entry);
			const flat = [].concat(...pageMap);
			return flat.filter((entries) => entries);
		});
	}

	parsePatient(patient) {
		const patientResource = patient.resource;

		const race = this.unpackRaceFromPatient(patientResource);
		const birthDate = _.get(patientResource, 'birthDate');
		const gender = _.get(patientResource, 'gender');

		return {
			firstName: _.get(patientResource, 'name[0].given[0]'),
			lastName: _.get(patientResource, 'name[0].family[0]'),
			birthDate: birthDate ? new Date(birthDate) : null,
			age: birthDate ? this.computeAgeFromBirthDate(new Date(birthDate)) : null,
			sex: gender ? (gender.toLowerCase() === 'female' ? FEMALE : MALE) : MALE,
			race,
		};
	}

	parseObservations(observationEntries) {
		// Check for smoking
		let isSmoker = NOT_A_SMOKER;
		let smokingDate = null;
		const smokingCodes = this.smokingObservationsCodes;

		const filteredObservationEntries = observationEntries
			.filter(this.isRelevant)
			.sort(
				(a, b) => new Date(b.resource.effectiveDateTime) - new Date(a.resource.effectiveDateTime)
			);

		const smokingObservations = filteredObservationEntries.filter((observation) => {
			const codes = _.get(observation, 'resource.code.coding');
			if (!codes) {
				return false;
			}

			const observationCodes = codes.map((coding) => coding.code);
			return observationCodes.filter((code) => smokingCodes.includes(code)).length;
		});

		if (smokingObservations.length) {
			smokingDate =
				smokingObservations[0].resource.effectiveDateTime || smokingObservations[0].resource.issued;
			isSmoker = this.isSmoker(smokingObservations);
		}

		// Check for blood pressure systolic/diastolic
		const bloodPressures = filteredObservationEntries.filter((obs) => {
			return !this.olderThanYears(new Date(obs.resource.effectiveDateTime), bloodPressureCutoff);
		});

		// Check for cholesterol total, hdl, ldl
		const cholesterols = filteredObservationEntries.filter((obs) => {
			return !this.olderThanYears(new Date(obs.resource.effectiveDateTime), cholesterolCutoff);
		});

		return {
			smoker: { smokingStatus: isSmoker, smokingDate },
			bloodPressure: this.getBloodPressures(bloodPressures),
			cholesterol: this.getCholesterols(cholesterols),
		};
	}

	parseMedicationStatements(medicationStatementEntries) {
		const statinCodes = fhirCodes.medicationStatement.statin.rxnorm.codes;
		const aspirinCodes = fhirCodes.medicationStatement.aspirin.rxnorm.codes;
		const hypertensionMedicationCodes =
			fhirCodes.medicationStatement.hypertensionMedication.rxnorm.codes;

		const filteredMedicationStatementEntries = medicationStatementEntries
			.filter(this.isActive)
			.sort(
				(a, b) => new Date(b.resource.effectiveDateTime) - new Date(a.resource.effectiveDateTime)
			);

		const takingStatin = this.findEntryFromMedicalCodes(
			filteredMedicationStatementEntries,
			statinCodes
		);
		const takingAspirin = this.findEntryFromMedicalCodes(
			filteredMedicationStatementEntries,
			aspirinCodes,
			{
				freeText: 'aspirin',
			}
		);
		const takingHypertensionMedication = this.findEntryFromMedicalCodes(
			filteredMedicationStatementEntries,
			hypertensionMedicationCodes
		);
		return {
			statin: !!takingStatin,
			aspirin: !!takingAspirin,
			hypertensionMeds: !!takingHypertensionMedication,
		};
	}

	isSmokerFromConditions(conditions) {
		const codesIndicatingSmoking = this.currentSmokerCodes;

		const condition = conditions[0];
		const conditionCodes = _.get(condition, 'resource.code.coding');
		if (
			conditionCodes &&
			this.codesIntersect(
				conditionCodes.map((code) => code.code),
				codesIndicatingSmoking
			)
		) {
			return IS_SMOKER;
		}
		conditions.shift();
		const rest = conditions.find((obs) => {
			let codes = _.get(obs, 'resource.code.coding');
			if (codes) {
				codes = codes.map((code) => code.code);
				return this.codesIntersect(codes, codesIndicatingSmoking);
			}
			return null;
		});
		if (rest) {
			// TODO - according to medstar's UAT results, they expect FORMER_SMOKER = NOT_A_SMOKER and not to be considered a smoker
			// return FORMER_SMOKER;
			return NOT_A_SMOKER;
		}

		return NOT_A_SMOKER;
	}

	parseConditions(conditionEntries) {
		// filter our error entries
		const filteredConditionEntries = conditionEntries.filter(this.nonError);

		// Check for history of diabetes
		const diabeticCodes = fhirCodes.condition.diabetes;
		const aggregatedDiabeticCodes = diabeticCodes.snomed.codes
			.concat(diabeticCodes.icd10.codes)
			.concat(diabeticCodes.icd9.codes);
		const diabeticCondition = this.findEntryFromCodes(
			filteredConditionEntries,
			aggregatedDiabeticCodes
		);

		// Hypertensive condition
		const hypertensiveCodes = fhirCodes.condition.bloodPressure;
		const aggregatedHypertensiveCodes =
			hypertensiveCodes.icd9.codes + hypertensiveCodes.icd10.codes + hypertensiveCodes.snomed.codes;
		const hypertensiveCondition = this.findEntryFromCodes(
			conditionEntries,
			aggregatedHypertensiveCodes
		);

		// Smoker
		let smokingStatus = NOT_A_SMOKER;
		let smokingDate = null;
		const smokingCodes = this.currentSmokerCodes;

		const sortedConditionEntries = filteredConditionEntries
			.filter(this.isRelevant)
			.sort((a, b) => new Date(b.resource.dateRecorded) - new Date(a.resource.dateRecorded));

		const smokingConditions = sortedConditionEntries.filter((condition) => {
			const codes = _.get(condition, 'resource.code.coding');
			if (!codes) {
				return false;
			}

			const conditionCodes = codes.map((coding) => coding.code);
			return conditionCodes.filter((code) => smokingCodes.includes(code)).length;
		});

		if (smokingConditions.length) {
			smokingDate = smokingConditions[0].resource.dateRecorded;
			smokingStatus = this.isSmokerFromConditions(smokingConditions);
		}

		return {
			diabetic: diabeticCondition !== undefined,
			hypertensive: hypertensiveCondition !== undefined,
			smoker: { smokingStatus, smokingDate },
		};
	}

	/**
	 * A smoker is defined as having the most recent observation indicating smoking
	 *
	 * @param {array} observations
	 */
	isSmoker(observations) {
		const [socialHistory, nonSocialHistory] = _(observations)
			.filter((observation) => {
				// observations must have a valueCodeableConcept to be interpreted correctly
				return _.get(observation, 'resource.valueCodeableConcept.coding');
			})
			.partition((observation) => {
				const coding = _.get(observation, 'resource.category.coding');
				if (coding) {
					const codes = coding.map((code) => code.code);
					return codes.includes('social-history');
				}
				return false;
			});

		// we prioritize social-history smoking observations over any others
		if (socialHistory.length) {
			const smokingStatus = this.searchForSmoker(socialHistory);
			if (smokingStatus === IS_SMOKER) {
				return smokingStatus;
			}
		}

		if (nonSocialHistory.length) {
			const smokingStatus = this.searchForSmoker(nonSocialHistory);
			if (smokingStatus === IS_SMOKER) {
				return smokingStatus;
			}
		}

		return NOT_A_SMOKER;
	}

	/**
	 * Helper function to get date from observation entry by priority of fields
	 * @param {*} observation
	 */
	getDate(observation) {
		return (
			observation.resource.dateRecorded ||
			observation.resource.effectiveDateTime ||
			observation.resource.issued
		);
	}

	/**
	 * Helper function to get codeableconcept from observation entry
	 * @param {*} observation
	 */
	getValueCodeableConcept(observation) {
		return _.get(observation, 'resource.valueCodeableConcept.coding');
	}

	/**
	 * Deep search through list of observation entries
	 *
	 * Designed to handle many different cases, including:
	 * 	- Multiple entries created in close nature
	 *  - Fuzzy matching on certain codes
	 * 	- Tries to be as correct as possible given possibly messy entry lists
	 *
	 * @param {*} observations
	 */
	searchForSmoker(observations) {
		const codesIndicatingSmoking = this.currentSmokerCodes;
		const codesIndicatingPastSmoking = this.pastSmokerCodes;

		const filteredObservations = _.filter(
			observations,
			(obs) => this.getDate(obs) && this.getValueCodeableConcept(obs)
		);

		// group by day and month of year
		const groupedObservations = _.groupBy(filteredObservations, (observation) => {
			return moment(this.getDate(observation)).format('DD MM YYYY');
		});

		// sort them in order
		const sortedGroups = Object.keys(groupedObservations)
			.sort((a, b) => {
				return new Date(a) - new Date(b);
			})
			.map((key) => groupedObservations[key]);

		// map them to their value codeable concepts
		const groupedValueCodeableConcepts = sortedGroups.map((listOfObservations) => {
			const codings = listOfObservations.map(this.getValueCodeableConcept);
			return _.flatten(codings).map((code) => code); // flatten
		});

		// map them to their codes
		const groupedCodes = groupedValueCodeableConcepts.map((listOfCodeables) => {
			return listOfCodeables.map((code) => code.code);
		});

		if (!groupedCodes.length) {
			// no valid smoking records
			return NOT_A_SMOKER;
		}

		const mostRecent = groupedCodes[0];

		if (
			this.codesIntersect(mostRecent, codesIndicatingSmoking) &&
			!this.codesIntersect(mostRecent, codesIndicatingPastSmoking) // grouping does not contain a "Past" record
		) {
			return IS_SMOKER;
		}

		if (this.codesIntersect(mostRecent, codesIndicatingPastSmoking)) {
			// treat past smoking as NOT_A_SMOKER for now
			return NOT_A_SMOKER;
		}

		// They may have been a current smoker in the past
		const rest = groupedCodes.shift();
		if (rest.length) {
			const flat = _.flatten(rest);
			if (this.codesIntersect(flat, codesIndicatingSmoking)) {
				// this would mean they are former
				// treat past smoking as NOT_A_SMOKER for now
				return NOT_A_SMOKER;
			}
		}
		return NOT_A_SMOKER;
	}

	smokerValidation(smokingObservation, smokingCondition) {
		if (smokingObservation.smokingStatus === IS_SMOKER) {
			return smokingObservation.smokingStatus;
		}
		return smokingCondition.smokingStatus;
	}

	codesIntersect(a, b) {
		if (!a || !b) {
			return false;
		}
		return a.find((code) => {
			return b.includes(code);
		});
	}

	olderThanYears(date, years) {
		return (new Date() - date) / (1000 * 3600 * 24 * 365) >= years;
	}

	getBloodPressures(observations) {
		const diastolicCodes = fhirCodes.observation.bloodPressure.diastolic.loinc.codes;
		const systolicCodes = fhirCodes.observation.bloodPressure.systolic.loinc.codes;
		const bloodPressureCodes = fhirCodes.observation.bloodPressure.general.loinc.codes;

		const bloodPressureObservations = this.findEntryFromCodes(observations, bloodPressureCodes, {
			codename: 'code',
			strict: false,
			multipleEntries: true,
		});

		let systolic = { value: null, unit: null };
		let diastolic = { value: null, unit: null };
		let date = null;
		let relativeDate = null;

		// aggregate and stitch together systolic and diastolic even if they are from separate resource entries
		// TODO: figure out what this is doing and re-write it
		/* eslint-disable-next-line */
		for (const entry of bloodPressureObservations) {
			if (systolic.value === null) {
				systolic = this.getValueQuantityFromComponentByCodes(entry, systolicCodes);
				if (systolic.value !== null) {
					date = this.getDateFromEntry(entry);
				}
			}
			if (diastolic.value === null) {
				diastolic = this.getValueQuantityFromComponentByCodes(entry, diastolicCodes);
				if (diastolic.value !== null) {
					date = this.getDateFromEntry(entry);
				}
			}
			if (diastolic.value !== null && systolic.value !== null) {
				break;
			}
		}

		if (date) {
			relativeDate = moment(new Date(date.date)).fromNow();
		}

		return {
			diastolicBloodPressure: diastolic.value !== null ? diastolic : { value: null, unit: null },
			systolicBloodPressure: systolic.value !== null ? systolic : { value: null, unit: null },
			bloodPressureDate: date ? date.localeDateString : undefined,
			bloodPressureRelativeDate: relativeDate,
		};
	}

	convertToEst(dateStr) {
		const est = moment(new Date(dateStr)).utcOffset('-0500').format('x');
		return new Date(parseInt(est, 10));
	}

	toDateString(date, timeZone) {
		const dateFormat = {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
			timeZone,
		};
		return date.toLocaleDateString('en-US', dateFormat);
	}

	getDateFromEntry(entry) {
		let date = entry.resource.dateRecorded || entry.resource.effectiveDateTime;
		let localeDateString;

		if (!date) {
			return {};
		}

		date = this.convertToEst(date);
		try {
			localeDateString = this.toDateString(date, 'America/New_York');
		} catch (e) {
			console.log(e);
			// This can happen when an old browser/EHR does not support many timeZones
			// Fall back to UTC
			localeDateString = this.toDateString(date, 'UTC');
		}
		return { localeDateString, date };
	}

	getValueQuantityFromEntry(entry) {
		const foundValue = _.get(entry, 'resource.valueQuantity.value');
		const unit = _.get(entry, 'resource.valueQuantity.unit');

		if (foundValue) {
			return {
				value: _.get(entry, 'resource.valueQuantity.value'),
				unit: _.get(entry, 'resource.valueQuantity.unit') || 'mg/dL', // fallback to mg/dL
			};
		}

		return {
			value: null,
			unit: null,
		};
	}

	getValueQuantityFromComponentByCodes(entry, codes) {
		const component = _.get(entry, 'resource.component');
		if (component && component.length) {
			const found = component.find((codeAble) => {
				const code = _.get(codeAble, 'code.coding');
				if (code && code.length) {
					return code.find((ele) => codes.includes(ele.code));
				}
				return null;
			});

			if (found) {
				return {
					value: _.get(found, 'valueQuantity.value'),
					unit: _.get(found, 'valueQuantity.unit'),
				};
			}
		}

		return { value: null, unit: null };
	}

	/**
	 * Find an entry from a list of entries safely.
	 *
	 * @param {array} observations - An array of FHIR entries
	 * @param {array} codes - An array of codes we want to match on
	 * @param {string} codename - Where the codes we want to filter on located. For example, it could be "medicalCode".
	 * @param {array} additionalFields - Additional fields to filter on. For example, my entry must match code 2508 and have a valueQuantity.
	 * @param {boolean} strict - If true, the desired Entry must have every field in additonalFields on it. If false, only 1 match is required.
	 * @param {boolean} multipleEntries - If true, filter instead of find to aggregate a list of entries.
	 */

	findEntryFromCodes(observations, codes, options) {
		// check for if there are no entries
		let codename = 'code';
		let additionalFields;
		let strict;
		let freeText;
		let multipleEntries = false;

		if (options) {
			({ codename, additionalFields, strict, multipleEntries, freeText } = options);
		}

		if (!observations) {
			return null;
		}

		function matchFunction(observation) {
			const observationCode = _.get(observation, `resource.${codename}.coding`);

			if (freeText) {
				const text = _.get(observation, `resource.${codename}.text`);
				if (text && text.toLowerCase().includes(freeText)) {
					return observation;
				}
			}

			if (!observationCode) {
				return null;
			}

			const observationCodes = observationCode.map((coding) => {
				return coding.code;
			});

			const matchingCodes = observationCodes.filter((code) => codes.includes(code)).length;

			if (additionalFields) {
				let matchingAdditionalFields = additionalFields
					.map((field) => {
						return _.get(observation, `resource.${field}`);
					})
					.filter((res) => res).length;

				if (strict) {
					matchingAdditionalFields = matchingAdditionalFields === additionalFields.length;
				}
				return matchingCodes && matchingAdditionalFields;
			}

			return matchingCodes;
		}

		if (multipleEntries) {
			return observations.filter((observation) => {
				return matchFunction(observation);
			});
		}

		return observations.find((observation) => {
			return matchFunction(observation);
		});
	}

	findEntryFromMedicalCodes(observation, codes, options) {
		return this.findEntryFromCodes(observation, codes, {
			codename: 'medicationCodeableConcept',
			...options,
		});
	}

	calculateTotalCholesterol(hdl, ldl, tri) {
		return {
			value:
				this.getValueQuantityFromEntry(hdl).value +
				this.getValueQuantityFromEntry(ldl).value +
				this.getValueQuantityFromEntry(tri).value / 5,
			unit: 'mg/dL',
		};
	}

	getCholesterols(observations) {
		const hdlCodes = fhirCodes.observation.cholesterol.hdl.loinc.codes;
		const ldlCodes = fhirCodes.observation.cholesterol.ldl.loinc.codes;
		const triglycerideCodes = fhirCodes.observation.triglycerides.codes;
		const totalCholesterolCodes = fhirCodes.observation.cholesterol.total.loinc.codes;

		const hdlObservation = this.findEntryWithValueQuantityByCodes(observations, hdlCodes);
		const ldlObservation = this.findEntryWithValueQuantityByCodes(observations, ldlCodes);
		const totalObservation = this.findEntryWithValueQuantityByCodes(
			observations,
			totalCholesterolCodes
		);
		const triglycerideObservation = this.findEntryFromCodes(observations, triglycerideCodes);

		const hdl = hdlObservation
			? this.getValueQuantityFromEntry(hdlObservation)
			: { value: null, unit: null };
		const ldl = ldlObservation
			? this.getValueQuantityFromEntry(ldlObservation)
			: { value: null, unit: null };

		const observation = hdlObservation || ldlObservation;

		const date = observation ? this.getDateFromEntry(observation) : {};
		let total = totalObservation
			? this.getValueQuantityFromEntry(totalObservation)
			: { value: null, unit: null };
		let relativeDate = null;

		if (!total) {
			if (hdlObservation && ldlObservation && triglycerideObservation) {
				total = this.calculateTotalCholesterol(
					hdlObservation,
					ldlObservation,
					triglycerideObservation
				);
			}
		}

		if (date) {
			moment.tz.setDefault('America/New_York');
			relativeDate = moment(new Date(date.date)).fromNow();
		}

		return {
			hdl,
			ldl,
			total,
			cholesterolDate: date.localeDateString,
			cholesterolRelativeDate: relativeDate,
		};
	}

	findEntryWithValueQuantityByCodes(entries, codes, codename = 'code') {
		return this.findEntryFromCodes(entries, codes, {
			codename,
			additionalFields: ['valueQuantity'],
		});
	}

	nonError(entry) {
		const verificationStatus = _.get(entry, 'resource.verificationStatus');
		if (verificationStatus) {
			return verificationStatus !== 'entered-in-error';
		}
		return true;
	}

	isRelevant(entry) {
		const status = _.get(entry, 'resource.status') || _.get(entry, 'resource.clinicalStatus');
		const date =
			_.get(entry, 'resource.effectiveDateTime') ||
			_.get(entry, 'resource.dateRecorded') ||
			_.get(entry, 'resource.issued');
		const validStatus = [
			'final',
			'amended',
			'corrected',
			'appended',
			'active',
			'recurrence',
			'relapse',
		];
		return status && date && validStatus.includes(status);
	}

	isActive(entry) {
		const status = _.get(entry, 'resource.status');
		return status && (status === 'active' || status === 'intended');
	}

	computeAgeFromBirthDate(birthDate) {
		function isLeapYear(year) {
			return new Date(year, 1, 29).getMonth() === 1;
		}

		const now = new Date();
		let years = now.getFullYear() - birthDate.getFullYear();
		birthDate.setFullYear(birthDate.getFullYear() + years);
		if (birthDate > now) {
			years -= 1;
			birthDate.setFullYear(birthDate.getFullYear() - 1);
		}
		const days = (now.getTime() - birthDate.getTime()) / (3600 * 24 * 1000);
		return Math.floor(years + days / (isLeapYear(now.getFullYear()) ? 366 : 365));
	}

	unpackRaceFromPatient(patient) {
		const ranks = {
			AFRICAN_AMERICAN: 0,
			WHITE: 10,
			OTHER: 20,
		};

		if (patient.extension && patient.extension.length) {
			const extensions = patient.extension.map((extension) => extension.extension);
			const flatExtensions = extensions.reduce((a, b) => a.concat(b), []);
			const raceExtensions = flatExtensions.filter((ext) => {
				return ext && ext.url === 'ombCategory' && ext.valueCoding;
			});
			if (raceExtensions.length) {
				const potentialMatches = raceExtensions
					.map((ext) => this.getRaceFromExtension(ext))
					.sort((a, b) => {
						return ranks[a] < ranks[b];
					});
				return potentialMatches[0];
			}
		}
		return null;
	}

	getRaceFromExtension(extension) {
		const africanAmericanCodes = fhirCodes.patient.race.africanAmerican;
		const whiteCodes = fhirCodes.patient.race.white;
		const raceCode = _.get(extension, 'valueCoding.code');

		if (africanAmericanCodes.includes(raceCode)) {
			return AFRICAN_AMERICAN;
		}

		if (whiteCodes.includes(raceCode)) {
			return WHITE;
		}
		return OTHER;
	}
}
