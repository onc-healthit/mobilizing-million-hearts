/* eslint-disable max-len */
import RiskService from './RiskService';
import { bundleFixture } from '../../__fixtures__/bundle';
import { conditionFixture } from '../../__fixtures__/condition';
import { medicationStatementFixture } from '../../__fixtures__/medicationstatement';
import { observationFixture } from '../../__fixtures__/observation';
import { patientFixture } from '../../__fixtures__/patient';
import pastSmoker from '../../__fixtures__/pastSmoker';
import usCorePatient from '../../__fixtures__/uscorePatient';

const riskService = new RiskService();

describe('RiskService tests - Parse Patient FHIR resources for relevant information', () => {
	test('Female Patient info is properly extracted from a FHIR resource', () => {
		const mockPatient = patientFixture({
			race: [
				{
					url: 'ombCategory',
					valueCoding: {
						system: 'http://hl7.org/fhir/v3/Race',
						code: '2106-3',
						display: 'White',
						userSelected: false,
					},
				},
			],
			name: [
				{
					use: 'official',
					text: 'SMART, NANCY',
					family: ['SMART'],
					given: ['NANCY'],
					period: {
						start: '2019-01-30T15:31:38.000Z',
					},
				},
			],
			gender: 'Female',
			birthDate: '1980-08-11',
		});
		const patientInfo = riskService.parsePatient(mockPatient);
		expect(patientInfo.firstName).toEqual('NANCY');
		expect(patientInfo.lastName).toEqual('SMART');
		expect(patientInfo.birthDate).toEqual(new Date('1980-08-11'));
		expect(patientInfo.race).toEqual('white');
		expect(patientInfo.sex).toEqual('female');
	});

	test('Male Patient info is properly extracted from a FHIR resource', () => {
		const mockPatient = patientFixture({
			race: [
				{
					url: 'ombCategory',
					valueCoding: {
						system: 'http://hl7.org/fhir/v3/Race',
						code: '2106-3',
						display: 'White',
						userSelected: false,
					},
				},
			],
			name: [
				{
					use: 'official',
					text: 'SMART, JOHN',
					family: ['SMART'],
					given: ['JOHN'],
					period: {
						start: '2019-01-30T15:31:38.000Z',
					},
				},
			],
			gender: 'Male',
			birthDate: '1980-08-11',
		});

		const patientInfo = riskService.parsePatient(mockPatient);
		expect(patientInfo.firstName).toEqual('JOHN');
		expect(patientInfo.lastName).toEqual('SMART');
		expect(patientInfo.birthDate).toEqual(new Date('1980-08-11'));
		expect(patientInfo.race).toEqual('white');
		expect(patientInfo.sex).toEqual('male');
	});

	test('AA patient info is properly extracted from a FHIR resource', () => {
		const mockPatient = patientFixture({
			race: [
				{
					url: 'ombCategory',
					valueCoding: {
						system: 'http://hl7.org/fhir/v3/Race',
						code: '2058-6',
						display: 'AA',
						userSelected: false,
					},
				},
			],
			name: [
				{
					use: 'official',
					text: 'SMART, FRED',
					family: ['SMART'],
					given: ['FRED'],
					period: {
						start: '2019-01-30T15:31:38.000Z',
					},
				},
			],
			gender: 'Male',
			birthDate: '1946-08-22',
		});

		const patientInfo = riskService.parsePatient(mockPatient);
		expect(patientInfo.firstName).toEqual('FRED');
		expect(patientInfo.lastName).toEqual('SMART');
		expect(patientInfo.birthDate).toEqual(new Date('1946-08-22'));
		// has ethnicity but no race -- no validation needed
		expect(patientInfo.sex).toEqual('male');
	});
});

describe('Parse Observation FHIR resources for relevant information', () => {
	test('Non Smoker info is properly extracted from a FHIR resource', () => {
		const mockObservation = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '72166-2',
						},
					],
					text: 'SHX Tobacco use',
				},
			}),
		];

		const observationInfo = riskService.parseObservations(mockObservation);
		expect(observationInfo.smoker).toEqual({
			smokingDate: '2019-05-15T12:56:33.000Z',
			smokingStatus: 'not',
		});
	});
	test('Everyday Smoker info is properly extracted from a FHIR resource', () => {
		const mockObservation = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '72166-2',
						},
					],
					text: 'SHX Tobacco use',
				},
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '449868002',
							display: 'Smokes tobacco daily (finding)',
						},
					],
					text: 'Current every day smoker',
				},
			}),
		];

		const observationInfo = riskService.parseObservations(mockObservation);
		expect(observationInfo.smoker).toEqual({
			smokingDate: '2019-05-15T12:56:33.000Z',
			smokingStatus: 'current',
		});
	});
	test('Former Smoker info is properly extracted from a FHIR resource', () => {
		const mockObservation = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '72166-2',
						},
					],
					text: 'SHX Tobacco use',
				},
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '44982132131302',
							display: 'Does not smoke anymore',
						},
					],
					text: 'Current every day smoker',
				},
				effectiveDateTime: '2019-05-15T12:56:33.000Z',
			}),
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '72166-2',
						},
					],
					text: 'SHX Tobacco use',
				},
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '449868002',
							display: 'Smokes tobacco daily (finding)',
						},
					],
					text: 'Current every day smoker',
				},
				effectiveDateTime: '2018-05-15T12:56:33.000Z',
			}),
		];

		const observationInfo = riskService.parseObservations(mockObservation);
		expect(observationInfo.smoker).toEqual({
			smokingDate: '2019-05-15T12:56:33.000Z',
			smokingStatus: 'not',
		});
	});
});

