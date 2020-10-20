module.exports = {
	RESOURCES: {
		CONDITION: 'Condition',
		MEDICATIONSTATEMENT: 'MedicationStatement',
		OBSERVATION: 'Observation',
	},

	DISCLAIMER:
		'This calculation is based on asymptomatic, normative population samples and is not ' +
		'intended to be a substitute for clinical judgment.',

	VALIDATION: {
		totalCholesterol: [
			'ASCVD Risk is not accurate without a total cholesterol lab reading',
			'ASCVD Risk is not accurate for ranges outside of 130-320',
		],
		systolicBloodPressure: [
			'ASCVD Risk is not accurate without a systolic blood pressure lab reading',
			'ASCVD Risk is not accurate for ranges outside of 90-200',
		],
		hdlCholesterol: [
			'ASCVD Risk is not accurate without a HDL cholesterol lab reading',
			'ASCVD Risk is not accurate for ranges outside of 20-100',
		],
		diastolicBloodPressure: [
			'ASCVD Risk is not accurate without a diastolic blood pressure lab reading',
			'ASCVD Risk is not accurate for ranges outside of 60-130',
		],
		ldlCholesterol: [
			'ASCVD Risk is not accurate without a LDL cholesterol lab reading',
			'ASCVD Risk is not accurate for ranges outside of 30-300',
		],
		age: [
			'ASCVD Risk is not accurate without an age',
			'ASCVD Risk is not accurate for ages outside of 40-79',
		],
	},
};
