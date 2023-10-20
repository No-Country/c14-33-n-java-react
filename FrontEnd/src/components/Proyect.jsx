import React from 'react'

export default function Proyect() {
    return (
        <>

            <div className='bg-gray-400 hover:bg-gray-600 transition duration-5 h-20 w-auto m-5 rounded-2xl p-5 flex items-center justify-between'>

                <div className='flex'>
                    <h1 className='m-2'>Tarea X</h1>
                    <h1 className='bg-gray-300 mx-4 px-4 rounded-xl flex items-center'>Backend</h1>
                </div>

                <div className='flex items-center'>
                    <p>Work in progress by</p>
                    <div className='h-12 w-12 rounded-full bg-gray-800 mx-5'></div>
                    <div className='h-8 w-10 bg-red-600 rounded-lg'></div>
                </div>
            </div>

        </>
    )
}