describe('Test getting blood pressure from observations', () => {
	test('Get a value quantity from components', () => {
		const mockObservation = observationFixture({
			code: {
				coding: [
					{
						system: 'http://snomed.info/sct',
						code: '75367002',
						display: 'Blood pressure (observable entity)',
					},
					{ system: 'http://loinc.org', code: '55284-4' },
				],
				text: 'Blood pressure',
			},
			component: [
				{
					code: {
						coding: [{ system: 'http://loinc.org', code: '8480-6' }],
						text: 'Systolic Blood Pressure',
					},
					valueQuantity: {
						value: 129,
						unit: 'mmHg',
						system: 'http://unitsofmeasure.org',
						code: 'mm[Hg]',
					},
					referenceRange: [
						{
							low: { value: 80, unit: 'mmHg', system: 'http://unitsofmeasure.org', code: 'mm[Hg]' },
							high: {
								value: 120,
								unit: 'mmHg',
								system: 'http://unitsofmeasure.org',
								code: 'mm[Hg]',
							},
							text: '80-120 mmHg',
						},
					],
				},
				{
					code: {
						coding: [{ system: 'http://loinc.org', code: '8462-4' }],
						text: 'Diastolic Blood Pressure',
					},
					valueQuantity: {
						value: 85,
						unit: 'mmHg',
						system: 'http://unitsofmeasure.org',
						code: 'mm[Hg]',
					},
					referenceRange: [
						{
							low: { value: 70, unit: 'mmHg', system: 'http://unitsofmeasure.org', code: 'mm[Hg]' },
							high: {
								value: 80,
								unit: 'mmHg',
								system: 'http://unitsofmeasure.org',
								code: 'mm[Hg]',
							},
							text: '70-80 mmHg',
						},
					],
				},
			],
		});

		const diastolicBloodPressure = riskService.getValueQuantityFromComponentByCodes(
			mockObservation,
			['8462-4']
		);
		expect(diastolicBloodPressure.value).toEqual(85);
		expect(diastolicBloodPressure.unit).toEqual('mmHg');
	});

	test('Get blood pressure from entries', () => {
		const mockObservations = [
			observationFixture({ effectiveDateTime: '2019-09-02T12:56:33.000Z' }),
			observationFixture({ effectiveDateTime: '2019-09-02T12:56:33.000Z' }),
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '75367002',
							display: 'Blood pressure (observable entity)',
						},
						{ system: 'http://loinc.org', code: '55284-4' },
					],
					text: 'Blood pressure',
				},
				effectiveDateTime: '2019-09-02T12:56:33.000Z',

				component: [
					{
						code: {
							coding: [{ system: 'http://loinc.org', code: '8480-6' }],
							text: 'Systolic Blood Pressure',
						},
						valueQuantity: {
							value: 129,
							unit: 'mmHg',
							system: 'http://unitsofmeasure.org',
							code: 'mm[Hg]',
						},
						referenceRange: [
							{
								low: {
									value: 80,
									unit: 'mmHg',
									system: 'http://unitsofmeasure.org',
									code: 'mm[Hg]',
								},
								high: {
									value: 120,
									unit: 'mmHg',
									system: 'http://unitsofmeasure.org',
									code: 'mm[Hg]',
								},
								text: '80-120 mmHg',
							},
						],
					},

					{
						code: {
							coding: [{ system: 'http://loinc.org', code: '8462-4' }],
							text: 'Diastolic Blood Pressure',
						},
						valueQuantity: {
							value: 85,
							unit: 'mmHg',
							system: 'http://unitsofmeasure.org',
							code: 'mm[Hg]',
						},
						referenceRange: [
							{
								low: {
									value: 70,
									unit: 'mmHg',
									system: 'http://unitsofmeasure.org',
									code: 'mm[Hg]',
								},
								high: {
									value: 80,
									unit: 'mmHg',
									system: 'http://unitsofmeasure.org',
									code: 'mm[Hg]',
								},
								text: '70-80 mmHg',
							},
						],
					},
				],
			}),
		];

		const observationInfo = riskService.parseObservations(mockObservations);
		expect(observationInfo.bloodPressure.systolicBloodPressure.value).toEqual(129);
		expect(observationInfo.bloodPressure.systolicBloodPressure.unit).toEqual('mmHg');
		expect(observationInfo.bloodPressure.diastolicBloodPressure.value).toEqual(85);
		expect(observationInfo.bloodPressure.diastolicBloodPressure.unit).toEqual('mmHg');
		expect(observationInfo.bloodPressure.bloodPressureDate).toEqual('Sep 02, 2019');
	});

	test('ValueQuantity is properly obtained from an entry', () => {
		const mockEntry = {
			resource: {
				valueQuantity: {
					value: 5,
					unit: 'mg',
				},
			},
		};
		const quanityInfo = riskService.getValueQuantityFromEntry(mockEntry);
		expect(quanityInfo.value).toEqual(5);
		expect(quanityInfo.unit).toEqual('mg');
	});

	test('Aggregate systolic and diastolic blood pressures', () => {
		const mockObservations = [
			observationFixture({ effectiveDateTime: '2019-09-02T12:56:33.000Z' }),
			observationFixture({ effectiveDateTime: '2019-09-02T12:56:33.000Z' }),
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '75367002',
							display: 'Blood pressure (observable entity)',
						},
						{ system: 'http://loinc.org', code: '55284-4' },
					],
					text: 'Blood pressure',
				},
				effectiveDateTime: '2019-09-02T12:56:33.000Z',

				component: [
					{
						code: {
							coding: [{ system: 'http://loinc.org', code: '8480-6' }],
							text: 'Systolic Blood Pressure',
						},
						valueQuantity: {
							value: 129,
							unit: 'mmHg',
							system: 'http://unitsofmeasure.org',
							code: 'mm[Hg]',
						},
						referenceRange: [
							{
								low: {
									value: 80,
									unit: 'mmHg',
									system: 'http://unitsofmeasure.org',
									code: 'mm[Hg]',
								},
								high: {
									value: 120,
									unit: 'mmHg',
									system: 'http://unitsofmeasure.org',
									code: 'mm[Hg]',
								},
								text: '80-120 mmHg',
							},
						],
					},

					{
						code: {
							coding: [{ system: 'http://loinc.org', code: '8462-4' }],
							text: 'Diastolic Blood Pressure',
						},
						valueQuantity: {
							value: 85,
							unit: 'mmHg',
							system: 'http://unitsofmeasure.org',
							code: 'mm[Hg]',
						},
						referenceRange: [
							{
								low: {
									value: 70,
									unit: 'mmHg',
									system: 'http://unitsofmeasure.org',
									code: 'mm[Hg]',
								},
								high: {
									value: 80,
									unit: 'mmHg',
									system: 'http://unitsofmeasure.org',
									code: 'mm[Hg]',
								},
								text: '70-80 mmHg',
							},
						],
					},
				],
			}),
		];

		const observationInfo = riskService.parseObservations(mockObservations);
		expect(observationInfo.bloodPressure.systolicBloodPressure.value).toEqual(129);
		expect(observationInfo.bloodPressure.systolicBloodPressure.unit).toEqual('mmHg');
		expect(observationInfo.bloodPressure.diastolicBloodPressure.value).toEqual(85);
		expect(observationInfo.bloodPressure.diastolicBloodPressure.unit).toEqual('mmHg');
		expect(observationInfo.bloodPressure.bloodPressureDate).toEqual('Sep 02, 2019');
	});

	test('Dates are over X years', () => {
		// TODO: This will fail 1 year from now?
		expect(riskService.olderThanYears(new Date('2020-09-02T14:47:38.000Z'), 1)).toEqual(false);
		expect(riskService.olderThanYears(new Date('2017-09-02T14:47:38.000Z'), 1)).toEqual(true);
	});

	test('Get entry from list of entries by codes', () => {
		const mockEntries = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'wwww.example.com',
							code: '12345',
						},
					],
				},
			}),
		];
		const entry = riskService.findEntryFromCodes(mockEntries, ['a', '12345', 'b']);
		expect(entry.resource.code.coding[0].system).toEqual('wwww.example.com');
		expect(entry.resource.code.coding[0].code).toEqual('12345');
	});

	test('Dont get entry from list of entries by codes', () => {
		const mockEntries = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'wwww.example.com',
							code: 'asd',
						},
					],
				},
			}),
		];
		const entry = riskService.findEntryFromCodes(mockEntries, ['a', '12345', 'b']);
		expect(entry).toEqual(undefined);
	});

	test('Get first entry from list of entries by codes', () => {
		const mockEntries = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'wwww.example.com',
							code: '12345',
						},
					],
				},
			}),
			observationFixture(),
		];
		const entry = riskService.findEntryFromCodes(mockEntries, ['a', '12345', 'b']);
		expect(entry.resource.code.coding[0].system).toEqual('wwww.example.com');
		expect(entry.resource.code.coding[0].code).toEqual('12345');
	});
});

describe('Test Cholesterol from observations', () => {
	test('HDL and LDL cholestrol readings should be in cholestrol info', () => {
		const mockObservation = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '2085-9',
						},
					],
					text: 'hdl cholesterol reading',
				},
				valueQuantity: {
					value: 5,
					unit: 'mg',
				},
			}),
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '55440-2',
						},
					],
					text: 'hdl cholesterol reading',
				},
				valueQuantity: {
					value: 6,
					unit: 'AA',
				},
			}),
		];
		const cholInfo = riskService.getCholesterols(mockObservation);
		expect(cholInfo.hdl.value).toEqual(5);
		expect(cholInfo.hdl.unit).toEqual('mg');
		expect(cholInfo.ldl.value).toEqual(6);
		expect(cholInfo.ldl.unit).toEqual('AA');
	});

	test('HDL cholestrol readings should be in cholestrol info', () => {
		const mockObservations = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '2085-9',
						},
					],
					text: 'hdl cholesterol reading',
				},
				valueQuantity: {
					value: 105,
					unit: 'mg/dL',
				},
			}),
		];
		const cholInfo = riskService.parseObservations(mockObservations);
		expect(cholInfo.cholesterol.hdl.value).toEqual(105);
		expect(cholInfo.cholesterol.hdl.unit).toEqual('mg/dL');
	});

	test('LDL cholestrol readings should infer mg/dL if it is missing from Value Quantity', () => {
		const mockObservations = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '13457-7',
						},
					],
					text: 'LDL Calculated',
				},
				effectiveDateTime: '2020-06-19T15:08:00.000Z',
				valueQuantity: {
					value: 200,
					unit: 'mg/dL',
				},
			}),
		];
		const cholInfo = riskService.parseObservations(mockObservations);
		expect(cholInfo.cholesterol.ldl.value).toEqual(200);
		expect(cholInfo.cholesterol.ldl.unit).toEqual('mg/dL');
	});
});

describe('Test getting race info', () => {
	test('The patient is white', () => {
		const mockExtension = {
			url: 'raceCode',
			valueCoding: {
				system: 'http://hl7.org/fhir/v3/Race',
				code: '2106-3',
				display: 'White',
				userSelected: false,
			},
		};
		expect(riskService.getRaceFromExtension(mockExtension)).toEqual('white');
	});

	test('The patient is african american', () => {
		const mockExtension = {
			url: 'raceCode',
			valueCoding: {
				system: 'http://hl7.org/fhir/v3/Race',
				code: '2058-6',
				display: 'Black',
				userSelected: false,
			},
		};
		expect(riskService.getRaceFromExtension(mockExtension)).toEqual('africanamerican');
	});

	test('The patient is neither white nor african american', () => {
		const mockExtension = {
			url: 'raceCode',
			valueCoding: {
				system: 'http://hl7.org/fhir/v3/Race',
				code: '321321312',
				display: 'Asian',
				userSelected: false,
			},
		};
		expect(riskService.getRaceFromExtension(mockExtension)).toEqual('other');
	});
});

