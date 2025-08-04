import React, { useEffect } from 'react'
import '../Stylesheets/Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate,useLocation} from 'react-router-dom'
const Navbar = ({setlang}) => {
  const navigate=useNavigate()
  const location=useLocation()
  useEffect(() => {
  if (location.pathname !== '/history') {
    setlang("java");
  }
}, [location.pathname]);
  function navHandler(e){
    navigate('/codezone')
    
  }
  async function Handlelog(){
    try {
      await fetch('http://localhost:3000/logout', {
        method: 'GET',
        credentials: 'include',
      });

      navigate('/');
    } catch (err) {
      console.error('Logout failed', err);
    }



  }
  
  return (
    <div className='bg-red-500'>
<nav className="navbar navbar-expand-lg bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900
 navbar-dark px-4">
  <div className="container-fluid">
    <a className="navbar-brand">CodeZone</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<div className="navbar-collapse show" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/history">Attempts</Link>
        </li>
          <button  className="ml-4 text-white bg-gray-500 px-4 py-1 rounded hover:bg-gray-800 " style={{borderRadius:'10px'}} onClick={navHandler}>Code</button>
       
        {location.pathname!=='/history'&&(<select
  id="lang"
  defaultValue="java"
  onChange={(e) => setlang(e.target.value)}
  className="px-3 py-2 bg-transparent text-white "
>
  <option value="java" hidden>Java</option>
  <option value="cpp" className='text-black'>C++</option>
  <option value="c" className='text-black'>C</option>
  <option value="java" className='text-black'>Java</option>
  <option value="python" className='text-black'>Python</option>
</select>)}
       
      </ul>
      <h6  className=' text-center bg-red-400 text-white w-10 h-10  mr-2 mt-2 cursor-pointer' style={{borderRadius:'8px'}} onClick={Handlelog}>Log out</h6>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
