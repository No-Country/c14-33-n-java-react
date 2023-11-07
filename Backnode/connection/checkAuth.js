import jwt from "jsonwebtoken"
import User from "../mvc/User.js"

const checkAuth = async (req, res, next) => {
  let token = req.headers.authorization

  if (!token || !token.startsWith("Bearer")) {
    return res.status(401).json({ msg: "Acceso no autorizado. El token no es válido." })
  }

  try {
    token = token.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded.id).select("-password -confirm -token -createdAt -updatedAt -__v")
    
    if (!req.user) {
      return res.status(401).json({ msg: "Usuario no encontrado" })
    }

    next()
  } catch (error) {
    return res.status(401).json({ msg: "Token no válido o expirado" })
  }
}

export default checkAuth