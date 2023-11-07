const Alert = ({alert}) => {
  return (
    /* si error es true devolvemos el mensaje en rojo */
    <div className={`${alert.error ? 'from-white to-red-600' : 'from-sky-600  '}
    bg-gradient-to-br text-center p-3 uppercase text-white font-bold text-xl`}>
      {alert.msg}
    </div>
  )
}

export default Alert
