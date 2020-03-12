require('dotenv').config()

const express = require('express')
const server = express()

server.use(express.json())
server.use('/forms', require('./controllers/form'))
server.use('/formImpls', require('./controllers/formImpl'))

server.use(express.static("public"))

const cors = require('cors')
server.use(cors())

require('./db_connector')

server.get('/', async (req, res) => {
  try{
    res.redirect('https://form-builder-proj.herokuapp.com/')
  }catch(error){
    res.status(404).json({
      error: 'Cant connect'
    })
  }
})


//Here still using the old lib, after login from GitHub I will be redirected to this root. I need to get the token
//with the provided User info.
//The server now keep the data with the idenfifier and send it back to client, Who will save it on the localstorage.
//Now, for each request, the client will provide the identifier, and the Server needs to check this identifer in order to let
//the requet to proccess
var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-fbqlrac3.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"QBL89wMEtFDHtx3O83VETj4togqfLG18","client_secret":"OyHmbs4j2exGYv2y_mHfuE69pGfKFFqMnjDghtoSpYzwAupGvdTTEKlfSYG_oiXj","audience":"https://dev-fbqlrac3.auth0.com/api/v2/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})