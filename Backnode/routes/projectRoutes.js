import express from "express"
import {getProjects,newProject,getProject,editProject,deleteProject,searchMember,addMember,deleteMember} from "../controllers/ProjectController.js"
import checkAuth from '../connection/checkAuth.js'

const router = express.Router()

router.route("/").get(checkAuth, getProjects).post(checkAuth, newProject)
router.route("/:id").get(checkAuth, getProject).put(checkAuth, editProject).delete(checkAuth, deleteProject)
router.post("/members", checkAuth, searchMember)
router.post("/members/:id", checkAuth, addMember)
router.post("/delete-member/:id", checkAuth, deleteMember)

export default router