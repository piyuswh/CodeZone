const express=require("express")
const router=express.Router()
router.get("/checkauth",(req,res)=>{
    const token = req.cookies.token; // or session logic
  if (token) {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
})
module.exports=router