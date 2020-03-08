const mongoose = require('mongoose')

const schema = mongoose.Schema({
    id: {type:Number, required:true, minlength:1},
})

schema.set('toJSON', {
    trasform: (doc, formImpl) =>{
        delete form.__v
    }
})

module.exports = mongoose.model('FormImpl', schema)