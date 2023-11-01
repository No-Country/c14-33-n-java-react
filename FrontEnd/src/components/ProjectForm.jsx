import React, { useEffect, useState } from 'react'
import useProjects from '../hooks/useProjects'
import { useParams } from 'react-router-dom'
import Alert from './Alert'

const ProjectForm = () => {
    const[id,setId]=useState(null)
    const[name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[deliveryDate ,setDeliveryDate]=useState('')
    const[client,setClient]=useState('')
    
    const params=useParams()
    const{showAlert, alert, submitProject,project}=useProjects()
    /* ----------------------------- */
    useEffect(()=>{
      if (params.id) {
        setId(project._id)
        setName(project.name)
        setDescription(project.description)
        /* el signo ? asegura que si project.deliveryDate no está definido, 
        la expresión se detenga de manera segura sin lanzar un error  */
        setDeliveryDate(project.deliveryDate?.split('T')[0])
        setClient(project.client)
      }
    },{params})
    /* ----------------------------- */
    const handleSubmit= async e=>{
        e.preventDefault()

        if([name,description,deliveryDate,client].includes('')){
            showAlert({
                msg:'Todos los campos son obligatorios',
                error:true
            })
            return
        }

        await submitProject({id,name,description,deliveryDate,client})

        setId(null)
        setName('')
        setDescription('')
        setDeliveryDate('')
        setClient('')

    }

    const { msg } = alert

  return (
    <form className='bg-white py-10 px-5 md:w-1/2 rounded-md'
    onSubmit={handleSubmit}>

    {msg && <Alert alert={alert}/>}

      <div className='mb-5'>
        <label className='text-gray-600 uppercase font-bold text-sm' htmlFor="name">Nombre Proyecto</label>

        <input type="text"
        className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
        placeholder='Nombre del Proyecto' 
        value={name}
        onChange={e=>setName(e.target.value)}/>
      </div>
      {/* --------------------- */}
      <div className='mb-5'>
        <label className='text-gray-600 uppercase font-bold text-sm' htmlFor="delivery-Date">Descripción</label>

        <textarea 
        className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
        placeholder='Descripción del Proyecto' 
        value={description}
        onChange={e=>setDescription(e.target.value)}/>
      </div>
      {/* --------------------- */}
      <div className='mb-5'>
        <label className='text-gray-600 uppercase font-bold text-sm' htmlFor="">Fecha Entrega</label>

        <input 
        type='date'
        className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
        placeholder='Descripción del Proyecto' 
        value={deliveryDate}
        onChange={e=>setDeliveryDate(e.target.value)}/>
      </div>
    {/* --------------------- */}
      <div className='mb-5'>
        <label className='text-gray-600 uppercase font-bold text-sm' htmlFor="client">Nombre Cliente</label>

        <input type="text"
        className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md'
        placeholder='Nombre del Cliente' 
        value={client}
        onChange={e=>setClient(e.target.value)}/>
      </div>
    <input type="submit" 
    value={id?'Update Project':'Create Project'}
    className='bg-teal-700 w-full p-3 uppercase font-bold text-white rounded cursor-pointer
    hover:bg-red-400 transition-colors'></input>
    </form>
  )
}

export default ProjectForm
