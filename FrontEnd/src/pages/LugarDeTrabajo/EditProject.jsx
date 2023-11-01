import React from 'react'
import useProjects from '../../hooks/useProjects'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectForm from '../../components/ProjectForm';

const EditProject = () => {
    const params=useParams()
/* traemos el hook y extraemos getProject,project,loading*/
const{getProject,project,loading}=useProjects()
/* hook envia el id al provider*/
useEffect(()=>{
  getProject(params.id)
},[])

return (loading?'loading...':(
    <>
    <h1 className="font-black text-4xl">Edit Project:{project.name}
    </h1>

    <div className='mt-10 flex justify-center'>
                <ProjectForm/>
            </div>

    </>
  )
)}

export default EditProject
