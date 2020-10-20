module.exports = {
	observations: [
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201511-q949874943',
			resource: {
				resourceType: 'Observation',
				id: '100201511-q949874943',
				meta: {
					versionId: '100201511',
					lastUpdated: '2018-08-02T14:45:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:45 P.M. UTC</p><p><b>Status</b>: Entered in Error</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHx Type of Diet</p><p><b>Response</b>: Regular diet</p></div>',
				},
				status: 'entered-in-error',
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
							code: '230125005',
							display: 'Diet followed (observable entity)',
						},
					],
					text: 'SHx Type of Diet',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:45:48.000Z',
				valueCodeableConcept: {
					text: 'Regular diet',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/1262-324645811',
			resource: {
				resourceType: 'Observation',
				id: '1262-324645811',
				meta: {
					versionId: '324645811',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Exercise</p></div>',
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
							code: '256235009',
							display: 'Exercise (qualifier value)',
						},
					],
					text: 'Exercise',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
							reference: 'Observation/324645811-q102251679',
						},
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/324645811-q102251679',
			resource: {
				resourceType: 'Observation',
				id: '324645811-q102251679',
				meta: {
					versionId: '324645811',
					lastUpdated: '2018-08-02T14:45:24.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:45 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Exercise frequency per week</p><p><b>Response</b>: None</p></div>',
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
							code: '228449008',
							display: 'Frequency of exercise (observable entity)',
						},
					],
					text: 'SHX Exercise frequency per week',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:45:24.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '260413007',
							display: 'None (qualifier value)',
						},
					],
					text: 'None',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/1263-100200969',
			resource: {
				resourceType: 'Observation',
				id: '1263-100200969',
				meta: {
					versionId: '324642329',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Alcohol</p></div>',
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
							code: '363905002',
							display: 'Details of alcohol drinking behavior (observable entity)',
						},
					],
					text: 'Alcohol',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
							reference: 'Observation/100200969-q102251649',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100200969-q102251607',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100200969-q102281292',
						},
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200969-q102251649',
			resource: {
				resourceType: 'Observation',
				id: '100200969-q102251649',
				meta: {
					versionId: '324642329',
					lastUpdated: '2018-08-02T14:44:42.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:44 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Alcohol use</p><p><b>Response</b>: Current</p></div>',
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
							code: '363905002',
							display: 'Details of alcohol drinking behavior (observable entity)',
						},
					],
					text: 'SHX Alcohol use',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:44:42.000Z',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200969-q102251607',
			resource: {
				resourceType: 'Observation',
				id: '100200969-q102251607',
				meta: {
					versionId: '324642329',
					lastUpdated: '2018-08-02T14:44:42.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:44 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Alcohol Type</p><p><b>Response</b>: social</p></div>',
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
							code: '363905002',
							display: 'Details of alcohol drinking behavior (observable entity)',
						},
					],
					text: 'SHX Alcohol Type',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:44:42.000Z',
				valueCodeableConcept: {
					text: 'social',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200969-q102281292',
			resource: {
				resourceType: 'Observation',
				id: '100200969-q102281292',
				meta: {
					versionId: '324642329',
					lastUpdated: '2018-08-02T14:44:42.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:44 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Alcohol Frequency of intake</p><p><b>Response</b>: 1-2 times per year</p></div>',
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
							code: '68518-0',
						},
					],
					text: 'SHX Alcohol Frequency of intake',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:44:42.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '1381000175109',
							display: 'One to two times per year (qualifier value)',
						},
					],
					text: '1-2 times per year',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/1264-100201071',
			resource: {
				resourceType: 'Observation',
				id: '1264-100201071',
				meta: {
					versionId: '324646035',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Employment/School</p></div>',
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
							code: '224362002',
							display: 'Employment status (observable entity)',
						},
					],
					text: 'Employment/School',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
							reference: 'Observation/100201071-q102250976',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100201071-q102251567',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100201071-q102251896',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100201071-q102251614-0',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100201071-q102251614-1',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100201071-q102251614-2',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100201071-q102251614-3',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100201071-q102251614-4',
						},
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201071-q102250976',
			resource: {
				resourceType: 'Observation',
				id: '100201071-q102250976',
				meta: {
					versionId: '324646035',
					lastUpdated: '2018-08-02T14:46:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:46 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Employment/School status</p><p><b>Response</b>: Employed</p></div>',
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
							code: '224362002',
							display: 'Employment status (observable entity)',
						},
					],
					text: 'SHX Employment/School status',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:46:13.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '224363007',
							display: 'Employed (finding)',
						},
					],
					text: 'Employed',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201071-q102251567',
			resource: {
				resourceType: 'Observation',
				id: '100201071-q102251567',
				meta: {
					versionId: '324646035',
					lastUpdated: '2018-08-02T14:46:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:46 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Work/School description</p><p><b>Response</b>: night shift.</p></div>',
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
					text: 'SHX Work/School description',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:46:13.000Z',
				valueString: 'night shift.',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201071-q102251896',
			resource: {
				resourceType: 'Observation',
				id: '100201071-q102251896',
				meta: {
					versionId: '324646035',
					lastUpdated: '2018-08-02T14:46:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:46 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Highest education level</p><p><b>Response</b>: High School/GED</p></div>',
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
							code: '105421008',
							display: 'Educational achievement (observable entity)',
						},
					],
					text: 'SHX Highest education level',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:46:13.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://loinc.org',
							code: 'LA12457-0',
						},
					],
					text: 'High School/GED',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201071-q102251614-0',
			resource: {
				resourceType: 'Observation',
				id: '100201071-q102251614-0',
				meta: {
					versionId: '324646035',
					lastUpdated: '2018-08-02T14:46:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:46 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Work hazards</p><p><b>Response</b>: Hazardous materials</p></div>',
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
							code: '718858001',
							display: 'Assessment of risk in work environment (procedure)',
						},
					],
					text: 'SHX Work hazards',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:46:13.000Z',
				valueCodeableConcept: {
					text: 'Hazardous materials',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201071-q102251614-1',
			resource: {
				resourceType: 'Observation',
				id: '100201071-q102251614-1',
				meta: {
					versionId: '324646035',
					lastUpdated: '2018-08-02T14:46:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:46 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Work hazards</p><p><b>Response</b>: Heavy lifting/twisting</p></div>',
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
							code: '718858001',
							display: 'Assessment of risk in work environment (procedure)',
						},
					],
					text: 'SHX Work hazards',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:46:13.000Z',
				valueCodeableConcept: {
					text: 'Heavy lifting/twisting',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201071-q102251614-2',
			resource: {
				resourceType: 'Observation',
				id: '100201071-q102251614-2',
				meta: {
					versionId: '324646035',
					lastUpdated: '2018-08-02T14:46:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:46 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Work hazards</p><p><b>Response</b>: Medical/Clinical work</p></div>',
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
							code: '718858001',
							display: 'Assessment of risk in work environment (procedure)',
						},
					],
					text: 'SHX Work hazards',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:46:13.000Z',
				valueCodeableConcept: {
					text: 'Medical/Clinical work',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201071-q102251614-3',
			resource: {
				resourceType: 'Observation',
				id: '100201071-q102251614-3',
				meta: {
					versionId: '324646035',
					lastUpdated: '2018-08-02T14:46:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:46 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Work hazards</p><p><b>Response</b>: Repetitive motion</p></div>',
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
							code: '718858001',
							display: 'Assessment of risk in work environment (procedure)',
						},
					],
					text: 'SHX Work hazards',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:46:13.000Z',
				valueCodeableConcept: {
					text: 'Repetitive motion',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100201071-q102251614-4',
			resource: {
				resourceType: 'Observation',
				id: '100201071-q102251614-4',
				meta: {
					versionId: '324646035',
					lastUpdated: '2018-08-02T14:46:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:46 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Work hazards</p><p><b>Response</b>: Shift/Night work</p></div>',
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
							code: '718858001',
							display: 'Assessment of risk in work environment (procedure)',
						},
					],
					text: 'SHX Work hazards',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:46:13.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '276066008',
							display: 'Night shift worker (finding)',
						},
					],
					text: 'Shift/Night work',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/1265-100200545',
			resource: {
				resourceType: 'Observation',
				id: '1265-100200545',
				meta: {
					versionId: '100200545',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Entered in Error</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Substance Abuse</p></div>',
				},
				status: 'entered-in-error',
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
							code: '363908000',
							display: 'Details of drug misuse behavior (observable entity)',
						},
					],
					text: 'Substance Abuse',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
							reference: 'Observation/100200545-q102251019',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100200545-q102251555',
						},
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200545-q102251019',
			resource: {
				resourceType: 'Observation',
				id: '100200545-q102251019',
				meta: {
					versionId: '100200545',
					lastUpdated: '2018-08-02T14:45:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:45 P.M. UTC</p><p><b>Status</b>: Entered in Error</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Substance abuse use</p><p><b>Response</b>: Denies</p></div>',
				},
				status: 'entered-in-error',
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
							code: '363908000',
							display: 'Details of drug misuse behavior (observable entity)',
						},
					],
					text: 'SHX Substance abuse use',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:45:06.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '441889009',
							display: 'Denied (qualifier value)',
						},
					],
					text: 'Denies',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200545-q102251555',
			resource: {
				resourceType: 'Observation',
				id: '100200545-q102251555',
				meta: {
					versionId: '100200545',
					lastUpdated: '2018-08-02T14:45:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:45 P.M. UTC</p><p><b>Status</b>: Entered in Error</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Substance abuse previous treatment</p><p><b>Response</b>: None</p></div>',
				},
				status: 'entered-in-error',
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
							code: '439374006',
							display: 'Drug abuse cessation behavior (observable entity)',
						},
					],
					text: 'SHX Substance abuse previous treatment',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:45:06.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '260413007',
							display: 'None (qualifier value)',
						},
					],
					text: 'None',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/1267-285801601',
			resource: {
				resourceType: 'Observation',
				id: '1267-285801601',
				meta: {
					versionId: '285801601',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Entered in Error</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Sexual</p></div>',
				},
				status: 'entered-in-error',
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
							code: '363901006',
							display: 'Detail of sexuality and sexual activity (observable entity)',
						},
					],
					text: 'Sexual',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
							reference: 'Observation/285801601-q102251905',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285801601-q102251720',
						},
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285801601-q102251905',
			resource: {
				resourceType: 'Observation',
				id: '285801601-q102251905',
				meta: {
					versionId: '285801601',
					lastUpdated: '2018-08-02T14:45:34.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:45 P.M. UTC</p><p><b>Status</b>: Entered in Error</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Sexually active</p><p><b>Response</b>: No</p></div>',
				},
				status: 'entered-in-error',
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
							code: '228453005',
							display: 'Sexually active (finding)',
						},
					],
					text: 'SHX Sexually active',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:45:34.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285801601-q102251720',
			resource: {
				resourceType: 'Observation',
				id: '285801601-q102251720',
				meta: {
					versionId: '285801601',
					lastUpdated: '2018-08-02T14:45:34.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Aug  2, 2018  2:45 P.M. UTC</p><p><b>Status</b>: Entered in Error</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX History of sexual abuse</p><p><b>Response</b>: No</p></div>',
				},
				status: 'entered-in-error',
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
							code: '313216003',
							display: 'History of sexual abuse (context-dependent category)',
						},
					],
					text: 'SHX History of sexual abuse',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-08-02T14:45:34.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/1268-100200487',
			resource: {
				resourceType: 'Observation',
				id: '1268-100200487',
				meta: {
					versionId: '529672041',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Tobacco</p></div>',
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
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
							reference: 'Observation/100200487-q102250923',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100200487-q102251039',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100200487-q102251016',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100200487-q102251028-0',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100200487-q102251028-1',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/100200487-q949578175',
						},
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200487-q102250923',
			resource: {
				resourceType: 'Observation',
				id: '100200487-q102250923',
				meta: {
					versionId: '529672041',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco use</p><p><b>Response</b>: Past</p></div>',
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
					],
					text: 'SHX Tobacco use',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200487-q102251039',
			resource: {
				resourceType: 'Observation',
				id: '100200487-q102251039',
				meta: {
					versionId: '529672041',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco type</p><p><b>Response</b>: Cigarettes</p></div>',
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
							code: '81228-9',
						},
					],
					text: 'SHX Tobacco type',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200487-q102251016',
			resource: {
				resourceType: 'Observation',
				id: '100200487-q102251016',
				meta: {
					versionId: '529672041',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Cigarette packs per day</p><p><b>Response</b>: 0.30</p></div>',
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
							code: '8663-7',
						},
					],
					text: 'SHX Cigarette packs per day',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
				valueString: '0.30',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200487-q102251028-0',
			resource: {
				resourceType: 'Observation',
				id: '100200487-q102251028-0',
				meta: {
					versionId: '529672041',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco previous treatment</p><p><b>Response</b>: None</p></div>',
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
							code: '1431000175100',
							display: 'Tobacco cessation treatment history (observable entity)',
						},
					],
					text: 'SHX Tobacco previous treatment',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '260413007',
							display: 'None (qualifier value)',
						},
					],
					text: 'None',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200487-q102251028-1',
			resource: {
				resourceType: 'Observation',
				id: '100200487-q102251028-1',
				meta: {
					versionId: '529672041',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco previous treatment</p><p><b>Response</b>: Nicotine replacement</p></div>',
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
							code: '1431000175100',
							display: 'Tobacco cessation treatment history (observable entity)',
						},
					],
					text: 'SHX Tobacco previous treatment',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '313396002',
							display: 'Nicotine replacement therapy (context-dependent category)',
						},
					],
					text: 'Nicotine replacement',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/100200487-q949578175',
			resource: {
				resourceType: 'Observation',
				id: '100200487-q949578175',
				meta: {
					versionId: '529672041',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Tobacco Cessation Counseling</p><p><b>Response</b>: Patient does not smoke</p></div>',
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
					text: 'SHX Tobacco Cessation Counseling',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '8392000',
							display: 'Non-smoker (finding)',
						},
					],
					text: 'Patient does not smoke',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/1269-285796239',
			resource: {
				resourceType: 'Observation',
				id: '1269-285796239',
				meta: {
					versionId: '285796239',
					lastUpdated: '2020-02-22T00:23:59.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Feb 22, 2020 12:23 A.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Home/Environment</p></div>',
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
							code: '4683004',
							display: 'Living condition (observable entity)',
						},
					],
					text: 'Home/Environment',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2020-02-22T00:23:59.000Z',
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
							reference: 'Observation/285796239-q1347014113',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q1347131315',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102250925',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102250949',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q949759109',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102250956',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102250979',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102251573',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102251585',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102250972',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102251005',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102250952',
						},
					},
					{
						type: 'has-member',
						target: {
							reference: 'Observation/285796239-q102250988',
						},
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q1347014113',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q1347014113',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Born Outside the US</p><p><b>Response</b>: No</p></div>',
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
					text: 'SHX Born Outside the US',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q1347131315',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q1347131315',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Marital Status</p><p><b>Response</b>: Single</p></div>',
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
							code: '125680007',
							display: 'Marital status (observable entity)',
						},
					],
					text: 'SHX Marital Status',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '125681006',
							display: 'Single person (finding)',
						},
					],
					text: 'Single',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102250925',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102250925',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Lives with</p><p><b>Response</b>: Alone</p></div>',
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
							code: '224130005',
							display: 'Household composition (observable entity)',
						},
					],
					text: 'SHX Lives with',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '105529008',
							display: 'Lives alone (finding)',
						},
					],
					text: 'Alone',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102250949',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102250949',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Living situation</p><p><b>Response</b>: Home/Independent</p></div>',
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
							code: '20733006',
							display: 'Living place (observable entity)',
						},
					],
					text: 'SHX Living situation',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '371153006',
							display: 'Independently able (qualifier value)',
						},
					],
					text: 'Home/Independent',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q949759109',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q949759109',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHx Home/Environment Assistive Devices</p><p><b>Response</b>: None</p></div>',
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
					text: 'SHx Home/Environment Assistive Devices',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '260413007',
							display: 'None (qualifier value)',
						},
					],
					text: 'None',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102250956',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102250956',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Alcohol abuse in household</p><p><b>Response</b>: No</p></div>',
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
							code: '713071004',
							display: 'Alcohol misuser in household (finding)',
						},
					],
					text: 'SHX Alcohol abuse in household',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102250979',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102250979',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Substance abuse in household</p><p><b>Response</b>: No</p></div>',
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
							code: '713070003',
							display: 'Drug misuser in household (finding)',
						},
					],
					text: 'SHX Substance abuse in household',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102251573',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102251573',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Smoker in household</p><p><b>Response</b>: No</p></div>',
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
							code: '228524006',
							display: 'Exposed to tobacco smoke at home (finding)',
						},
					],
					text: 'SHX Smoker in household',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102251585',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102251585',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Injuries/Abuse in household</p><p><b>Response</b>: No</p></div>',
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
							code: '386702006',
							display: 'Victim of abuse (finding)',
						},
					],
					text: 'SHX Injuries/Abuse in household',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102250972',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102250972',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Family/Friends available to help</p><p><b>Response</b>: Yes</p></div>',
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
							code: '405076007',
							display: 'Social support status (observable entity)',
						},
					],
					text: 'SHX Family/Friends available to help',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373066001',
							display: 'Yes (qualifier value)',
						},
					],
					text: 'Yes',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102251005',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102251005',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Concerns for family members at home</p><p><b>Response</b>: Yes</p></div>',
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
					text: 'SHX Concerns for family members at home',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373066001',
							display: 'Yes (qualifier value)',
						},
					],
					text: 'Yes',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102250952',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102250952',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Major illness in household</p><p><b>Response</b>: No</p></div>',
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
							code: '266966009',
							display: 'Family illness (context-dependent category)',
						},
					],
					text: 'SHX Major illness in household',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/285796239-q102250988',
			resource: {
				resourceType: 'Observation',
				id: '285796239-q102250988',
				meta: {
					versionId: '285796239',
					lastUpdated: '2018-04-11T20:25:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Date</b>: Apr 11, 2018  8:25 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Question</b>: SHX Financial concerns</p><p><b>Response</b>: No</p></div>',
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
							code: '160932005',
							display: 'Financial problem (finding)',
						},
					],
					text: 'SHX Financial concerns',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				issued: '2018-04-11T20:25:14.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
					text: 'No',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16839636448',
			resource: {
				resourceType: 'Observation',
				id: 'M16839636448',
				meta: {
					versionId: '1-16839636447',
					lastUpdated: '2020-02-22T00:17:32.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: PDMP Reviewed</p><p><b>Result</b>: 5871968.00</p><p><b>Date</b>: Feb 22, 2020 12:17 A.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					text: 'PDMP Reviewed',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-22T00:17:32.000Z',
				issued: '2020-02-22T00:17:32.000Z',
				valueQuantity: {
					value: 5871968,
				},
				comments: 'Reviewed by Sean Shieh, MD',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821781498',
			resource: {
				resourceType: 'Observation',
				id: 'M16821781498',
				meta: {
					versionId: '3-16857384498',
					lastUpdated: '2020-02-24T21:49:17.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Hgb A1C Glycosylated</p><p><b>Result</b>: 6.5 %</p><p><b>Risk Level</b>: HI</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 4.2-5.6 %</p></div>',
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
							code: '4548-4',
						},
					],
					text: 'Hgb A1C Glycosylated',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:17:35.000Z',
				valueQuantity: {
					value: 6.5,
					unit: '%',
					system: 'http://unitsofmeasure.org',
					code: '%',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'H',
							display: 'High',
						},
					],
					text: 'HI',
				},
				comments:
					'{\\rtf1\\ansi\\ansicpg1252\\uc0\\deff0{\\fonttbl\r\n{\\f0\\froman\\fcharset0\\fprq2 Times New Roman;}\r\n{\\f1\\froman\\fcharset2\\fprq2 Symbol;}}\r\n{\\colortbl;\\red51\\green51\\blue51;\\red255\\green255\\blue255;\\red0\\green0\\blue0;}\r\n{\\*\\generator TX_RTF32 10.1.323.501;}\r\n\\deftab1134\\pard\\sb100\\sa100\\tx720\\tx1440\\tx2160\\tx2880\\tx3600\\tx4320\\tx5040\\tx5760\\tx6480\\tx7200\\tx7920\\tx8640\\tx9360\\tx10080\\plain\\f0\\fs20\\cf1 Increased risk for diabetes: 5.7 to 6.4%\\line Diagnostic of diabetes: >6.4%\\line Treatment goal for patients diagnosed with diabetes : <7.0%. (Higher or lower treatment goals may be appropriate based \\plain\\f0\\fs20 on patient factors such as age, diabetes complications, and cardiovascular disease.)\\plain\\f0\\fs20\\i\\par\\pard\\par }',
				referenceRange: [
					{
						low: {
							value: 4.2,
							unit: '%',
							system: 'http://unitsofmeasure.org',
							code: '%',
						},
						high: {
							value: 5.6,
							unit: '%',
							system: 'http://unitsofmeasure.org',
							code: '%',
						},
						text: '4.2-5.6 %',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16825486464',
			resource: {
				resourceType: 'Observation',
				id: 'M16825486464',
				meta: {
					versionId: '3-16857384511',
					lastUpdated: '2020-02-24T21:49:22.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Vit D25 Hydroxy Lvl</p><p><b>Result</b>: 39.5 ng/mL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 30.0-100.0 ng/mL</p></div>',
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
					text: 'Vit D25 Hydroxy Lvl',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-20T12:49:28.000Z',
				valueQuantity: {
					value: 39.5,
					unit: 'ng/mL',
					system: 'http://unitsofmeasure.org',
					code: 'ng/mL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				comments:
					'{\\rtf1\\ansi\\ansicpg1252\\uc0\\deff0{\\fonttbl\r\n{\\f0\\fswiss\\fcharset0\\fprq2 Arial;}\r\n{\\f1\\froman\\fcharset2\\fprq2 Symbol;}}\r\n{\\colortbl;\\red0\\green0\\blue0;\\red255\\green255\\blue255;}\r\n{\\*\\generator TX_RTF32 10.1.323.501;}\r\n\\deftab1134\\pard\\tx720\\tx1440\\tx2160\\tx2880\\tx3600\\tx4320\\tx5040\\tx5760\\tx6480\\tx7200\\tx7920\\tx8640\\tx9360\\tx10080\\plain\\f0\\fs20 <10 ng/mL:  Deficiency\\par 10 - 30 ng/mL:  Insufficiency\\par 30 - 100 ng/mL:  Sufficiency\\par >100 ng/mL:  Toxicity Possible\\par\\pard\\par }',
				referenceRange: [
					{
						low: {
							value: 30,
							unit: 'ng/mL',
							system: 'http://unitsofmeasure.org',
							code: 'ng/mL',
						},
						high: {
							value: 100,
							unit: 'ng/mL',
							system: 'http://unitsofmeasure.org',
							code: 'ng/mL',
						},
						text: '30.0-100.0 ng/mL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821777990',
			resource: {
				resourceType: 'Observation',
				id: 'M16821777990',
				meta: {
					versionId: '3-16857384533',
					lastUpdated: '2020-02-24T21:49:25.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: GFR Non African American</p><p><b>Result</b>: &gt;60 mL/min/1.73 m2</p><p><b>Risk Level</b>: NA</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p></div>',
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
							code: '48642-3',
						},
					],
					text: 'GFR Non African American',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:33.000Z',
				valueQuantity: {
					value: 60,
					comparator: '>',
					unit: 'mL/min/1.73 m2',
					system: 'http://unitsofmeasure.org',
					code: 'mL/min/(173.10*-2.m2)',
				},
				interpretation: {
					text: 'NA',
				},
				comments:
					'{\\rtf1\\ansi\\ansicpg1252\\uc0\\deff0{\\fonttbl\r\n{\\f0\\froman\\fcharset0\\fprq2 Times New Roman;}\r\n{\\f1\\froman\\fcharset2\\fprq2 Symbol;}}\r\n{\\colortbl;\\red0\\green0\\blue0;\\red255\\green255\\blue255;\\red255\\green255\\blue255;}\r\n{\\*\\generator TX_RTF32 10.1.323.501;}\r\n\\deftab1134\\pard\\tx720\\tx1440\\tx2160\\tx2880\\tx3600\\tx4320\\tx5040\\tx5760\\tx6480\\tx7200\\tx7920\\tx8640\\tx9360\\tx10080\\plain\\f0\\fs20\\cb2\\chshdng0\\chcfpat0\\chcbpat2 Below 60 mL/min/1.73m2 - the prevalance of complications of CKD increases.  GFR declines with age.\\par\\par\\plain\\f0\\fs20 Calculation in use for the GFR result is the CKD-EPI equation from the National Kidney Foundation.\\par\\pard\\par }',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821752870',
			resource: {
				resourceType: 'Observation',
				id: 'M16821752870',
				meta: {
					versionId: '3-16857384521',
					lastUpdated: '2020-02-24T21:49:23.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: GFR African American</p><p><b>Result</b>: &gt;60 mL/min/1.73 m2</p><p><b>Risk Level</b>: NA</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p></div>',
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
							code: '48643-1',
						},
					],
					text: 'GFR African American',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:32.000Z',
				valueQuantity: {
					value: 60,
					comparator: '>',
					unit: 'mL/min/1.73 m2',
					system: 'http://unitsofmeasure.org',
					code: 'mL/min/(173.10*-2.m2)',
				},
				interpretation: {
					text: 'NA',
				},
				comments:
					'{\\rtf1\\ansi\\ansicpg1252\\uc0\\deff0{\\fonttbl\r\n{\\f0\\froman\\fcharset0\\fprq2 Times New Roman;}\r\n{\\f1\\froman\\fcharset2\\fprq2 Symbol;}}\r\n{\\colortbl;\\red0\\green0\\blue0;\\red255\\green255\\blue255;\\red255\\green255\\blue255;}\r\n{\\*\\generator TX_RTF32 10.1.323.501;}\r\n\\deftab1134\\pard\\tx720\\tx1440\\tx2160\\tx2880\\tx3600\\tx4320\\tx5040\\tx5760\\tx6480\\tx7200\\tx7920\\tx8640\\tx9360\\tx10080\\plain\\f0\\fs20\\cb2\\chshdng0\\chcfpat0\\chcbpat2 Below 60 mL/min/1.73m2 - the prevalance of complications of CKD increases.  GFR declines with age.\\par\\par\\plain\\f0\\fs20 Calculation in use for the GFR result is the CKD-EPI equation from the National Kidney Foundation.\\par\\pard\\par\\pard\\par }',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765888',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765888',
				meta: {
					versionId: '3-16857384482',
					lastUpdated: '2020-02-24T21:49:08.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Potassium Lvl</p><p><b>Result</b>: 4.6 mmol/L</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 3.5-5.1 mmol/L</p></div>',
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
							code: '2823-3',
						},
					],
					text: 'Potassium Lvl',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 4.6,
					unit: 'mmol/L',
					system: 'http://unitsofmeasure.org',
					code: 'mmol/L',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 3.5,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						high: {
							value: 5.1,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						text: '3.5-5.1 mmol/L',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765892',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765892',
				meta: {
					versionId: '3-16857384493',
					lastUpdated: '2020-02-24T21:49:15.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Chloride</p><p><b>Result</b>: 106 mmol/L</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 98-107 mmol/L</p></div>',
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
					text: 'Chloride',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 106,
					unit: 'mmol/L',
					system: 'http://unitsofmeasure.org',
					code: 'mmol/L',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 98,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						high: {
							value: 107,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						text: '98-107 mmol/L',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765896',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765896',
				meta: {
					versionId: '3-16857384502',
					lastUpdated: '2020-02-24T21:49:19.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Calcium Lvl</p><p><b>Result</b>: 9.0 mg/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 8.5-10.1 mg/dL</p></div>',
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
							code: '17861-6',
						},
					],
					text: 'Calcium Lvl',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 9,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 8.5,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 10.1,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '8.5-10.1 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765882',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765882',
				meta: {
					versionId: '3-16857384491',
					lastUpdated: '2020-02-24T21:49:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: BUN</p><p><b>Result</b>: 16 mg/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 7-17 mg/dL</p></div>',
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
							code: '3094-0',
						},
					],
					text: 'BUN',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 16,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 7,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 17,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '7-17 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821777874',
			resource: {
				resourceType: 'Observation',
				id: 'M16821777874',
				meta: {
					versionId: '3-16857384506',
					lastUpdated: '2020-02-24T21:49:21.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Triglyceride</p><p><b>Result</b>: 137 mg/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 0-199 mg/dL</p></div>',
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
					text: 'Triglyceride',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 137,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 0,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 199,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '0-199 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765915',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765915',
				meta: {
					versionId: '3-16857384555',
					lastUpdated: '2020-02-24T21:49:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Total Protein</p><p><b>Result</b>: 7.1 gm/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 6.3-8.2 gm/dL</p></div>',
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
							code: '2885-2',
						},
					],
					text: 'Total Protein',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 7.1,
					unit: 'gm/dL',
					system: 'http://unitsofmeasure.org',
					code: 'g/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 6.3,
							unit: 'gm/dL',
							system: 'http://unitsofmeasure.org',
							code: 'g/dL',
						},
						high: {
							value: 8.2,
							unit: 'gm/dL',
							system: 'http://unitsofmeasure.org',
							code: 'g/dL',
						},
						text: '6.3-8.2 gm/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765886',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765886',
				meta: {
					versionId: '3-16857384501',
					lastUpdated: '2020-02-24T21:49:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Sodium Lvl</p><p><b>Result</b>: 139 mmol/L</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 137-145 mmol/L</p></div>',
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
							code: '2951-2',
						},
					],
					text: 'Sodium Lvl',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 139,
					unit: 'mmol/L',
					system: 'http://unitsofmeasure.org',
					code: 'mmol/L',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 137,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						high: {
							value: 145,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						text: '137-145 mmol/L',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821777876',
			resource: {
				resourceType: 'Observation',
				id: 'M16821777876',
				meta: {
					versionId: '3-16857384486',
					lastUpdated: '2020-02-24T21:49:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: HDL</p><p><b>Result</b>: 44 mg/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 40-59 mg/dL</p></div>',
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
							code: '2085-9',
						},
					],
					text: 'HDL',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 44,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 40,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 59,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '40-59 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765880',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765880',
				meta: {
					versionId: '3-16857384528',
					lastUpdated: '2020-02-24T21:49:24.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Glucose Lvl Random</p><p><b>Result</b>: 82 mg/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 65-140 mg/dL</p></div>',
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
							code: '2345-7',
						},
					],
					text: 'Glucose Lvl Random',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 82,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				comments:
					'{\\rtf1\\ansi\\ansicpg1252\\uc1\\deff0\\adeff0\\deflang0\\deflangfe0\\adeflang0{\\fonttbl\r\n{\\f0\\fswiss\\fcharset0\\fprq2{\\*\\panose 020B0604020202020204}Arial;}\r\n{\\f1\\froman\\fcharset2\\fprq2{\\*\\panose 05050102010706020507}Symbol;}}\r\n{\\colortbl;\\red0\\green0\\blue0;}\r\n{\\stylesheet{\\s0\\ltrpar\\itap0\\nowidctlpar\\ql\\li0\\ri0\\lin0\\rin0\\cbpat0\\rtlch\\af0\\afs24\\ltrch\\f0\\fs24 [Normal];}{\\*\\cs10\\additive Default Paragraph Font;}}\r\n{\\info\r\n{\\*\\txInfo{\\txVer 25.0.721.500}}}\r\n\\paperw12240\\paperh15840\\margl1440\\margt1440\\margr1440\\margb1440\\deftab1134\\widowctrl\\lytexcttp\\formshade\\sectd\r\n\\headery720\\footery720\\pgwsxn11590\\pghsxn4000\\marglsxn1440\\margtsxn1440\\margrsxn1440\\margbsxn1440\\pgbrdropt0\\pard\\ltrpar\\itap0\\nowidctlpar\\ql\\li0\\ri0\\lin0\\rin0\\tx720\\tx1440\\tx2160\\tx2880\\tx3600\\tx4320\\tx5040\\tx5760\\tx6480\\tx7200\\tx7920\\tx8640\\tx9360\\tx10080\\plain\\rtlch\\af0\\afs20\\alang0\\ltrch\\f0\\fs20\\lang0\\langnp0\\langfe0\\langfenp0 Random Glucose Level cannot be used for diagnosis of diabetes.  Glucose target in the hospitalized patient is 80-110 before meals and no more than 180 at other times.\\par\\pard\\ltrpar\\itap0\\nowidctlpar\\ql\\li0\\ri0\\lin0\\rin0\\par }',
				referenceRange: [
					{
						low: {
							value: 65,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 140,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '65-140 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765900',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765900',
				meta: {
					versionId: '3-16857384545',
					lastUpdated: '2020-02-24T21:49:27.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: AST</p><p><b>Result</b>: 12 units/L</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 3-34 units/L</p></div>',
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
							code: '1920-8',
						},
					],
					text: 'AST',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 12,
					unit: 'units/L',
					system: 'http://unitsofmeasure.org',
					code: 'U/L',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 3,
							unit: 'units/L',
							system: 'http://unitsofmeasure.org',
							code: 'U/L',
						},
						high: {
							value: 34,
							unit: 'units/L',
							system: 'http://unitsofmeasure.org',
							code: 'U/L',
						},
						text: '3-34 units/L',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765903',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765903',
				meta: {
					versionId: '3-16857384484',
					lastUpdated: '2020-02-24T21:49:10.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: ALT</p><p><b>Result</b>: 26 units/L</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 15-41 units/L</p></div>',
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
							code: '1742-6',
						},
					],
					text: 'ALT',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 26,
					unit: 'units/L',
					system: 'http://unitsofmeasure.org',
					code: 'U/L',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 15,
							unit: 'units/L',
							system: 'http://unitsofmeasure.org',
							code: 'U/L',
						},
						high: {
							value: 41,
							unit: 'units/L',
							system: 'http://unitsofmeasure.org',
							code: 'U/L',
						},
						text: '15-41 units/L',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765909',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765909',
				meta: {
					versionId: '3-16857384470',
					lastUpdated: '2020-02-24T21:49:04.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Alk Phos</p><p><b>Result</b>: 85 units/L</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 45-117 units/L</p></div>',
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
							code: '6768-6',
						},
					],
					text: 'Alk Phos',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 85,
					unit: 'units/L',
					system: 'http://unitsofmeasure.org',
					code: 'U/L',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 45,
							unit: 'units/L',
							system: 'http://unitsofmeasure.org',
							code: 'U/L',
						},
						high: {
							value: 117,
							unit: 'units/L',
							system: 'http://unitsofmeasure.org',
							code: 'U/L',
						},
						text: '45-117 units/L',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765913',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765913',
				meta: {
					versionId: '3-16857384487',
					lastUpdated: '2020-02-24T21:49:12.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Albumin Lvl</p><p><b>Result</b>: 3.6 gm/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 3.5-5.0 gm/dL</p></div>',
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
							code: '1751-7',
						},
					],
					text: 'Albumin Lvl',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 3.6,
					unit: 'gm/dL',
					system: 'http://unitsofmeasure.org',
					code: 'g/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 3.5,
							unit: 'gm/dL',
							system: 'http://unitsofmeasure.org',
							code: 'g/dL',
						},
						high: {
							value: 5,
							unit: 'gm/dL',
							system: 'http://unitsofmeasure.org',
							code: 'g/dL',
						},
						text: '3.5-5.0 gm/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765894',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765894',
				meta: {
					versionId: '3-16857384475',
					lastUpdated: '2020-02-24T21:49:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: CO2</p><p><b>Result</b>: 30 mmol/L</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 21-32 mmol/L</p></div>',
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
							code: '2028-9',
						},
					],
					text: 'CO2',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 30,
					unit: 'mmol/L',
					system: 'http://unitsofmeasure.org',
					code: 'mmol/L',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 21,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						high: {
							value: 32,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						text: '21-32 mmol/L',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821777872',
			resource: {
				resourceType: 'Observation',
				id: 'M16821777872',
				meta: {
					versionId: '3-16857384469',
					lastUpdated: '2020-02-24T21:49:03.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Cholesterol</p><p><b>Result</b>: 210 mg/dL</p><p><b>Risk Level</b>: HI</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 120-200 mg/dL</p></div>',
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
							code: '2093-3',
						},
					],
					text: 'Cholesterol',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 210,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'H',
							display: 'High',
						},
					],
					text: 'HI',
				},
				comments:
					'{\\rtf1\\ansi\\ansicpg1252\\uc0\\deff0{\\fonttbl\r\n{\\f0\\froman\\fcharset0\\fprq2 Times New Roman;}\r\n{\\f1\\froman\\fcharset2\\fprq2 Symbol;}}\r\n{\\colortbl;\\red0\\green0\\blue0;\\red255\\green255\\blue255;}\r\n{\\*\\generator TX_RTF32 10.1.323.501;}\r\n\\deftab1134\\pard\\tx720\\tx1440\\tx2160\\tx2880\\tx3600\\tx4320\\tx5040\\tx5760\\tx6480\\tx7200\\tx7920\\tx8640\\tx9360\\tx10080\\plain\\f0\\fs20 Classification of LDL, Total, and HDL Cholesterol (mg/dL)\\par\\par LDL Cholesterol\\par <100  Optimal \\par 100-129 Near optimal/above optimal\\par 130-159 Borderline high\\par 160-189 High  \\par >= 190  Very high\\par\\par Total Cholesterol\\par <200  Desirable\\par 200-239 Borderline high\\par >= 240  High\\par\\par HDL Cholesterol\\par <40  Low \\par\\pard >= 60  High \\par\\par According to the ATP III guidelines, "if triglycerides are >=200 mg/dL after LDL goal is reached, set secondary goal for non-HDL cholesterol (total - HDL) 30 mg/dL higher than LDL goal".\\par\\pard\\par }',
				referenceRange: [
					{
						low: {
							value: 120,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 200,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '120-200 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765898',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765898',
				meta: {
					versionId: '3-16857384483',
					lastUpdated: '2020-02-24T21:49:09.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Bili Total</p><p><b>Result</b>: 0.2 mg/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 0.2-1.3 mg/dL</p></div>',
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
							code: '1975-2',
						},
					],
					text: 'Bili Total',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 0.2,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 0.2,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 1.3,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '0.2-1.3 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16826777248',
			resource: {
				resourceType: 'Observation',
				id: 'M16826777248',
				meta: {
					versionId: '3-16857384466',
					lastUpdated: '2020-02-24T21:49:02.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: U Creatinine</p><p><b>Result</b>: 264.0 mg/dL</p><p><b>Risk Level</b>: NA</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p></div>',
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
							code: '2161-8',
						},
					],
					text: 'U Creatinine',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-20T14:51:30.000Z',
				valueQuantity: {
					value: 264,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					text: 'NA',
				},
				comments:
					'{\\rtf1\\ansi\\ansicpg1252\\uc0\\deff0{\\fonttbl\r\n{\\f0\\froman\\fcharset0\\fprq2 Times New Roman;}\r\n{\\f1\\froman\\fcharset2\\fprq2 Symbol;}}\r\n{\\colortbl;\\red0\\green0\\blue0;\\red255\\green255\\blue255;}\r\n{\\*\\generator TX_RTF32 10.1.323.501;}\r\n\\deftab1134\\pard\\plain\\f0\\fs20 No established reference range for random urine collections.\\par\\pard\\par }',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821777878',
			resource: {
				resourceType: 'Observation',
				id: 'M16821777878',
				meta: {
					versionId: '3-16857384538',
					lastUpdated: '2020-02-24T21:49:26.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: NonHDL Chol</p><p><b>Result</b>: 166 mg/dL</p><p><b>Risk Level</b>: NA</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p></div>',
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
							code: '43396-1',
						},
					],
					text: 'NonHDL Chol',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 166,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					text: 'NA',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16826777250',
			resource: {
				resourceType: 'Observation',
				id: 'M16826777250',
				meta: {
					versionId: '3-16857384503',
					lastUpdated: '2020-02-24T21:49:20.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: U Microalb</p><p><b>Result</b>: 1.2 mg/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 0.0-2.0 mg/dL</p></div>',
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
							code: '14957-5',
						},
					],
					text: 'U Microalb',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-20T14:51:30.000Z',
				valueQuantity: {
					value: 1.2,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 0,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 2,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '0.0-2.0 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821777880',
			resource: {
				resourceType: 'Observation',
				id: 'M16821777880',
				meta: {
					versionId: '3-16857384496',
					lastUpdated: '2020-02-24T21:49:16.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: LDL Calculated</p><p><b>Result</b>: 139 mg/dL</p><p><b>Risk Level</b>: HI</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 0-99 mg/dL</p></div>',
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
							code: '13457-7',
						},
					],
					text: 'LDL Calculated',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 139,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'H',
							display: 'High',
						},
					],
					text: 'HI',
				},
				referenceRange: [
					{
						low: {
							value: 0,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 99,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '0-99 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765919',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765919',
				meta: {
					versionId: '3-16857384476',
					lastUpdated: '2020-02-24T21:49:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: AGAP</p><p><b>Result</b>: 3 mmol/L</p><p><b>Risk Level</b>: LOW</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 5-15 mmol/L</p></div>',
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
							code: '33037-3',
						},
					],
					text: 'AGAP',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 3,
					unit: 'mmol/L',
					system: 'http://unitsofmeasure.org',
					code: 'mmol/L',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'L',
							display: 'Low',
						},
					],
					text: 'LOW',
				},
				referenceRange: [
					{
						low: {
							value: 5,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						high: {
							value: 15,
							unit: 'mmol/L',
							system: 'http://unitsofmeasure.org',
							code: 'mmol/L',
						},
						text: '5-15 mmol/L',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765925',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765925',
				meta: {
					versionId: '3-16857384550',
					lastUpdated: '2020-02-24T21:49:28.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Globulin</p><p><b>Result</b>: 3.5 gm/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 1.3-4.7 gm/dL</p></div>',
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
							code: '2336-6',
						},
					],
					text: 'Globulin',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 3.5,
					unit: 'gm/dL',
					system: 'http://unitsofmeasure.org',
					code: 'g/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 1.3,
							unit: 'gm/dL',
							system: 'http://unitsofmeasure.org',
							code: 'g/dL',
						},
						high: {
							value: 4.7,
							unit: 'gm/dL',
							system: 'http://unitsofmeasure.org',
							code: 'g/dL',
						},
						text: '1.3-4.7 gm/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16826777246',
			resource: {
				resourceType: 'Observation',
				id: 'M16826777246',
				meta: {
					versionId: '3-16857384489',
					lastUpdated: '2020-02-24T21:49:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: UMicroAlb/Creat</p><p><b>Result</b>: 4.5 mg/gm</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 0.0-30.0 mg/gm</p></div>',
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
							code: '14959-1',
						},
					],
					text: 'UMicroAlb/Creat',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-20T14:51:30.000Z',
				valueQuantity: {
					value: 4.5,
					unit: 'mg/gm',
					system: 'http://unitsofmeasure.org',
					code: 'mg/g',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 0,
							unit: 'mg/gm',
							system: 'http://unitsofmeasure.org',
							code: 'mg/g',
						},
						high: {
							value: 30,
							unit: 'mg/gm',
							system: 'http://unitsofmeasure.org',
							code: 'mg/g',
						},
						text: '0.0-30.0 mg/gm',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765929',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765929',
				meta: {
					versionId: '3-16857384479',
					lastUpdated: '2020-02-24T21:49:07.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: A/G Ratio</p><p><b>Result</b>: 1.0</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 1.0-3.8</p></div>',
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
							code: '1759-0',
						},
					],
					text: 'A/G Ratio',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 1,
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 1,
						},
						high: {
							value: 3.8,
						},
						text: '1.0-3.8',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16821765884',
			resource: {
				resourceType: 'Observation',
				id: 'M16821765884',
				meta: {
					versionId: '3-16857384465',
					lastUpdated: '2020-02-24T21:49:01.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: Creatinine</p><p><b>Result</b>: 0.76 mg/dL</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Feb 19, 2020  7:35 P.M. UTC</p><p><b>Risk Level Detail</b>: 0.52-1.04 mg/dL</p></div>',
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
							code: '2160-0',
						},
					],
					text: 'Creatinine',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				effectiveDateTime: '2020-02-19T19:35:00.000Z',
				issued: '2020-02-19T21:16:29.000Z',
				valueQuantity: {
					value: 0.76,
					unit: 'mg/dL',
					system: 'http://unitsofmeasure.org',
					code: 'mg/dL',
				},
				interpretation: {
					coding: [
						{
							system: 'http://hl7.org/fhir/v2/0078',
							code: 'N',
							display: 'Normal',
						},
					],
				},
				referenceRange: [
					{
						low: {
							value: 0.52,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						high: {
							value: 1.04,
							unit: 'mg/dL',
							system: 'http://unitsofmeasure.org',
							code: 'mg/dL',
						},
						text: '0.52-1.04 mg/dL',
					},
				],
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161922',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161922',
				meta: {
					versionId: '1-16820161921',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Patient Age Flu AMB</p><p><b>Result</b>: 6 months to 64 years</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					text: 'Patient Age Flu AMB',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
				valueCodeableConcept: {
					text: '6 months to 64 years',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161928',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161928',
				meta: {
					versionId: '1-16820161927',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Patient Due Flu Vaccine</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					text: 'Patient Due Flu Vaccine',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373066001',
							display: 'Yes (qualifier value)',
						},
					],
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161924',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161924',
				meta: {
					versionId: '1-16820161923',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Flu Vaccine Available</p><p><b>Result</b>: Yes</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					text: 'Flu Vaccine Available',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373066001',
							display: 'Yes (qualifier value)',
						},
					],
					text: 'Yes',
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161884',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161884',
				meta: {
					versionId: '1-16820161883',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Patient declines depression screening</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					text: 'Patient declines depression screening',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373067005',
							display: 'No (qualifier value)',
						},
					],
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161894',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161894',
				meta: {
					versionId: '1-16820161893',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Depression Screening Negative</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '428171000124102',
							display: 'Depression Screening Negative (finding)',
						},
					],
					text: 'Depression Screening Negative',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '260385009',
							display: 'Negative (qualifier value)',
						},
					],
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161908',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161908',
				meta: {
					versionId: '1-16820161907',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Launch PHQ</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					text: 'Launch PHQ',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
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
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161880',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161880',
				meta: {
					versionId: '1-16820161879',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Measured with Shoes</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					text: 'Measured with Shoes',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '373066001',
							display: 'Yes (qualifier value)',
						},
					],
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161862',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161862',
				meta: {
					versionId: '1-16820161861',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Category</b>: Vital Signs</p><p><b>Code</b>: Patient Position BP</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							system: 'http://hl7.org/fhir/observation-category',
							code: 'vital-signs',
							display: 'Vital Signs',
						},
					],
					text: 'Vital Signs',
				},
				code: {
					text: 'Patient Position BP',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '33586001',
							display: 'Sitting position (finding)',
						},
					],
				},
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161860',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161860',
				meta: {
					versionId: '1-16820161859',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Cuff Size</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					coding: [
						{
							system: 'http://loinc.org',
							code: '8358-4',
						},
					],
					text: 'Cuff Size',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
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
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Observation/M16820161868',
			resource: {
				resourceType: 'Observation',
				id: 'M16820161868',
				meta: {
					versionId: '1-16820161867',
					lastUpdated: '2020-02-19T18:09:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Observation</b></p><p><b>Patient</b>: 1727024</p><p><b>Status</b>: Final</p><p><b>Code</b>: Oxygen Therapy</p><p><b>Result</b>: Room air</p><p><b>Date</b>: Feb 19, 2020  6:07 P.M. UTC</p></div>',
				},
				status: 'final',
				category: {
					coding: [
						{
							extension: [
								{
									url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
									valueCode: 'unknown',
								},
							],
						},
					],
				},
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '57485005',
							display: 'Oxygen therapy (procedure)',
						},
					],
					text: 'Oxygen Therapy',
				},
				subject: {
					reference: 'Patient/1727024',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				effectiveDateTime: '2020-02-19T18:07:00.000Z',
				issued: '2020-02-19T18:07:12.000Z',
				valueCodeableConcept: {
					text: 'Room air',
				},
			},
		},
	],
	conditions: [
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p423200977',
			resource: {
				resourceType: 'Condition',
				id: 'p423200977',
				meta: {
					versionId: '423201031',
					lastUpdated: '2019-05-06T12:54:03.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Smoking, Smoking</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-05-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '300932',
							display: 'Smoking',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '77176002',
							display: 'Smoker (finding)',
							userSelected: false,
						},
					],
					text: 'Smoking',
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
				abatementBoolean: false,
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324660471',
			resource: {
				resourceType: 'Condition',
				id: 'p324660471',
				meta: {
					versionId: '423183165',
					lastUpdated: '2019-05-06T12:41:52.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: BMI 40.0-44.9, adult, Body mass index 40+ - severely obese (finding)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '408512008',
							display: 'Body mass index 40+ - severely obese (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '965282',
							display: 'BMI 40.0-44.9, adult',
							userSelected: false,
						},
					],
					text: 'BMI 40.0-44.9, adult',
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
				abatementBoolean: false,
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324706171',
			resource: {
				resourceType: 'Condition',
				id: 'p324706171',
				meta: {
					versionId: '324706171',
					lastUpdated: '2018-08-02T16:04:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324641213',
			resource: {
				resourceType: 'Condition',
				id: 'p324641213',
				meta: {
					versionId: '324692963',
					lastUpdated: '2018-08-02T15:41:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Abnormal mammogram, Mammography abnormal (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '168750009',
							display: 'Mammography abnormal (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '77330',
							display: 'Abnormal mammogram',
							userSelected: false,
						},
					],
					text: 'Abnormal mammogram',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324656841',
			resource: {
				resourceType: 'Condition',
				id: 'p324656841',
				meta: {
					versionId: '324683593',
					lastUpdated: '2018-08-02T15:36:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Pain of left heel, Heel pain (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '2733002',
							display: 'Heel pain (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '15848204',
							display: 'Pain of left heel',
							userSelected: false,
						},
					],
					text: 'Pain of left heel',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p528530247',
			resource: {
				resourceType: 'Condition',
				id: 'p528530247',
				meta: {
					versionId: '528530247',
					lastUpdated: '2020-02-19T18:48:42.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Nicotine addiction, Nicotine dependence (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '56294008',
							display: 'Nicotine dependence (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '50744',
							display: 'Nicotine addiction',
							userSelected: false,
						},
					],
					text: 'Nicotine addiction',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p98822649',
			resource: {
				resourceType: 'Condition',
				id: 'p98822649',
				meta: {
					versionId: '98822649',
					lastUpdated: '2016-10-20T13:11:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: GOITER, Goiter (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May 22, 2013</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/19422301',
					display: 'Trixia Deguzman, CMA',
				},
				dateRecorded: '2016-10-20',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '3716002',
							display: 'Goiter (disorder)',
							userSelected: true,
						},
					],
					text: 'GOITER',
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
				onsetDateTime: '2013-05-22',
				abatementBoolean: false,
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p100187009',
			resource: {
				resourceType: 'Condition',
				id: 'p100187009',
				meta: {
					versionId: '423193359',
					lastUpdated: '2019-05-06T12:38:09.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Tobacco user, Tobacco user (finding)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/1',
					display: 'SYSTEM SYSTEM',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
						},
					],
					text: 'Tobacco user',
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
				abatementBoolean: false,
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324706247',
			resource: {
				resourceType: 'Condition',
				id: 'p324706247',
				meta: {
					versionId: '451694285',
					lastUpdated: '2019-07-24T13:17:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324679607',
			resource: {
				resourceType: 'Condition',
				id: 'p324679607',
				meta: {
					versionId: '324683589',
					lastUpdated: '2018-08-02T15:36:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Bursitis of posterior heel, Bursitis of posterior heel</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '24595592',
							display: 'Bursitis of posterior heel',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '240033006',
							display: 'Postcalcaneal bursitis (disorder)',
							userSelected: false,
						},
					],
					text: 'Bursitis of posterior heel',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324653823',
			resource: {
				resourceType: 'Condition',
				id: 'p324653823',
				meta: {
					versionId: '451694287',
					lastUpdated: '2019-07-24T13:17:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p528546779',
			resource: {
				resourceType: 'Condition',
				id: 'p528546779',
				meta: {
					versionId: '528546779',
					lastUpdated: '2020-02-19T19:09:15.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Vitamin D deficiency, Vitamin D deficiency (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '34713006',
							display: 'Vitamin D deficiency (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '88575',
							display: 'Vitamin D deficiency',
							userSelected: false,
						},
					],
					text: 'Vitamin D deficiency',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p285808543',
			resource: {
				resourceType: 'Condition',
				id: 'p285808543',
				meta: {
					versionId: '324653895',
					lastUpdated: '2018-08-02T14:59:07.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Physical exam, Patient encounter status (finding)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2018-04-11',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '305058001',
							display: 'Patient encounter status (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '810352',
							display: 'Physical exam',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '310366008',
							display: 'Medical examinations/reports status (finding)',
							userSelected: false,
						},
					],
					text: 'Physical exam',
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
				abatementBoolean: false,
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p98822849',
			resource: {
				resourceType: 'Condition',
				id: 'p98822849',
				meta: {
					versionId: '324656567',
					lastUpdated: '2018-08-02T14:59:01.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: BACK PAIN, Backache (finding)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan  7, 2016</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/19422301',
					display: 'Trixia Deguzman, CMA',
				},
				dateRecorded: '2016-10-20',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '161891005',
							display: 'Backache (finding)',
							userSelected: true,
						},
					],
					text: 'BACK PAIN',
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
				onsetDateTime: '2016-01-07',
				abatementBoolean: false,
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p285808607',
			resource: {
				resourceType: 'Condition',
				id: 'p285808607',
				meta: {
					versionId: '324653891',
					lastUpdated: '2018-08-02T14:59:04.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Overweight, Overweight (finding)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: Apr 11, 2018</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2018-04-11',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '238131007',
							display: 'Overweight (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '50813',
							display: 'Overweight',
							userSelected: false,
						},
					],
					text: 'Overweight',
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
				abatementDateTime: '2018-04-11',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324683483',
			resource: {
				resourceType: 'Condition',
				id: 'p324683483',
				meta: {
					versionId: '359335505',
					lastUpdated: '2018-11-08T11:35:40.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Left carpal tunnel syndrome, Carpal tunnel syndrome (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '57406009',
							display: 'Carpal tunnel syndrome (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '848057',
							display: 'Left carpal tunnel syndrome',
							userSelected: false,
						},
					],
					text: 'Left carpal tunnel syndrome',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/p324704881',
			resource: {
				resourceType: 'Condition',
				id: 'p324704881',
				meta: {
					versionId: '324704881',
					lastUpdated: '2018-08-02T15:58:20.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Problem</b>: Eczema, Eczema (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '43116000',
							display: 'Eczema (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '42603',
							display: 'Eczema',
							userSelected: false,
						},
					],
					text: 'Eczema',
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
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1039255759',
			resource: {
				resourceType: 'Condition',
				id: 'd1039255759',
				meta: {
					versionId: '1039255759',
					lastUpdated: '2016-10-27T19:13:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for general adult medical examination without abnormal findings, Encounter for general adult medical examination without abnormal findings</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  9:20 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/115090916',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: true,
						},
					],
					text: 'Encounter for general adult medical examination without abnormal findings',
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
				onsetDateTime: '2016-10-25T21:20:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037102597',
			resource: {
				resourceType: 'Condition',
				id: 'd1037102597',
				meta: {
					versionId: '1037102597',
					lastUpdated: '2016-10-25T21:33:07.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for general adult medical examination without abnormal findings, Encounter for general adult medical examination without abnormal findings</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  9:33 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/115090916',
				},
				asserter: {
					reference: 'Practitioner/17639470',
					display: 'Megan A Day',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: true,
						},
					],
					text: 'Encounter for general adult medical examination without abnormal findings',
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
				onsetDateTime: '2016-10-25T21:33:07.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d768200447',
			resource: {
				resourceType: 'Condition',
				id: 'd768200447',
				meta: {
					versionId: '768200447',
					lastUpdated: '2016-01-08T14:07:12.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for general adult medical examination without abnormal findings, Encounter for general adult medical examination without abnormal findings</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jan  7, 2016  8:56 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/46708780',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: true,
						},
					],
					text: 'Encounter for general adult medical examination without abnormal findings',
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
				onsetDateTime: '2016-01-07T20:56:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d768200449',
			resource: {
				resourceType: 'Condition',
				id: 'd768200449',
				meta: {
					versionId: '768200449',
					lastUpdated: '2016-01-08T14:07:12.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for general adult medical examination without abnormal findings, Encounter for general adult medical examination without abnormal findings</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jan  7, 2016  8:56 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/46708780',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: true,
						},
					],
					text: 'Encounter for general adult medical examination without abnormal findings',
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
				onsetDateTime: '2016-01-07T20:56:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037060613',
			resource: {
				resourceType: 'Condition',
				id: 'd1037060613',
				meta: {
					versionId: '1037060613',
					lastUpdated: '2016-10-25T20:45:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for general adult medical examination without abnormal findings, Encounter for general adult medical examination without abnormal findings</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:44 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: true,
						},
					],
					text: 'Encounter for general adult medical examination without abnormal findings',
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
				onsetDateTime: '2016-10-25T20:44:24.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1039255761',
			resource: {
				resourceType: 'Condition',
				id: 'd1039255761',
				meta: {
					versionId: '1039255761',
					lastUpdated: '2016-10-27T19:13:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for general adult medical examination without abnormal findings, Encounter for general adult medical examination without abnormal findings</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  9:20 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/115090916',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: true,
						},
					],
					text: 'Encounter for general adult medical examination without abnormal findings',
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
				onsetDateTime: '2016-10-25T21:20:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1637144189',
			resource: {
				resourceType: 'Condition',
				id: 'd1637144189',
				meta: {
					versionId: '1637144189',
					lastUpdated: '2018-04-30T13:42:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for general adult medical examination without abnormal findings, Encounter for general adult medical examination without abnormal findings</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:47 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: true,
						},
					],
					text: 'Encounter for general adult medical examination without abnormal findings',
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
				onsetDateTime: '2018-04-13T18:47:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1637144187',
			resource: {
				resourceType: 'Condition',
				id: 'd1637144187',
				meta: {
					versionId: '1637144187',
					lastUpdated: '2018-04-30T13:42:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for general adult medical examination without abnormal findings, Encounter for general adult medical examination without abnormal findings</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:47 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: true,
						},
					],
					text: 'Encounter for general adult medical examination without abnormal findings',
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
				onsetDateTime: '2018-04-13T18:47:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037060623',
			resource: {
				resourceType: 'Condition',
				id: 'd1037060623',
				meta: {
					versionId: '1037060623',
					lastUpdated: '2016-10-25T20:45:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Nontoxic goiter, unspecified, Nontoxic goiter, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:44 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E04.9',
							display: 'Nontoxic goiter, unspecified',
							userSelected: true,
						},
					],
					text: 'Nontoxic goiter, unspecified',
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
				onsetDateTime: '2016-10-25T20:44:33.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1637144193',
			resource: {
				resourceType: 'Condition',
				id: 'd1637144193',
				meta: {
					versionId: '1637144193',
					lastUpdated: '2018-04-30T13:42:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Nontoxic goiter, unspecified, Nontoxic goiter, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:47 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E04.9',
							display: 'Nontoxic goiter, unspecified',
							userSelected: true,
						},
					],
					text: 'Nontoxic goiter, unspecified',
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
				onsetDateTime: '2018-04-13T18:47:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d814861173',
			resource: {
				resourceType: 'Condition',
				id: 'd814861173',
				meta: {
					versionId: '814861173',
					lastUpdated: '2016-03-07T15:28:27.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Unspecified lump in breast, Unspecified lump in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  2, 2016  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/48369752',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N63',
							display: 'Unspecified lump in breast',
							userSelected: true,
						},
					],
					text: 'Unspecified lump in breast',
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
				onsetDateTime: '2016-03-02T13:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d995467021',
			resource: {
				resourceType: 'Condition',
				id: 'd995467021',
				meta: {
					versionId: '995467021',
					lastUpdated: '2016-09-12T10:17:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Unspecified lump in breast, Unspecified lump in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep  8, 2016  4:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/111269508',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N63',
							display: 'Unspecified lump in breast',
							userSelected: true,
						},
					],
					text: 'Unspecified lump in breast',
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
				onsetDateTime: '2016-09-08T16:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1202322301',
			resource: {
				resourceType: 'Condition',
				id: 'd1202322301',
				meta: {
					versionId: '1202322301',
					lastUpdated: '2017-05-08T14:35:33.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Unspecified lump in breast, Unspecified lump in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  2, 2017 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/124883285',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N63',
							display: 'Unspecified lump in breast',
							userSelected: true,
						},
					],
					text: 'Unspecified lump in breast',
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
				onsetDateTime: '2017-05-02T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d995467019',
			resource: {
				resourceType: 'Condition',
				id: 'd995467019',
				meta: {
					versionId: '995467019',
					lastUpdated: '2016-09-12T10:17:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Unspecified lump in breast, Unspecified lump in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep  8, 2016  4:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/111269508',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N63',
							display: 'Unspecified lump in breast',
							userSelected: true,
						},
					],
					text: 'Unspecified lump in breast',
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
				onsetDateTime: '2016-09-08T16:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d995467023',
			resource: {
				resourceType: 'Condition',
				id: 'd995467023',
				meta: {
					versionId: '995467023',
					lastUpdated: '2016-09-12T10:17:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other specified disorders of breast, Other specified disorders of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep  8, 2016  4:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/111269508',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N64.89',
							display: 'Other specified disorders of breast',
							userSelected: true,
						},
					],
					text: 'Other specified disorders of breast',
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
				onsetDateTime: '2016-09-08T16:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d814861175',
			resource: {
				resourceType: 'Condition',
				id: 'd814861175',
				meta: {
					versionId: '814861175',
					lastUpdated: '2016-03-07T15:28:27.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other specified disorders of breast, Other specified disorders of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  2, 2016  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/48369752',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N64.89',
							display: 'Other specified disorders of breast',
							userSelected: true,
						},
					],
					text: 'Other specified disorders of breast',
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
				onsetDateTime: '2016-03-02T13:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d296385785',
			resource: {
				resourceType: 'Condition',
				id: 'd296385785',
				meta: {
					versionId: '296385785',
					lastUpdated: '2014-03-31T12:00:24.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar 10, 2014  8:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/32621388',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2014-03-10T20:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d296385786',
			resource: {
				resourceType: 'Condition',
				id: 'd296385786',
				meta: {
					versionId: '296385786',
					lastUpdated: '2014-03-31T12:00:24.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar 10, 2014  8:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/32621388',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2014-03-10T20:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d304069863',
			resource: {
				resourceType: 'Condition',
				id: 'd304069863',
				meta: {
					versionId: '304069863',
					lastUpdated: '2014-04-14T13:56:28.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  9, 2014 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/33099208',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2014-04-09T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d304069864',
			resource: {
				resourceType: 'Condition',
				id: 'd304069864',
				meta: {
					versionId: '304069864',
					lastUpdated: '2014-04-14T13:56:28.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  9, 2014 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/33099208',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2014-04-09T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d200652686',
			resource: {
				resourceType: 'Condition',
				id: 'd200652686',
				meta: {
					versionId: '200652686',
					lastUpdated: '2013-09-16T17:08:37.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep  9, 2013  1:15 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/29483306',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2013-09-09T13:15:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d377615338',
			resource: {
				resourceType: 'Condition',
				id: 'd377615338',
				meta: {
					versionId: '377615338',
					lastUpdated: '2014-08-12T15:07:12.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  8, 2014  3:30 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/35121060',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2014-08-08T15:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d183359778',
			resource: {
				resourceType: 'Condition',
				id: 'd183359778',
				meta: {
					versionId: '183359778',
					lastUpdated: '2013-08-08T15:55:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  9, 2013 12:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/28564408',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2013-07-09T12:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d377615339',
			resource: {
				resourceType: 'Condition',
				id: 'd377615339',
				meta: {
					versionId: '377615339',
					lastUpdated: '2014-08-12T15:07:12.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  8, 2014  3:30 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/35121060',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2014-08-08T15:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d373233170',
			resource: {
				resourceType: 'Condition',
				id: 'd373233170',
				meta: {
					versionId: '373233170',
					lastUpdated: '2014-08-04T15:34:23.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Lump or Mass in Breast, Lump or mass in breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 30, 2014  5:15 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/35002659',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.72',
							display: 'Lump or mass in breast',
							userSelected: true,
						},
					],
					text: 'Lump or Mass in Breast',
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
				onsetDateTime: '2014-07-30T17:15:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1965609043',
			resource: {
				resourceType: 'Condition',
				id: 'd1965609043',
				meta: {
					versionId: '1965609043',
					lastUpdated: '2019-05-06T12:54:00.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Smoking, Smoking</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  6, 2019 12:54 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/164383600',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-05-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '300932',
							display: 'Smoking',
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
					text: 'Smoking',
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
				onsetDateTime: '2019-05-06T12:54:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2096164671',
			resource: {
				resourceType: 'Condition',
				id: 'd2096164671',
				meta: {
					versionId: '2096164671',
					lastUpdated: '2019-09-23T12:32:19.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for screening mammogram for malignant neoplasm of breast, Encounter for screening mammogram for malignant neoplasm of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep 16, 2019 11:30 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/171303653',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z12.31',
							display: 'Encounter for screening mammogram for malignant neoplasm of breast',
							userSelected: true,
						},
					],
					text: 'Encounter for screening mammogram for malignant neoplasm of breast',
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
				onsetDateTime: '2019-09-16T11:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2096164673',
			resource: {
				resourceType: 'Condition',
				id: 'd2096164673',
				meta: {
					versionId: '2096164673',
					lastUpdated: '2019-09-23T12:32:19.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for screening mammogram for malignant neoplasm of breast, Encounter for screening mammogram for malignant neoplasm of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep 16, 2019 11:30 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/171303653',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z12.31',
							display: 'Encounter for screening mammogram for malignant neoplasm of breast',
							userSelected: true,
						},
					],
					text: 'Encounter for screening mammogram for malignant neoplasm of breast',
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
				onsetDateTime: '2019-09-16T11:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1805067923',
			resource: {
				resourceType: 'Condition',
				id: 'd1805067923',
				meta: {
					versionId: '1805067923',
					lastUpdated: '2018-11-08T11:35:46.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: BMI 40.0-44.9, adult, Body mass index 40+ - severely obese (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2018 11:35 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/150940999',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-11-08',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '408512008',
							display: 'Body mass index 40+ - severely obese (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '965282',
							display: 'BMI 40.0-44.9, adult',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z68.41',
							display: 'Body mass index (BMI) 40.0-44.9, adult',
							userSelected: false,
						},
					],
					text: 'BMI 40.0-44.9, adult',
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
				onsetDateTime: '2018-11-08T11:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1906588593',
			resource: {
				resourceType: 'Condition',
				id: 'd1906588593',
				meta: {
					versionId: '1906588593',
					lastUpdated: '2019-03-04T14:01:14.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: BMI 40.0-44.9, adult, Body mass index 40+ - severely obese (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  4, 2019  2:01 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/160164027',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-03-04',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '408512008',
							display: 'Body mass index 40+ - severely obese (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '965282',
							display: 'BMI 40.0-44.9, adult',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z68.41',
							display: 'Body mass index (BMI) 40.0-44.9, adult',
							userSelected: false,
						},
					],
					text: 'BMI 40.0-44.9, adult',
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
				onsetDateTime: '2019-03-04T14:01:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719007019',
			resource: {
				resourceType: 'Condition',
				id: 'd1719007019',
				meta: {
					versionId: '1719076607',
					lastUpdated: '2018-08-02T15:36:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: BMI 40.0-44.9, adult, Body mass index 40+ - severely obese (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  2:58 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '408512008',
							display: 'Body mass index 40+ - severely obese (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '965282',
							display: 'BMI 40.0-44.9, adult',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z68.41',
							display: 'Body mass index (BMI) 40.0-44.9, adult',
							userSelected: false,
						},
					],
					text: 'BMI 40.0-44.9, adult',
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
				onsetDateTime: '2018-08-02T14:58:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1932734099',
			resource: {
				resourceType: 'Condition',
				id: 'd1932734099',
				meta: {
					versionId: '1932734099',
					lastUpdated: '2019-04-01T12:46:22.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: BMI 40.0-44.9, adult, Body mass index 40+ - severely obese (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019 12:46 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/161587674',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-04-01',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '408512008',
							display: 'Body mass index 40+ - severely obese (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '965282',
							display: 'BMI 40.0-44.9, adult',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z68.41',
							display: 'Body mass index (BMI) 40.0-44.9, adult',
							userSelected: false,
						},
					],
					text: 'BMI 40.0-44.9, adult',
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
				onsetDateTime: '2019-04-01T12:46:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1871297105',
			resource: {
				resourceType: 'Condition',
				id: 'd1871297105',
				meta: {
					versionId: '1871297105',
					lastUpdated: '2019-01-24T14:16:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: BMI 40.0-44.9, adult, Body mass index 40+ - severely obese (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jan 24, 2019  2:16 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/156522409',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-01-24',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '408512008',
							display: 'Body mass index 40+ - severely obese (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '965282',
							display: 'BMI 40.0-44.9, adult',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z68.41',
							display: 'Body mass index (BMI) 40.0-44.9, adult',
							userSelected: false,
						},
					],
					text: 'BMI 40.0-44.9, adult',
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
				onsetDateTime: '2019-01-24T14:16:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238680757',
			resource: {
				resourceType: 'Condition',
				id: 'd2238680757',
				meta: {
					versionId: '2238680757',
					lastUpdated: '2020-02-19T19:31:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  5:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				asserter: {
					reference: 'Practitioner/3713360',
					display: 'Taiesha N Barnes',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2020-02-19T17:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1932737439',
			resource: {
				resourceType: 'Condition',
				id: 'd1932737439',
				meta: {
					versionId: '1932737439',
					lastUpdated: '2019-04-01T12:46:16.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019 12:46 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/161587674',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-04-01',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2019-04-01T12:46:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1994534061',
			resource: {
				resourceType: 'Condition',
				id: 'd1994534061',
				meta: {
					versionId: '1994534061',
					lastUpdated: '2019-06-06T12:42:17.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jun  6, 2019 12:42 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/166154744',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-06-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2019-06-06T12:42:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1871366693',
			resource: {
				resourceType: 'Condition',
				id: 'd1871366693',
				meta: {
					versionId: '1871366693',
					lastUpdated: '2019-01-24T14:47:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jan 24, 2019  2:47 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/156522409',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-01-24',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2019-01-24T14:47:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1932812279',
			resource: {
				resourceType: 'Condition',
				id: 'd1932812279',
				meta: {
					versionId: '1932812279',
					lastUpdated: '2019-04-01T13:23:08.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019  1:23 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/162307361',
				},
				asserter: {
					reference: 'Practitioner/20056569',
					display: 'Kiara I Moore',
				},
				dateRecorded: '2019-04-01',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2019-04-01T13:23:08.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1805067951',
			resource: {
				resourceType: 'Condition',
				id: 'd1805067951',
				meta: {
					versionId: '1805067951',
					lastUpdated: '2018-11-08T11:35:53.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2018 11:35 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/150940999',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-11-08',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2018-11-08T11:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238573335',
			resource: {
				resourceType: 'Condition',
				id: 'd2238573335',
				meta: {
					versionId: '2238573335',
					lastUpdated: '2020-02-19T18:41:55.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  6:41 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2020-02-19T18:41:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719127313',
			resource: {
				resourceType: 'Condition',
				id: 'd1719127313',
				meta: {
					versionId: '1719127313',
					lastUpdated: '2018-08-02T16:04:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  4:04 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2018-08-02T16:04:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1906591781',
			resource: {
				resourceType: 'Condition',
				id: 'd1906591781',
				meta: {
					versionId: '1906591781',
					lastUpdated: '2019-03-04T14:01:21.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  4, 2019  2:01 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/160164027',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-03-04',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2019-03-04T14:01:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238680799',
			resource: {
				resourceType: 'Condition',
				id: 'd2238680799',
				meta: {
					versionId: '2238680799',
					lastUpdated: '2020-02-19T19:31:19.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, Hyperlipidemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  5:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				asserter: {
					reference: 'Practitioner/3713360',
					display: 'Taiesha N Barnes',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '46743',
							display: 'Hyperlipidemia',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '55822004',
							display: 'Hyperlipidemia (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E78.5',
							display: 'Hyperlipidemia, unspecified',
							userSelected: false,
						},
					],
					text: 'Hyperlipidemia',
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
				onsetDateTime: '2020-02-19T17:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1718976155',
			resource: {
				resourceType: 'Condition',
				id: 'd1718976155',
				meta: {
					versionId: '1719087041',
					lastUpdated: '2018-08-02T15:41:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Abnormal mammogram, Mammography abnormal (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  2:39 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '168750009',
							display: 'Mammography abnormal (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '77330',
							display: 'Abnormal mammogram',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'R92.8',
							display: 'Other abnormal and inconclusive findings on diagnostic imaging of breast',
							userSelected: false,
						},
					],
					text: 'Abnormal mammogram',
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
				onsetDateTime: '2018-08-02T14:39:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2044472883',
			resource: {
				resourceType: 'Condition',
				id: 'd2044472883',
				meta: {
					versionId: '2044472883',
					lastUpdated: '2019-07-24T13:25:44.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Abnormal mammogram, Mammography abnormal (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 24, 2019  1:25 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/168335360',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-07-24',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '168750009',
							display: 'Mammography abnormal (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '77330',
							display: 'Abnormal mammogram',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'R92.8',
							display: 'Other abnormal and inconclusive findings on diagnostic imaging of breast',
							userSelected: false,
						},
					],
					text: 'Abnormal mammogram',
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
				onsetDateTime: '2019-07-24T13:25:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1706650329',
			resource: {
				resourceType: 'Condition',
				id: 'd1706650329',
				meta: {
					versionId: '1706650329',
					lastUpdated: '2018-07-19T11:52:34.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.01',
							display: 'Morbid (severe) obesity due to excess calories',
							userSelected: true,
						},
					],
					text: 'Morbid (severe) obesity due to excess calories',
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
				onsetDateTime: '2018-07-17T13:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719001711',
			resource: {
				resourceType: 'Condition',
				id: 'd1719001711',
				meta: {
					versionId: '1719076611',
					lastUpdated: '2018-08-02T15:36:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Pain of left heel, Heel pain (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  3:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '2733002',
							display: 'Heel pain (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '15848204',
							display: 'Pain of left heel',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'M79.672',
							display: 'Pain in left foot',
							userSelected: false,
						},
					],
					text: 'Pain of left heel',
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
				onsetDateTime: '2018-08-02T15:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d200652687',
			resource: {
				resourceType: 'Condition',
				id: 'd200652687',
				meta: {
					versionId: '200652687',
					lastUpdated: '2013-09-16T17:08:37.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Solitary Cyst of Breast, Solitary cyst of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep  9, 2013  1:15 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/29483306',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '610.0',
							display: 'Solitary cyst of breast',
							userSelected: true,
						},
					],
					text: 'Solitary Cyst of Breast',
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
				onsetDateTime: '2013-09-09T13:15:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d373233171',
			resource: {
				resourceType: 'Condition',
				id: 'd373233171',
				meta: {
					versionId: '373233171',
					lastUpdated: '2014-08-04T15:34:23.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Solitary Cyst of Breast, Solitary cyst of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 30, 2014  5:15 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/35002659',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '610.0',
							display: 'Solitary cyst of breast',
							userSelected: true,
						},
					],
					text: 'Solitary Cyst of Breast',
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
				onsetDateTime: '2014-07-30T17:15:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1706650331',
			resource: {
				resourceType: 'Condition',
				id: 'd1706650331',
				meta: {
					versionId: '1706650331',
					lastUpdated: '2018-07-19T11:52:34.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Body mass index (BMI) 40.0-44.9, adult, Body mass index (BMI) 40.0-44.9, adult</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z68.41',
							display: 'Body mass index (BMI) 40.0-44.9, adult',
							userSelected: true,
						},
					],
					text: 'Body mass index (BMI) 40.0-44.9, adult',
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
				onsetDateTime: '2018-07-17T13:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1673985097',
			resource: {
				resourceType: 'Condition',
				id: 'd1673985097',
				meta: {
					versionId: '1673985097',
					lastUpdated: '2018-06-11T17:15:49.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Unspecified lump in the left breast, unspecified quadrant, Unspecified lump in the left breast, unspecified quadrant</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May 21, 2018 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/140604737',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N63.20',
							display: 'Unspecified lump in the left breast, unspecified quadrant',
							userSelected: true,
						},
					],
					text: 'Unspecified lump in the left breast, unspecified quadrant',
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
				onsetDateTime: '2018-05-21T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1673985099',
			resource: {
				resourceType: 'Condition',
				id: 'd1673985099',
				meta: {
					versionId: '1673985099',
					lastUpdated: '2018-06-11T17:15:49.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Unspecified lump in the left breast, unspecified quadrant, Unspecified lump in the left breast, unspecified quadrant</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May 21, 2018 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/140604737',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N63.20',
							display: 'Unspecified lump in the left breast, unspecified quadrant',
							userSelected: true,
						},
					],
					text: 'Unspecified lump in the left breast, unspecified quadrant',
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
				onsetDateTime: '2018-05-21T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037060625',
			resource: {
				resourceType: 'Condition',
				id: 'd1037060625',
				meta: {
					versionId: '1037060625',
					lastUpdated: '2016-10-25T20:45:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco use, Tobacco use</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:44 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
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
				onsetDateTime: '2016-10-25T20:44:33.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d183359776',
			resource: {
				resourceType: 'Condition',
				id: 'd183359776',
				meta: {
					versionId: '183359776',
					lastUpdated: '2013-08-08T15:55:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other Screening Mammogram, Other screening mammogram</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  9, 2013 12:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/28564408',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: 'V76.12',
							display: 'Other screening mammogram',
							userSelected: true,
						},
					],
					text: 'Other Screening Mammogram',
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
				onsetDateTime: '2013-07-09T12:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d183359775',
			resource: {
				resourceType: 'Condition',
				id: 'd183359775',
				meta: {
					versionId: '183359775',
					lastUpdated: '2013-08-08T15:55:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other Screening Mammogram, Other screening mammogram</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  9, 2013 12:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/28564408',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: 'V76.12',
							display: 'Other screening mammogram',
							userSelected: true,
						},
					],
					text: 'Other Screening Mammogram',
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
				onsetDateTime: '2013-07-09T12:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2242413671',
			resource: {
				resourceType: 'Condition',
				id: 'd2242413671',
				meta: {
					versionId: '2242413671',
					lastUpdated: '2020-02-24T14:59:09.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Essential (primary) hypertension, Essential (primary) hypertension</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  7:25 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'I10',
							display: 'Essential (primary) hypertension',
							userSelected: true,
						},
					],
					text: 'Essential (primary) hypertension',
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
				onsetDateTime: '2020-02-19T19:25:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2044434677',
			resource: {
				resourceType: 'Condition',
				id: 'd2044434677',
				meta: {
					versionId: '2044434677',
					lastUpdated: '2019-07-24T13:03:33.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Screening for breast cancer, Patient encounter status (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 24, 2019  4:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/168335360',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-07-24',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '305058001',
							display: 'Patient encounter status (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '811190',
							display: 'Screening for breast cancer',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z12.31',
							display: 'Encounter for screening mammogram for malignant neoplasm of breast',
							userSelected: false,
						},
					],
					text: 'Screening for breast cancer',
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
				onsetDateTime: '2019-07-24T16:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2044440327',
			resource: {
				resourceType: 'Condition',
				id: 'd2044440327',
				meta: {
					versionId: '2044440327',
					lastUpdated: '2019-07-24T13:06:26.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Immunization due, Immunization due</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 24, 2019  4:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/168335360',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-07-24',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '1722246',
							display: 'Immunization due',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '171279008',
							display: 'Immunization due (finding)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z23',
							display: 'Encounter for immunization',
							userSelected: false,
						},
					],
					text: 'Immunization due',
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
				onsetDateTime: '2019-07-24T16:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719012965',
			resource: {
				resourceType: 'Condition',
				id: 'd1719012965',
				meta: {
					versionId: '1719012965',
					lastUpdated: '2018-08-02T15:02:22.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Immunization due, Immunization due</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/23394316',
					display: 'Angela R Thornton',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '1722246',
							display: 'Immunization due',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '171279008',
							display: 'Immunization due (finding)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z23',
							display: 'Encounter for immunization',
							userSelected: false,
						},
					],
					text: 'Immunization due',
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
				onsetDateTime: '2018-08-02T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1623825523',
			resource: {
				resourceType: 'Condition',
				id: 'd1623825523',
				meta: {
					versionId: '1623825523',
					lastUpdated: '2018-04-13T18:48:22.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: GOITER, Goiter (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:48 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				asserter: {
					reference: 'Practitioner/5979114',
					display: 'Tonya A Wiggins',
				},
				dateRecorded: '2018-04-13',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '3716002',
							display: 'Goiter (disorder)',
							userSelected: true,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E04.9',
							display: 'Nontoxic goiter, unspecified',
							userSelected: false,
						},
					],
					text: 'GOITER',
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
				onsetDateTime: '2018-04-13T18:48:20.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037054557',
			resource: {
				resourceType: 'Condition',
				id: 'd1037054557',
				meta: {
					versionId: '1037054557',
					lastUpdated: '2016-10-25T20:38:28.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: GOITER, Goiter (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:38 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '3716002',
							display: 'Goiter (disorder)',
							userSelected: true,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E04.9',
							display: 'Nontoxic goiter, unspecified',
							userSelected: false,
						},
					],
					text: 'GOITER',
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
				onsetDateTime: '2016-10-25T20:38:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1640477145',
			resource: {
				resourceType: 'Condition',
				id: 'd1640477145',
				meta: {
					versionId: '1640477145',
					lastUpdated: '2018-05-03T11:47:19.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: GOITER, Goiter (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  3, 2018 11:47 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/142662907',
				},
				asserter: {
					reference: 'Practitioner/21904208',
					display: 'Elana M Smith',
				},
				dateRecorded: '2018-05-03',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '3716002',
							display: 'Goiter (disorder)',
							userSelected: true,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E04.9',
							display: 'Nontoxic goiter, unspecified',
							userSelected: false,
						},
					],
					text: 'GOITER',
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
				onsetDateTime: '2018-05-03T11:47:17.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1621663475',
			resource: {
				resourceType: 'Condition',
				id: 'd1621663475',
				meta: {
					versionId: '1621663475',
					lastUpdated: '2018-04-11T20:35:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: GOITER, Goiter (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 11, 2018  8:35 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/140948433',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2018-04-11',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '3716002',
							display: 'Goiter (disorder)',
							userSelected: true,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E04.9',
							display: 'Nontoxic goiter, unspecified',
							userSelected: false,
						},
					],
					text: 'GOITER',
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
				onsetDateTime: '2018-04-11T20:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1805067953',
			resource: {
				resourceType: 'Condition',
				id: 'd1805067953',
				meta: {
					versionId: '1805067953',
					lastUpdated: '2018-11-08T11:36:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2018 11:36 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/150940999',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-11-08',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
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
				onsetDateTime: '2018-11-08T11:36:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1871329541',
			resource: {
				resourceType: 'Condition',
				id: 'd1871329541',
				meta: {
					versionId: '1871329541',
					lastUpdated: '2019-01-24T14:30:56.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jan 24, 2019  2:30 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/156522409',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-01-24',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
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
				onsetDateTime: '2019-01-24T14:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1621656645',
			resource: {
				resourceType: 'Condition',
				id: 'd1621656645',
				meta: {
					versionId: '1621656645',
					lastUpdated: '2018-04-11T20:35:34.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 11, 2018  8:35 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/140948433',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2018-04-11',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
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
				onsetDateTime: '2018-04-11T20:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1932738687',
			resource: {
				resourceType: 'Condition',
				id: 'd1932738687',
				meta: {
					versionId: '1932738687',
					lastUpdated: '2019-04-01T12:48:54.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user (finding)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr  1, 2019 12:46 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/161587674',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-04-01',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
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
				verificationStatus: 'entered-in-error',
				onsetDateTime: '2019-04-01T12:46:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1623825521',
			resource: {
				resourceType: 'Condition',
				id: 'd1623825521',
				meta: {
					versionId: '1623825521',
					lastUpdated: '2018-04-13T18:48:22.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:48 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				asserter: {
					reference: 'Practitioner/5979114',
					display: 'Tonya A Wiggins',
				},
				dateRecorded: '2018-04-13',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
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
				onsetDateTime: '2018-04-13T18:48:22.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719001639',
			resource: {
				resourceType: 'Condition',
				id: 'd1719001639',
				meta: {
					versionId: '1719076609',
					lastUpdated: '2018-08-02T15:36:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  3:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
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
				onsetDateTime: '2018-08-02T15:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1906566825',
			resource: {
				resourceType: 'Condition',
				id: 'd1906566825',
				meta: {
					versionId: '1906566825',
					lastUpdated: '2019-03-04T13:48:17.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  4, 2019  1:48 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/160164027',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-03-04',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
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
				onsetDateTime: '2019-03-04T13:48:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037054561',
			resource: {
				resourceType: 'Condition',
				id: 'd1037054561',
				meta: {
					versionId: '1037054561',
					lastUpdated: '2016-10-25T20:38:31.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco user, Tobacco user (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:38 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '110483000',
							display: 'Tobacco user (finding)',
							userSelected: true,
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
				onsetDateTime: '2016-10-25T20:38:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d304069865',
			resource: {
				resourceType: 'Condition',
				id: 'd304069865',
				meta: {
					versionId: '304069865',
					lastUpdated: '2014-04-14T13:56:28.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Mammographic Microcalcification, Mammographic microcalcification</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  9, 2014 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/33099208',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '793.81',
							display: 'Mammographic microcalcification',
							userSelected: true,
						},
					],
					text: 'Mammographic Microcalcification',
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
				onsetDateTime: '2014-04-09T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d200652684',
			resource: {
				resourceType: 'Condition',
				id: 'd200652684',
				meta: {
					versionId: '200652684',
					lastUpdated: '2013-09-16T17:08:37.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Mammographic Microcalcification, Mammographic microcalcification</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep  9, 2013  1:15 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/29483306',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '793.81',
							display: 'Mammographic microcalcification',
							userSelected: true,
						},
					],
					text: 'Mammographic Microcalcification',
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
				onsetDateTime: '2013-09-09T13:15:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d200652685',
			resource: {
				resourceType: 'Condition',
				id: 'd200652685',
				meta: {
					versionId: '200652685',
					lastUpdated: '2013-09-16T17:08:37.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Mammographic Microcalcification, Mammographic microcalcification</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep  9, 2013  1:15 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/29483306',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '793.81',
							display: 'Mammographic microcalcification',
							userSelected: true,
						},
					],
					text: 'Mammographic Microcalcification',
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
				onsetDateTime: '2013-09-09T13:15:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1704446127',
			resource: {
				resourceType: 'Condition',
				id: 'd1704446127',
				meta: {
					versionId: '1704446127',
					lastUpdated: '2018-07-17T13:56:09.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diverticulosis, Diverticulosis</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				asserter: {
					reference: 'Practitioner/2793988',
					display: 'Lawrence Mills, MD',
				},
				dateRecorded: '2018-07-17',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '42203',
							display: 'Diverticulosis',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '397881000',
							display: 'Diverticular disease (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'K57.90',
							display:
								'Diverticulosis of intestine, part unspecified, without perforation or abscess without bleeding',
							userSelected: false,
						},
					],
					text: 'Diverticulosis',
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
				onsetDateTime: '2018-07-17T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d637591409',
			resource: {
				resourceType: 'Condition',
				id: 'd637591409',
				meta: {
					versionId: '637591409',
					lastUpdated: '2015-08-05T12:43:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Pain in Joint Involving Lower Leg, Pain in joint involving lower leg</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 29, 2015  5:39 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/41477466',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '719.46',
							display: 'Pain in joint involving lower leg',
							userSelected: true,
						},
					],
					text: 'Pain in Joint Involving Lower Leg',
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
				onsetDateTime: '2015-07-29T05:39:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d637591411',
			resource: {
				resourceType: 'Condition',
				id: 'd637591411',
				meta: {
					versionId: '637591411',
					lastUpdated: '2015-08-05T12:43:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Pain in Joint Involving Lower Leg, Pain in joint involving lower leg</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 29, 2015  5:39 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/41477466',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '719.46',
							display: 'Pain in joint involving lower leg',
							userSelected: true,
						},
					],
					text: 'Pain in Joint Involving Lower Leg',
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
				onsetDateTime: '2015-07-29T05:39:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d631133617',
			resource: {
				resourceType: 'Condition',
				id: 'd631133617',
				meta: {
					versionId: '631133617',
					lastUpdated: '2015-07-29T07:38:01.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Acute knee pain, Knee pain (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 29, 2015  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/41477466',
				},
				asserter: {
					reference: 'Practitioner/2806137',
					display: 'Dawn Brannan, PA-C',
				},
				dateRecorded: '2015-07-29',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '30989003',
							display: 'Knee pain (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '1043361',
							display: 'Acute knee pain',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '719.46',
							display: 'Pain in joint involving lower leg',
							userSelected: false,
						},
					],
					text: 'Acute knee pain',
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
				onsetDateTime: '2015-07-29T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1254715227',
			resource: {
				resourceType: 'Condition',
				id: 'd1254715227',
				meta: {
					versionId: '1254715227',
					lastUpdated: '2017-07-07T08:53:52.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Chest pain, Chest pain (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Unknown</p><p><b>Onset</b>: Jul  7, 2017  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/127869282',
				},
				asserter: {
					reference: 'Practitioner/9827445',
					display: 'Amy M Johnson, RN',
				},
				dateRecorded: '2017-07-07',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '29857009',
							display: 'Chest pain (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '85191',
							display: 'Chest pain',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'R07.9',
							display: 'Chest pain, unspecified',
							userSelected: false,
						},
					],
					text: 'Chest pain',
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
				verificationStatus: 'unknown',
				onsetDateTime: '2017-07-07T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037102629',
			resource: {
				resourceType: 'Condition',
				id: 'd1037102629',
				meta: {
					versionId: '1037102629',
					lastUpdated: '2016-10-25T21:33:15.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Dermatitis, unspecified, Dermatitis, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  9:33 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/115090916',
				},
				asserter: {
					reference: 'Practitioner/17639470',
					display: 'Megan A Day',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'L30.9',
							display: 'Dermatitis, unspecified',
							userSelected: true,
						},
					],
					text: 'Dermatitis, unspecified',
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
				onsetDateTime: '2016-10-25T21:33:15.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037060615',
			resource: {
				resourceType: 'Condition',
				id: 'd1037060615',
				meta: {
					versionId: '1037060615',
					lastUpdated: '2016-10-25T20:45:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Dermatitis, unspecified, Dermatitis, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:44 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'L30.9',
							display: 'Dermatitis, unspecified',
							userSelected: true,
						},
					],
					text: 'Dermatitis, unspecified',
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
				onsetDateTime: '2016-10-25T20:44:31.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1039255763',
			resource: {
				resourceType: 'Condition',
				id: 'd1039255763',
				meta: {
					versionId: '1039255763',
					lastUpdated: '2016-10-27T19:13:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Dermatitis, unspecified, Dermatitis, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  9:20 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/115090916',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'L30.9',
							display: 'Dermatitis, unspecified',
							userSelected: true,
						},
					],
					text: 'Dermatitis, unspecified',
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
				onsetDateTime: '2016-10-25T21:20:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037060621',
			resource: {
				resourceType: 'Condition',
				id: 'd1037060621',
				meta: {
					versionId: '1037060621',
					lastUpdated: '2016-10-25T20:45:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Dorsalgia, unspecified, Dorsalgia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:44 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'M54.9',
							display: 'Dorsalgia, unspecified',
							userSelected: true,
						},
					],
					text: 'Dorsalgia, unspecified',
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
				onsetDateTime: '2016-10-25T20:44:33.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1637144191',
			resource: {
				resourceType: 'Condition',
				id: 'd1637144191',
				meta: {
					versionId: '1637144191',
					lastUpdated: '2018-04-30T13:42:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Dorsalgia, unspecified, Dorsalgia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:47 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'M54.9',
							display: 'Dorsalgia, unspecified',
							userSelected: true,
						},
					],
					text: 'Dorsalgia, unspecified',
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
				onsetDateTime: '2018-04-13T18:47:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1706650325',
			resource: {
				resourceType: 'Condition',
				id: 'd1706650325',
				meta: {
					versionId: '1706650325',
					lastUpdated: '2018-07-19T11:52:34.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for screening for malignant neoplasm of colon, Encounter for screening for malignant neoplasm of colon</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z12.11',
							display: 'Encounter for screening for malignant neoplasm of colon',
							userSelected: true,
						},
					],
					text: 'Encounter for screening for malignant neoplasm of colon',
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
				onsetDateTime: '2018-07-17T13:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1706650323',
			resource: {
				resourceType: 'Condition',
				id: 'd1706650323',
				meta: {
					versionId: '1706650323',
					lastUpdated: '2018-07-19T11:52:34.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Encounter for screening for malignant neoplasm of colon, Encounter for screening for malignant neoplasm of colon</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z12.11',
							display: 'Encounter for screening for malignant neoplasm of colon',
							userSelected: true,
						},
					],
					text: 'Encounter for screening for malignant neoplasm of colon',
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
				onsetDateTime: '2018-07-17T13:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d172181361',
			resource: {
				resourceType: 'Condition',
				id: 'd172181361',
				meta: {
					versionId: '172181361',
					lastUpdated: '2013-07-11T13:49:07.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Goiter, Unspecified, Goiter, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  9, 2013  1:30 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/28845038',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '240.9',
							display: 'Goiter, unspecified',
							userSelected: true,
						},
					],
					text: 'Goiter, Unspecified',
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
				onsetDateTime: '2013-07-09T13:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d172181360',
			resource: {
				resourceType: 'Condition',
				id: 'd172181360',
				meta: {
					versionId: '172181360',
					lastUpdated: '2013-07-11T13:49:07.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Goiter, Unspecified, Goiter, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  9, 2013  1:30 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/28845038',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '240.9',
							display: 'Goiter, unspecified',
							userSelected: true,
						},
					],
					text: 'Goiter, Unspecified',
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
				onsetDateTime: '2013-07-09T13:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1704448437',
			resource: {
				resourceType: 'Condition',
				id: 'd1704448437',
				meta: {
					versionId: '1704448437',
					lastUpdated: '2018-07-17T13:56:32.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Screening for colon cancer, Screening for colon cancer</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				asserter: {
					reference: 'Practitioner/2793988',
					display: 'Lawrence Mills, MD',
				},
				dateRecorded: '2018-07-17',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '810571',
							display: 'Screening for colon cancer',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '305058001',
							display: 'Patient encounter status (finding)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z12.11',
							display: 'Encounter for screening for malignant neoplasm of colon',
							userSelected: false,
						},
					],
					text: 'Screening for colon cancer',
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
				onsetDateTime: '2018-07-17T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2044434769',
			resource: {
				resourceType: 'Condition',
				id: 'd2044434769',
				meta: {
					versionId: '2044434769',
					lastUpdated: '2019-07-24T13:03:36.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Screening for colon cancer, Screening for colon cancer</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 24, 2019  4:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/168335360',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-07-24',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '810571',
							display: 'Screening for colon cancer',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '305058001',
							display: 'Patient encounter status (finding)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z12.11',
							display: 'Encounter for screening for malignant neoplasm of colon',
							userSelected: false,
						},
					],
					text: 'Screening for colon cancer',
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
				onsetDateTime: '2019-07-24T16:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1653465001',
			resource: {
				resourceType: 'Condition',
				id: 'd1653465001',
				meta: {
					versionId: '1653465001',
					lastUpdated: '2018-05-17T14:21:02.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Nontoxic multinodular goiter, Nontoxic multinodular goiter</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  3, 2018 12:30 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/142662907',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E04.2',
							display: 'Nontoxic multinodular goiter',
							userSelected: true,
						},
					],
					text: 'Nontoxic multinodular goiter',
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
				onsetDateTime: '2018-05-03T12:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1653465003',
			resource: {
				resourceType: 'Condition',
				id: 'd1653465003',
				meta: {
					versionId: '1653465003',
					lastUpdated: '2018-05-17T14:21:02.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Nontoxic multinodular goiter, Nontoxic multinodular goiter</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  3, 2018 12:30 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/142662907',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E04.2',
							display: 'Nontoxic multinodular goiter',
							userSelected: true,
						},
					],
					text: 'Nontoxic multinodular goiter',
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
				onsetDateTime: '2018-05-03T12:30:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1202322299',
			resource: {
				resourceType: 'Condition',
				id: 'd1202322299',
				meta: {
					versionId: '1202322299',
					lastUpdated: '2017-05-08T14:35:33.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Mammographic calcification found on diagnostic imaging of breast, Mammographic calcification found on diagnostic imaging of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  2, 2017 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/124883285',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'R92.1',
							display: 'Mammographic calcification found on diagnostic imaging of breast',
							userSelected: true,
						},
					],
					text: 'Mammographic calcification found on diagnostic imaging of breast',
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
				onsetDateTime: '2017-05-02T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1202322297',
			resource: {
				resourceType: 'Condition',
				id: 'd1202322297',
				meta: {
					versionId: '1202322297',
					lastUpdated: '2017-05-08T14:35:33.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Mammographic calcification found on diagnostic imaging of breast, Mammographic calcification found on diagnostic imaging of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  2, 2017 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/124883285',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'R92.1',
							display: 'Mammographic calcification found on diagnostic imaging of breast',
							userSelected: true,
						},
					],
					text: 'Mammographic calcification found on diagnostic imaging of breast',
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
				onsetDateTime: '2017-05-02T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1704454171',
			resource: {
				resourceType: 'Condition',
				id: 'd1704454171',
				meta: {
					versionId: '1704454171',
					lastUpdated: '2018-07-17T13:56:20.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hemorrhoids, internal, Internal hemorrhoids (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				asserter: {
					reference: 'Practitioner/2793988',
					display: 'Lawrence Mills, MD',
				},
				dateRecorded: '2018-07-17',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '90458007',
							display: 'Internal hemorrhoids (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '70569',
							display: 'Hemorrhoids, internal',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'K64.8',
							display: 'Other hemorrhoids',
							userSelected: false,
						},
					],
					text: 'Hemorrhoids, internal',
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
				onsetDateTime: '2018-07-17T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037082063',
			resource: {
				resourceType: 'Condition',
				id: 'd1037082063',
				meta: {
					versionId: '1037082063',
					lastUpdated: '2016-10-25T21:02:38.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Foot callus, Foot callus</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  9:02 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '709868',
							display: 'Foot callus',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '229811005',
							display: 'Foot callus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'L84',
							display: 'Corns and callosities',
							userSelected: false,
						},
					],
					text: 'Foot callus',
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
				onsetDateTime: '2016-10-25T21:02:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d631083633',
			resource: {
				resourceType: 'Condition',
				id: 'd631083633',
				meta: {
					versionId: '631083633',
					lastUpdated: '2015-07-29T06:07:31.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Accidental fall, Accidental fall (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Unknown</p><p><b>Onset</b>: Jul 29, 2015  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/41477466',
				},
				asserter: {
					reference: 'Practitioner/6148150',
					display: 'Lauren E Taguding, RN',
				},
				dateRecorded: '2015-07-29',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '217082002',
							display: 'Accidental fall (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '84456',
							display: 'Accidental fall',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: 'E888.9',
							display: 'Unspecified fall',
							userSelected: false,
						},
					],
					text: 'Accidental fall',
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
				verificationStatus: 'unknown',
				onsetDateTime: '2015-07-29T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1264971255',
			resource: {
				resourceType: 'Condition',
				id: 'd1264971255',
				meta: {
					versionId: '1264971255',
					lastUpdated: '2017-07-19T21:58:16.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Chest pain, unspecified, Chest pain, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  7, 2017  8:38 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/127869282',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'R07.9',
							display: 'Chest pain, unspecified',
							userSelected: true,
						},
					],
					text: 'Chest pain, unspecified',
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
				onsetDateTime: '2017-07-07T08:38:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238585885',
			resource: {
				resourceType: 'Condition',
				id: 'd2238585885',
				meta: {
					versionId: '2238585885',
					lastUpdated: '2020-02-19T18:48:42.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Nicotine addiction, Nicotine addiction</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  6:48 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '50744',
							display: 'Nicotine addiction',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '56294008',
							display: 'Nicotine dependence (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'F17.200',
							display: 'Nicotine dependence, unspecified, uncomplicated',
							userSelected: false,
						},
					],
					text: 'Nicotine addiction',
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
				onsetDateTime: '2020-02-19T18:48:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d995467025',
			resource: {
				resourceType: 'Condition',
				id: 'd995467025',
				meta: {
					versionId: '995467025',
					lastUpdated: '2016-09-12T10:17:05.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Solitary cyst of left breast, Solitary cyst of left breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep  8, 2016  4:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/111269508',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N60.02',
							display: 'Solitary cyst of left breast',
							userSelected: true,
						},
					],
					text: 'Solitary cyst of left breast',
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
				onsetDateTime: '2016-09-08T16:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d814861171',
			resource: {
				resourceType: 'Condition',
				id: 'd814861171',
				meta: {
					versionId: '814861171',
					lastUpdated: '2016-03-07T15:28:27.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Solitary cyst of left breast, Solitary cyst of left breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  2, 2016  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/48369752',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N60.02',
							display: 'Solitary cyst of left breast',
							userSelected: true,
						},
					],
					text: 'Solitary cyst of left breast',
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
				onsetDateTime: '2016-03-02T13:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d814861169',
			resource: {
				resourceType: 'Condition',
				id: 'd814861169',
				meta: {
					versionId: '814861169',
					lastUpdated: '2016-03-07T15:28:27.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Solitary cyst of left breast, Solitary cyst of left breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  2, 2016  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/48369752',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'N60.02',
							display: 'Solitary cyst of left breast',
							userSelected: true,
						},
					],
					text: 'Solitary cyst of left breast',
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
				onsetDateTime: '2016-03-02T13:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d373233168',
			resource: {
				resourceType: 'Condition',
				id: 'd373233168',
				meta: {
					versionId: '373233168',
					lastUpdated: '2014-08-04T15:34:23.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other Specified Disorders of Breast, Other specified disorders of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 30, 2014  5:15 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/35002659',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.89',
							display: 'Other specified disorders of breast',
							userSelected: true,
						},
					],
					text: 'Other Specified Disorders of Breast',
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
				onsetDateTime: '2014-07-30T17:15:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d373233169',
			resource: {
				resourceType: 'Condition',
				id: 'd373233169',
				meta: {
					versionId: '373233169',
					lastUpdated: '2014-08-04T15:34:23.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other Specified Disorders of Breast, Other specified disorders of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 30, 2014  5:15 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/35002659',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.89',
							display: 'Other specified disorders of breast',
							userSelected: true,
						},
					],
					text: 'Other Specified Disorders of Breast',
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
				onsetDateTime: '2014-07-30T17:15:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d304069866',
			resource: {
				resourceType: 'Condition',
				id: 'd304069866',
				meta: {
					versionId: '304069866',
					lastUpdated: '2014-04-14T13:56:28.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other Specified Disorders of Breast, Other specified disorders of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  9, 2014 11:45 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/33099208',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.89',
							display: 'Other specified disorders of breast',
							userSelected: true,
						},
					],
					text: 'Other Specified Disorders of Breast',
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
				onsetDateTime: '2014-04-09T11:45:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d183359777',
			resource: {
				resourceType: 'Condition',
				id: 'd183359777',
				meta: {
					versionId: '183359777',
					lastUpdated: '2013-08-08T15:55:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other Specified Disorders of Breast, Other specified disorders of breast</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  9, 2013 12:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/28564408',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '611.89',
							display: 'Other specified disorders of breast',
							userSelected: true,
						},
					],
					text: 'Other Specified Disorders of Breast',
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
				onsetDateTime: '2013-07-09T12:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1254779011',
			resource: {
				resourceType: 'Condition',
				id: 'd1254779011',
				meta: {
					versionId: '1254779011',
					lastUpdated: '2017-07-07T11:59:33.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Left-sided chest wall pain, Left-sided chest wall pain</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  7, 2017  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/127869282',
				},
				asserter: {
					reference: 'Practitioner/2930656',
					display: 'Kelly H. Schutz, PA-C',
				},
				dateRecorded: '2017-07-07',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '711390',
							display: 'Left-sided chest wall pain',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '102588006',
							display: 'Chest wall pain (finding)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'R07.89',
							display: 'Other chest pain',
							userSelected: false,
						},
					],
					text: 'Left-sided chest wall pain',
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
				onsetDateTime: '2017-07-07T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037060619',
			resource: {
				resourceType: 'Condition',
				id: 'd1037060619',
				meta: {
					versionId: '1037060619',
					lastUpdated: '2016-10-25T20:45:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Overweight, Overweight</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:44 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.3',
							display: 'Overweight',
							userSelected: true,
						},
					],
					text: 'Overweight',
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
				onsetDateTime: '2016-10-25T20:44:33.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1994525335',
			resource: {
				resourceType: 'Condition',
				id: 'd1994525335',
				meta: {
					versionId: '1994525335',
					lastUpdated: '2019-06-06T12:42:21.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jun  6, 2019 12:42 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/166154744',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-06-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2019-06-06T12:42:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1932812277',
			resource: {
				resourceType: 'Condition',
				id: 'd1932812277',
				meta: {
					versionId: '1932812277',
					lastUpdated: '2019-04-01T13:23:08.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019  1:23 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/162307361',
				},
				asserter: {
					reference: 'Practitioner/20056569',
					display: 'Kiara I Moore',
				},
				dateRecorded: '2019-04-01',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2019-04-01T13:23:08.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238676571',
			resource: {
				resourceType: 'Condition',
				id: 'd2238676571',
				meta: {
					versionId: '2238676571',
					lastUpdated: '2020-02-19T19:31:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  5:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				asserter: {
					reference: 'Practitioner/3713360',
					display: 'Taiesha N Barnes',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2020-02-19T17:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1932738605',
			resource: {
				resourceType: 'Condition',
				id: 'd1932738605',
				meta: {
					versionId: '1932738605',
					lastUpdated: '2019-04-01T12:46:10.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019 12:46 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/161587674',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-04-01',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2019-04-01T12:46:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2044420643',
			resource: {
				resourceType: 'Condition',
				id: 'd2044420643',
				meta: {
					versionId: '2044467563',
					lastUpdated: '2019-07-24T13:17:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 24, 2019  1:01 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/168335360',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-07-24',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2019-07-24T13:01:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238574375',
			resource: {
				resourceType: 'Condition',
				id: 'd2238574375',
				meta: {
					versionId: '2238574375',
					lastUpdated: '2020-02-19T18:41:49.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  6:41 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2020-02-19T18:41:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1965608797',
			resource: {
				resourceType: 'Condition',
				id: 'd1965608797',
				meta: {
					versionId: '1965608797',
					lastUpdated: '2019-05-06T12:53:43.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  6, 2019 12:53 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/164383600',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-05-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2019-05-06T12:53:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1802607229',
			resource: {
				resourceType: 'Condition',
				id: 'd1802607229',
				meta: {
					versionId: '1802607229',
					lastUpdated: '2018-11-06T14:19:21.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Nov  6, 2018  2:18 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/150940999',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-11-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2018-11-06T14:18:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1932805871',
			resource: {
				resourceType: 'Condition',
				id: 'd1932805871',
				meta: {
					versionId: '1932805871',
					lastUpdated: '2019-04-01T13:23:08.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019  1:23 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/162307361',
				},
				asserter: {
					reference: 'Practitioner/20056569',
					display: 'Kiara I Moore',
				},
				dateRecorded: '2019-04-01',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2019-04-01T13:23:08.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1802683221',
			resource: {
				resourceType: 'Condition',
				id: 'd1802683221',
				meta: {
					versionId: '1802683221',
					lastUpdated: '2018-11-06T14:59:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  6, 2018  2:59 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/151673566',
				},
				asserter: {
					reference: 'Practitioner/24417902',
					display: 'Charlise S Ruffin',
				},
				dateRecorded: '2018-11-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2018-11-06T14:59:17.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238680755',
			resource: {
				resourceType: 'Condition',
				id: 'd2238680755',
				meta: {
					versionId: '2238680755',
					lastUpdated: '2020-02-19T19:31:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  5:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				asserter: {
					reference: 'Practitioner/3713360',
					display: 'Taiesha N Barnes',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2020-02-19T17:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1906591753',
			resource: {
				resourceType: 'Condition',
				id: 'd1906591753',
				meta: {
					versionId: '1906591753',
					lastUpdated: '2019-03-04T14:01:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  4, 2019  2:01 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/160164027',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-03-04',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2019-03-04T14:01:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238674125',
			resource: {
				resourceType: 'Condition',
				id: 'd2238674125',
				meta: {
					versionId: '2238674125',
					lastUpdated: '2020-02-19T19:31:19.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  5:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				asserter: {
					reference: 'Practitioner/3713360',
					display: 'Taiesha N Barnes',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2020-02-19T17:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1805067925',
			resource: {
				resourceType: 'Condition',
				id: 'd1805067925',
				meta: {
					versionId: '1805067925',
					lastUpdated: '2018-11-08T11:35:49.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2018 11:35 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/150940999',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-11-08',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2018-11-08T11:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1871366483',
			resource: {
				resourceType: 'Condition',
				id: 'd1871366483',
				meta: {
					versionId: '1871366483',
					lastUpdated: '2019-01-24T14:47:02.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jan 24, 2019  2:47 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/156522409',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-01-24',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2019-01-24T14:47:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719127585',
			resource: {
				resourceType: 'Condition',
				id: 'd1719127585',
				meta: {
					versionId: '1719127585',
					lastUpdated: '2018-08-02T16:04:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Diabetes, Diabetes</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  4:04 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '41884',
							display: 'Diabetes',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '73211009',
							display: 'Diabetes mellitus (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: false,
						},
					],
					text: 'Diabetes',
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
				onsetDateTime: '2018-08-02T16:04:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2242413669',
			resource: {
				resourceType: 'Condition',
				id: 'd2242413669',
				meta: {
					versionId: '2242413669',
					lastUpdated: '2020-02-24T14:59:09.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus without complications, Type 2 diabetes mellitus without complications</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  7:25 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: true,
						},
					],
					text: 'Type 2 diabetes mellitus without complications',
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
				onsetDateTime: '2020-02-19T19:25:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1808142557',
			resource: {
				resourceType: 'Condition',
				id: 'd1808142557',
				meta: {
					versionId: '1808142557',
					lastUpdated: '2018-11-12T15:33:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus without complications, Type 2 diabetes mellitus without complications</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  6, 2018  2:50 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/151673566',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: true,
						},
					],
					text: 'Type 2 diabetes mellitus without complications',
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
				onsetDateTime: '2018-11-06T14:50:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1808142555',
			resource: {
				resourceType: 'Condition',
				id: 'd1808142555',
				meta: {
					versionId: '1808142555',
					lastUpdated: '2018-11-12T15:33:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus without complications, Type 2 diabetes mellitus without complications</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  6, 2018  2:50 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/151673566',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: true,
						},
					],
					text: 'Type 2 diabetes mellitus without complications',
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
				onsetDateTime: '2018-11-06T14:50:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2242413667',
			resource: {
				resourceType: 'Condition',
				id: 'd2242413667',
				meta: {
					versionId: '2242413667',
					lastUpdated: '2020-02-24T14:59:09.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus without complications, Type 2 diabetes mellitus without complications</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  7:25 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: true,
						},
					],
					text: 'Type 2 diabetes mellitus without complications',
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
				onsetDateTime: '2020-02-19T19:25:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1946163915',
			resource: {
				resourceType: 'Condition',
				id: 'd1946163915',
				meta: {
					versionId: '1946163915',
					lastUpdated: '2019-04-15T13:34:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus without complications, Type 2 diabetes mellitus without complications</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019  1:16 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/162307361',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E11.9',
							display: 'Type 2 diabetes mellitus without complications',
							userSelected: true,
						},
					],
					text: 'Type 2 diabetes mellitus without complications',
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
				onsetDateTime: '2019-04-01T13:16:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1264971257',
			resource: {
				resourceType: 'Condition',
				id: 'd1264971257',
				meta: {
					versionId: '1264971257',
					lastUpdated: '2017-07-19T21:58:16.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other chest pain, Other chest pain</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul  7, 2017  8:38 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/127869282',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'R07.89',
							display: 'Other chest pain',
							userSelected: true,
						},
					],
					text: 'Other chest pain',
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
				onsetDateTime: '2017-07-07T08:38:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2242413675',
			resource: {
				resourceType: 'Condition',
				id: 'd2242413675',
				meta: {
					versionId: '2242413675',
					lastUpdated: '2020-02-24T14:59:09.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Vitamin D deficiency, unspecified, Vitamin D deficiency, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  7:25 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E55.9',
							display: 'Vitamin D deficiency, unspecified',
							userSelected: true,
						},
					],
					text: 'Vitamin D deficiency, unspecified',
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
				onsetDateTime: '2020-02-19T19:25:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719074601',
			resource: {
				resourceType: 'Condition',
				id: 'd1719074601',
				meta: {
					versionId: '1719076605',
					lastUpdated: '2018-08-02T15:36:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Bursitis of posterior heel, Bursitis of posterior heel</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  3:33 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '24595592',
							display: 'Bursitis of posterior heel',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '240033006',
							display: 'Postcalcaneal bursitis (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'M77.50',
							display: 'Other enthesopathy of unspecified foot',
							userSelected: false,
						},
					],
					text: 'Bursitis of posterior heel',
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
				onsetDateTime: '2018-08-02T15:33:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d637591413',
			resource: {
				resourceType: 'Condition',
				id: 'd637591413',
				meta: {
					versionId: '637591413',
					lastUpdated: '2015-08-05T12:43:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Tobacco Use Disorder, Tobacco use disorder</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 29, 2015  5:39 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/41477466',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '305.1',
							display: 'Tobacco use disorder',
							userSelected: true,
						},
					],
					text: 'Tobacco Use Disorder',
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
				onsetDateTime: '2015-07-29T05:39:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1965583705',
			resource: {
				resourceType: 'Condition',
				id: 'd1965583705',
				meta: {
					versionId: '1965583705',
					lastUpdated: '2019-05-06T12:41:56.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May  6, 2019 12:41 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/164383600',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-05-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2019-05-06T12:41:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2044444235',
			resource: {
				resourceType: 'Condition',
				id: 'd2044444235',
				meta: {
					versionId: '2044467565',
					lastUpdated: '2019-07-24T13:17:29.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 24, 2019  1:09 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/168335360',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-07-24',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2019-07-24T13:09:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1805067917',
			resource: {
				resourceType: 'Condition',
				id: 'd1805067917',
				meta: {
					versionId: '1805067921',
					lastUpdated: '2018-11-08T11:35:40.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2018 11:35 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/150940999',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-11-08',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2018-11-08T11:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1871297097',
			resource: {
				resourceType: 'Condition',
				id: 'd1871297097',
				meta: {
					versionId: '1871297097',
					lastUpdated: '2019-01-24T14:16:45.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jan 24, 2019  2:16 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/156522409',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-01-24',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2019-01-24T14:16:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1932734097',
			resource: {
				resourceType: 'Condition',
				id: 'd1932734097',
				meta: {
					versionId: '1932734097',
					lastUpdated: '2019-04-01T12:46:20.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019 12:46 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/161587674',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-04-01',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2019-04-01T12:46:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238569665',
			resource: {
				resourceType: 'Condition',
				id: 'd2238569665',
				meta: {
					versionId: '2238569665',
					lastUpdated: '2020-02-19T18:41:54.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  6:41 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2020-02-19T18:41:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719000967',
			resource: {
				resourceType: 'Condition',
				id: 'd1719000967',
				meta: {
					versionId: '1719087039',
					lastUpdated: '2018-08-02T15:41:06.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  2:58 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2018-08-02T14:58:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1906560501',
			resource: {
				resourceType: 'Condition',
				id: 'd1906560501',
				meta: {
					versionId: '1906560501',
					lastUpdated: '2019-03-04T13:48:13.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  4, 2019  1:48 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/160164027',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-03-04',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2019-03-04T13:48:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1994531195',
			resource: {
				resourceType: 'Condition',
				id: 'd1994531195',
				meta: {
					versionId: '1994531195',
					lastUpdated: '2019-06-06T12:37:50.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Obesity, Obesity</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jun  6, 2019 12:37 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/166154744',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2019-06-06',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '92278',
							display: 'Obesity',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '414916001',
							display: 'Obesity (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.9',
							display: 'Obesity, unspecified',
							userSelected: false,
						},
					],
					text: 'Obesity',
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
				onsetDateTime: '2019-06-06T12:37:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238680801',
			resource: {
				resourceType: 'Condition',
				id: 'd2238680801',
				meta: {
					versionId: '2238680801',
					lastUpdated: '2020-02-19T19:31:19.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Vitamin D deficiency, Vitamin D deficiency (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  5:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				asserter: {
					reference: 'Practitioner/3713360',
					display: 'Taiesha N Barnes',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '34713006',
							display: 'Vitamin D deficiency (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '88575',
							display: 'Vitamin D deficiency',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E55.9',
							display: 'Vitamin D deficiency, unspecified',
							userSelected: false,
						},
					],
					text: 'Vitamin D deficiency',
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
				onsetDateTime: '2020-02-19T17:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238636845',
			resource: {
				resourceType: 'Condition',
				id: 'd2238636845',
				meta: {
					versionId: '2238636845',
					lastUpdated: '2020-02-19T19:09:15.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Vitamin D deficiency, Vitamin D deficiency (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  7:09 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '34713006',
							display: 'Vitamin D deficiency (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '88575',
							display: 'Vitamin D deficiency',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E55.9',
							display: 'Vitamin D deficiency, unspecified',
							userSelected: false,
						},
					],
					text: 'Vitamin D deficiency',
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
				onsetDateTime: '2020-02-19T19:09:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1623825525',
			resource: {
				resourceType: 'Condition',
				id: 'd1623825525',
				meta: {
					versionId: '1623825525',
					lastUpdated: '2018-04-13T18:48:23.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Physical exam, Patient encounter status (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:48 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				asserter: {
					reference: 'Practitioner/5979114',
					display: 'Tonya A Wiggins',
				},
				dateRecorded: '2018-04-13',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '305058001',
							display: 'Patient encounter status (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '810352',
							display: 'Physical exam',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: false,
						},
					],
					text: 'Physical exam',
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
				onsetDateTime: '2018-04-13T18:48:21.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037053935',
			resource: {
				resourceType: 'Condition',
				id: 'd1037053935',
				meta: {
					versionId: '1037053935',
					lastUpdated: '2016-10-25T20:37:51.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Physical exam, Patient encounter status (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:37 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '305058001',
							display: 'Patient encounter status (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '810352',
							display: 'Physical exam',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: false,
						},
					],
					text: 'Physical exam',
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
				onsetDateTime: '2016-10-25T20:37:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1621656615',
			resource: {
				resourceType: 'Condition',
				id: 'd1621656615',
				meta: {
					versionId: '1621656615',
					lastUpdated: '2018-04-11T20:35:23.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Physical exam, Patient encounter status (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 11, 2018  8:35 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/140948433',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2018-04-11',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '305058001',
							display: 'Patient encounter status (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '810352',
							display: 'Physical exam',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z00.00',
							display: 'Encounter for general adult medical examination without abnormal findings',
							userSelected: false,
						},
					],
					text: 'Physical exam',
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
				onsetDateTime: '2018-04-11T20:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1946163913',
			resource: {
				resourceType: 'Condition',
				id: 'd1946163913',
				meta: {
					versionId: '1946163913',
					lastUpdated: '2019-04-15T13:34:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, unspecified, Hyperlipidemia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019  1:16 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/162307361',
				},
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
				onsetDateTime: '2019-04-01T13:16:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2242413673',
			resource: {
				resourceType: 'Condition',
				id: 'd2242413673',
				meta: {
					versionId: '2242413673',
					lastUpdated: '2020-02-24T14:59:09.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, unspecified, Hyperlipidemia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  7:25 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
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
				onsetDateTime: '2020-02-19T19:25:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1946163911',
			resource: {
				resourceType: 'Condition',
				id: 'd1946163911',
				meta: {
					versionId: '1946163911',
					lastUpdated: '2019-04-15T13:34:48.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hyperlipidemia, unspecified, Hyperlipidemia, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  1, 2019  1:16 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/162307361',
				},
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
				onsetDateTime: '2019-04-01T13:16:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d631083635',
			resource: {
				resourceType: 'Condition',
				id: 'd631083635',
				meta: {
					versionId: '631083635',
					lastUpdated: '2015-07-29T06:07:35.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Knee pain, left, Knee pain (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Unknown</p><p><b>Onset</b>: Jul 29, 2015  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/41477466',
				},
				asserter: {
					reference: 'Practitioner/6148150',
					display: 'Lauren E Taguding, RN',
				},
				dateRecorded: '2015-07-29',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '30989003',
							display: 'Knee pain (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '845843',
							display: 'Knee pain, left',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-9-cm',
							code: '719.46',
							display: 'Pain in joint involving lower leg',
							userSelected: false,
						},
					],
					text: 'Knee pain, left',
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
				verificationStatus: 'unknown',
				onsetDateTime: '2015-07-29T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238674123',
			resource: {
				resourceType: 'Condition',
				id: 'd2238674123',
				meta: {
					versionId: '2238674123',
					lastUpdated: '2020-02-19T19:31:18.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hypertension, Hypertension</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  5:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/179116267',
				},
				asserter: {
					reference: 'Practitioner/3713360',
					display: 'Taiesha N Barnes',
				},
				dateRecorded: '2020-02-19',
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
				onsetDateTime: '2020-02-19T17:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238598175',
			resource: {
				resourceType: 'Condition',
				id: 'd2238598175',
				meta: {
					versionId: '2238598175',
					lastUpdated: '2020-02-19T18:53:49.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Hypertension, Hypertension</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  5:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
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
				onsetDateTime: '2020-02-19T17:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1623823153',
			resource: {
				resourceType: 'Condition',
				id: 'd1623823153',
				meta: {
					versionId: '1623823153',
					lastUpdated: '2018-04-13T18:48:22.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Overweight, Overweight (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:48 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				asserter: {
					reference: 'Practitioner/5979114',
					display: 'Tonya A Wiggins',
				},
				dateRecorded: '2018-04-13',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '238131007',
							display: 'Overweight (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '50813',
							display: 'Overweight',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.3',
							display: 'Overweight',
							userSelected: false,
						},
					],
					text: 'Overweight',
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
				onsetDateTime: '2018-04-13T18:48:20.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037054399',
			resource: {
				resourceType: 'Condition',
				id: 'd1037054399',
				meta: {
					versionId: '1037054399',
					lastUpdated: '2016-10-25T20:38:23.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Overweight, Overweight (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:38 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '238131007',
							display: 'Overweight (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '50813',
							display: 'Overweight',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.3',
							display: 'Overweight',
							userSelected: false,
						},
					],
					text: 'Overweight',
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
				onsetDateTime: '2016-10-25T20:38:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1621656705',
			resource: {
				resourceType: 'Condition',
				id: 'd1621656705',
				meta: {
					versionId: '1621656705',
					lastUpdated: '2018-04-11T20:35:43.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Overweight, Overweight (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 11, 2018  8:35 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/140948433',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2018-04-11',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '238131007',
							display: 'Overweight (finding)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '50813',
							display: 'Overweight',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'E66.3',
							display: 'Overweight',
							userSelected: false,
						},
					],
					text: 'Overweight',
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
				onsetDateTime: '2018-04-11T20:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1623823155',
			resource: {
				resourceType: 'Condition',
				id: 'd1623823155',
				meta: {
					versionId: '1623823155',
					lastUpdated: '2018-04-13T18:48:22.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: BACK PAIN, Backache (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 13, 2018  6:48 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/141813624',
				},
				asserter: {
					reference: 'Practitioner/5979114',
					display: 'Tonya A Wiggins',
				},
				dateRecorded: '2018-04-13',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '161891005',
							display: 'Backache (finding)',
							userSelected: true,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'M54.9',
							display: 'Dorsalgia, unspecified',
							userSelected: false,
						},
					],
					text: 'BACK PAIN',
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
				onsetDateTime: '2018-04-13T18:48:21.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037054443',
			resource: {
				resourceType: 'Condition',
				id: 'd1037054443',
				meta: {
					versionId: '1037054443',
					lastUpdated: '2016-10-25T20:38:27.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: BACK PAIN, Backache (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:38 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '161891005',
							display: 'Backache (finding)',
							userSelected: true,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'M54.9',
							display: 'Dorsalgia, unspecified',
							userSelected: false,
						},
					],
					text: 'BACK PAIN',
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
				onsetDateTime: '2016-10-25T20:38:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1621656641',
			resource: {
				resourceType: 'Condition',
				id: 'd1621656641',
				meta: {
					versionId: '1621656641',
					lastUpdated: '2018-04-11T20:35:28.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: BACK PAIN, Backache (finding)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr 11, 2018  8:35 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/140948433',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2018-04-11',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '161891005',
							display: 'Backache (finding)',
							userSelected: true,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'M54.9',
							display: 'Dorsalgia, unspecified',
							userSelected: false,
						},
					],
					text: 'BACK PAIN',
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
				onsetDateTime: '2018-04-11T20:35:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1704451789',
			resource: {
				resourceType: 'Condition',
				id: 'd1704451789',
				meta: {
					versionId: '1704451789',
					lastUpdated: '2018-07-17T13:55:54.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Colon polyp, Colon polyp</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  4:00 A.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				asserter: {
					reference: 'Practitioner/2793988',
					display: 'Lawrence Mills, MD',
				},
				dateRecorded: '2018-07-17',
				code: {
					coding: [
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '40795',
							display: 'Colon polyp',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '68496003',
							display: 'Polyp of colon (disorder)',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'K63.5',
							display: 'Polyp of colon',
							userSelected: false,
						},
					],
					text: 'Colon polyp',
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
				onsetDateTime: '2018-07-17T04:00:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1719076279',
			resource: {
				resourceType: 'Condition',
				id: 'd1719076279',
				meta: {
					versionId: '1719076795',
					lastUpdated: '2018-08-02T15:37:00.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Left carpal tunnel syndrome, Carpal tunnel syndrome (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Aug  2, 2018  3:36 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/146383692',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-08-02',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '57406009',
							display: 'Carpal tunnel syndrome (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '848057',
							display: 'Left carpal tunnel syndrome',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'G56.02',
							display: 'Carpal tunnel syndrome, left upper limb',
							userSelected: false,
						},
					],
					text: 'Left carpal tunnel syndrome',
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
				onsetDateTime: '2018-08-02T15:36:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1802608035',
			resource: {
				resourceType: 'Condition',
				id: 'd1802608035',
				meta: {
					versionId: '1805067919',
					lastUpdated: '2018-11-08T11:35:42.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Left carpal tunnel syndrome, Carpal tunnel syndrome (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Nov  6, 2018  2:19 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/150940999',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2018-11-06',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '57406009',
							display: 'Carpal tunnel syndrome (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '848057',
							display: 'Left carpal tunnel syndrome',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'G56.02',
							display: 'Carpal tunnel syndrome, left upper limb',
							userSelected: false,
						},
					],
					text: 'Left carpal tunnel syndrome',
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
				onsetDateTime: '2018-11-06T14:19:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d768200451',
			resource: {
				resourceType: 'Condition',
				id: 'd768200451',
				meta: {
					versionId: '768200451',
					lastUpdated: '2016-01-08T14:07:12.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Other long term (current) drug therapy, Other long term (current) drug therapy</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jan  7, 2016  8:56 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/46708780',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'Z79.899',
							display: 'Other long term (current) drug therapy',
							userSelected: true,
						},
					],
					text: 'Other long term (current) drug therapy',
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
				onsetDateTime: '2016-01-07T20:56:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d2238573347',
			resource: {
				resourceType: 'Condition',
				id: 'd2238573347',
				meta: {
					versionId: '2238573347',
					lastUpdated: '2020-02-19T18:41:58.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Eczema, Eczema (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Feb 19, 2020  6:41 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/177088534',
				},
				asserter: {
					reference: 'Practitioner/5871968',
					display: 'Sean Shieh, MD',
				},
				dateRecorded: '2020-02-19',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '43116000',
							display: 'Eczema (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '42603',
							display: 'Eczema',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'L30.9',
							display: 'Dermatitis, unspecified',
							userSelected: false,
						},
					],
					text: 'Eczema',
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
				onsetDateTime: '2020-02-19T18:41:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1037054125',
			resource: {
				resourceType: 'Condition',
				id: 'd1037054125',
				meta: {
					versionId: '1037054125',
					lastUpdated: '2016-10-25T20:38:11.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Eczema, Eczema (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct 25, 2016  8:38 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/113953296',
				},
				asserter: {
					reference: 'Practitioner/1415296',
					display: 'Sireesh K. Tripuraneni, MD',
				},
				dateRecorded: '2016-10-25',
				code: {
					coding: [
						{
							system: 'http://snomed.info/sct',
							code: '43116000',
							display: 'Eczema (disorder)',
							userSelected: false,
						},
						{
							system: 'http://e-imo.com/products/problem-it',
							code: '42603',
							display: 'Eczema',
							userSelected: false,
						},
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'L30.9',
							display: 'Dermatitis, unspecified',
							userSelected: false,
						},
					],
					text: 'Eczema',
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
				onsetDateTime: '2016-10-25T20:38:00.000Z',
			},
		},
		{
			fullUrl:
				'https://fhir-ehr.cerner.com/dstu2/c2a9aaad-29f4-4d5d-87b0-388c13a9b433/Condition/d1706650327',
			resource: {
				resourceType: 'Condition',
				id: 'd1706650327',
				meta: {
					versionId: '1706650327',
					lastUpdated: '2018-07-19T11:52:34.000Z',
				},
				text: {
					status: 'generated',
					div:
						'<div><p><b>Condition</b></p><p><b>Patient</b>: BROWN, MARGARET SHEILA</p><p><b>Diagnosis</b>: Polyp of colon, Polyp of colon</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Jul 17, 2018  1:00 P.M. UTC</p></div>',
				},
				patient: {
					reference: 'Patient/1727024',
					display: 'BROWN, MARGARET SHEILA',
				},
				encounter: {
					reference: 'Encounter/143505233',
				},
				code: {
					coding: [
						{
							system: 'http://hl7.org/fhir/sid/icd-10-cm',
							code: 'K63.5',
							display: 'Polyp of colon',
							userSelected: true,
						},
					],
					text: 'Polyp of colon',
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
				onsetDateTime: '2018-07-17T13:00:00.000Z',
			},
		},
	],
};
