import { Link, useParams } from "react-router-dom"
import useProjects from "../hooks/useProjects"
import { useEffect } from "react"
import io from 'socket.io-client'
import Member from "./Member"
import useAdmin from './../hooks/useAdmin';
import RemoveTask from "./RemoveTask"
import RemoveMember from "./RemoveMember"
import TaskForm from "./TaskForm"
import Task from "./Task"

let socket
const Project = () => {

  const admin=useAdmin()
  const params=useParams()
/* traemos el hook y extraemos getProject,project,loading*/
const{getProject,project,loading,handleTaskModal,alert,submitTasksProject,deleteTaskProject,updateTaskProject,changeStateTask}=useProjects()
/* hook envia el id al provider*/
useEffect(()=>{
  getProject(params.id)
},[])
useEffect(()=>{
  socket = io(import.meta.env.VITE_BACKEND_URL)
  socket.emit('abrir proyecto', params.id)
},[])

useEffect(() => {
  socket.on('tarea agregada'  , newTask => {
    if(newTask.project === project._id) {
        submitTasksProject(newTask)
    }
  })

  socket.on('tarea eliminada', deletedTask => {
    if(deletedTask.project === project._id) {
      deleteTaskProject(deletedTask)
    }
  })

  socket.on('tarea actualizada', updateTask => {
    if(updateTask.project._id === project._id) {
      updateTaskProject(updateTask)
    }
  })

  socket.on('nuevo estado', newStateTask => {
    if(newStateTask.project._id === project._id) {
      changeStateTask(newStateTask)
    }
  })
})

const {user } = project
if(loading) return 'loading...'
const { msg } = alert


  return (<><div className="flex justify-between">
    <h1>{user}</h1>

    {admin && (<div className="flex items-center gap-1 text-gray-400 hover:text-cyan-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
      <Link className="uppercase font-bold" to={`/projects/edit/${params.id}`}>
        Edit
      </Link>
    </div>)}

    </div>
    {admin && (<button
    onClick={handleTaskModal}
    type="button"
    className="text-sm mt-5 px-5 py-3w w-full md:w-auto rounded-sm uppercase flex gap-2
    font-bold bg-teal-700 text-white text-center items-center justify-center">
      Nueva tarea
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
    </button>)}

<p className='font-bold text-xl mt-10'>Tareas del Proyecto</p>

<div className='bg-white shadow mt-10 rounded-md'>
    {project.tasks?.length ? 
      project.tasks?.map( task => (
        <Task 
          key={task._id}
          task={task}
        />
      )) : 
    <p className='text-center my-5 p-10'>Aun no se creo ninguna tarea en este proyecto</p>}
</div>

{admin && (
  <>
    <div className='flex items-center justify-between mt-10'>
        <p className='font-bold text-xl'>Miembros</p>
        <Link
          to={`/project/new-member/${project._id}`}
          className='text-gray-400 hover:text-black uppercase font-bold'
        >Añadir</Link>
    </div>

    <div className='bg-white shadow mt-10 rounded-md'>
        {project.members?.length ? 
          project.members?.map( member => (
              <Member 
                  key={member._id}
                  member={member}
              />
          )) : 
        <p className='text-center my-5 p-10'>No hay Miembros en este proyecto</p>}
    </div>
  </>
)}
<TaskForm />
<RemoveTask />
<RemoveMember />
  </>)
  
  
}

export default Project
