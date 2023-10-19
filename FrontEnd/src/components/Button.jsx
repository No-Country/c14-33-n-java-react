import React, { useState } from 'react'

export default function Button({isActive, onClick}) {

    /* const [isActive, setIsActive] = useState(false); */

   /*  const handleClick = () => {
      setIsActive(!isActive)
    }; */

  return (
    <>

      <div className={`rounded-3xl p-3 m-2 border
      ${isActive ? "bg-gray-700 border-gray-400" : "bg-gray-500 border-gray-500"}`} 
      onClick={onClick}>
        Proyecto X
      </div>

    </>
  )
}
