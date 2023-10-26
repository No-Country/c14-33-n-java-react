import React, {useState} from 'react'

export default function Proyect({isActive, onClick}) {

    

    return (
        <>

            <div className={
                    `rounded-3xl p-3 m-2 border flex justify-between items-center
                    ${
                        isActive ? "bg-gray-600 border-gray-400" : "bg-gray-500 border-gray-500"
                    }`
                }
                onClick={onClick}>
                <h1>Proyect X</h1>
                <div className='bg-red-600 p-2 m-1 rounded-md cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </div>
            </div>

        </>
    )
}
