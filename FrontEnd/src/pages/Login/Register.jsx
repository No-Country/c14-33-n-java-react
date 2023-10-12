import { Link } from "react-router-dom"


const Register = () => {
  return (
    <>
      <h1 className="text-black font-black rounded-t-xl text-4xl capitalize bg-cyan-600 p-5">Crea tu cuenta y organiza tus {''}
        <span className="text-gray-100">Proyectos y Tareas</span></h1>
      <form className="mt-0 mb-5 bg-white shadow rounded-b-xl  p-10 font-mono font-black">

        <div className="my-5 mb-10">
          <label className="uppercase text-gray-700 block text-xl "
            >Nombre</label>

          <input
            type="text"
            placeholder="Ingrese su nombre"
            className="w-full mt-2 p-3 border border-gray-400 rounded-xl bg-slate-200"
          />
        </div>

        <div className="my-5">
          <label className="uppercase text-gray-700 block text-xl "
            >Email</label>

          <input
            type="email"
            placeholder="Ingrese su Correo"
            className="w-full mt-2 p-3 border border-gray-400 rounded-xl bg-slate-200 peer ... 
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-red-500 invalid:text-red-500
          focus:invalid:border-red-500"
          />
          <p className="mt-2 invisible peer-invalid:visible text-red-400 text-sm ml-1 ">
            Porfavor ingrese una dirección de correo valida.
          </p>
        </div>

        <div className="my-5 font-mono mb-10">
          <label className="uppercase text-gray-700 block text-xl"
            >Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            className="w-full mt-2 p-3 border border-gray-400 rounded-xl bg-slate-200 peer ..."
          />
        </div>

        <div className="my-5 font-mono mb-10">
          <label className="uppercase text-gray-700 block text-xl"
            >Confirmar Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese nuevamente su contraseña"
            className="w-full mt-2 p-3 border border-gray-400 rounded-xl bg-slate-200 peer ..."
          />
        </div>

        <input
          type="submit"
          value={'Crear Cuenta'}
          className="font-bold uppercase mb-5 bg-white border shadow w-full py-3 text-gray-600 hover:bg-green-300 cursor-pointer transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-center pb-5">
        <Link
          className="font-black block text-center my-5 text-zinc-700 hover:text-white "
          to='/'>Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>

    </>
  )
}

export default Register

