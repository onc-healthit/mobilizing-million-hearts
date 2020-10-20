const conditionFixture = options => {
	let code, raw, clinicalStatus;
	if (options) {
		({ code, raw, clinicalStatus } = options);
	}
	const resource = {
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
		code: code
			? code
			: {
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
		clinicalStatus: clinicalStatus ? clinicalStatus : 'active',
		verificationStatus: 'confirmed',
		onsetDateTime: '2019-11-08T17:00:00.000Z',
	};
	return !raw ? { fullUrl: 'https://example.com', resource: resource } : resource;
};

module.exports = {
	condition: conditionFixture(),
	conditionFixture,
};
