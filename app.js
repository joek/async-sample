var express = require( 'express')
var app = express()
const axios = require('axios');


token = Buffer.from(`${process.env.SSC_USER}:${process.env.SSC_PASSWORD}`).toString('base64')
base_url = process.env.SERVICE_URL

axios.defaults.headers.common['Authorization'] = `Basic ${token}`
axios.defaults.headers.common['content-type'] = "application/json"


app.use(express.json());

console.log("Start....")

// webhook endpoint
app.post( '/webhook', async function(req, res) {
    // Extract data from event body. 
    id = req.body.data.currentImage.id
    data = req.body
    // Vaildate if case has a parent case
    if(data.data && data.data.currentImage && !data.data.currentImage.parentCaseId){
      
      // Create new sub-case
      subCaseData = {
        "subject": `Sub Case of ${data.data.currentImage.displayId}`,
        "caseType": "ZJH2",
        "origin": "MANUAL_DATA_ENTRY",
        "status": "01",
        "account": {
          "id": data.data.currentImage.account.id
        },
            "relatedObjects": [
            {
                "objectId": id,
                "type": "2886",
                "role": "13"
            }
        ]
      }

      await axios.post(`${base_url}/v1/case-service/cases`, subCaseData)
      .then(function (response) {
        console.log(response)
        
      })
      .catch(function (error) {          // handle error
          console.log(error);
          res.status(500)
        })
    }
    // Send response
    res.end()
})

app.get('/health', async function(req, res){
  // Get cases
  await axios.get(`${base_url}/v1/case-service/cases`)
    .then(function(response){
      console.log("Healthy")
      res.
    })
    .catch(function(error){
      console.log(error)
      res.status(500)
    })
  
  res.end()
})



app.listen( process.env.PORT || 4000)

