# FHIR Resources

ASCVD obtains everything needed to calculate risk from the following Resources.

- Patient
- Observation
- MedicationStatement
- Condition

| Field                   | Resource               |
| ----------------------- | ---------------------- |
| firstName               | Patient                |
| lastName                | Patient                |
| sex                     | Patient                |
| dateOfBirth             | Patient                |
| age                     | Patient                |
| smoker                  | Observation, Condition |
| race                    | Patient                |
| hypertensive            | Condition              |
| diabetic                | Condition              |
| cholesterol             | Observation            |
| systolicBloodPressure   | Observation            |
| diastolyicBloodPressure | Observation            |
| statin                  | MedicationStatement    |
| aspirin                 | MedicationStatement    |
