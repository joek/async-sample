# Hands on side-by-side Extensibility

Welcome to the hands-on session. To begin the session, please ensure you have access to a hana trial account or the SAP BTP Application Studio and a Cloud Foundry Instance.

Prerequisites: 
-	[SAP BTP Trial](https://developers.sap.com/tutorials/hcp-create-trial-account.html)

## Scenario
Our Service team is receiving frequently requests to remove personal data from the company databases. Currently the process is not fully automated, and the service team need to involve different teams via sub-case to fulfill the case. Our task is to automate this process, which can’t be solved inside the standard as of now.
Solution Description
The solution will be implemented using event based side-by-side development on the SAP Business Technology Platform. We will create an web-service written in nodejs, which is waiting for Events triggered by Autoflow. The Service will create two sub-cases based on the main case.

![Async Architecture](images/architecture.png)
*Architecture Overview*

For simplification we are not considering any security related matters. For a productive resolution the exposed web-service needs to be at least password protected. Also we recommend to use BTP best practices to harmonize the Extensibility Architecture across the project / company.

## Implementation

Before we can get started please assure you have signed up for a BTP Trial account or have access to a SAP BTP Cloud Foundry space and the SAP Business Application Studio.

- How to register for [SAP BTP Trial](https://developers.sap.com/tutorials/hcp-create-trial-account.html)

### Step 1: Environment Setup

For this workshop we will use the SAP Business Application Studio to develop a simple event processor and deploy the service to the SAP BTP Cloud Foundry Environment. For the environment Setup, first need to create a new Dev space in SAP Business Application Studio. Later we will import the sample project into the Dev Space.

![Welcome SAP BTP Trial](images/01-welcome_btp.png)
*Open SAP Business Application Studio*

![Create new Dev Space](images/02-Application-Studio-Setup-01.png)
*Create new Dev Space*

![Select basic Application and hit create](images/02-Application-Studio-Setup-02.png)
*Select basic Application and hit create*

![Open Dev Space](images/02-Application-Studio-Setup-03.png)
*Open the Dev Space as soon as the Space is marked as running*


![Clone Repository](images/03-Clone-Repo-02.png)
*Clone Reposity*

Clone Repository:
- Click "Clone Repository
- Copy `https://github.com/joek/async-sample.git`
- Hit enter or click "Clone from URL..." below the input field

On the left side you will find a file browser including the project.

![Code Review](images/04-Code-Review.png)
*Code review*

The project includes the following files:

- `app.js`: Service Code
- `package.json`: Required nodejs libraries
- `manifest.yml`: Deployment descriptor for cloud foundry

Your coding is going into the `app.js` file. We are exposing two endpoints. the `/health` endpoint is used to validate the service. In most cases it is not necesarry to implement this endpoint. During the training we use it to vaildate the setup before configuring Sales and Service Cloud V2.

The business logic is exposed via `/webhook`. We are vaidating if the case is of a certain type. If this is the case, we are sending a post request to create the related sub-case.

### Step 3: Configure Project and Deploy

As the coding of the project is done, we can start to configure and deploy it. To do so, we need to adjust the missing information in the deployment descriptor, connect the cloud foundry CLI and finaly deploy the application.

1. Retrieve the Cloud Foundry API Endpoint.

![Trial Overview](images/05-welcome_btp.png)
*Open the BTP Trial Account*

![Global Account](images/06-select-subaccount.png)
*Select the trial sub-account*

![Cloud Foundry URL](images/07-CloudFoundry-URL.png)
*Copy the Cloud Foundry API Endpoint*

2. Inside SAP Business Application Studio open the command line terminal. This can be done with the icon in the upper right corner. 


3. To Login, enter the following command. `cf login -a <endpoint url> You need to replace the endpoint URL with the URL you retrieved in the steps before.





-	Add env variables
-	Connect Cloud Foundry
-	Deploy application
-	Test Endpoint (/test)



### Step 4: Setup Sales and Service Cloud Version 2
-	Create Communication System with outbound config
-	Create Autoflow
### Step 5: Test
a