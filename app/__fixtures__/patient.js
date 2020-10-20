const patientFixture = ({ race, name, gender, birthDate, raw } = {}) => {
	const resource = {
		resourceType: 'Patient',
		id: '27385503',
		meta: {
			versionId: '34',
			lastUpdated: '2019-10-28T15:27:08.000Z',
		},
		text: {
			status: 'generated',
			div:
				'<div><p><b>Patient</b></p><p><b>Name</b>: ZZZTESTONC, HEART</p><p><b>DOB</b>: Jan  5, 1954</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p><p><b>Status</b>: Active</p></div>',
		},
		extension: [
			{
				url: 'http://fhir.org/guides/argonaut/StructureDefinition/argo-race',
				extension: race
					? race
					: [
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
		name: name
			? name
			: [
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
		gender: gender ? gender : 'Male',
		birthDate: birthDate ? birthDate : '1954-01-05',
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
	return !raw ? { fullUrl: 'https://example.com', resource: resource } : resource;
};

module.exports = {
	patient: patientFixture(),
	patientFixture,
};
