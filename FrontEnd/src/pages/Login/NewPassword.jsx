import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alert from "../../components/Alert"


const NewPassword = async () => {
  const[password,setPasword]=useState('')
  const[validToken,setValidToken]=useState(false)
  const[alert,setAlert]=useState({})
  const[passwordChanged,setPasswordChanged]=useState(false)
  

  const params=useParams()
  const token=useParams()
  console.log(params)/* checkear */


  useEffect(()=>{
    const checkToken=async()=>{
      try {
        const {data}= await axios(`http://${token}`)/* direccion del la seccion back */
        console.log(data)/* checkear */
        setValidToken(true)
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error:true
        })
      }
    }
  })

  const{msg}=alert

  const handleSubmit=async e =>{
    e.preventDefault()

    if(password.length<6){
      setAlert({
        msg:'la contraseña no puede ser menor a 6 caracteres',
        error:true
      })
      return
    }
  }

  try {
    const url=`http://${token}`/* poner url */
    const{data}=await axios.post(url,{password})
    setAlert({
      msg:data.msg,
      error:false
    })
    setPasswordChanged(true)
  } catch (error) {
    setAlert({
      msg:error.response.data.msg,
      error:true
    })
  }

  return (
    <>
      <h1 className="text-sky-950 font-black rounded-t-xl text-4xl capitalize bg-slate-500 p-5">Restablece tu contraseña para acceder a {''}
      <span className="text-gray-100">Tu cuenta</span></h1>

      {msg&&<Alert alert={alert}/>}      

      {validToken&&(
        <form className="my-10 mt-0 bg-white shadow rounded-b-xl  p-10 font-mono font-black"
        onSubmit={handleSubmit}
        >
        <div className="my-5 font-mono mb-10">
            <label className="uppercase text-gray-700 block text-xl"
              >Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="w-full mt-2 p-3 border border-gray-400 rounded-xl bg-slate-200 peer"
              value={password}
              onChange={e=>setPasword(e.target.value)}
            />
          </div>
          
          <input 
          type="submit"
          value={'Guardar Nueva Contraseña'}
          className="font-bold uppercase mb-5 bg-white border shadow w-full py-3 text-gray-600 hover:bg-sky-300 cursor-pointer transition-colors"
          />
        </form>
      )}

        {passwordChanged && (
          <Link
          className="font-black block text-center my-5 text-zinc-700 hover:text-white "
          to='/'>Inicia Sesión
          </Link>
        )}
    </>
  )
}

export default NewPassword
