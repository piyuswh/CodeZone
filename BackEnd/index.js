require('dotenv').config()
const express=require("express")
const app=express();
const axios=require('axios')
const cors=require('cors')
const Register=require('./Routes/Register.js')
const Login=require('./Routes/Login.js')
const compiler=require('./Routes/Compiler.js')
const cookieParser=require('cookie-parser')
const checkauth=require('./Routes/Checkauth.js')
const Attempts=require('./Routes/Attempts.js')
const History=require('./Routes/History.js')
const logout=require('./Routes/Logout.js')
const submission=require('./Routes/Submissions.js')
app.use(cors({
     origin: 'https://codezone-1-f38m.onrender.com',  
  credentials: true   
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',Register)
app.use('/',Login)
app.use('/',compiler)
app.use('/',checkauth)
app.use('/',Attempts)
app.use('/',History)
app.use('/',logout)
app.use('/',submission)


app.listen(3000,()=>console.log("running")
)
