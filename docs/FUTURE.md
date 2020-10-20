# Future optimization and features

## Health Recommendations

Based on the calculated risk of a Patient, automatically fetch and display recommended treatments

## ASCVD Score Write-back

After calculating a score, the option to write-back to the FHIR server should be available

## CDS Hooks

The application should be offered to user's from the EHRs CDS Hooks capabilities

## Query Optimizations

An investigation should be performed to explore the use of `_sort` and `_count` in order to
prevent the need to select all of a Patient's Observations/Conditions/MedicalStatements.
Currently, it is necessary to select all resources and follow all pages because there is no
`_sort` filter being applied.
