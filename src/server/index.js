//Configure the environment variables
const dotenv = require('dotenv');

//Add Configuration to be able to use env variables
dotenv.config();

const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

const app = express()
//Configure cors to avoid cors-origin issue
const cors = require('cors');
app.use(cors());

//Configure express to use body-parser as middle-ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//Configure express static directory
app.use(express.static('dist'))
console.log(__dirname)

// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`ApiKey: ${process.env.API_KEY}`);

let projectData = []

// Get route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST Route
app.post('//http://localhost:8081/mcapi', async function(req, res) {
    projectData = req.body.url;
    console.log(`Data: ${projectData}`);

    //Build the URL
    const apiURL = `${baseURL}key=${apiKey}&url=${projectData}&lang=en`

    //Fetch Data from API
    const response = await fetch(apiURL)
    const meaningCloudData = await response.json()
    console.log(meaningCloudData);

    //Send it to the client
    res.send(meaningCloudData)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//export app to use it in the unit testing
module.exports = {
    app,
}
