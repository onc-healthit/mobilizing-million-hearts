import { NOT_A_SMOKER, OTHER } from './ASCVDRisk';

export default class PatientInfo {
	constructor({ patient, relatedFactors, cholesterol, bloodPressure, medication, condition } = {}) {
		this.initialize();

		if (patient) {
			this.firstName = patient.firstName || null;
			this.lastName = patient.lastName || null;
			this.sex = patient.sex || null;
			this.dateOfBirth = patient.birthDate || patient.dateOfBirth || null;
			this.age = patient.age || null;
			this.relatedFactors.race = patient.race || OTHER; // Other by default
		}

		if (relatedFactors) {
			this.relatedFactors.smoker =
				relatedFactors.smokerStatus || relatedFactors.smoker || NOT_A_SMOKER; // Not a smoker by default
		}

		if (cholesterol) {
			this.ldl = {
				value: cholesterol.ldl.value || null,
				unit: cholesterol.ldl.unit || null,
			};
			this.hdl = {
				value: cholesterol.hdl.value || null,
				unit: cholesterol.hdl.unit || null,
			};
			this.totalCholesterol = {
				value: cholesterol.total.value || null,
				unit: cholesterol.total.unit || null,
			};
			this.cholesterolDate = cholesterol.cholesterolDate;
			this.cholesterolRelativeDate = cholesterol.cholesterolRelativeDate;
		}

		if (bloodPressure) {
			this.systolicBloodPressure = {
				value: bloodPressure.systolicBloodPressure.value || null,
				unit: bloodPressure.systolicBloodPressure.unit || null,
			};
			this.diastolicBloodPressure = {
				value: bloodPressure.diastolicBloodPressure.value || null,
				unit: bloodPressure.diastolicBloodPressure.unit || null,
			};
			this.bloodPressureDate = bloodPressure.bloodPressureDate;
			this.bloodPressureRelativeDate = bloodPressure.bloodPressureRelativeDate;
		}

		if (medication) {
			this.statin = medication.statin !== undefined ? medication.statin : null;
			this.aspirin = medication.aspirin !== undefined ? medication.aspirin : null;
			this.relatedFactors.hypertensive =
				medication.hypertensionMeds !== undefined ? medication.hypertensionMeds : null;
		}

		if (condition) {
			this.relatedFactors.diabetic = condition.diabetic || false;
		}
	}

	initialize() {
		this.firstName = null;
		this.lastName = null;
		this.sex = null;
		this.dateOfBirth = null;
		this.age = null;
		this.relatedFactors = {
			smoker: NOT_A_SMOKER,
			race: OTHER,
			hypertensive: false,
			diabetic: false,
		};
		this.ldl = {
			value: null,
			unit: null,
		};
		this.totalCholesterol = {
			value: null,
			unit: null,
		};
		this.hdl = {
			value: null,
			unit: null,
		};
		this.systolicBloodPressure = {
			value: null,
			unit: null,
		};
		this.diastolicBloodPressure = {
			value: null,
			unit: null,
		};
		this.bloodPressureDate = null;
		this.bloodPressureRelativeDate = null;
		this.cholesterolDate = null;
		this.cholesterolRelativeDate = null;
		this.statin = null;
		this.aspirin = null;
	}
}
