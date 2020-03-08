const url = process.env.MONGODB_URI
const mongoose = require('mongoose')

mongoose.connect(url, {useNewUrlParser:true,  useUnifiedTopology: true})
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
    
module.exports = mongoose