module.exports = {
	serverStarted: {
		name: 'SERVER_STARTED',
		description: 'The backend server was launched and is ready to serve requests',
	},
	rootRequested: {
		name: 'ROOT_REQUESTED',
		description: "The backend server received a request on '/'.",
	},
	launchRequested: {
		name: 'LAUNCH_REQUESTED',
		description:
			"The backend server received a request on '/launch.html'. This is likely a SMART On FHIR launch.",
	},
};
