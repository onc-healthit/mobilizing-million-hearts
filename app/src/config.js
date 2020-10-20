module.exports = {
	clientId: process.env.CLIENT_ID,

	scope: process.env.SCOPE,
	iss: process.env.ISS,

	redirectUri: process.env.REDIRECT_URI,

	bloodPressureCutoff: process.env.BLOODPRESSURE_CUTOFF || 5, // years
	cholesterolCutoff: process.env.CHOLESTEROL_CUTOFF || 5,
	accGuidelines:
		'http://www.onlinejacc.org/sites/default/files/additional_assets/guidelines/Prevention-Guidelines-Made-Simple.pdf',
	medstarGuidelines: '/MedStarGuidelines.pdf',
	riskEnhancingFactors: '/RiskEnhancingFactors.pdf',

	documentReferenceConfiguration: {
		coding: [
			{
				system: 'http://loinc.org',
				code: '34133-9', // -> External CCDA Document
				// code: '3374547', -> Depart Summary
			},
		],
		docStatus: {
			coding: [{ system: 'http://hl7.org/fhir/composition-status', code: 'final' }],
		},
	},

	features: {
		auditing: process.env.AUDITING === 'true' || false,
		developerLog: process.env.ENABLE_DEVELOPERS_LOG === 'true' || false,
		feedback: true,
	},
};
