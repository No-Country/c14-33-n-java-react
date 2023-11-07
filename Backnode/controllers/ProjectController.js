import Project from '../mvc/Project.js'
import User from './../mvc/User.js';

const getProjects = async (req, res) => {
    const projects = await Project.find({
        $or: [
            { members: { $in: [req.user] } },
            { creator: { $in: [req.user] } },
        ],
    }).select("-task")
    res.json(projects)
}

const newProject = async (req, res) => {
    const project = new Project(req.body)
    project.creator = req.user._id

    try {
        const storedProject = await project.save()
        res.json(storedProject)
    } catch (error) {
        console.log(error)
    }
}

const getProject = async (req, res) => {
    const { id } = req.params
    const project = await Project.findById(id)
        .populate({
            path: "tasks",
            populate: { path: "complete", select: "user" },
        })
        .populate("members", "user email")

    if (!project) {
        const error = new Error("Proyecto no encontrado")
        return res.status(404).json({ msg: error.message })
    }

    if (
        project.creator.toString() !== req.user._id.toString() &&
        !project.members.some(
            (member) => member._id.toString() === req.user._id.toString()
        )
    ) {
        const error = new Error("Acceso Denegado")
        return res.status(401).json({ msg: error.message })
    }

    res.json(project)
}

const editProject = async (req, res) => {
    const { id } = req.params

    const project = await Project.findById(id)

    if (!project) {
        const error = new Error("Proyecto no encontrado")
        return res.status(404).json({ msg: error.message })
    }

    if (project.creator.toString() !== req.user._id.toString()) {
        const error = new Error("No tienes los permisos de Administrador")
        return res.status(401).json({ msg: error.message })
    }

    project.user = req.body.user || project.user
    project.description = req.body.description || project.description
    project.deliveryDate = req.body.deliveryDate || project.deliveryDate
    project.client = req.body.client || project.client

    try {
        const storedProject = await project.save()
        res.json(storedProject)
    } catch (error) {
        console.log(error)
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params

    const project = await Project.findById(id)

    if (!project) {
        const error = new Error("Proyecto no encontrado")
        return res.status(404).json({ msg: error.message })
    }

    if (project.creator.toString() !== req.user._id.toString()) {
        const error = new Error("Acción Denegada")
        return res.status(401).json({ msg: error.message })
    }

    try {
        await project.deleteOne()
        res.json({ msg: "Se ha eliminado el Proyecto con exito" })
    } catch (error) {
        console.log(error)
    }
}

const searchMember = async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email }).select(
        "-confirm -createdAt -password -token -updatedAt -__v "
    )

    if (!user) {
        const error = new Error("Usuario no encontrado")
        return res.status(404).json({ msg: error.message })
    }

    res.json(user)
}

const addMember = async (req, res) => {
    const project = await Project.findById(req.params.id)

    if (!project) {
        const error = new Error("Proyecto no encontrado")
        return res.status(404).json({ msg: error.message })
    }

    if (project.creator.toString() !== req.user._id.toString()) {
        const error = new Error("Acción no válida")
        return res.status(404).json({ msg: error.message })
    }

    const { email } = req.body
    const user = await User.findOne({ email }).select(
        "-confirm -createdAt -password -token -updatedAt -__v "
    )

    if (!user) {
        const error = new Error("Usuario no encontrado")
        return res.status(404).json({ msg: error.message })
    }

    if (project.creator.toString() === user._id.toString()) {
        const error = new Error("El creador del Proyecto no puede ser colaborador")
        return res.status(404).json({ msg: error.message })
    }

    /* Revisar que no este ya agregado al proyecto */
    if (project.members.includes(user._id)) {
        const error = new Error("El Usuario ya es integrante del Proyecto")
        return res.status(404).json({ msg: error.message })
    }

    /* Confirma y agrega al miembro */
    project.members.push(user._id)
    await project.save()
    res.json({ msg: "Colaborador agregado correctamente" })
}

const deleteMember = async (req, res) => {
    const project = await Project.findById(req.params.id)

    if (!project) {
        const error = new Error("Proyecto no encontrado")
        return res.status(404).json({ msg: error.message })
    }

    if (project.creator.toString() !== req.user._id.toString()) {
        const error = new Error("Acción no válida")
        return res.status(404).json({ msg: error.message })
    }

    /* confirmacion de eliminacion de miembro */
    project.members.pull(req.body.id)
    await project.save()
    res.json({ msg: "Colaborador eliminado correctamente" })
}

export {getProjects,newProject,getProject,editProject,deleteProject,searchMember,addMember,deleteMember}