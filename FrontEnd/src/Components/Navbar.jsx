import React from 'react'
import '../Stylesheets/Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate,useLocation} from 'react-router-dom'
const Navbar = ({setlang}) => {
  const navigate=useNavigate()
  const location=useLocation()
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
    <div>
<nav className="navbar navbar-expand-lg bg-secondary navbar-dark p-2">
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
       
        {location.pathname!=='/history'&&(<select name="" id="lang" defaultValue="cpp" onChange={(e)=>setlang(e.target.value)}>
  <option value="cpp" disabled hidden>Java</option>
  <option value="cpp">C++</option>
  <option value="cpp">C</option>
  <option value="java">Java</option>
  <option value="python">Python</option>
</select>)}
       
      <button className="w-20 h-10 bg-white flex items-center justify-center" style={{borderRadius:'10px'}} onClick={navHandler}>Code</button>
      </ul>
      <h3  className='mr-2 bg-red-700 text-white cursor-pointer ' onClick={Handlelog}>Logout</h3>
      <h2>Logo</h2>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
