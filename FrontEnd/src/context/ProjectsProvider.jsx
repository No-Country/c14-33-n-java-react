import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import { useNavigate } from "react-router-dom";

const ProjectsContext=createContext()

const ProjectsProvider=({children})=>{
    const[projects,setProjects]=useState([])
    const[alert,setAlert]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{
        const getProjects=async()=>{
            try {
                const token=localStorage.getItem('token')
            if(!token) return

            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
            }
            const{data}=await axiosClient('/projects',config)
            setProjects(data)
            } catch (error) {
                
            }
        }
    })

    const showAlert=alert=>{
        setAlert(alert)
        /* temporizar la alerta */
        setTimeout(() => {
            setAlert({})
        }, 3000);
    }

    const submitProject=async project =>{
        try {
            const token=localStorage.getItem('token')
            if(!token) return

            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
            }

            const{data}=await axiosClient.post('/projects', project, config)

            setProjects([...project,data]
                )
            setAlert({
                msg:'El proyecto se creo con exito!!',
                error:false
            })

            setTimeout(()=>{
                setAlert({})
                navigate('/projets')
            },3000)
        } catch (error) {
            
        }
    }
    return(
        <ProjectsContext.Provider
        value={{
            projects,
            showAlert,
            alert,
            submitProject
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export {ProjectsProvider}

export default ProjectsContext