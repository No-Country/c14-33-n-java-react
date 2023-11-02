import { useState } from 'react'
import Alert from './Alert'
import useProjects from '../hooks/useProjects'


const MemberForm = () => {
  const [email, setEmail] = useState('')

  const { showAlert, alert, submitMember } = useProjects()

  const handleSubmit = e => {
    e.preventDefault();

    if(email === '') {
        showAlert({
          msg: 'El Email es Obligatorio',
          error: true
        })
        return
    }

    submitMember(email)

  }

  const { msg } = alert

  return (
    <form
      className="bg-white py-10 px-5 w-full md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {msg && <Alert alert={alert} />}
      <div className='mb-5'>
          <label
              className='text-gray-700 uppercase font-bold text-sm' 
              htmlFor='email'
          >
              Email Miembro
          </label>
          <input
              type="email"
              id="email"
              placeholder='Email del usuario a buscar'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={email}
              onChange={e => setEmail(e.target.value)}
          />
      </div>

      <input
          type="submit"
          className='bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded text-sm'
          value='Buscar Colaborador'
      />

    </form>
  )
}

export default MemberForm