describe('Test getting medication statement', () => {
	test('The patient is on aspirin', () => {
		const mockMedicationStatements = [
			medicationStatementFixture(),
			medicationStatementFixture({
				medicationCodeableConcept: {
					coding: [
						{
							system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
							code: '243670',
							display: 'Aspirin 81 MG Oral Tablet',
							userSelected: false,
						},
					],
					text: 'aspirin (aspirin 81 mg oral tablet)',
				},
			}),
			medicationStatementFixture(),
		];
		const medicationStatementInfo = riskService.parseMedicationStatements(mockMedicationStatements);
		expect(medicationStatementInfo.aspirin).toEqual(true);
	});
	test('The patient is on aspirin without a code', () => {
		const mockMedicationStatements = [
			medicationStatementFixture(),
			medicationStatementFixture({
				medicationCodeableConcept: {
					text: 'aspirin (aspirin 81 mg oral tablet)',
				},
			}),
			medicationStatementFixture(),
		];
		const medicationStatementInfo = riskService.parseMedicationStatements(mockMedicationStatements);
		expect(medicationStatementInfo.aspirin).toEqual(true);
	});

	test('The patient is not on aspirin', () => {
		const mockMedicationStatements = [
			medicationStatementFixture(),
			medicationStatementFixture(),
			medicationStatementFixture(),
		];
		const medicationStatementInfo = riskService.parseMedicationStatements(mockMedicationStatements);
		expect(medicationStatementInfo.aspirin).toEqual(false);
	});

	test('The patient is on statin', () => {
		const mockMedicationStatements = [
			medicationStatementFixture(),
			medicationStatementFixture({
				medicationCodeableConcept: {
					coding: [
						{
							system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
							code: '617312',
							display: 'Statin',
							userSelected: false,
						},
					],
					text: 'Statin',
				},
			}),
			medicationStatementFixture(),
		];

		const medicationStatementInfo = riskService.parseMedicationStatements(mockMedicationStatements);
		expect(medicationStatementInfo.statin).toEqual(true);
	});

	test('The patient is not on statin', () => {
		const mockMedicationStatements = [
			medicationStatementFixture({
				medicationCodeableConcept: {
					coding: [
						{
							system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
							code: 'Foobar',
							display: 'Whatever',
							userSelected: false,
						},
					],
					text: 'Statin',
				},
			}),
			medicationStatementFixture({
				medicationCodeableConcept: {
					text: 'Foobar',
				},
			}),
		];

		const medicationStatementInfo = riskService.parseMedicationStatements(mockMedicationStatements);
		expect(medicationStatementInfo.statin).toEqual(false);
	});
});

describe('Full statin information test', () => {
	const mockClient = {
		request: (req, options) => {
			let entries;
			const { pageLimit } = options ? options : {};
			if (req.includes('MedicationStatement')) {
				entries = [
					medicationStatementFixture({
						medicationCodeableConcept: {
							coding: [
								{
									system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
									code: '617312',
									display: 'Statin',
									userSelected: false,
								},
							],
							text: 'Statin',
						},
					}),
				];
			} else if (req.includes('Patient')) {
				entries = [patientFixture()];
			} else {
				entries = [];
			}
			const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
			return Promise.resolve(result);
		},
	};

	const mockRiskService = new RiskService(mockClient);
	test('Get risk information', () => {
		return mockRiskService.getRiskInformation('foobar').then((info) => {
			expect(info.statin).toBeTruthy();
		});
	});
});

describe('Full diabetic information test', () => {
	const mockClient = {
		request: (req, options) => {
			let entries;
			const { pageLimit } = options ? options : {};
			if (req.includes('Condition')) {
				entries = [
					conditionFixture({
						code: {
							coding: [
								{
									system: 'http://snomed.info/sct',
									code: '73211009',
									display: 'Diabetes mellitus (disorder)',
									userSelected: false,
								},
							],
							text: 'Diabetes',
						},
					}),
				];
			} else if (req.includes('Patient')) {
				entries = [patientFixture()];
			} else {
				entries = [];
			}
			const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
			return Promise.resolve(result);
		},
	};

	const mockRiskService = new RiskService(mockClient);
	test('Get aspirin information', () => {
		return mockRiskService.getRiskInformation('foobar').then((info) => {
			expect(info.relatedFactors.diabetic).toBeTruthy();
		});
	});
});

describe('Full smoking test', () => {
	const mockClient = {
		request: (req, options) => {
			let entries;
			const { pageLimit } = options ? options : {};
			if (req.includes('Condition')) {
				entries = [
					conditionFixture({
						code: {
							coding: [
								{
									system: 'http://e-imo.com/products/problem-it',
									code: '961498',
									display: 'Current smoker',
									userSelected: false,
								},
								{
									system: 'http://snomed.info/sct',
									code: '77176002',
									display: 'Smoker (finding)',
									userSelected: false,
								},
							],
							text: 'Everyday Smoker',
						},
					}),
					observationFixture({
						code: {
							coding: [
								{
									system: 'http://snomed.info/sct',
									code: '72166-2',
									display: 'Smoker (finding)',
									userSelected: false,
								},
							],
							text: 'Everyday Smoker',
						},
						valueCodeableConcept: {
							coding: [
								{
									system: 'http://snomed.info/sct',
									code: '44982132131302',
									display: 'Does not smoke anymore',
								},
							],
							text: 'Does not smoke anymore',
						},
					}),
				];
			} else if (req.includes('Patient')) {
				entries = [patientFixture()];
			} else {
				entries = [];
			}
			const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
			return Promise.resolve(result);
		},
	};

	const mockRiskService = new RiskService(mockClient);
	test('Get smoker information', () => {
		return mockRiskService.getRiskInformation('foobar').then((info) => {
			expect(info.relatedFactors.smoker).toEqual('current');
		});
	});
});

describe('Full smoking test with raw resources', () => {
	const mockClient = {
		request: (req, options) => {
			let entries;
			const { pageLimit } = options ? options : {};
			if (req.includes('Condition')) {
				entries = [
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259949',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259949',
							meta: {
								versionId: '1885259949',
								lastUpdated: '2019-11-08T18:29:20.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Hypertension, Hypertension</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '86491',
										display: 'Hypertension',
										userSelected: false,
									},
									{
										system: 'http://snomed.info/sct',
										code: '38341003',
										display: 'Hypertensive disorder, systemic arterial (disorder)',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'I10',
										display: 'Essential (primary) hypertension',
										userSelected: false,
									},
								],
								text: 'Hypertension',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259855',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259855',
							meta: {
								versionId: '1885259855',
								lastUpdated: '2019-11-08T17:38:42.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Diabetes mellitus due to underlying condition with diabetic chronic kidney disease, Diabetes mellitus due to underlying condition with diabetic chronic kidney disease</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'E08.22',
										display:
											'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease',
										userSelected: true,
									},
								],
								text:
									'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259945',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259945',
							meta: {
								versionId: '1885259947',
								lastUpdated: '2019-11-08T18:23:26.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus, Type 2 diabetes mellitus</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'E11',
										display: 'Type 2 diabetes mellitus',
										userSelected: true,
									},
								],
								text: 'Type 2 diabetes mellitus',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259861',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259861',
							meta: {
								versionId: '1885259861',
								lastUpdated: '2019-11-08T17:42:18.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Type 1 diabetes mellitus, Type 1 diabetes mellitus</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'E10',
										display: 'Type 1 diabetes mellitus',
										userSelected: true,
									},
								],
								text: 'Type 1 diabetes mellitus',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259825',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259825',
							meta: {
								versionId: '1885259827',
								lastUpdated: '2019-11-08T17:31:59.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Current smoker, Current smoker</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  1, 2019  4:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '961498',
										display: 'Current smoker',
										userSelected: false,
									},
									{
										system: 'http://snomed.info/sct',
										code: '77176002',
										display: 'Smoker (finding)',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'F17.200',
										display: 'Nicotine dependence, unspecified, uncomplicated',
										userSelected: false,
									},
								],
								text: 'Current smoker',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-01T16:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259815',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259815',
							meta: {
								versionId: '1885259815',
								lastUpdated: '2019-11-08T17:26:12.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Hyperlipidemia, unspecified, Hyperlipidemia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  7, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'E78.5',
										display: 'Hyperlipidemia, unspecified',
										userSelected: true,
									},
								],
								text: 'Hyperlipidemia, unspecified',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-07T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259837',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259837',
							meta: {
								versionId: '1885259837',
								lastUpdated: '2019-11-08T17:33:44.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Smoker, Smoker</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '603399',
										display: 'Smoker',
										userSelected: false,
									},
									{
										system: 'http://snomed.info/sct',
										code: '77176002',
										display: 'Smoker (finding)',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'F17.200',
										display: 'Nicotine dependence, unspecified, uncomplicated',
										userSelected: false,
									},
								],
								text: 'Smoker',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1884970941',
						resource: {
							resourceType: 'Condition',
							id: 'd1884970941',
							meta: {
								versionId: '1884970941',
								lastUpdated: '2019-10-25T18:38:06.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Tobacco use, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2019  6:38 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-10-25',
							code: {
								coding: [
									{
										system: 'http://snomed.info/sct',
										code: '110483000',
										display: 'Tobacco user (finding)',
										userSelected: false,
									},
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '735525',
										display: 'Tobacco use',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'Z72.0',
										display: 'Tobacco use',
										userSelected: false,
									},
								],
								text: 'Tobacco use',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-10-25T18:38:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259817',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259817',
							meta: {
								versionId: '1885259817',
								lastUpdated: '2019-11-08T17:28:03.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Tobacco use, Tobacco use</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  5, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'Z72.0',
										display: 'Tobacco use',
										userSelected: true,
									},
								],
								text: 'Tobacco use',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-05T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1884970943',
						resource: {
							resourceType: 'Condition',
							id: 'd1884970943',
							meta: {
								versionId: '1884970943',
								lastUpdated: '2019-10-25T18:38:07.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2019  6:38 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-10-25',
							code: {
								coding: [
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '848498',
										display: 'Tobacco user',
										userSelected: false,
									},
									{
										system: 'http://snomed.info/sct',
										code: '110483000',
										display: 'Tobacco user (finding)',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'Z72.0',
										display: 'Tobacco use',
										userSelected: false,
									},
								],
								text: 'Tobacco user',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-10-25T18:38:00.000Z',
						},
					},
				];
			} else if (req.includes('Patient')) {
				entries = [patientFixture()];
			} else {
				entries = [];
			}
			const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
			return Promise.resolve(result);
		},
	};

	const mockRiskService = new RiskService(mockClient);
	test('Get smoker information', () => {
		return mockRiskService.getRiskInformation('foobar').then((info) => {
			expect(info.relatedFactors.smoker).toEqual('current');
		});
	});
});

