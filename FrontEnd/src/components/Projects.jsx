import React from 'react'
import useProjects from '../hooks/useProjects'
import infoProject from './infoProject'
import Alert from './Alert'

const Projects = () => {

    const{projects,alert}=useProjects()
    const { msg } = alert

  return (
    <>
            <h1 className='text-4xl font-black'>Proyectos</h1>

            {msg&&<Alert alert={alert}/>}

            <div className="bg-gray-100 shadow mt-10 rounded-md ">
                {projects.length ? projects.map(project=>(
                  <infoProject
                  key={project._id}
                  project={project}
                  />))
                  :<p className='text-center text-slate-600'>No hay proyectos todavía</p>}
            </div>

        </>
  )
}

export default Projects
