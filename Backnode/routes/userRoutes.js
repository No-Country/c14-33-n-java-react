import express from "express"
import checkAuth from '../connection/checkAuth.js'
import {register,auth,confirm,forgotPassword,checkToken,newPassword,profile} from "../controllers/UserController.js"
const router = express.Router()

router.get("/", (req,res)=>{
res.send('todo bien master?')
})
router.post("/", register)
router.post("/login", auth)
router.get("/confirm/:token", confirm)
router.post("/forgot-Password", forgotPassword)
router.route("/forgot-Password/:token").get(checkToken).post(newPassword)
router.get("/profile", checkAuth, profile)

export default router