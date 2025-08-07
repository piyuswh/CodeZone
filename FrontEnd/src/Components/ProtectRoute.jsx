import React,{useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL

const ProtectRoute = ({children}) => {
    const [auth,setAuth]=useState(null)
    useEffect(()=>{
        fetch(`${backendUrl}/checkauth`,{
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
