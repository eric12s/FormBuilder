const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {type:String, required:true, minlength:2},
    //id: {type:Number, required:true, minlength:1},
    fields: [{type: mongoose.Schema.Types.Mixed, required:true, minlength:2}],
    noSubmissions: {type:Number, default:0},
    filledForms: [{type: [Number], ref: 'FormImpl', index:true}]
})

schema.set('toJSON', {
    trasform: (doc, form) =>{
        //delete form._id
        delete form.__v
    }
})

module.exports = mongoose.model('Form', schema)