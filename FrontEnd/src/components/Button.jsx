import React, { useState } from 'react'

export default function Button({isActive, onClick}) {

    /* const [isActive, setIsActive] = useState(false); */

   /*  const handleClick = () => {
      setIsActive(!isActive)
    }; */

  return (
    <>

      <div className={`rounded-3xl p-3 m-2 border flex justify-between items-center
      ${isActive ? "bg-gray-600 border-gray-400" : "bg-gray-500 border-gray-500"}`} 
      onClick={onClick}>
        <h1>Proyect X</h1>
        <div className='h-8 w-10 bg-red-600 rounded-lg'></div>
      </div>

    </>
  )
}
