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

server.get('/*', async (req, res) => {
  try{
    res.redirect('https://form-builder-proj.herokuapp.com/')
  }catch(error){
    res.status(404).json({
      error: 'Cant connect'
    })
  }
})

const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})