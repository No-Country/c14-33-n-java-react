import React from 'react'
import ProjectForm from '../../components/ProjectForm'

const NewProjects = () => {
  return (
    <>
            <h1 className='text-4xl font-bold text-center'>Crear Proyecto</h1>

            <div className='mt-10 flex justify-center'>
                <ProjectForm/>
            </div>

        </>
  )
}

export default NewProjects