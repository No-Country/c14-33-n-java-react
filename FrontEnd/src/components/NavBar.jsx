import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-black font-black text-center">
                OEA
            </h2>
            <input type="search"
            placeholder="Buscar proyecto"
            className="rounded-lg lg:w-96 block p-2 border" />
            <Link to='/proyectos'
            className='font-bold uppercase'>Proyectos</Link>
            <button
            className='text-white text-sm bg-teal-600 p-3 rounded-md uppercase font-bold'
            type='button'>Cerrar Sesión</button>

        </div>
    </header>
  )
}

export default NavBar
