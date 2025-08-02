const mongoose=require('mongoose')
const UserSchema = require('./UserSchema')
let CodeSchema=mongoose.Schema({
    status:String,
    submittedAt:{
        type:Date,
        default:Date.now
    },
    code:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    }
    
})
module.exports=mongoose.model('code',CodeSchema)