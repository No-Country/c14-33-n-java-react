import React from 'react'

export default function Task() {
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
                    <div className='bg-red-600 p-2 m-1 rounded-md cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                    </div>
                </div>
            </div>

        </>
    )
}
