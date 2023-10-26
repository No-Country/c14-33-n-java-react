import React, {useState} from 'react'

export default function ProyectForm({visible, setVisible}) {


    return (
        <> {
            visible && <div className='bg-gray-900 bg-opacity-50 fixed h-screen w-screen flex justify-center items-center'>
                <div className='bg-white rounded-lg w-1/4 h-auto p-2'>
                    <form action="#" className='flex flex-col'>
                        <div className='m-5 flex flex-col'>
                            <label htmlFor="nombre">Nombre del Proyecto</label>
                            <input className='border-2 border-gray-600 rounded-md p-1' type="text" name='nombre'/>
                        </div>

                        <div className='m-5 flex flex-col'>
                            <label htmlFor="description">Descripcion</label>
                            <textarea className='border-2 border-gray-600 rounded-md p-1' name="description" id="" cols="10" rows="5"></textarea>
                        </div>

                        <div className='w-full flex justify-end'> 
                            <button className='bg-gray-800 text-white p-1 m-1 rounded-md hover:bg-gray-950'
                            onClick={() => setVisible(false)} >Cancelar</button>
                            <button className='bg-blue-600 text-white p-1 m-1 rounded-md hover:bg-blue-900' type='submit'
                            onClick={() => setVisible(false)} >Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        } </>
    )
}
