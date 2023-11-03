import React from 'react'
import { Link } from 'react-router-dom'

const infoProject = ({project}) => {
    const{user,_id,client}=project
     
  return (
    <div className='border-b p-5 flex'>
      <p className='flex-1'>{user}
      <span className='text-sm text-gray-600 uppercase'>{''}{client}</span>
      </p>
      <Link
      to={`${_id}`}
      className='text-gray-800 hover:text-green-800 text-sm font-bold'
      >Ver Proyecto</Link>
    </div>
  )
}

export default infoProject