describe('Full smoking test with raw conditions and observations', () => {
	const mockClient = {
		request: (req, options) => {
			let entries;
			const { pageLimit } = options ? options : {};
			if (req.includes('Condition')) {
				entries = [
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259949',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259949',
							meta: {
								versionId: '1885259949',
								lastUpdated: '2019-11-08T18:29:20.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Hypertension, Hypertension</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '86491',
										display: 'Hypertension',
										userSelected: false,
									},
									{
										system: 'http://snomed.info/sct',
										code: '38341003',
										display: 'Hypertensive disorder, systemic arterial (disorder)',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'I10',
										display: 'Essential (primary) hypertension',
										userSelected: false,
									},
								],
								text: 'Hypertension',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259855',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259855',
							meta: {
								versionId: '1885259855',
								lastUpdated: '2019-11-08T17:38:42.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Diabetes mellitus due to underlying condition with diabetic chronic kidney disease, Diabetes mellitus due to underlying condition with diabetic chronic kidney disease</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'E08.22',
										display:
											'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease',
										userSelected: true,
									},
								],
								text:
									'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259945',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259945',
							meta: {
								versionId: '1885259947',
								lastUpdated: '2019-11-08T18:23:26.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus, Type 2 diabetes mellitus</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'E11',
										display: 'Type 2 diabetes mellitus',
										userSelected: true,
									},
								],
								text: 'Type 2 diabetes mellitus',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259861',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259861',
							meta: {
								versionId: '1885259861',
								lastUpdated: '2019-11-08T17:42:18.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Type 1 diabetes mellitus, Type 1 diabetes mellitus</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'E10',
										display: 'Type 1 diabetes mellitus',
										userSelected: true,
									},
								],
								text: 'Type 1 diabetes mellitus',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259825',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259825',
							meta: {
								versionId: '1885259827',
								lastUpdated: '2019-11-08T17:31:59.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Current smoker, Current smoker</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  1, 2019  4:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '961498',
										display: 'Current smoker',
										userSelected: false,
									},
									{
										system: 'http://snomed.info/sct',
										code: '77176002',
										display: 'Smoker (finding)',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'F17.200',
										display: 'Nicotine dependence, unspecified, uncomplicated',
										userSelected: false,
									},
								],
								text: 'Current smoker',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-01T16:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259815',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259815',
							meta: {
								versionId: '1885259815',
								lastUpdated: '2019-11-08T17:26:12.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Hyperlipidemia, unspecified, Hyperlipidemia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  7, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'E78.5',
										display: 'Hyperlipidemia, unspecified',
										userSelected: true,
									},
								],
								text: 'Hyperlipidemia, unspecified',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-07T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259837',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259837',
							meta: {
								versionId: '1885259837',
								lastUpdated: '2019-11-08T17:33:44.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Smoker, Smoker</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '603399',
										display: 'Smoker',
										userSelected: false,
									},
									{
										system: 'http://snomed.info/sct',
										code: '77176002',
										display: 'Smoker (finding)',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'F17.200',
										display: 'Nicotine dependence, unspecified, uncomplicated',
										userSelected: false,
									},
								],
								text: 'Smoker',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-08T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1884970941',
						resource: {
							resourceType: 'Condition',
							id: 'd1884970941',
							meta: {
								versionId: '1884970941',
								lastUpdated: '2019-10-25T18:38:06.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Tobacco use, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2019  6:38 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-10-25',
							code: {
								coding: [
									{
										system: 'http://snomed.info/sct',
										code: '110483000',
										display: 'Tobacco user (finding)',
										userSelected: false,
									},
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '735525',
										display: 'Tobacco use',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'Z72.0',
										display: 'Tobacco use',
										userSelected: false,
									},
								],
								text: 'Tobacco use',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-10-25T18:38:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259817',
						resource: {
							resourceType: 'Condition',
							id: 'd1885259817',
							meta: {
								versionId: '1885259817',
								lastUpdated: '2019-11-08T17:28:03.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Tobacco use, Tobacco use</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  5, 2019  5:00 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-11-08',
							code: {
								coding: [
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'Z72.0',
										display: 'Tobacco use',
										userSelected: true,
									},
								],
								text: 'Tobacco use',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-11-05T17:00:00.000Z',
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1884970943',
						resource: {
							resourceType: 'Condition',
							id: 'd1884970943',
							meta: {
								versionId: '1884970943',
								lastUpdated: '2019-10-25T18:38:07.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2019  6:38 P.M. UTC</p></div>',
							},
							patient: {
								reference: 'Patient/27385503',
								display: 'ZZZTESTONC, HEART',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							asserter: {
								reference: 'Practitioner/27159269',
								display: 'Ronald Romero Barrientos',
							},
							dateRecorded: '2019-10-25',
							code: {
								coding: [
									{
										system: 'http://e-imo.com/products/problem-it',
										code: '848498',
										display: 'Tobacco user',
										userSelected: false,
									},
									{
										system: 'http://snomed.info/sct',
										code: '110483000',
										display: 'Tobacco user (finding)',
										userSelected: false,
									},
									{
										system: 'http://hl7.org/fhir/sid/icd-10-cm',
										code: 'Z72.0',
										display: 'Tobacco use',
										userSelected: false,
									},
								],
								text: 'Tobacco user',
							},
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/condition-category',
										code: 'diagnosis',
										display: 'Diagnosis',
									},
								],
								text: 'Diagnosis',
							},
							clinicalStatus: 'active',
							verificationStatus: 'confirmed',
							onsetDateTime: '2019-10-25T18:38:00.000Z',
						},
					},
				];
			} else if (req.includes('Patient')) {
				entries = [patientFixture()];
			} else if (req.includes('Observation')) {
				entries = [
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/M13994664552',
						resource: {
							resourceType: 'Observation',
							id: 'M13994664552',
							meta: {
								versionId: '1-13994664551',
								lastUpdated: '2019-11-21T16:37:01.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Chloride - Transcribed</p><p><b>Result</b>: 66 mEq/L</p><p><b>Date</b>: Nov 21, 2019  4:34 P.M. UTC</p></div>',
							},
							status: 'final',
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/observation-category',
										code: 'laboratory',
										display: 'Laboratory',
									},
								],
								text: 'Laboratory',
							},
							code: {
								coding: [
									{
										system: 'http://loinc.org',
										code: '2075-0',
									},
								],
								text: 'Chloride - Transcribed',
							},
							subject: {
								reference: 'Patient/27385503',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							effectiveDateTime: '2019-11-21T16:34:00.000Z',
							issued: '2019-11-21T16:35:44.000Z',
							valueQuantity: {
								value: 66,
								unit: 'mEq/L',
								system: 'http://unitsofmeasure.org',
								code: 'meq/L',
							},
						},
					},
					{
						fullUrl:
							'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/M13994664564',
						resource: {
							resourceType: 'Observation',
							id: 'M13994664564',
							meta: {
								versionId: '1-13994664563',
								lastUpdated: '2019-11-21T16:37:01.000Z',
							},
							text: {
								status: 'generated',
								div:
									'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Triglycerides - Transcribed</p><p><b>Result</b>: 72 mg/dL</p><p><b>Date</b>: Nov 21, 2019  4:34 P.M. UTC</p></div>',
							},
							status: 'final',
							category: {
								coding: [
									{
										system: 'http://hl7.org/fhir/observation-category',
										code: 'laboratory',
										display: 'Laboratory',
									},
								],
								text: 'Laboratory',
							},
							code: {
								coding: [
									{
										system: 'http://loinc.org',
										code: '2571-8',
									},
								],
								text: 'Triglycerides - Transcribed',
							},
							subject: {
								reference: 'Patient/27385503',
							},
							encounter: {
								reference: 'Encounter/157125554',
							},
							effectiveDateTime: '2019-11-21T16:34:00.000Z',
							issued: '2019-11-21T16:36:58.000Z',
							valueQuantity: {
								value: 72,
								unit: 'mg/dL',
								system: 'http://unitsofmeasure.org',
								code: 'mg/dL',
							},
						},
					},
				];
			} else {
				entries = [];
			}
			const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
			return Promise.resolve(result);
		},
	};

	const mockRiskService = new RiskService(mockClient);
	test('Get smoker information should be smoker', () => {
		return mockRiskService.getRiskInformation('foobar').then((info) => {
			expect(info.relatedFactors.smoker).toEqual('current');
		});
	});
});

