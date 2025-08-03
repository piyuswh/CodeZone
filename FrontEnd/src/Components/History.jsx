import React,{useEffect,useState} from 'react'
import '../Stylesheets/History.css'
import { Link } from 'react-router-dom'
import moment from 'moment';
const History = () => {
  const [attempts,setAttempts]=useState([])
  useEffect(()=>{
fetch("http://localhost:3000/Attempts",{
  method:'GET',
  headers:{
    'Content-Type':'application/json'
  },credentials:'include'
}).then(res=>res.json())
.then(data=>{
  // console.log(data);
  
  setAttempts(data)}
)
  },[])

  return (
    <div id="main">
      
     {
      attempts.length==0?<h1 className='text-center'>No Attempts Yet</h1>:<>
      <h1 className='text-center'>Your Attempts</h1><br />
      <div id="attempts" className=' flex flex-col justify-center items-center'>
<table className="border-separate border-spacing-y-4 border-spacing-x-4 text-left w-full max-w-4xl" id='table'>
  <thead>
    <tr>
      <th className='text-2xl font-bold' >Sr.No</th>
      <th className='text-2xl font-bold'>Submitted At</th>
      <th className='text-2xl font-bold'>Status</th>
      <th className='text-2xl font-bold'>CODE</th>
    </tr>
  </thead>
  <tbody>
    {[...attempts].reverse().map((val, ind) => (
      <tr key={val._id}>
        <td className='text-xl'>{ind + 1}</td>
<td className='text-xl'>{moment(val.submittedAt).format('DD-MM-YYYY hh:mm A')}</td>
        <td className='text-xl'>{val.status}</td>
        <td className='text-xl'><Link to={`/codezone/${val._id}`}>Code</Link></td>
      </tr>
    ))}
  </tbody>
</table>
</div>

      
      
      </>
     }
      
    </div>
  )
}

export default History
