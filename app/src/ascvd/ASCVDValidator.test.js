import {
	nullOrUnd,
	validateReading,
	isValidAge,
	isValidDBP,
	isValidHDL,
	isValidLDL,
	isValidSBP,
	isValidTotalCholesterol,
} from './ASCVDValidator';

describe('ASCVDValidator test', () => {
	test('nullOrUnd test', () => {
		expect(nullOrUnd(null)).toEqual(true);
		expect(nullOrUnd(undefined)).toEqual(true);
		expect(nullOrUnd('')).toEqual(true);
		expect(nullOrUnd('foobar')).toEqual(false);
		expect(nullOrUnd(1)).toEqual(false);
	});

	test('validateReading test', () => {
		expect(validateReading(100, 50, 200)).toEqual(true);
		expect(validateReading(100, 150, 200)).toEqual(false);
		expect(validateReading(null, 50, 100)).toEqual(false);
		expect(validateReading()).toEqual(false);
	});

	test('isValidDBP test', () => {
		expect(isValidDBP(100)).toEqual(true);
		expect(isValidDBP(40)).toEqual(false);
	});

	test('isValidSBP test', () => {
		expect(isValidSBP(100)).toEqual(true);
		expect(isValidSBP(40)).toEqual(false);
	});

	test('isValidHDL test', () => {
		expect(isValidHDL(80)).toEqual(true);
		expect(isValidHDL(10)).toEqual(false);
	});

	test('isValidLDL test', () => {
		expect(isValidLDL(80)).toEqual(true);
		expect(isValidLDL(10)).toEqual(false);
	});

	test('isValidTotalCholesterol test', () => {
		expect(isValidTotalCholesterol(150)).toEqual(true);
		expect(isValidTotalCholesterol(10)).toEqual(false);
	});

	test('isValidAge test', () => {
		expect(isValidAge(55)).toEqual(true);
		expect(isValidAge(10)).toEqual(false);
	});
});
