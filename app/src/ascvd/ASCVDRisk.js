export const IS_SMOKER = 'current';
export const FORMER_SMOKER = 'former';
export const NOT_A_SMOKER = 'not';

export const WHITE = 'white';
export const AFRICAN_AMERICAN = 'africanamerican';
export const OTHER = 'other';

export const FEMALE = 'female';
export const MALE = 'male';

/**
 * Computes the ASCVD Risk Estimate for an individual over the next 10 years.
 * @param patientInfo - patientInfo object from ASCVDRisk data model
 * @returns {*} Returns the risk score or null if not in the appropriate age range
 */
export const computeTenYearScore = (patientInfo) => {
	if (patientInfo.age < 40 || patientInfo.age > 79) {
		return null;
	}

	const lnAge = Math.log(patientInfo.age);
	const lnTotalChol = Math.log(patientInfo.totalCholesterol.value);
	const lnHdl = Math.log(patientInfo.hdl.value);
	const trlnsbp = patientInfo.relatedFactors.hypertensive
		? Math.log(parseFloat(patientInfo.systolicBloodPressure.value))
		: 0;
	const ntlnsbp = patientInfo.relatedFactors.hypertensive
		? 0
		: Math.log(parseFloat(patientInfo.systolicBloodPressure.value));
	const ageTotalChol = lnAge * lnTotalChol;
	const ageHdl = lnAge * lnHdl;
	const agetSbp = lnAge * trlnsbp;
	const agentSbp = lnAge * ntlnsbp;
	const ageSmoke = patientInfo.relatedFactors.smoker === IS_SMOKER ? lnAge : 0;

	const isAA = patientInfo.relatedFactors.race === AFRICAN_AMERICAN;
	const isMale = patientInfo.sex === MALE;

	const currentSmoker = patientInfo.relatedFactors.smoker === IS_SMOKER ? 1 : 0;

	let s010Ret = 0;
	let mnxbRet = 0;
	let predictRet = 0;

	if (isAA && !isMale) {
		s010Ret = 0.95334;
		mnxbRet = 86.6081;
		predictRet =
			17.1141 * lnAge +
			0.9396 * lnTotalChol +
			-18.9196 * lnHdl +
			4.4748 * ageHdl +
			29.2907 * trlnsbp +
			-6.4321 * agetSbp +
			27.8197 * ntlnsbp +
			-6.0873 * agentSbp +
			0.6908 * Number(currentSmoker) +
			0.8738 * Number(patientInfo.relatedFactors.diabetic);
	} else if (!isAA && !isMale) {
		s010Ret = 0.96652;
		mnxbRet = -29.1817;
		predictRet =
			-29.799 * lnAge +
			4.884 * lnAge ** 2 +
			13.54 * lnTotalChol +
			-3.114 * ageTotalChol +
			-13.578 * lnHdl +
			3.149 * ageHdl +
			2.019 * trlnsbp +
			1.957 * ntlnsbp +
			7.574 * Number(currentSmoker) +
			-1.665 * ageSmoke +
			0.661 * Number(patientInfo.relatedFactors.diabetic);
	} else if (isAA && isMale) {
		s010Ret = 0.89536;
		mnxbRet = 19.5425;
		predictRet =
			2.469 * lnAge +
			0.302 * lnTotalChol +
			-0.307 * lnHdl +
			1.916 * trlnsbp +
			1.809 * ntlnsbp +
			0.549 * Number(currentSmoker) +
			0.645 * Number(patientInfo.relatedFactors.diabetic);
	} else {
		s010Ret = 0.91436;
		mnxbRet = 61.1816;
		predictRet =
			12.344 * lnAge +
			11.853 * lnTotalChol +
			-2.664 * ageTotalChol +
			-7.99 * lnHdl +
			1.769 * ageHdl +
			1.797 * trlnsbp +
			1.764 * ntlnsbp +
			7.837 * Number(currentSmoker) +
			-1.795 * ageSmoke +
			0.658 * Number(patientInfo.relatedFactors.diabetic);
	}

	const pct = 1 - s010Ret ** Math.exp(predictRet - mnxbRet);
	return Math.round(pct * 100 * 10) / 10;
};

/**
 * Computes the lifetime ASCVD Risk Estimate for an individual. If the individual
 * is younger than 20 or older than 59, the lifetime risk cannot be estimated.
 * @param patientInfo - patientInfo object from ASCVDRisk data model
 * @returns {*} Returns the risk score or null if not in the appropriate age range
 */
export const computeLifetimeRisk = (patientInfo) => {
	if (patientInfo.age < 20 || patientInfo.age > 59) {
		return null;
	}
	let ascvdRisk = 0;
	const params = {
		male: {
			major2: 69,
			major1: 50,
			elevated: 46,
			notOptimal: 36,
			allOptimal: 5,
		},
		female: {
			major2: 50,
			major1: 39,
			elevated: 39,
			notOptimal: 27,
			allOptimal: 8,
		},
	};

	const major =
		(patientInfo.totalCholesterol >= 240 ? 1 : 0) +
		((patientInfo.systolicBloodPressure >= 160 ? 1 : 0) +
			(patientInfo.relatedFactors.hypertensive ? 1 : 0)) +
		(patientInfo.relatedFactors.smoker ? 1 : 0) +
		(patientInfo.relatedFactors.diabetic ? 1 : 0);
	const elevated =
		((patientInfo.totalCholesterol >= 200 && patientInfo.totalCholesterol < 240 ? 1 : 0) +
			(patientInfo.systolicBloodPressure >= 140 &&
			patientInfo.systolicBloodPressure < 160 &&
			patientInfo.relatedFactors.hypertensive === false
				? 1
				: 0) >=
		1
			? 1
			: 0) * (major === 0 ? 1 : 0);
	const allOptimal =
		((patientInfo.totalCholesterol < 180 ? 1 : 0) +
			(patientInfo.systolicBloodPressure < 120 ? 1 : 0) *
				(patientInfo.relatedFactors.hypertensive ? 0 : 1) ===
		2
			? 1
			: 0) * (major === 0 ? 1 : 0);
	const notOptimal =
		((patientInfo.totalCholesterol >= 180 && patientInfo.totalCholesterol < 200 ? 1 : 0) +
			(patientInfo.systolicBloodPressure >= 120 &&
			patientInfo.systolicBloodPressure < 140 &&
			patientInfo.relatedFactors.hypertensive === false
				? 1
				: 0)) *
			(elevated === 0 ? 1 : 0) *
			(major === 0 ? 1 : 0) >=
		1
			? 1
			: 0;

	if (major > 1) {
		ascvdRisk = params[patientInfo.sex].major2;
	}
	if (major === 1) {
		ascvdRisk = params[patientInfo.sex].major1;
	}
	if (elevated === 1) {
		ascvdRisk = params[patientInfo.sex].elevated;
	}
	if (notOptimal === 1) {
		ascvdRisk = params[patientInfo.sex].notOptimal;
	}
	if (allOptimal === 1) {
		ascvdRisk = params[patientInfo.sex].allOptimal;
	}

	return ascvdRisk;
};
