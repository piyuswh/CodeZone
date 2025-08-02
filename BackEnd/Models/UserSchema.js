const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/CodeZone')
let UserSchema=mongoose.Schema({
    name:String,
    password:String,
    email:String,
    Role:String,
    codes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'code'
    }]
})
module.exports=mongoose.model("users",UserSchema)