import PatientInfo from './PatientInfo';

describe('PatientInfo object tests', () => {
	test('a PatientInfo should be initialized correctly given no information', () => {});

	test('a PatientInfo should be initialized with full information given proper input', () => {
		const patient = {
			firstName: 'JOE',
			lastName: 'SMART',
			birthDate: '1976-04-29T00:00:00.000Z',
			age: 43,
			sex: 'male',
			race: 'white',
		};

		const relatedFactors = {
			smoker: 'current',
		};

		const bloodPressure = {
			diastolicBloodPressure: { value: 75, unit: 'mmHg' },
			systolicBloodPressure: { value: 110, unit: 'mmHg' },
			bloodPressureDate: 'Aug 13, 2018',
			bloodPressureRelativeDate: 'a year ago',
		};

		const cholesterol = {
			hdl: { value: 41, unit: 'mg/dL' },
			ldl: { value: 172, unit: 'mg/dL' },
			total: { value: 200, unit: 'mg/dL' },
			cholesterolDate: 'Jun 27, 2016',
			cholesterolRelativeDate: '3 years ago',
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

		expect(patientInfo.firstName).toEqual('JOE');
		expect(patientInfo.lastName).toEqual('SMART');
		expect(patientInfo.sex).toEqual('male');
		expect(patientInfo.dateOfBirth).toEqual('1976-04-29T00:00:00.000Z');
		expect(patientInfo.age).toEqual(43);
		expect(patientInfo.statin).toEqual(true);
		expect(patientInfo.aspirin).toEqual(true);

		const expectedRelatedFactors = {
			smoker: 'current',
			race: 'white',
			diabetic: true,
			hypertensive: false,
		};

		expect(patientInfo.relatedFactors).toEqual(expectedRelatedFactors);

		const expectedLdl = { value: 172, unit: 'mg/dL' };
		const expectHdl = { value: 41, unit: 'mg/dL' };
		const totalCholesterol = { value: 200, unit: 'mg/dL' };
		const cholesterolDate = 'Jun 27, 2016';
		const cholesterolRelativeDate = '3 years ago';

		expect(patientInfo.ldl).toEqual(expectedLdl);
		expect(patientInfo.hdl).toEqual(expectHdl);
		expect(patientInfo.totalCholesterol).toEqual(totalCholesterol);
		expect(patientInfo.cholesterolDate).toEqual(cholesterolDate);
		expect(patientInfo.cholesterolRelativeDate).toEqual(cholesterolRelativeDate);

		const systolicBloodPressure = { value: 110, unit: 'mmHg' };
		const diastolicBloodPressure = { value: 75, unit: 'mmHg' };
		const bloodPressureDate = 'Aug 13, 2018';
		const bloodPressureRelativeDate = 'a year ago';

		expect(systolicBloodPressure).toEqual(systolicBloodPressure);
		expect(diastolicBloodPressure).toEqual(diastolicBloodPressure);
		expect(bloodPressureDate).toEqual(bloodPressureDate);
		expect(bloodPressureRelativeDate).toEqual(bloodPressureRelativeDate);
	});
});
