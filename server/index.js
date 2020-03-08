require('dotenv').config()

const express = require('express')
const server = express()

server.use(express.json())
server.use('/forms', require('./controllers/form'))
server.use('/formImpls', require('./controllers/formImpl'))

const cors = require('cors')
server.use(cors())

require('./db_connector')



const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})