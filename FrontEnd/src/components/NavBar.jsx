import { Link } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import useAuth from '../hooks/useAuth';
import Search from './Search';

const NavBar = () => {
  const { handleSearcher, closeSesionProjects } = useProjects()
    const { closeSesionAuth } = useAuth()
    const handleCloseSesion = () => {
      closeSesionAuth ()
      closeSesionProjects()
      localStorage.removeItem('token')
  }
  return (
    <header className="px-4 py-5 bg-teal-700 border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-white font-black text-center">
                ARODEQ
            </h2>

            <div className='flex flex-col md:flex-row items-center gap-4 text-gray-300'>
                <button
                    type="button"
                    className='font-bold uppercase'
                    onClick={handleSearcher}
                >Buscar Proyecto</button>
                <Link
                    to="/projects"
                    className='font-bold uppercase'
                >Proyectos</Link>

                <button
                    type="button"
                    className='text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold'
                    onClick={handleCloseSesion}
                >Cerrar Sesión</button>
                <Search/>
            </div>

        </div>
    </header>
  )
}

export default NavBar
