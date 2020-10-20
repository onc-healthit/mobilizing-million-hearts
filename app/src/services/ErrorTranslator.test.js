import ErrorTranslator from './ErrorTranslator';

const errorTranslator = new ErrorTranslator();

describe('ErrorTranslator tests - Translate common issues into nicer messages', () => {
	test("'No state parameter' should translate correctly", () => {
		const error = "Error: No 'state' parameter found. Please (re)launch the app.";
		const translation = errorTranslator.translate(error);

		expect(translation).toEqual('Session expired. Please reload the application.');
	});

	test("'Invalid permissions' should translate correctly", () => {
		const error = `HttpError: 400 
    URL: 
    invalid_grant`;
		const translation = errorTranslator.translate(error);

		expect(translation).toEqual(
			'Invalid permissions. Please check your access to this patient and try again.'
		);
	});

	test("'HttpError: 504 Gateway Timeout' should translate correctly", () => {
		const error = 'HttpError: 504 Gateway Timeout';
		const translation = errorTranslator.translate(error);

		expect(translation).toEqual('The server did not respond. Please try again.');
	});

	test("'Unable to get property' should translate correctly", () => {
		const error = "TypeError: Unable to get property 'url' of undefined or null reference";
		const translation = errorTranslator.translate(error);

		expect(translation).toEqual('An error has occured.');
	});

	test("'SyntaxError: Invalid character' should translate correctly", () => {
		const error = 'SyntaxError: Invalid character';
		const translation = errorTranslator.translate(error);

		expect(translation).toEqual('An error has occured.');
	});

	test('Something completely different', () => {
		const error = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem';
		const translation = errorTranslator.translate(error);

		expect(translation).toEqual('An error has occured.');
	});
});
