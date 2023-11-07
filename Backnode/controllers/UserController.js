import generateId from "./../helpers/generateId.js"
import generateJWT from "./../helpers/generateJWT.js"
import { emailRegister, emailForgotPassword } from "./../helpers/email.js"
import User from "./../mvc/User.js"

const register = async (req, res) => {

  const { email } = req.body
  const userExist = await User.findOne({ email })

  if (userExist) {
    const error = new Error("Usuario ya registrado")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const user = new User(req.body)
    user.token = generateId()
    await user.save()
    console.log('token:'+user.token)

    emailRegister({
      email: user.email,
      user: user.user,
      token: user.token,
    })

    res.json({
      msg: "Usuario creado correctamente, revisa tu Email para confirmar tu cuenta",
    })
  } catch (error) {
    console.log(error)
  }
}

const auth = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    const error = new Error("El Usuario no existe")
    return res.status(404).json({ msg: error.message })
  }


  if (!user.confirm) {
    const error = new Error("Tu Cuenta no ha sido confirmada")
    return res.status(403).json({ msg: error.message })
  }

  if (await user.checkPassword(password)) {
    res.json({
      _id: user._id,
      user: user.user,
      email: user.email,
      token: generateJWT(user._id),
    })
  } else {
    const error = new Error("El Password es incorrecto")
    return res.status(403).json({ msg: error.message })
  }
}

const confirm = async (req, res) => {
  const {token} = req.params
  const confirmUser = await User.findOne({token})
  if (!confirmUser) {
    const error = new Error("El token no existe o ya expiró")
    return res.status(403).json({ msg: error.message })
  }

  try {
    confirmUser.confirm = true
    /* eliminamos el token una vez se confirmo */
    confirmUser.token = ""
    await confirmUser.save()
    res.json({ msg: "Se ha confirmado la cuenta con exito" })
  } catch (error) {
    console.log(error)
  }
}

const forgotPassword = async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    const error = new Error("El Usuario no existe")
    return res.status(404).json({ msg: error.message })
  }

  try {
    user.token = generateId()
    await user.save()

    emailForgotPassword({
      email: user.email,
      user: user.user,
      token: user.token,
    })

    res.json({ msg: "Se ha enviado un email con las instrucciones" })
  } catch (error) {
    console.log(error)
  }
}

const checkToken = async (req, res) => {
  const { token } = req.params
  const validToken = await User.findOne({ token })
  /* valida si el token tiene algun valor */
  if (validToken) {
    res.json({ msg: "El token es válido y el Usuario existe" })
  } else {
    const error = new Error("Token no válido")
    return res.status(404).json({ msg: error.message })
  }
}

const newPassword = async (req, res) => {
  const { token } = req.params
  const { password } = req.body

  const user = await User.findOne({ token })

  if (user) {
    user.password = password
    user.token = ""
    try {
      await user.save()
      res.json({ msg: "Password modificado correctamente" })
    } catch (error) {
      console.log(error)
    }
  } else {
    const error = new Error("Token no válido")
    return res.status(404).json({ msg: error.message })
  }
}

const profile = async (req, res) => {
  const { user } = req

  res.json(user)
}

export {register,auth,confirm,forgotPassword,checkToken,newPassword,profile}