describe('Risk Service date formatting tests', () => {
	test('UTC dates should be formatted to EST', () => {});
	test('Observation dates should have a relative date in EST', () => {
		const mockObservations = [
			observationFixture({
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '2085-9',
						},
					],
					text: 'hdl cholesterol reading',
				},
				valueQuantity: {
					value: 5,
					unit: 'mg',
				},
			}),
		];
		const mockRiskService = new RiskService();

		const { cholesterolRelativeDate } = mockRiskService.getCholesterols(mockObservations);
		expect(cholesterolRelativeDate);
	});
});

describe('Condition parsing', () => {
	test('Resolved conditions should be filtered out', () => {
		const mockRiskService = new RiskService();

		const mockConditions = [conditionFixture({ clinicalStatus: 'resolved' })];
		const result = mockConditions.filter(mockRiskService.isRelevant);
		expect(result.length).toEqual(0);
	});
});

describe('Social history smoker test', () => {
	test('A current social history smoker should be considered a Smoker', () => {
		const mockRiskService = new RiskService();
		const mockObservations = [
			{
				fullUrl:
					'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314481-q102250923',
				resource: {
					resourceType: 'Observation',
					id: '383314481-q102250923',
					meta: {
						versionId: '383314481',
						lastUpdated: '2019-11-25T19:33:33.000Z',
					},
					text: {
						status: 'generated',
						div:
							'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 25, 2019  7:33 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco use</p><p><b>Response</b>: Current</p></div>',
					},
					status: 'final',
					category: {
						coding: [
							{
								system: 'http://hl7.org/fhir/observation-category',
								code: 'social-history',
								display: 'Social History',
							},
						],
						text: 'Social History',
					},
					code: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '229819007',
								display: 'Tobacco use and exposure (observable entity)',
							},
						],
						text: 'SHX Tobacco use',
					},
					subject: {
						reference: 'Patient/27385503',
					},
					issued: '2019-11-25T19:33:33.000Z',
					valueCodeableConcept: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '15240007',
								display: 'Current (qualifier value)',
							},
						],
						text: 'Current',
					},
				},
			},
		];

		const results = mockRiskService.parseObservations(mockObservations);
		expect(results.smoker.smokingStatus).toEqual('current');
	});

	test('A current social history smoker should be considered a Smoker with a mock client', () => {
		const mockClient = {
			request: (req, options) => {
				let entries;
				const { pageLimit } = options ? options : {};
				if (req.includes('Observation')) {
					entries = [
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314481-q102250923',
							resource: {
								resourceType: 'Observation',
								id: '383314481-q102250923',
								meta: {
									versionId: '383314481',
									lastUpdated: '2019-11-25T19:33:33.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 25, 2019  7:33 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco use</p><p><b>Response</b>: Current</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '229819007',
											display: 'Tobacco use and exposure (observable entity)',
										},
									],
									text: 'SHX Tobacco use',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-25T19:33:33.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '15240007',
											display: 'Current (qualifier value)',
										},
									],
									text: 'Current',
								},
							},
						},
					];
				} else if (req.includes('Patient')) {
					entries = [patientFixture()];
				} else {
					entries = [];
				}
				const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
				return Promise.resolve(result);
			},
		};

		const mockRiskService = new RiskService(mockClient);
		return mockRiskService.getRiskInformation('foo').then((results) => {
			expect(results.relatedFactors.smoker).toEqual('current');
		});
	});

	test('A current social history smoker should be considered a Smoker with a mock client with both Conditions and Observations', () => {
		const mockClient = {
			request: (req, options) => {
				let entries;
				const { pageLimit } = options ? options : {};
				if (req.includes('Observation')) {
					entries = [
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314481-q102250923',
							resource: {
								resourceType: 'Observation',
								id: '383314481-q102250923',
								meta: {
									versionId: '383314481',
									lastUpdated: '2019-11-25T19:33:33.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 25, 2019  7:33 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco use</p><p><b>Response</b>: Current</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '229819007',
											display: 'Tobacco use and exposure (observable entity)',
										},
									],
									text: 'SHX Tobacco use',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-25T19:33:33.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '15240007',
											display: 'Current (qualifier value)',
										},
									],
									text: 'Current',
								},
							},
						},
					];
				} else if (req.includes('Condition')) {
					entries = [
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383314457',
							resource: {
								resourceType: 'Condition',
								id: 'p383314457',
								meta: {
									versionId: '383314457',
									lastUpdated: '2019-11-25T17:44:54.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Problem</b>: Tobacco use, Tobacco use</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								asserter: {
									reference: 'Practitioner/1',
									display: 'SYSTEM SYSTEM',
								},
								dateRecorded: '2019-11-25',
								code: {
									coding: [
										{
											system: 'http://e-imo.com/products/problem-it',
											code: '735525',
											display: 'Tobacco use',
											userSelected: false,
										},
										{
											system: 'http://snomed.info/sct',
											code: '110483000',
											display: 'Tobacco user (finding)',
											userSelected: false,
										},
									],
									text: 'Tobacco use',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								clinicalStatus: 'active',
								verificationStatus: 'confirmed',
								abatementBoolean: false,
							},
						},
					];
				} else if (req.includes('Patient')) {
					entries = [patientFixture()];
				} else {
					entries = [];
				}
				const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
				return Promise.resolve(result);
			},
		};

		const mockRiskService = new RiskService(mockClient);
		return mockRiskService.getRiskInformation('foo').then((results) => {
			expect(results.relatedFactors.smoker).toEqual('current');
		});
	});

	test('A patient with no diabetes conditions should not be diabetic', () => {
		const mockClient = {
			request: (req, options) => {
				let entries;
				const { pageLimit } = options ? options : {};
				if (req.includes('Observation')) {
					entries = [];
				} else if (req.includes('Condition')) {
					entries = [
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259837',
							resource: {
								resourceType: 'Condition',
								id: 'd1885259837',
								meta: {
									versionId: '1885259837',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1884970943',
							resource: {
								resourceType: 'Condition',
								id: 'd1884970943',
								meta: {
									versionId: '1884970943',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259861',
							resource: {
								resourceType: 'Condition',
								id: 'd1885259861',
								meta: {
									versionId: '1885259861',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885397529',
							resource: {
								resourceType: 'Condition',
								id: 'd1885397529',
								meta: {
									versionId: '1885397529',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259949',
							resource: {
								resourceType: 'Condition',
								id: 'd1885259949',
								meta: {
									versionId: '1885259949',
									lastUpdated: '2019-11-08T18:29:20.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Hypertension, Hypertension</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2019  5:00 P.M. UTC</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								encounter: {
									reference: 'Encounter/157125554',
								},
								asserter: {
									reference: 'Practitioner/27159269',
									display: 'Ronald Romero Barrientos',
								},
								dateRecorded: '2019-11-08',
								code: {
									coding: [
										{
											system: 'http://e-imo.com/products/problem-it',
											code: '86491',
											display: 'Hypertension',
											userSelected: false,
										},
										{
											system: 'http://snomed.info/sct',
											code: '38341003',
											display: 'Hypertensive disorder, systemic arterial (disorder)',
											userSelected: false,
										},
										{
											system: 'http://hl7.org/fhir/sid/icd-10-cm',
											code: 'I10',
											display: 'Essential (primary) hypertension',
											userSelected: false,
										},
									],
									text: 'Hypertension',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								clinicalStatus: 'active',
								verificationStatus: 'confirmed',
								onsetDateTime: '2019-11-08T17:00:00.000Z',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885405985',
							resource: {
								resourceType: 'Condition',
								id: 'd1885405985',
								meta: {
									versionId: '1885405985',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259945',
							resource: {
								resourceType: 'Condition',
								id: 'd1885259945',
								meta: {
									versionId: '1885259947',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1884970941',
							resource: {
								resourceType: 'Condition',
								id: 'd1884970941',
								meta: {
									versionId: '1884970941',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259855',
							resource: {
								resourceType: 'Condition',
								id: 'd1885259855',
								meta: {
									versionId: '1885259855',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259825',
							resource: {
								resourceType: 'Condition',
								id: 'd1885259825',
								meta: {
									versionId: '1885259827',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259815',
							resource: {
								resourceType: 'Condition',
								id: 'd1885259815',
								meta: {
									versionId: '1885259815',
									lastUpdated: '2019-11-08T17:26:12.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Diagnosis</b>: Hyperlipidemia, unspecified, Hyperlipidemia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  7, 2019  5:00 P.M. UTC</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								encounter: {
									reference: 'Encounter/157125554',
								},
								asserter: {
									reference: 'Practitioner/27159269',
									display: 'Ronald Romero Barrientos',
								},
								dateRecorded: '2019-11-08',
								code: {
									coding: [
										{
											system: 'http://hl7.org/fhir/sid/icd-10-cm',
											code: 'E78.5',
											display: 'Hyperlipidemia, unspecified',
											userSelected: true,
										},
									],
									text: 'Hyperlipidemia, unspecified',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								clinicalStatus: 'active',
								verificationStatus: 'confirmed',
								onsetDateTime: '2019-11-07T17:00:00.000Z',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885259817',
							resource: {
								resourceType: 'Condition',
								id: 'd1885259817',
								meta: {
									versionId: '1885259817',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/d1885406019',
							resource: {
								resourceType: 'Condition',
								id: 'd1885406019',
								meta: {
									versionId: '1885406019',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Diagnosis</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/condition-category',
											code: 'diagnosis',
											display: 'Diagnosis',
										},
									],
									text: 'Diagnosis',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383288363',
							resource: {
								resourceType: 'Condition',
								id: 'p383288363',
								meta: {
									versionId: '383314393',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Problem</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383310365',
							resource: {
								resourceType: 'Condition',
								id: 'p383310365',
								meta: {
									versionId: '383314301',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Problem</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383288383',
							resource: {
								resourceType: 'Condition',
								id: 'p383288383',
								meta: {
									versionId: '383314297',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Problem</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383268841',
							resource: {
								resourceType: 'Condition',
								id: 'p383268841',
								meta: {
									versionId: '383304635',
									lastUpdated: '2019-10-25T18:38:00.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Problem</b>: AAA (abdominal aortic aneurysm), Abdominal aortic aneurysm (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: True</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								asserter: {
									reference: 'Practitioner/2908693',
									display: 'Wanda L Reece',
								},
								dateRecorded: '2019-07-08',
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '233985008',
											display: 'Abdominal aortic aneurysm (disorder)',
											userSelected: false,
										},
										{
											system: 'http://e-imo.com/products/problem-it',
											code: '71947',
											display: 'AAA (abdominal aortic aneurysm)',
											userSelected: false,
										},
									],
									text: 'AAA (abdominal aortic aneurysm)',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								clinicalStatus: 'resolved',
								verificationStatus: 'confirmed',
								abatementBoolean: true,
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383304617',
							resource: {
								resourceType: 'Condition',
								id: 'p383304617',
								meta: {
									versionId: '383314413',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Problem</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383269893',
							resource: {
								resourceType: 'Condition',
								id: 'p383269893',
								meta: {
									versionId: '383314421',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Problem</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383288473',
							resource: {
								resourceType: 'Condition',
								id: 'p383288473',
								meta: {
									versionId: '383314425',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Problem</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383314457',
							resource: {
								resourceType: 'Condition',
								id: 'p383314457',
								meta: {
									versionId: '383314457',
									lastUpdated: '2019-11-25T17:44:54.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Problem</b>: Tobacco use, Tobacco use</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								asserter: {
									reference: 'Practitioner/1',
									display: 'SYSTEM SYSTEM',
								},
								dateRecorded: '2019-11-25',
								code: {
									coding: [
										{
											system: 'http://e-imo.com/products/problem-it',
											code: '735525',
											display: 'Tobacco use',
											userSelected: false,
										},
										{
											system: 'http://snomed.info/sct',
											code: '110483000',
											display: 'Tobacco user (finding)',
											userSelected: false,
										},
									],
									text: 'Tobacco use',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								clinicalStatus: 'active',
								verificationStatus: 'confirmed',
								abatementBoolean: false,
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383314495',
							resource: {
								resourceType: 'Condition',
								id: 'p383314495',
								meta: {
									versionId: '383314495',
									lastUpdated: '2019-11-25T19:33:33.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Problem</b>: Tobacco use, Tobacco use</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								asserter: {
									reference: 'Practitioner/1',
									display: 'SYSTEM SYSTEM',
								},
								dateRecorded: '2019-11-25',
								code: {
									coding: [
										{
											system: 'http://e-imo.com/products/problem-it',
											code: '735525',
											display: 'Tobacco use',
											userSelected: false,
										},
										{
											system: 'http://snomed.info/sct',
											code: '110483000',
											display: 'Tobacco user (finding)',
											userSelected: false,
										},
									],
									text: 'Tobacco use',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								clinicalStatus: 'active',
								verificationStatus: 'confirmed',
								abatementBoolean: false,
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383310275',
							resource: {
								resourceType: 'Condition',
								id: 'p383310275',
								meta: {
									versionId: '383314429',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Problem</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383310195',
							resource: {
								resourceType: 'Condition',
								id: 'p383310195',
								meta: {
									versionId: '383314417',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Problem</b>: Entered In Error</p><p><b>Verification Status</b>: Entered In Error</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
								},
								code: {
									text: 'Entered In Error',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								verificationStatus: 'entered-in-error',
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Condition/p383310203',
							resource: {
								resourceType: 'Condition',
								id: 'p383310203',
								meta: {
									versionId: '383310203',
									lastUpdated: '2019-11-08T17:29:02.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Condition</b></p><p><b>Patient</b>: ZZZTESTONC, HEART</p><p><b>Problem</b>: Hyperlipidemia, unspecified, Hyperlipidemia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
								},
								patient: {
									reference: 'Patient/27385503',
									display: 'ZZZTESTONC, HEART',
								},
								asserter: {
									reference: 'Practitioner/27159269',
									display: 'Ronald Romero Barrientos',
								},
								dateRecorded: '2019-11-08',
								code: {
									coding: [
										{
											system: 'http://hl7.org/fhir/sid/icd-10-cm',
											code: 'E78.5',
											display: 'Hyperlipidemia, unspecified',
											userSelected: true,
										},
										{
											system: 'http://snomed.info/sct',
											code: '55822004',
											display: 'Hyperlipidemia (disorder)',
											userSelected: false,
										},
									],
									text: 'Hyperlipidemia, unspecified',
								},
								category: {
									coding: [
										{
											system: 'http://argonaut.hl7.org',
											code: 'problem',
											display: 'Problem',
										},
									],
									text: 'Problem',
								},
								clinicalStatus: 'active',
								verificationStatus: 'confirmed',
								abatementBoolean: false,
							},
						},
					];
				} else if (req.includes('Patient')) {
					entries = [patientFixture()];
				} else {
					entries = [];
				}
				const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
				return Promise.resolve(result);
			},
		};

		const mockRiskService = new RiskService(mockClient);
		return mockRiskService.getRiskInformation('foo').then((results) => {
			expect(results.relatedFactors.diabetic).toEqual(false);
		});
	});

	test('A patient with a social history of Smoking should be a Smoker', () => {
		const mockClient = {
			request: (req, options) => {
				let entries;
				const { pageLimit } = options ? options : {};
				if (req.includes('Observation')) {
					entries = [
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102250923',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102250923',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco use</p><p><b>Response</b>: Current</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '229819007',
											display: 'Tobacco use and exposure (observable entity)',
										},
									],
									text: 'SHX Tobacco use',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '15240007',
											display: 'Current (qualifier value)',
										},
									],
									text: 'Current',
								},
							},
						},
					];
				} else if (req.includes('Condition')) {
					entries = [];
				} else if (req.includes('Patient')) {
					entries = [patientFixture()];
				} else {
					entries = [];
				}
				const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
				return Promise.resolve(result);
			},
		};

		const mockRiskService = new RiskService(mockClient);
		return mockRiskService.getRiskInformation('foo').then((results) => {
			expect(results.relatedFactors.smoker).toEqual('current');
		});
	});

	test('End to end patient with a social history of Smoking should be a Smoker', () => {
		const mockClient = {
			request: (req, options) => {
				let entries;
				const { pageLimit } = options ? options : {};
				if (req.includes('Observation')) {
					entries = [
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/1268-383314861',
							resource: {
								resourceType: 'Observation',
								id: '1268-383314861',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Tobacco</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://loinc.org',
											code: '72166-2',
										},
										{
											system: 'http://loinc.org',
											code: '72166-2',
										},
									],
									text: 'Tobacco',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								dataAbsentReason: {
									coding: [
										{
											system: 'http://hl7.org/fhir/data-absent-reason',
											code: 'unknown',
											display: 'Unknown',
										},
									],
									text: 'Unknown',
								},
								related: [
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102250923',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-0',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-1',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-2',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-3',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-4',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-5',
										},
									},
								],
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102250923',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102250923',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco use</p><p><b>Response</b>: Current</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '229819007',
											display: 'Tobacco use and exposure (observable entity)',
										},
									],
									text: 'SHX Tobacco use',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '15240007',
											display: 'Current (qualifier value)',
										},
									],
									text: 'Current',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-0',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-0',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Chewing tobacco</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '81911001',
											display: 'Chewing tobacco (substance)',
										},
									],
									text: 'Chewing tobacco',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-1',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-1',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Cigarettes</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '722496004',
											display: 'Cigarette (physical object)',
										},
									],
									text: 'Cigarettes',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-2',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-2',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Cigars</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '26663004',
											display: 'Cigar smoking tobacco (substance)',
										},
									],
									text: 'Cigars',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-3',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-3',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: e-cigarettes</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '722498003',
											display: 'Electronic cigarette (physical object)',
										},
									],
									text: 'e-cigarettes',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-4',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-4',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Pipe</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '84498003',
											display: 'Pipe smoking tobacco (substance)',
										},
									],
									text: 'Pipe',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-5',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-5',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Smokeless Tobacco</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://loinc.org',
											code: 'LA26092-9',
										},
									],
									text: 'Smokeless Tobacco',
								},
							},
						},
					];
				} else if (req.includes('Condition')) {
					entries = [];
				} else if (req.includes('Patient')) {
					entries = [patientFixture()];
				} else {
					entries = [];
				}
				const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
				return Promise.resolve(result);
			},
		};

		const mockRiskService = new RiskService(mockClient);
		return mockRiskService.getRiskInformation('foo').then((results) => {
			expect(results.relatedFactors.smoker).toEqual('current');
		});
	});

	test('End to end patient with a social history of Smoking should be a Smoker', () => {
		const mockClient = {
			request: (req, options) => {
				let entries;
				const { pageLimit } = options ? options : {};
				if (req.includes('Observation')) {
					entries = [
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/1268-383314861',
							resource: {
								resourceType: 'Observation',
								id: '1268-383314861',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Tobacco</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://loinc.org',
											code: '72166-2',
										},
										{
											system: 'http://loinc.org',
											code: '72166-2',
										},
									],
									text: 'Tobacco',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								dataAbsentReason: {
									coding: [
										{
											system: 'http://hl7.org/fhir/data-absent-reason',
											code: 'unknown',
											display: 'Unknown',
										},
									],
									text: 'Unknown',
								},
								related: [
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102250923',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-0',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-1',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-2',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-3',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-4',
										},
									},
									{
										type: 'has-member',
										target: {
											reference: 'Observation/383314861-q102251039-5',
										},
									},
								],
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102250923',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102250923',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco use</p><p><b>Response</b>: Current</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '229819007',
											display: 'Tobacco use and exposure (observable entity)',
										},
									],
									text: 'SHX Tobacco use',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '15240007',
											display: 'Current (qualifier value)',
										},
									],
									text: 'Current',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-0',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-0',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Chewing tobacco</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '81911001',
											display: 'Chewing tobacco (substance)',
										},
									],
									text: 'Chewing tobacco',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-1',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-1',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Cigarettes</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '722496004',
											display: 'Cigarette (physical object)',
										},
									],
									text: 'Cigarettes',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-2',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-2',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Cigars</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '26663004',
											display: 'Cigar smoking tobacco (substance)',
										},
									],
									text: 'Cigars',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-3',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-3',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: e-cigarettes</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '722498003',
											display: 'Electronic cigarette (physical object)',
										},
									],
									text: 'e-cigarettes',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-4',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-4',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Pipe</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '84498003',
											display: 'Pipe smoking tobacco (substance)',
										},
									],
									text: 'Pipe',
								},
							},
						},
						{
							fullUrl:
								'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/Observation/383314861-q102251039-5',
							resource: {
								resourceType: 'Observation',
								id: '383314861-q102251039-5',
								meta: {
									versionId: '383314883',
									lastUpdated: '2019-11-26T19:06:05.000Z',
								},
								text: {
									status: 'generated',
									div:
										'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Nov 26, 2019  7:06 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Smokeless Tobacco</p></div>',
								},
								status: 'final',
								category: {
									coding: [
										{
											system: 'http://hl7.org/fhir/observation-category',
											code: 'social-history',
											display: 'Social History',
										},
									],
									text: 'Social History',
								},
								code: {
									coding: [
										{
											system: 'http://snomed.info/sct',
											code: '266918002',
											display: 'Tobacco smoking consumption (observable entity)',
										},
									],
									text: 'SHX Tobacco type',
								},
								subject: {
									reference: 'Patient/27385503',
								},
								issued: '2019-11-26T19:06:05.000Z',
								valueCodeableConcept: {
									coding: [
										{
											system: 'http://loinc.org',
											code: 'LA26092-9',
										},
									],
									text: 'Smokeless Tobacco',
								},
							},
						},
					];
				} else if (req.includes('Condition')) {
					entries = [];
				} else if (req.includes('Patient')) {
					entries = [patientFixture()];
				} else {
					entries = [];
				}
				const result = pageLimit !== undefined ? [bundleFixture(entries)] : bundleFixture(entries);
				return Promise.resolve(result);
			},
		};

		const mockRiskService = new RiskService(mockClient);
		return mockRiskService.getRiskInformation('foo').then((results) => {
			expect(results.relatedFactors.smoker).toEqual('current');
		});
	});

	describe('Smoker social history tests', () => {
		test('Current', () => {
			const mockObservations = [
				observationFixture({
					valueCodeableConcept: null,
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
				}),
				observationFixture({
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
					valueCodeableConcept: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '15240007',
								display: 'Current (qualifier value)',
							},
						],
						text: 'Current',
					},
				}),
				observationFixture({
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
					valueCodeableConcept: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '722496004',
								display: 'Cigarette (physical object)',
							},
						],
					},
				}),
			];
			const mockRiskService = new RiskService();
			const results = mockRiskService.searchForSmoker(mockObservations);
			expect(results).toEqual('current');
		});
		test('Past', () => {
			const mockObservations = [
				observationFixture({
					valueCodeableConcept: null,
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
				}),
				observationFixture({
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
					valueCodeableConcept: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '410513005',
								display: 'In the past (qualifier value)',
							},
						],
						text: 'Past',
					},
				}),
				observationFixture({
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
					valueCodeableConcept: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '722496004',
								display: 'Cigarette (physical object)',
							},
						],
					},
				}),
			];
			const mockRiskService = new RiskService();
			const results = mockRiskService.searchForSmoker(mockObservations);
			expect(results).toEqual('not');
		});
		test('Denies', () => {
			const mockObservations = [
				observationFixture({
					valueCodeableConcept: null,
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
				}),
				observationFixture({
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
					valueCodeableConcept: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '441889009',
								display: 'Denies',
							},
						],
						text: 'Past',
					},
				}),
				observationFixture({
					code: {
						coding: [
							{
								system: 'http://loinc.org',
								code: '72166-2',
							},
						],
						text: 'SHX Tobacco use',
					},
					valueCodeableConcept: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '722496004',
								display: 'Cigarette (physical object)',
							},
						],
					},
				}),
			];
			const mockRiskService = new RiskService();
			const results = mockRiskService.searchForSmoker(mockObservations);
			expect(results).toEqual('not');
		});
	});

	describe('Patient should be African American - Verbatim', () => {
		test('Patient should be African American', () => {
			const patient = {
				resourceType: 'Patient',
				id: '27385503',
				meta: {
					versionId: '35',
					lastUpdated: '2019-11-26T17:49:35.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Patient</b></p><p><b>Name</b>: ZZZTESTONC, HEART</p><p><b>DOB</b>: Jan  5, 1954</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p><p><b>Status</b>: Active</p></div>',
				},
				extension: [
					{
						url: 'http://fhir.org/guides/argonaut/StructureDefinition/argo-race',
						extension: [
							{
								url: 'ombCategory',
								valueCoding: {
									system: 'http://hl7.org/fhir/v3/Race',
									code: '2054-5',
									display: 'Black or African American',
									userSelected: false,
								},
							},
							{
								url: 'detailed',
								valueCoding: {
									system: 'http://hl7.org/fhir/v3/Race',
									code: '2058-6',
									display: 'African American',
									userSelected: false,
								},
							},
							{
								url: 'text',
								valueString: 'African American',
							},
						],
					},
					{
						url: 'http://fhir.org/guides/argonaut/StructureDefinition/argo-ethnicity',
						extension: [
							{
								url: 'ombCategory',
								valueCoding: {
									system: 'http://hl7.org/fhir/v3/Ethnicity',
									code: '2186-5',
									display: 'Not Hispanic or Latino',
									userSelected: false,
								},
							},
							{
								url: 'detailed',
								valueCoding: {
									system: 'http://hl7.org/fhir/v3/Ethnicity',
									code: '2186-5',
									userSelected: false,
								},
							},
							{
								url: 'text',
								valueString: 'Non-Hispanic',
							},
						],
					},
				],
				identifier: [
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'MR',
									display: 'Medical record number',
									userSelected: false,
								},
							],
							text: 'Community Medical Record Number',
						},
						system: 'urn:oid:2.16.840.1.113883.3.1662.100',
						value: '3770486',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString: '003770486',
								},
							],
						},
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'MR',
									display: 'Medical record number',
									userSelected: false,
								},
							],
							text: 'MRN',
						},
						value: '5002167',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString: 'MPP-000005002167',
								},
							],
						},
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'U',
									display: 'Unspecified identifier',
									userSelected: false,
								},
							],
							text: 'Messaging',
						},
						value: 'C2047CA72D7E4CD39FF624168E837B0C',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString: 'C2047CA72D7E4CD39FF624168E837B0C',
								},
							],
						},
						period: {
							start: '2019-04-10T18:43:08.000Z',
						},
					},
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'AN',
									display: 'Account number',
									userSelected: false,
								},
							],
							text: 'Federated Person Principal',
						},
						system: 'urn:oid:2.16.840.1.113883.3.13.6',
						value:
							'URN:CERNER:IDENTITY-FEDERATION:REALM:1D09DFF8-83BC-4001-92AE-C4B3AC10CA06-CH:PRINCIPAL:CU62R8SD5AP2SB9Z',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString:
										'URN:CERNER:IDENTITY-FEDERATION:REALM:1D09DFF8-83BC-4001-92AE-C4B3AC10CA06-CH:PRINCIPAL:CU62R8SD5AP2SB9Z',
								},
							],
						},
						period: {
							start: '2019-04-10T18:42:59.000Z',
						},
					},
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'AN',
									display: 'Account number',
									userSelected: false,
								},
							],
							text: 'Federated Person Principal',
						},
						system: 'urn:oid:2.16.840.1.113883.3.13.6',
						value:
							'URN:CERNER:IDENTITY-FEDERATION:REALM:1D09DFF8-83BC-4001-92AE-C4B3AC10CA06-CH:PRINCIPAL:CY5JM4HJ9MG6EA82',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString:
										'URN:CERNER:IDENTITY-FEDERATION:REALM:1D09DFF8-83BC-4001-92AE-C4B3AC10CA06-CH:PRINCIPAL:CY5JM4HJ9MG6EA82',
								},
							],
						},
						period: {
							start: '2019-01-30T19:38:05.000Z',
						},
					},
				],
				active: true,
				name: [
					{
						use: 'official',
						text: 'ZZZTESTONC, HEART',
						family: ['ZZZTESTONC'],
						given: ['HEART'],
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
				],
				telecom: [
					{
						system: 'phone',
						value: '(443)777-7000',
						use: 'work',
						period: {
							start: '2019-01-30T16:06:18.000Z',
						},
					},
					{
						system: 'phone',
						value: '(410)933-9000',
						use: 'home',
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
					{
						system: 'email',
						value: 'LUCY.C.STEIN@MEDSTAR.NET',
						use: 'home',
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
				],
				gender: 'male',
				birthDate: '1954-01-05',
				address: [
					{
						use: 'home',
						text: '4949 ADDRESS LINE ONE\nNOTTINGHAM, MD 21236\nUSA',
						line: ['4949 ADDRESS LINE ONE'],
						city: 'NOTTINGHAM',
						state: 'MD',
						postalCode: '21236',
						country: 'USA',
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
				],
				maritalStatus: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v3/MaritalStatus',
							code: 'M',
							display: 'Married',
							userSelected: false,
						},
					],
					text: 'Married',
				},
				communication: [
					{
						language: {
							coding: [
								{
									system: 'urn:ietf:bcp:47',
									code: 'en',
									display: 'English',
									userSelected: false,
								},
							],
							text: 'English',
						},
						preferred: true,
					},
				],
			};
			const mockRiskService = new RiskService();
			const results = mockRiskService.parsePatient({
				fullUrl: 'https://example.com',
				resource: patient,
			});
			expect(results.race).toEqual('africanamerican');
		});
	});

	describe('Patient should be White - Verbatim', () => {
		test('Patient should be White', () => {
			const patient = {
				resourceType: 'Patient',
				id: '27385503',
				meta: {
					versionId: '35',
					lastUpdated: '2019-11-26T17:49:35.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Patient</b></p><p><b>Name</b>: ZZZTESTONC, HEART</p><p><b>DOB</b>: Jan  5, 1954</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p><p><b>Status</b>: Active</p></div>',
				},
				extension: [
					{
						url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
						extension: [
							{
								url: 'ombCategory',
								valueCoding: {
									system: 'urn:oid:2.16.840.1.113883.6.238',
									code: '2106-3',
									display: 'White',
									userSelected: false,
								},
							},
							{
								url: 'text',
								valueString: 'White',
							},
						],
					},
					{
						url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
						extension: [
							{
								url: 'ombCategory',
								valueCoding: {
									system: 'urn:oid:2.16.840.1.113883.6.238',
									code: '2186-5',
									display: 'Non Hispanic or Latino',
									userSelected: false,
								},
							},
							{
								url: 'text',
								valueString: 'Non-Hispanic',
							},
						],
					},
				],
				identifier: [
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'MR',
									display: 'Medical record number',
									userSelected: false,
								},
							],
							text: 'Community Medical Record Number',
						},
						system: 'urn:oid:2.16.840.1.113883.3.1662.100',
						value: '3770486',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString: '003770486',
								},
							],
						},
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'MR',
									display: 'Medical record number',
									userSelected: false,
								},
							],
							text: 'MRN',
						},
						value: '5002167',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString: 'MPP-000005002167',
								},
							],
						},
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'U',
									display: 'Unspecified identifier',
									userSelected: false,
								},
							],
							text: 'Messaging',
						},
						value: 'C2047CA72D7E4CD39FF624168E837B0C',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString: 'C2047CA72D7E4CD39FF624168E837B0C',
								},
							],
						},
						period: {
							start: '2019-04-10T18:43:08.000Z',
						},
					},
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'AN',
									display: 'Account number',
									userSelected: false,
								},
							],
							text: 'Federated Person Principal',
						},
						system: 'urn:oid:2.16.840.1.113883.3.13.6',
						value:
							'URN:CERNER:IDENTITY-FEDERATION:REALM:1D09DFF8-83BC-4001-92AE-C4B3AC10CA06-CH:PRINCIPAL:CU62R8SD5AP2SB9Z',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString:
										'URN:CERNER:IDENTITY-FEDERATION:REALM:1D09DFF8-83BC-4001-92AE-C4B3AC10CA06-CH:PRINCIPAL:CU62R8SD5AP2SB9Z',
								},
							],
						},
						period: {
							start: '2019-04-10T18:42:59.000Z',
						},
					},
					{
						use: 'usual',
						type: {
							coding: [
								{
									system: 'http://hl7.org/fhir/v2/0203',
									code: 'AN',
									display: 'Account number',
									userSelected: false,
								},
							],
							text: 'Federated Person Principal',
						},
						system: 'urn:oid:2.16.840.1.113883.3.13.6',
						value:
							'URN:CERNER:IDENTITY-FEDERATION:REALM:1D09DFF8-83BC-4001-92AE-C4B3AC10CA06-CH:PRINCIPAL:CY5JM4HJ9MG6EA82',
						_value: {
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
									valueString:
										'URN:CERNER:IDENTITY-FEDERATION:REALM:1D09DFF8-83BC-4001-92AE-C4B3AC10CA06-CH:PRINCIPAL:CY5JM4HJ9MG6EA82',
								},
							],
						},
						period: {
							start: '2019-01-30T19:38:05.000Z',
						},
					},
				],
				active: true,
				name: [
					{
						use: 'official',
						text: 'ZZZTESTONC, HEART',
						family: ['ZZZTESTONC'],
						given: ['HEART'],
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
				],
				telecom: [
					{
						system: 'phone',
						value: '(443)777-7000',
						use: 'work',
						period: {
							start: '2019-01-30T16:06:18.000Z',
						},
					},
					{
						system: 'phone',
						value: '(410)933-9000',
						use: 'home',
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
					{
						system: 'email',
						value: 'LUCY.C.STEIN@MEDSTAR.NET',
						use: 'home',
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
				],
				gender: 'male',
				birthDate: '1954-01-05',
				address: [
					{
						use: 'home',
						text: '4949 ADDRESS LINE ONE\nNOTTINGHAM, MD 21236\nUSA',
						line: ['4949 ADDRESS LINE ONE'],
						city: 'NOTTINGHAM',
						state: 'MD',
						postalCode: '21236',
						country: 'USA',
						period: {
							start: '2019-01-30T15:31:38.000Z',
						},
					},
				],
				maritalStatus: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v3/MaritalStatus',
							code: 'M',
							display: 'Married',
							userSelected: false,
						},
					],
					text: 'Married',
				},
				communication: [
					{
						language: {
							coding: [
								{
									system: 'urn:ietf:bcp:47',
									code: 'en',
									display: 'English',
									userSelected: false,
								},
							],
							text: 'English',
						},
						preferred: true,
					},
				],
			};
			const mockRiskService = new RiskService();
			const results = mockRiskService.parsePatient({
				fullUrl: 'https://example.com',
				resource: patient,
			});
			expect(results.race).toEqual('white');
		});

		test('Patient should have their race correctly calculated', () => {
			const mockRiskService = new RiskService();
			const results = mockRiskService.unpackRaceFromPatient(usCorePatient);
			expect(results).toEqual('africanamerican');
		});
	});

	describe('Patient should not be a Smoker if they were a Smoker in the past -- Verbatim', () => {
		test('Patient should not be a smoker by their Observations', () => {
			const { observations } = pastSmoker;
			const mockRiskService = new RiskService();
			const observationInfo = mockRiskService.parseObservations(observations);
			expect(observationInfo.smoker.smokingStatus).toEqual('not');
		});

		test('Patient should be a smoker by their Conditions', () => {
			const { conditions } = pastSmoker;
			const mockRiskService = new RiskService();
			const conditionInfo = mockRiskService.parseConditions(conditions);
			expect(conditionInfo.smoker.smokingStatus).toEqual('current');
		});
	});

	describe('Patient should not be a smoker', () => {
		test('Patient should not be a smoker from Former smoker and SNOMED code 8517006', () => {
			const mockRiskService = new RiskService();
			const observationEntries = [
				observationFixture({
					code: {
						coding: [
							{
								system: 'http://e-imo.com/products/problem-it',
								code: '603273',
								display: 'Former smoker',
								userSelected: false,
							},
							{
								system: 'http://snomed.info/sct',
								code: '8517006',
								display: 'Ex-smoker (finding)',
								userSelected: false,
							},
						],
						text: 'Former smoker',
					},
				}),
			];
			const observationInfo = mockRiskService.parseObservations(observationEntries);
			expect(observationInfo.smoker.smokingStatus).toEqual('not');
		});
	});
});
