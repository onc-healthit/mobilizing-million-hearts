import PatientInfo from './PatientInfo';
import { computeTenYearScore } from './ASCVDRisk';

describe('ASCVDRisk calculation tests', () => {
	test('ASCVD Risk should be 14.4', () => {
		const patient = {
			firstName: 'WILMA',
			lastName: 'SMART',
			birthDate: '1950-03-13T00:00:00.000Z',
			age: 69,
			sex: 'female',
			race: 'other',
		};

		const relatedFactors = {
			smoker: 'not',
		};

		const bloodPressure = {
			diastolicBloodPressure: { value: 83, unit: 'mmHg' },
			systolicBloodPressure: { value: 130, unit: 'mmHg' },
			bloodPressureDate: 'Oct 20, 2019',
			bloodPressureRelativeDate: '2 months ago',
		};

		const cholesterol = {
			hdl: { value: 66, unit: 'mg/dL' },
			ldl: { value: 145, unit: 'mg/dL' },
			total: { value: 155, unit: 'mg/dL' },
			cholesterolDate: 'Oct 13, 2019',
			cholesterolRelativeDate: '2 months ago',
		};

		const condition = { diabetic: true };

		const medication = { statin: true, aspirin: true, hypertensionMeds: false };

		const patientInfo = new PatientInfo({
			patient,
			cholesterol,
			bloodPressure,
			medication,
			condition,
			relatedFactors,
		});

		const risk = computeTenYearScore(patientInfo);

		expect(risk).toBe(14.4);
	});
});
