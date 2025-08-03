const express=require('express')
const router=express.Router()
const axios=require('axios');
const { route } = require('./Register');
const jwt=require('jsonwebtoken')
const userModel=require('../Models/UserSchema')
const codeModel=require('../Models/code')
const JUDGE0_API = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true';
const API_KEY = '94d4231159mshecb280bfe0b091ep1c9e7cjsn2b63e8b0caeb'; 
const langmap={
      cpp: 54,
  c: 50,
  java: 62,
  python: 71,
}
router.post('/usercode',async (req,res)=>{
    console.log(req.body);
    
    let token=req.cookies.token
    let status=jwt.verify(token,'secret')
    let user=await userModel.findOne({email:status.email})
let {lang,code,input}=req.body
console.log(code);

let encodedcode=Buffer.from(code).toString("base64")
try{let response=await axios.post(JUDGE0_API,{
    source_code:encodedcode,
language_id: langmap[lang],
stdin: Buffer.from(input || '').toString('base64')
},
{
    headers:{
        'Content-Type':'application/json',
          'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }
})
let result=response.data
console.log("Judge0 Raw Response:", result);

let decodedResult = {
  stdout: result.stdout ? Buffer.from(result.stdout, 'base64').toString('utf-8') : '',
  stderr: result.status["description"]!='Accepted'? result.status['description']:'',
};
let srcCode=await codeModel.create({
    status:decodedResult.stdout?"Submitted":"Failed",
    code:code,  
    language:lang
})
if (!srcCode || !srcCode._id) {
    return res.status(500).json({ error: "Code submission failed" });
}
user.codes.push(srcCode._id)
await user.save()
console.log(decodedResult);

res.json(decodedResult)
}
catch(error){
    res.status(500).json({error:"Something Went Wrong"})
}
})

module.exports=router