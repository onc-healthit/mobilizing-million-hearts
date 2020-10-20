# Architecture Diagram

1.  The EHR Requests the App on the SMART on FHIR Launch URI (typically
    launch.html)

2.  The IIS Windows server forwards all requests to the underlying ASCVD
    API

3.  The App is served back to the EHR

4.  A SOF authentication is done and the App is redirected to the
    Redirect URI (typically the root URI)

    1.  Read more: <http://www.hl7.org/fhir/smart-app-launch/>

5.  With the token obtained from step (4), the App can now request
    information from the FHIR Server

6.  After the App finishes loading information, it can be used and
    Metric Events are sent to be saved.

7.  The API received Metric Events and stores them in the on-disk
    Database
    :::

---
