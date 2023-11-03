import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import { useNavigate } from "react-router-dom";


const AuthContext=createContext()

const AuthProvider=({children})=>{

    const [auth,setAuth]=useState({})
    const [loading,setLoading]=useState(true)

    const navigate=useNavigate()

    useEffect(()=>{
        const authUser=async()=>{
            const token=localStorage.getItem('token')
            if(!token){
                setLoading(false)
                return
            }

            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            try {
            const {data}=await axiosClient('/users/profile',config)
            setAuth({data})
            navigate('/projects')
            } catch (error) {
                setAuth({})
            }finally{
                setLoading(false)
            }            
        }
        authUser()
    },[])

    const closeSesionAuth = () => {
        setAuth({})
    }

    return(
        <AuthContext.Provider
        value={{
            auth,
            setAuth,
            loading,
            closeSesionAuth
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export{AuthProvider}
export default AuthContext
