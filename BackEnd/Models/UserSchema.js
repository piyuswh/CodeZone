const mongoose=require('mongoose')
const Db_name="CodeZone"
mongoose.connect(`${process.env.MONGO_URI}/${Db_name}`)
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