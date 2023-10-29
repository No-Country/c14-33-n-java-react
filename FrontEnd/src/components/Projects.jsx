import React from 'react'
import useProjects from '../hooks/useProjects'
import infoProject from './infoProject'

const Projects = () => {

    const{projects}=useProjects()


  return (
    <>
            <h1 className='text-4xl font-black'>Proyectos</h1>

            <div>
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
