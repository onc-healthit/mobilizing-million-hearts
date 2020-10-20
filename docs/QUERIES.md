# Queries

The following FHIR Queries should be implemented on the FHIR Server for the
application to work properly.

```
/Patient?_id=<patientId>
```

```
/Observation?patient=<patientId>&category=social-history
```

```
/Observation?patient=<patientId>&code=http://loinc.org|75367002,http://loinc.org|55284-4,http://loinc.org|8462-4,http://loinc.org|8480-6,http://loinc.org|2085-9,http://loinc.org|49130-8,http://loinc.org|18263-4,http://loinc.org|55440-2,http://loinc.org|49132-4,http://loinc.org|18262-6,http://loinc.org|13457-7,http://loinc.org|2089-1,http://loinc.org|18261-8,http://loinc.org|2093-3,http://snomed.info/sct|72166-2,http://snomed.info/sct|229819007
```

```
/Condition?patient=<patientId>&clinicalstatus=active,recurrence,relapse
```

```
/MedicationStatement?patient=<patientId>&status=active,intended
```
