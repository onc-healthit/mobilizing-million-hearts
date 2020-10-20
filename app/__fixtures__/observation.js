const observationFixture = options => {
	let code, valueCodeableConcept, effectiveDateTime, component, valueQuantity, raw;
	if (options) {
		({ code, valueCodeableConcept, effectiveDateTime, component, valueQuantity, raw } = options);
	}
	const resource = {
		resourceType: 'Observation',
		id: '1268-383304599',
		meta: {
			versionId: '383304599',
			lastUpdated: '2019-10-25T18:36:58.000Z',
		},
		text: {
			status: 'generated',
			div:
				'<div><p><b>Observation</b></p><p><b>Patient</b>: 27385503</p><p><b>Date</b>: Oct 25, 2019  6:36 P.M. UTC</p><p><b>Status</b>: Final</p><p><b>Category</b>: Social History</p><p><b>Code</b>: Tobacco</p></div>',
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
		code: code
			? code
			: {
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
		valueCodeableConcept:
			valueCodeableConcept !== undefined
				? valueCodeableConcept
				: {
						coding: [
							{
								system: 'http://snomed.info/sct',
								code: '44982132131302',
								display: 'Does not smoke anymore',
							},
						],
						text: 'Does not smoke anymore',
				  },
		issued: '2019-11-22T16:49:00.000Z',
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
		effectiveDateTime: effectiveDateTime ? effectiveDateTime : '2019-05-15T12:56:33.000Z',
		related: [
			{
				type: 'has-member',
				target: {
					reference: 'Observation/383304599-q102250923',
				},
			},
			{
				type: 'has-member',
				target: {
					reference: 'Observation/383304599-q102251039-0',
				},
			},
			{
				type: 'has-member',
				target: {
					reference: 'Observation/383304599-q102251039-1',
				},
			},
			{
				type: 'has-member',
				target: {
					reference: 'Observation/383304599-q102251039-2',
				},
			},
		],
		valueQuantity: valueQuantity
			? valueQuantity
			: {
					value: 5,
					unit: 'mg',
			  },
		component: component
			? component
			: [
					{
						code: {
							coding: [{ system: 'http://loinc.org', code: '8480-6' }],
							text: 'Systolic Blood Pressure',
						},
						valueQuantity: { value: 129, unit: 'mmHg', system: 'http://unitsofmeasure.org', code: 'mm[Hg]' },
						referenceRange: [
							{
								low: { value: 80, unit: 'mmHg', system: 'http://unitsofmeasure.org', code: 'mm[Hg]' },
								high: { value: 120, unit: 'mmHg', system: 'http://unitsofmeasure.org', code: 'mm[Hg]' },
								text: '80-120 mmHg',
							},
						],
					},
					{
						code: {
							coding: [{ system: 'http://loinc.org', code: '8462-4' }],
							text: 'Diastolic Blood Pressure',
						},
						valueQuantity: { value: 85, unit: 'mmHg', system: 'http://unitsofmeasure.org', code: 'mm[Hg]' },
						referenceRange: [
							{
								low: { value: 70, unit: 'mmHg', system: 'http://unitsofmeasure.org', code: 'mm[Hg]' },
								high: { value: 80, unit: 'mmHg', system: 'http://unitsofmeasure.org', code: 'mm[Hg]' },
								text: '70-80 mmHg',
							},
						],
					},
			  ],
	};
	return !raw ? { fullUrl: 'https://example.com', resource: resource } : resource;
};

module.exports = {
	observation: observationFixture(),
	observationFixture,
};
