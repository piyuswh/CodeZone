import React,{useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({children}) => {
    const [auth,setAuth]=useState(null)
    useEffect(()=>{
        fetch("http://localhost:3000/checkauth",{
            credentials:'include'
        })
        .then(res=>res.json())
        .then(data=>{
            setAuth(data.authenticated)
        })
        .catch(error=>{
            setAuth(false)
        })

    },[])

   if (auth === null) return <div>Loading...</div>;

  return auth ? children : <Navigate to="/" />;
}

export default ProtectRoute
