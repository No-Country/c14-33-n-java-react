import React from 'react'
import useProjects from '../hooks/useProjects'

const Member = ({member}) => {
    const {handleRemoveMember} = useProjects()

    const {  user, email } = member

    return (
        <div className="border-b p-5 flex justify-between items-center">
            <div>
                <p>{user}</p>
                <p className="text-sm text-gray-700">{email}</p>
            </div>

            <div>
                <button
                    type="button"
                    className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={() => handleRemoveMember(member)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Member