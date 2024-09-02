var express = require( 'express')
var app = express()
const axios = require('axios');


token = Buffer.from(`${process.env.SSC_USER}:${process.env.SSC_PASSWORD}`).toString('base64')
base_url = `${process.env.SERVICE_URL}/sap/c4c/api`

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
    console.log(data)
    // Send response
    res.end()
})

app.get('/health', async function(req, res){
  // Get cases
  await axios.get(`${base_url}/v1/case-service/cases`)
    .then(function(response){
      console.log("Healthy")
      res.send("OK")
    })
    .catch(function(error){
      console.log(error)
      res.status(500)
      res.send("Error")
    })
  
  res.end()
})



app.listen( process.env.PORT || 4000)

