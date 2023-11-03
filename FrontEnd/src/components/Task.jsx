import { formatDate } from "../helpers/formatDate"
import useAdmin from "../hooks/useAdmin"
import useProjects from "../hooks/useProjects"


const Task = ({task}) => {

    const { handleEditTaskModal, handleDeleteTaskModal, completeTask } = useProjects()
    const admin = useAdmin()

    const { description, user, priority, deliveryDate, state, _id } = task

    return (
        <div className="border-b p-5 flex justify-between items-center">
            <div className="flex flex-col  items-start">
                <p className="mb-1 text-xl">{user}</p>
                <p className="mb-1 text-sm text-gray-500 uppercase">{description}</p>
                <p className="mb-1 text-sm">{ formatDate(deliveryDate) }</p>
                <p className="mb-1 text-gray-600">Priority: {priority}</p>
                { state && <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white"
                >Completada por: {task.complete.user}</p>}
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
                {admin && (
                    <button
                        className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                        onClick={() => handleEditTaskModal(task)}
                    >Editar</button>

                )}

                <button
                    className={`${state ? 'bg-emerald-600' : 'bg-gray-600'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
                    onClick={() => completeTask(_id)}
                >{state ? 'Completa' : 'Incompleta'}</button>
                
                {admin && ( 
                    <button
                        className="bg-red-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                        onClick={() => handleDeleteTaskModal(task)}
                    >Eliminar</button>
                )}
            </div>
        </div>
    )
}

export default Task