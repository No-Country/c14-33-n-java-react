import React from 'react'
import useProjects from '../hooks/useProjects'
import infoProject from './infoProject'
import Alert from './Alert'

const Projects = () => {

    const{projects,alert}=useProjects()
    const { msg } = alert

  return (
    <>
            <h1 className='text-4xl font-mono font-semibold  '>Proyectos</h1>

            {msg&&<Alert alert={alert}/>}

            <div className="bg-gray-200 shadow mt-10 rounded-md ">
                {projects.length ? projects.map(project=>(
                  <infoProject
                  key={project._id}
                  project={project}
                  />))
                  :<p className='font-bold text-xl text-center text-slate-600 p-5'>No hay proyectos todavía</p>}
            </div>

        </>
  )
}

export default Projects
