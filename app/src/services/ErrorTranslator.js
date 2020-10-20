const errors = [
	{
		label: 'Session expired. Please reload the application.',
		regex: /No 'state' parameter found/i,
	},
	{
		label: 'Invalid permissions. Please check your access to this patient and try again.',
		regex: /invalid_grant/i,
	},
	{
		label: 'The server did not respond. Please try again.',
		regex: /Gateway Timeout/i,
	},
	{
		label: 'An error has occured.',
		regex: /TypeError: Unable to get property/i,
	},
	{
		label: 'An error has occured.',
		regex: /SyntaxError: Invalid character/i,
	},
];

export default class ErrorTranslator {
	translate(error) {
		const found = errors.find(({ regex }) => {
			return regex.test(error);
		});

		if (found) {
			return found.label;
		}

		return 'An error has occured.';
	}
}
