# Hands on side-by-side Extensibility

Welcome to the hands-on session. To begin the session, please ensure you have access to a hana trial account or the SAP BTP Application Studio and a Cloud Foundry Instance.

Prerequisites: 
-	[Hana trial Account](https://developers.sap.com/tutorials/hcp-create-trial-account.html)

## Scenario
Our Service team is receiving frequently requests to remove personal data from the company databases. Currently the process is not fully automated, and the service team need to involve different teams via sub-case to fulfill the case. Our task is to automate this process, which can’t be solved inside the standard as of now.
Solution Description
The solution will be implemented using event based side-by-side development on the SAP Business Technology Platform. We will create an web-service written in nodejs, which is waiting for Events triggered by Autoflow. The Service will create two sub-cases based on the main case.


