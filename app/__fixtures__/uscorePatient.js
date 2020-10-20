module.exports = {
	resourceType: 'Patient',
	id: '11026239',
	meta: {
		versionId: '289',
		lastUpdated: '2020-04-01T12:14:37.000Z',
	},
	text: {
		status: 'extensions',
		div:
			'<div><p><b>Patient</b></p><p><b>Name</b>: ZZZCPOE, TESTPTA</p><p><b>DOB</b>: Mar 15, 1980</p><p><b>Birth Sex</b>: Male</p><p><b>Administrative Gender</b>: Female</p><p><b>Marital Status</b>: Single</p><p><b>Status</b>: Active</p></div>',
	},
	extension: [
		{
			url: 'http://fhir.org/guides/argonaut/StructureDefinition/argo-birthsex',
			valueCode: 'M',
		},
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
			value: '23766333',
			_value: {
				extension: [
					{
						url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
						valueString: '023766333',
					},
				],
			},
			period: {
				start: '2014-03-03T21:55:18.000Z',
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
			value: '2260957',
			_value: {
				extension: [
					{
						url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
						valueString: 'GUH-000002260957',
					},
				],
			},
			period: {
				start: '2014-03-03T21:55:18.000Z',
			},
		},
	],
	active: true,
	name: [
		{
			use: 'official',
			text: 'ZZZCPOE, TESTPTA',
			family: ['ZZZCPOE'],
			given: ['TESTPTA'],
			period: {
				start: '2014-03-03T21:55:18.000Z',
			},
		},
		{
			use: 'old',
			text: 'ZZZCPOE, TESTPTA',
			family: ['ZZZCPOE'],
			given: ['TESTPTA'],
			period: {
				end: '2014-03-03T21:55:18.000Z',
			},
		},
	],
	telecom: [
		{
			system: 'phone',
			value: '(202)444-0000',
			use: 'home',
			period: {
				start: '2014-03-03T21:55:18.000Z',
			},
		},
	],
	gender: 'female',
	birthDate: '1980-03-15',
	address: [
		{
			use: 'home',
			text: '3800 RESERVOIR RD NW\nWASHINGTON, DC 20007\nUSA',
			line: ['3800 RESERVOIR RD NW'],
			city: 'WASHINGTON',
			district: 'District of Columbia',
			state: 'DC',
			postalCode: '20007',
			country: 'USA',
			period: {
				start: '2014-03-03T21:55:18.000Z',
			},
		},
	],
	maritalStatus: {
		coding: [
			{
				system: 'http://hl7.org/fhir/marital-status',
				code: 'U',
				display: 'Unmarried',
				userSelected: false,
			},
		],
		text: 'Single',
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
	careProvider: [
		{
			reference: 'Practitioner/1415232',
			display: 'Unassigned Unassigned',
		},
	],
};
