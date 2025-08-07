const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
let usermodel=require('../Models/UserSchema')
const jwt=require('jsonwebtoken')

router.post('/logindata',async (req,res)=>{
    
    const user=await usermodel.findOne({email:req.body.email})
    if(!user){
        return res.status(404).send("SomeThing Went Wrong")
    }
    else{
let status=await bcrypt.compare(req.body.password,user.password)
if(status)
     {let token=jwt.sign({email:user.email},process.env.JWT_SECRET)
            res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: 'None'
});
        return res.status(200).send("Login Succesfull")}
            else{
                res.status(404).send("Something Went Wrong")
            }

    }
    
    
})
module.exports=router
