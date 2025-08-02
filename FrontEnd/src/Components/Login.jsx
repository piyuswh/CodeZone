import React, { useState } from 'react'
import '../Stylesheets/Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
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
    <div id="main" className='bg-blue-400 w-full min-h-screen flex flex-col p-6'>
      <h1 className="text-4xl font-bold text-white mb- text-center">Enter Into CodeZone</h1>
        <div className="flex-grow flex justify-center items-center">
              <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 flex flex-row gap-8">



      <div id='form' className=' min-h-90 flex flex-row gap-10 shadow-lg rounded-lg bg-white p-6 h-90 jusitfy-center border-2 border-solid border-pink '>

        <div id='login' className=' min-h-70 w-50 flex flex-col gap-10  items-center w-64 '>
    <h2 className="text-2xl font-bold mb-6">Login</h2>

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
    <h2 className="text-2xl font-bold mb-6">Sign In</h2>
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
        </div>
    </div>
  )
}

export default Login
