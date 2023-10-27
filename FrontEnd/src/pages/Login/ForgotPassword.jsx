import { useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../../components/Alert"
import axiosClient from "../../config/axiosClient"

const ForgotPassword = () => {
  const [email,setEmail]=useState('')
  const [alert,setAlert]=useState({})

  const handleSubmit=async e =>{

    e.prevenDefault();
    if (email===''||email.length<10){
      setAlert({
        msg:'La dirección de correo es obligatoria',
        error:true
      })
      return
    }
    try {
      const {data} = await axiosClient.post('/user/forgot-password',{email})
      setAlert({
        msg:data.msg,
        error:false
      })
    } catch (error) {
    setAlert({
      msg:error.response.data.msg,
      error:true
    })
    }
  }

  const{msg}=alert

  return (
    <>
      <h1 className="text-black font-black rounded-t-xl text-4xl capitalize bg-slate-500 p-5">Escribe tu email para recuperar {''}
      <span className="text-gray-100">Tu cuenta</span></h1>

      {msg&&<Alert alert={alert}/>}
      
      <form className="my-10 mt-0 bg-white shadow rounded-b-xl  p-10 font-mono font-black"
      onSubmit={handleSubmit}>
        
        <div className="my-5">
          <label className="uppercase text-gray-700 block text-xl "
          >Email</label>
          
          <input 
          type="email"
          placeholder="Ingrese su Correo"
          className="w-full mt-2 p-3 border border-gray-400 rounded-xl bg-slate-200 peer 
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-red-500 invalid:text-red-500
          focus:invalid:border-red-500"
          onChange={e=>setEmail(e.target.value)}       
          />
          <p className="mt-2 invisible peer-invalid:visible text-red-400 text-sm ml-1 ">
            Porfavor ingrese una dirección de correo valida.
          </p>          
        </div>
        
        <input 
        type="submit"
        value={'Enviar Email'}
        className="font-bold uppercase mb-5 bg-white border shadow w-full py-3 text-gray-600 hover:bg-indigo-500 hover:text-white cursor-pointer transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">      
        <Link
          className="font-black block text-center my-5 text-zinc-700 hover:text-white "
          to='/'>Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link 
        className="font-black block text-center my-5 text-zinc-700 hover:text-red-500 "
        to='/register'>¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
        
    </>
  )
}

export default ForgotPassword

