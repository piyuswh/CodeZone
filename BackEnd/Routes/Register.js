const express = require('express');
const router = express.Router();
const userModel=require('../Models/UserSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.post('/userdata',async (req, res) => {     
   let{name,password,email,role}=req.body    
   const existinguser=await userModel.findOne({email})
   if(existinguser){
      return res.status(500).send("Something went Wrong")
   }

 bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,async (err,hash)=>{
     const user=await userModel.create({
name,password:hash,email,Role:role
        })

        let token=jwt.sign({email:email},process.env.JWT_SECRET)
        res.cookie("token",token)
        res.status(200).send("Signup Succesfully")
    })
 })
})

module.exports = router;
