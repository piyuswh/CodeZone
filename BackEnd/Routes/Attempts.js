const express=require("express")
const router=express.Router()
const userModel=require('../Models/UserSchema')
const jwt=require('jsonwebtoken')
router.get('/Attempts',async (req,res)=>{
   try{

       const token=req.cookies.token
       // console.log(token);
       
       let stat=jwt.verify(token,'secret')
       let email=stat.email;
       let user=await userModel.findOne({email:email}).populate('codes')
           const validCodes = user.codes.filter(c => c && c._id);

    res.json(validCodes);
    }
    catch(error){
        return res.status(200).send("Something Went Wrong")
    }
    

})
module.exports=router