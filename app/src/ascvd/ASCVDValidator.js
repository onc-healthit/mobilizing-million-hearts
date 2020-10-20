const nullOrUnd = (x) => {
	return x === undefined || x === null || x === '';
};

const validateReading = (currentVal, min, max) => {
	if (!isNaN(currentVal) && currentVal !== undefined && currentVal >= min && currentVal <= max) {
		return true;
	}
	return false;
};

const isValidDBP = (bp) => validateReading(bp, 60, 130);

const isValidSBP = (bp) => validateReading(bp, 90, 200);

const isValidHDL = (hdl) => validateReading(hdl, 20, 100);

const isValidLDL = (ldl) => validateReading(ldl, 30, 300);

const isValidTotalCholesterol = (totalCholesterol) => validateReading(totalCholesterol, 130, 320);

const isValidAge = (age) => validateReading(age, 40, 79);

const missingFields = (patientInfo) => {
	const needInput = [];
	if (
		nullOrUnd(patientInfo.systolicBloodPressure) ||
		nullOrUnd(patientInfo.systolicBloodPressure.value)
	) {
		needInput.push('Missing Systolic Blood Pressure');
	} else if (!isValidSBP(patientInfo.systolicBloodPressure.value)) {
		needInput.push('Invalid Systolic Blood Pressure Range');
	}

	if (
		nullOrUnd(patientInfo.diastolicBloodPressure) ||
		nullOrUnd(patientInfo.diastolicBloodPressure.value)
	) {
		needInput.push('Missing Diastolic Blood Pressure');
	} else if (!isValidDBP(patientInfo.diastolicBloodPressure.value)) {
		needInput.push('Invalid Diastolic Blood Pressure Range');
	}

	if (nullOrUnd(patientInfo.totalCholesterol) || nullOrUnd(patientInfo.totalCholesterol.value)) {
		needInput.push('Missing Total Cholesterol');
	} else if (!isValidTotalCholesterol(patientInfo.totalCholesterol.value)) {
		needInput.push('Invalid Total Cholesterol Range');
	}

	if (nullOrUnd(patientInfo.relatedFactors.diabetic)) {
		needInput.push('Missing History of Diabetes');
	}

	if (nullOrUnd(patientInfo.age)) {
		needInput.push('Missing Age');
	} else if (!isValidAge(patientInfo.age)) {
		needInput.push('Invalid Age Range');
	}

	if (nullOrUnd(patientInfo.hdl) || nullOrUnd(patientInfo.hdl.value)) {
		needInput.push('Missing HDL Cholesterol');
	} else if (!isValidHDL(patientInfo.hdl.value)) {
		needInput.push('Invalid HDL Cholesterol Range');
	}

	if (nullOrUnd(patientInfo.ldl) || nullOrUnd(patientInfo.ldl.value)) {
		needInput.push('Missing LDL Cholesterol');
	} else if (!isValidLDL(patientInfo.ldl.value)) {
		needInput.push('Invalid LDL Cholesterol Range');
	}

	if (nullOrUnd(patientInfo.relatedFactors.smoker)) {
		needInput.push('Missing Smoker');
	}

	if (nullOrUnd(patientInfo.relatedFactors.race)) {
		needInput.push('Missing Race');
	}

	if (nullOrUnd(patientInfo.relatedFactors.hypertensive)) {
		needInput.push('Missing Hypertension Treatment');
	}

	if (nullOrUnd(patientInfo.sex)) {
		needInput.push('Missing Sex');
	}

	return needInput;
};

const calculateMissingFields = (pi) => {
	const missing = missingFields(pi);
	// Create alert modal from and card listing missing data
	return {
		riskText: 'Invalid Data',
		backgroundColor: '#f64747',
		missingData: true,
		missingFields: missing,
	};
};

const canCalculateScore = (patientInfo) => {
	return (
		patientInfo.systolicBloodPressure.value &&
		isValidAge(patientInfo.age) &&
		isValidTotalCholesterol(patientInfo.totalCholesterol.value) &&
		isValidHDL(patientInfo.hdl.value) &&
		patientInfo.relatedFactors.hypertensive !== null &&
		patientInfo.relatedFactors.race !== null &&
		patientInfo.relatedFactors.diabetic !== null &&
		patientInfo.relatedFactors.smoker !== null &&
		patientInfo.sex !== null
	);
};

const calculateRiskCard = (risk, pi) => {
	if (isNaN(risk) || risk === null) {
		return calculateMissingFields(pi);
	}
	if (risk < 5) {
		return { riskText: 'Low Risk', backgroundColor: '#2ecc71', missingData: false };
	}
	if (risk < 7.5) {
		return { riskText: 'Borderline Risk', backgroundColor: '#ffff7e', missingData: false };
	}
	if (risk < 20) {
		return { riskText: 'Intermediate Risk', backgroundColor: '#fcbb41', missingData: false };
	}
	return { riskText: 'High Risk', backgroundColor: '#f64747', missingData: false };
};

export {
	calculateMissingFields,
	canCalculateScore,
	calculateRiskCard,
	nullOrUnd,
	validateReading,
	isValidAge,
	isValidDBP,
	isValidHDL,
	isValidLDL,
	isValidSBP,
	isValidTotalCholesterol,
};
