import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";

const ProjectsContext=createContext()

const ProjectsProvider=({children})=>{
    const[projects,setProjects]=useState([])
    const[alert,setAlert]=useState([])

    const showAlert=alert=>{
        setAlert(alert)
        setTimeout(() => {
            setAlert({})
        }, 3000);
    }

    const submitProject=async projects =>{
        
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