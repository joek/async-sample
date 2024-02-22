var express = require( 'express')
var app = express()
const axios = require('axios');


token = process.env.TOKEN
base_url = process.env.SERVICE_URL

axios.defaults.headers.common['Authorization'] = `Basic ${token}`
axios.defaults.headers.common['content-type'] = "application/json"


app.use(express.json());

console.log("Start....")

app.post( '/webhook', function(req, res) {
    id = req.body.data.currentImage.id
    data = req.body
    console.log(JSON.stringify(data))
    console.log(req.headers)
    console.log(`Case Id: ${id}`)
    console.log(`Parent Case Id: ${data.data.currentImage.parentCaseId}`)
    if(data.data && data.data.currentImage && !data.data.currentImage.parentCaseId){
      console.log(`Create Sub-task for case: ${id}`)

      subCaseData = {
        "subject": `Sub Case of ${data.data.currentImage.displayId}`,
        "caseType": "ZJEK",
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

      axios.post(`${base_url}/v1/case-service/cases`, subCaseData)
      .then(function (response) {
        console.log(response)
        
      })
      .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    res.send()
})



app.listen( process.env.PORT || 4000)

