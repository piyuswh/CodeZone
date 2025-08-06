import React, { useState } from 'react'
import '../Stylesheets/Login.css'
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const Login = () => {
  useGSAP(()=>{
    gsap.from("#form",{
      y:500,
      opacity:3,
      duration:1.5
    })
    gsap.from("#heading",{
      y:-1000,
      opacity:2,
      scale:2,
      duration:1.5

    })
    gsap.from("#sin h1",{
      x:200,
      y:200,
      duration:0.7,
      delay:0.3,
      opacity:0,
      stagger:0.5,
    })
    gsap.from("#lin h1",{
      x:-200,
      y:200,
      duration:0.7,
      delay:0.3,
      opacity:0,
      stagger:0.5

    })
  })
  const navigate = useNavigate()
  const [obj, setObj] = useState({
    email: '',
    password: '',
    role: ''
  })
  const [obj1, setObj1] = useState({
    name: '',
    password: '',
    email: ' ',
    role: ' '
  })
  async function subHandler(e) {
    e.preventDefault()
    let res = await fetch("http://localhost:3000/logindata", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, credentials: "include",
      body: JSON.stringify(obj)
    })
    if (res.ok)
      navigate('/history')
    else
      alert("Something Went Wrong")
  }
  async function logHandler(e) {
    e.preventDefault()
    let res = await fetch("http://localhost:3000/userdata", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, credentials: "include",
      body: JSON.stringify(obj1)
    })
    if (res.ok)
      navigate('/history')
    else
      alert("Something Went Wrong")
  }
  return (
<div className="bg-gradient-to-r from-black via-gray-900 to-black
 w-full min-h-screen flex flex-col p-6" style={{overflow:"hidden"}}>
  <div id='ball'></div>
      <h1 className="text-4xl font-bold mb- text-center text-xl bg-transparent" style={{color:'white'}}
      id='heading'>Enter Into CodeZone</h1>

        <div className=" flex-grow flex gap-10 justify-evenly items-center h-90  w-100%" style={{overflow:"hidden"}}
>
<div className='mr-40 flex flex-col justify-center items-center text-white gap-7' id='sin'>
  <h1 style={{ fontSize: '80px',fontFamily:'monospace' }}>L</h1>
  <h1 style={{ fontSize: '80px' }}>O</h1>
  <h1 style={{ fontSize: '80px' }}>G</h1>
  <h1 style={{ fontSize: '80px' }}>I</h1>
  <h1 style={{ fontSize: '80px' }}>N</h1>
</div>

              <div className=" w-50 flex justify-center items-center mb-30 bg-purple/20 backdrop-blur-sm rounded-xl p-6 border border-white/306 shadow-lg rounded-lg border border-gray-300 flex flex-row gap-8 " style={{overflow:"hidden"}}>



      <div id='form' className='z-0 w-100  min-h-90 flex flex-row gap-10 shadow-lg rounded-lg bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30e p-6 h-90 jusitfy-center border-2 border-solid border-pink ' style={{overflow:"hidden"}}
>

        <div id='login' className=' min-h-70 w-50 flex flex-col gap-10  items-center w-64 '>
    <h2 className="text-2xl font-bold mb-6" style={{color:'white'}}>Login</h2>

          <form onSubmit={subHandler} className='flex flex-col space-y-1  items-center' >
            <input type="email" required onChange={(e) => setObj({ ...obj, email: e.target.value })} name='email' className="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='Username...' /><br />
            <input type="password" required name='password' onChange={(e) => setObj({ ...obj, password: e.target.value })} className="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='Password...' /><br />
            <select name="role" id="Role" onChange={(e) => setObj({ ...obj, role: e.target.value })} className=' text-large rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 h-8'>
              <option value="Student">Student</option>
              <option value="Developer">Developer</option>
              <option value="Professor">Professor</option>
              <option value="Other">Other</option>
            </select><br />
            <button className="bg-gray-100 w-20 h-10 rounded-md border hover:bg-blue-500" style={{ borderRadius: '0.5rem' }}>Login</button>
          </form>
        </div>
        
        <div id='signup' className='flex justify-center items-center flex-col w-64'>
    <h2 className="text-2xl font-bold mb-6 text-white">Sign In</h2>
          <form onSubmit={logHandler} className='flex flex-col space-y-3 justify-center items-center'>
            <input type="text" name='name' required onChange={(e) => { setObj1({ ...obj1, name: e.target.value }) }}className="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='Username'/><br />
            <input type="email" name='email'required  onChange={(e) => { setObj1({ ...obj1, email: e.target.value }) }}className="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='Email'/><br />
            <input type="password" name='password'required  onChange={(e) => { setObj1({ ...obj1, password: e.target.value }) }} className="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='password'/><br />
            <select name="role" id="" defaultValue={"Student"} onChange={(e) => { setObj1({ ...obj1, role: e.target.value }) }} className=' text-large rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 h-8'>
              <option value="Student">Student</option>
              <option value="Developer">Developer</option>
              <option value="Professor">Professor</option>
              <option value="Other">Other</option>
            </select><br />
            <button className="bg-gray-100 w-20 h-10 rounded-md border hover:bg-blue-500" style={{ borderRadius: '0.5rem' }}>Sign In</button>
          </form>
        </div>
      </div>
      
              </div>
              <div className='mr-40 flex flex-col text-white justify-center items-center gap-7' id='lin'>
    <h1 style={{ fontSize: '80px' }}>S</h1>
    <h1 style={{ fontSize: '80px' }}>I</h1>
    <h1 style={{ fontSize: '80px' }}>G</h1>
    <h1 style={{ fontSize: '80px' }}>N</h1>
    <h1 style={{ fontSize: '80px' }}>I</h1>
    <h1 style={{ fontSize: '80px' }}>N</h1>
  </div>
        </div>
    </div>
  )
}

export default Login
