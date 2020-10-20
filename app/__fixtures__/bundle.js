const bundleFixture = resources => {
	return {
		resourceType: 'Bundle',
		id: '78c8d67c-eb1c-4cf1-9209-cd1dc8332f37',
		type: 'searchset',
		total: resources ? resources.length : 0,
		link: [
			{
				relation: 'self',
				url:
					'https://fhir-myrecord.sandboxcerner.com/dstu2/1d09dff8-83bc-4001-92ae-c4b3ac10ca06/MedicationStatement?patient=27385503',
			},
		],
		entry: resources ? resources : [],
	};
};

module.exports = {
	bundle: bundleFixture(),
	bundleFixture,
};
