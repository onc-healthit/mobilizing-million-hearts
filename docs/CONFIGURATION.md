## Configuration

The application must be configured with the proper [SMART on FHIR](http://www.hl7.org/fhir/smart-app-launch/#ehr-launch-sequence)
information in order to launch securely against your FHIR Server. Create a `.env` file in the `app` directory with your application configuration before building.
The following variables are configurable.

| NAME                  | REQUIRED | DEFAULT VALUE |
| --------------------- | -------- | ------------- |
| CLIENT_ID             | yes      |               |
| SCOPE                 | yes      |               |
| ISS                   | yes      |               |
| REDIRECT_URI          | yes      |               |
| DISABLE_AUDITING      | no       | true          |
| ENABLE_DEVELOPERS_LOG | no       | false         |
| BLOODPRESSURE_CUTOFF  | no       | 5             |
| CHOLESTEROL_CUTOFF    | no       | 5             |

An example `.env` file might like this:

```
CLIENT_ID=your client id
SCOPE=patient/Patient.read patient/Observation.read patient/MedicationOrder.read patient/MedicationStatement.read patient/MedicationAdministration.read patient/Condition.read patient/DocumentReference.read patient/DocumentReference.write
ISS=https://your fhir server/
REDIRECT_URI=http://where your app is deployed/
```

# Up Next

- [Learn about the different Resources the application consumes](./RESOURCES.md)
