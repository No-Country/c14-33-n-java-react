const NewPassword = () => {
  return (
    <>
      <h1 className="text-sky-950 font-black rounded-t-xl text-4xl capitalize bg-slate-500 p-5">Restablece tu contraseña para acceder a {''}
      <span className="text-gray-100">Tu cuenta</span></h1>
      <form className="my-10 mt-0 bg-white shadow rounded-b-xl  p-10 font-mono font-black">
      <div className="my-5 font-mono mb-10">
          <label className="uppercase text-gray-700 block text-xl"
            >Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            className="w-full mt-2 p-3 border border-gray-400 rounded-xl bg-slate-200 peer"
          />
        </div>
        
        <input 
        type="submit"
        value={'Guardar Nueva Contraseña'}
        className="font-bold uppercase mb-5 bg-white border shadow w-full py-3 text-gray-600 hover:bg-sky-300 cursor-pointer transition-colors"
        />
      </form>        
    </>
  )
}

export default NewPassword
