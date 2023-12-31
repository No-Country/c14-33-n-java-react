import { useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../../components/Alert"
import axiosClient from "../../config/axiosClient"


const Register = () => {
    const[user,setUser]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPasword]=useState('')
    const[repeatPassword,setRepeatPassword]=useState('')
    const[alert,setAlert]=useState({})
    
    /* funcion para el envio del formulario */
    const handleSubmit = async e =>{
      e.preventDefault();
      /* hacemos que todos los campos sean obligatorios */
      if([user,email,password,repeatPassword].includes('')){      
        setAlert({
          msg:'¡Todos los campos son obligatorios!',
          error : true
        })
        return
      }
      if(password !== repeatPassword){
        setAlert({
          msg:'¡Las contraseñas no coinciden!',
          error : true
        })
        return
      }
      if(password.length<6){
        setAlert({
          msg:'La contraseña no debe ser menor a 6 caracteres',
          error : true
        })
        return
      }
      setAlert({})
      try {
        const {data} = await axiosClient.post('/users',{user,email,password})
        setAlert({
          /* llamamos al mensaje del back e igualamos error a false */
          msg: data.msg,
          error:false
        })
        /* reseteamos los valores de los campos */        
        setUser('')
        /* setFirstName('')
        setLastName('') */
        setEmail('')
        setPasword('')
        setRepeatPassword('')
      } catch (error) {
        setAlert({
          /* llamamos al mensaje del back e igualamos error a true */
          msg: error.response.data.msg,
          error:true
        })
      }

    }

  const { msg } = alert

  return (
    <>
      <div>
      <h1 className="text-center text-sky-950q font-bold rounded-t-md text-4xl capitalize bg-cyan-700  bg-opacity-50 p-5">Crea tu cuenta y 
        empieza a crear proyectos</h1>

      {/* ejecutamos la alerta */}
      {msg && <Alert alert={alert}/>}

      <form 
      className="mt-0 mb-5 bg-white shadow rounded-b-xl  p-10 font-mono font-black"
      onSubmit={handleSubmit}
      >

        <div className="my-5 mb-10">
          <label className="uppercase text-gray-700 block text-xl "
            >Alias</label>

          <input
            type="text"
            placeholder="Ingrese su nombre"
            className="w-full mt-2 p-3 border border-gray-400 rounded-md bg-slate-200"
            value={user}
            onChange={e=>setUser(e.target.value)}
          />
        </div>
        {/* <div className="my-5 mb-10">
          <label className="uppercase text-gray-700 block text-xl "
            >Nombre</label>

          <input
            type="text"
            placeholder="Ingrese su nombre"
            className="w-full mt-2 p-3 border border-gray-400 rounded-md bg-slate-200"
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
          />
        </div>
        <div className="my-5 mb-10">
          <label className="uppercase text-gray-700 block text-xl "
            >Apellido</label>

          <input
            type="text"
            placeholder="Ingrese su apellido"
            className="w-full mt-2 p-3 border border-gray-400 rounded-md bg-slate-200"
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
          />
        </div> */}
        
        <div className="my-5">
          <label className="uppercase text-gray-700 block text-xl "
            >Email</label>

          <input
            type="email"
            placeholder="Ingrese su Correo"
            className="w-full mt-2 p-3 border border-gray-400 rounded-md bg-slate-200 peer 
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-red-500 invalid:text-red-500
          focus:invalid:border-red-500"
          value={email}
          onChange={e=>setEmail(e.target.value)}
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
            className="w-full mt-2 p-3 border border-gray-400 rounded-md bg-slate-200 peer"
            value={password}
            onChange={e=>setPasword(e.target.value)}
          />
        </div>

        <div className="my-5 font-mono mb-10">
          <label className="uppercase text-gray-700 block text-xl"
            >Confirmar Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese nuevamente su contraseña"
            className="w-full mt-2 p-3 border border-gray-400 rounded-md bg-slate-200 peer"
            value={repeatPassword}
            onChange={e=>setRepeatPassword(e.target.value)}
          />
        </div>      

        <input
          type="submit"
          value={'Crear Cuenta'}
          className="font-bold uppercase mb-5 bg-white border shadow w-full py-3 text-gray-600 hover:bg-gray-400 cursor-pointer transition-colors"
        />        
      </form>      
      <nav className="lg:flex lg:justify-center pb-5">
        <Link
          className="font-black block text-center my-5 text-zinc-700 hover:text-white "
          to='/'>Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>
      </div>

    </>
  )
}

export default Register

