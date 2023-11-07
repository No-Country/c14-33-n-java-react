import express from "express"
import mongo from "./config/mongo.js"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"

const app = express()
app.use(express.json())
dotenv.config()

mongo()


app.use(cors(process.env.FRONTEND_URL))

/* Routing */
app.use("/api/users", userRoutes)
app.use("/api/projects", projectRoutes)
app.use("/api/tasks", taskRoutes)

const PORT = process.env.PORT || 4000
const servidor = app.listen(PORT, () => {
  console.log(`Puerto del servidor: ${PORT}`)
})
/* --------------------------------------------- */
/* Socket.io */
import { Server } from "socket.io"

const io = new Server(servidor, {
  pingTimeout: 60000
})

io.on("connection",  (socket) => {
  socket.on("abrir proyecto", (project) => {
    socket.join(project)
  })

  socket.on("nueva tarea", (task) => {
    const project = task.project
    socket.to(project).emit("tarea agregada", task)
  })

  socket.on("eliminar tarea", (task) => {
    const project = task.project
    socket.to(project).emit("tarea eliminada", task)
  })

  socket.on("actualizar tarea", (task) => {
    const project = task.project._id
    socket.to(project).emit("tarea actualizada", task)
  })

  socket.on("cambiar estado", (task) => {
    const project = task.project._id
    socket.to(project).emit("nuevo estado", task)
  })
})