import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import { useNavigate } from "react-router-dom";

const ProjectsContext=createContext()

const ProjectsProvider=({children})=>{
    const[projects,setProjects]=useState([])
    const[alert,setAlert]=useState([])
    const[project,setProject]=useState([])
    const[loading,setLoading]=useState(false)

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
        if (project.id) {
            await editProject(project)
        }else{
            await newProject(project)
        }
    }
    const editProject= async(project)=>{
        try {
            const token=localStorage.getItem('token')
            if(!token) return

            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
            }
            const{data}=await axiosClient.put(`/projects/${project.id}`,project,config)
            console.log(data)/* borrar */

            const updatedProjects=projects.map(projectState=> projectState._id=data._id?data:proyectoState)
            setProjects(updatedProjects)

            setAlert({
                msg:'El proyecto se actualizo con exito',
                error:false
            })

            setTimeout(()=>{
                setAlert({})
                navigate('/projets')
            },3000)

        } catch (error) {
            console.log(error)/* borrar */
        }
        
    }
    const newProject= async(project)=>{
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

    /* obtenemos el proyecto */
    const getProject = async id=>{
        setLoading(true)
        try {
            const token=localStorage.getItem('token')
            if(!token) return

            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
            }

            const {data}=await axiosClient(`/projects/${id}`,config)
            setProject(data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const deleteProject=async id=>{
        try {
            const token=localStorage.getItem('token')
            if(!token) return

            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
            }
            const{data}=await axiosClient.delete(`/projects${id}`, project, config)
            const updatedProjects=projects.filter(projectState=>projectState._id !== id)
            setProjects(updatedProjects)

            setAlert({
                msg:data.msg,
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
            submitProject,
            getProject,
            project,
            loading,
            deleteProject
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export {ProjectsProvider}

export default ProjectsContext