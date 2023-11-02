import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MemberForm from '../../components/MemberForm';
import useProjects from '../../hooks/useProjects';
import Alert from '../../components/Alert';

const NewMember = () => {

  const { getProject,project,loading,member,addMember,alert} = useProjects()
  const params = useParams()

  useEffect(() => {
    getProject(params.id)
  }, []);
  


  if(!project?._id) return <Alert alert={alert} />

  return (
    <>
      <h1 className="text-4xl font-black">Añadir nuevo Miembro al Proyecto: {project.name}</h1>


      <div className="mt-10 flex justify-center">
        <MemberForm />
      </div>


      {loading ? <p className="text-center">cargando...</p> : member?._id && (
        <div className='flex justify-center mt-10'>
            <div className='bg-gray-100 py-10 px-5 md:w-1/2 rounded-md shadow w-full'>
                <h2 className='text-center mb-10 text-2xl font-bold'>Resultado:</h2>

                <div className='flex justify-between items-center'>
                  <p>{member.name}</p>

                  <button
                    type="button"
                    className='bg-slate-500 px-5 py-2 rounded-lg uppercase text-gray-100 font-bold text-sm'
                    onClick={() => addMember({
                      email: member.email
                    })}
                  >Agregar al Proyecto</button>
                </div>
            </div>
        </div>
      ) }

    </>
  )
}

export default NewMember