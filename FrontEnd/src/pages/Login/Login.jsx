import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
      <h1 className="text-sky-950 font-black rounded-t-xl text-4xl capitalize bg-red-400 p-5">Para acceder a tu lugar de trabajo {''}
      <span className="text-gray-100">Inicia sesión</span></h1>
      <form className="my-10 mt-0 bg-white shadow rounded-b-xl  p-10 font-mono font-black">
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

        <div className="my-5 font-mono">
          <label className="uppercase text-gray-700 block text-xl"
          >Contraseña</label>
          <input
          type="password"
          placeholder="Ingrese su contraseña"
          className="w-full mt-2 p-3 border border-gray-400 rounded-xl bg-slate-200 peer ..."          
          />
        </div>
        <input 
        type="submit"
        value={'Iniciar Sesión'}
        className="font-bold uppercase mb-5 bg-white border shadow w-full py-3 text-gray-600 hover:bg-red-400 cursor-pointer transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link 
        className="font-black block text-center my-5 text-zinc-700 hover:text-red-500 "
        to='register'>¿No tienes una cuenta? Regístrate
        </Link>
        <Link 
        className="font-black block text-center my-5 text-blue-600 hover:text-red-500"
        to='forgot-password'>¿Olvidaste la contraseña?
        </Link>
      </nav>
        
    </>
  )
}

export default Login

