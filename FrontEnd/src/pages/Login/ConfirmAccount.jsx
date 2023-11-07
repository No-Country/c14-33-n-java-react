import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alert from "../../components/Alert"
import axiosClient from "../../config/axiosClient"


const ConfirmAccount = () => {
  const [alert, setAlert]=useState({})
  const[confirm, setConfirm]=useState(false)

  const params= useParams()
  const {token} = params
    
  useEffect(()=>{
    const confirmAccount = async () =>{
      try {
      
        const {data}=await axiosClient(`users/confirm/${token}`)

        setAlert({
          msg: data.msg,
          error:false
        })
        setConfirm(true)
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error:true
        })
      }
    }
    confirmAccount()
  },[])

  const{msg}=alert

  return (
    <>
      <h1 className="text-sky-950 font-bold rounded-md text-6xl text-center capitalize bg-teal-500 bg-opacity-30 p-20">Confirmación de cuenta</h1>
      <div className="mt-10 md:mt-5 px-5 py-10 bg-transparent">
        {msg && <Alert alert={alert}/>}
        {confirm && (
          <Link
          className="font-black block text-center my-5 opacity-30 text-zinc-700 hover:text-white "
          to='/users/login'>Inicia Sesión
          </Link>
        )}
      </div>
    </>
  )
}

export default ConfirmAccount
