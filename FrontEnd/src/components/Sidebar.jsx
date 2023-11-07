import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from './../hooks/useAuth';

const Sidebar = () => {

  const{auth}=useAuth()

  return (
    <aside className='md:w-80 lg:w-96 px-7 py-10'>
      <p className='text-2xl  font-semibold'>Bienvenido/a {auth.user} </p>
      <Link to='create-project'
      className='bg-cyan-600 hover:bg-red-600 w-full p-3 text-white font-bold block mt-5 text-center rounded-md'>Nuevo Proyecto </Link>
    </aside>
  )
}

export default Sidebar
