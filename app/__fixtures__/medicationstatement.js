const medicationStatementFixture = options => {
	let medicationCodeableConcept, raw;
	if (options) {
		({ medicationCodeableConcept, raw } = options);
	}
	const resource = {
		resourceType: 'MedicationStatement',
		id: '10784954317',
		meta: {
			versionId: '0',
			lastUpdated: '2019-11-08T18:35:51.000Z',
		},
		text: {
			status: 'generated',
			div:
				'<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: ZZZTESTONC, HEART</p><p><b>Medication Name</b>: aspirin (Adult Aspirin 325 mg oral tablet)</p><p><b>Dosage Instructions</b>: 325 mg, 1 tab, PO, Daily, 30 tab, 0 Refill(s)</p><p><b>Status</b>: Intended</p><p><b>Taken</b>: Yes</p></div>',
		},
		extension: [
			{
				url: 'https://fhir-ehr.cerner.com/dstu2/StructureDefinition/medication-statement-category',
				valueCodeableConcept: {
					coding: [
						{
							system: 'http://hl7.org/fhir/medication-statement-category',
							code: 'community',
							display: 'Community',
						},
					],
					text: 'Community',
				},
			},
		],
		patient: {
			reference: 'Patient/27385503',
			display: 'ZZZTESTONC, HEART',
		},
		informationSource: {
			reference: 'Practitioner/27159269',
			display: 'Ronald Romero Barrientos',
		},
		dateAsserted: '2019-11-08T13:34:18.000-05:00',
		status: 'intended',
		wasNotTaken: false,
		reasonForUseCodeableConcept: {
			coding: [
				{
					system: 'http://hl7.org/fhir/sid/icd-10-cm',
					code: 'Z72.0',
					display: 'Tobacco use',
					userSelected: true,
				},
			],
			text: 'Tobacco user',
		},
		effectivePeriod: {
			start: '2019-11-08T13:34:00.000-05:00',
		},
		supportingInformation: [
			{
				reference: 'MedicationOrder/10784954317',
			},
		],
		medicationCodeableConcept: medicationCodeableConcept
			? medicationCodeableConcept
			: {
					coding: [
						{
							system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
							code: '617312',
							display: 'atorvastatin 10 MG Oral Tablet',
							userSelected: false,
						},
					],
					text: 'atorvastatin (atorvastatin 10 mg oral tablet)',
			  },
		dosage: [
			{
				text: '325 mg, 1 tab, PO, Daily, 30 tab, 0 Refill(s)',
				_text: {
					extension: [
						{
							url: 'https://fhir-ehr.cerner.com/dstu2/StructureDefinition/patient-friendly-display',
							valueString: '1 Tablet(s) By Mouth every day. Refills: 0.',
						},
					],
				},
				timing: {
					repeat: {
						boundsPeriod: {
							start: '2019-11-08T13:34:00.000-05:00',
						},
					},
					code: {
						text: 'Daily',
						_text: {
							extension: [
								{
									url: 'https://fhir-ehr.cerner.com/dstu2/StructureDefinition/patient-friendly-display',
									valueString: 'every day',
								},
							],
						},
					},
				},
				route: {
					coding: [
						{
							system: 'http://ncimeta.nci.nih.gov',
							code: 'C38288',
							display: 'ORAL',
							userSelected: false,
						},
						{
							system: 'http://snomed.info/sct',
							code: '26643006',
							display: 'Oral route (qualifier value)',
							userSelected: false,
						},
					],
					text: 'PO',
					_text: {
						extension: [
							{
								url: 'https://fhir-ehr.cerner.com/dstu2/StructureDefinition/patient-friendly-display',
								valueString: 'By Mouth',
							},
						],
					},
				},
				quantityQuantity: {
					value: 1,
					unit: 'tab',
					_unit: {
						extension: [
							{
								url: 'https://fhir-ehr.cerner.com/dstu2/StructureDefinition/patient-friendly-display',
								valueString: 'Tablet(s)',
							},
						],
					},
					system: 'http://unitsofmeasure.org',
					code: '{tbl}',
				},
			},
		],
	};
	return !raw ? { fullUrl: 'https://example/com', resource: resource } : resource;
};

module.exports = {
	medicationStatement: medicationStatementFixture(),
	medicationStatementFixture,
};
