import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alert from "../../components/Alert"
import axiosClient from "../../config/axiosClient"


const ConfirmAccount = () => {
  const [alert, setAlert]=useState({})
  const[confirmedAccount, setConfirmedAccount]=useState(false)

  const params= useParams()
  const {id} = params
    
  useEffect(()=>{
    const confirmAccount = async () =>{
      try {
        const url = `/user/confirm/${id}`
        const {data}=await axiosClient(url)

        setAlert({
          msg: data.msg,
          error:false
        })
        setConfirmedAccount(true)
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
  },[])

  const{msg}=alert

  return (
    <>
      <h1 className="text-sky-950 font-black rounded-xl text-5xl capitalize bg-emerald-600 bg-opacity-50 p-20">Confirma tu cuenta y empieza a {''}
      <span className="text-gray-100">Organizar tus proyectos</span></h1>
      <div className="mt-10 md:mt-5 px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alerta={alerta}/>}
        {confirmedAccount && (
          <Link
          className="font-black block text-center my-5 text-zinc-700 hover:text-white "
          to='/'>Inicia Sesión
          </Link>
        )}
      </div>
    </>
  )
}

export default ConfirmAccount
