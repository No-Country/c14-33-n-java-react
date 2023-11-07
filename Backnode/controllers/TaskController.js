import Project from './../mvc/Project.js';
import Task from './../mvc/Task.js';

const addTask = async (req, res) => {
  const { project } = req.body

  const projectExists = await Project.findById(project)

  if (!projectExists) {
    const error = new Error("El Proyecto no existe")
    return res.status(404).json({ msg: error.message })
  }

  if (projectExists.creator.toString() !== req.user._id.toString()) {
    const error = new Error("No tienes permisos para añadir tareas a este proyecto")
    return res.status(403).json({ msg: error.message })
  }

  try {
    const storedTask = await Task.create(req.body)
    // Almacenar el ID en el proyecto
    projectExists.tasks.push(storedTask._id)
    await projectExists.save()
    res.json(storedTask)
  } catch (error) {
    console.log(error)
  }
}

const getTask = async (req, res) => {
  const { id } = req.params
/* populate() rellena el campo project en la tarea encontrada con los datos del proyecto relacionado,
basándose en la referencia almacenada en el campo */
  const task = await Task.findById(id).populate("project")

  if (!task) {
    const error = new Error("Tarea no encontrada")
    return res.status(404).json({ msg: error.message })
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no válida")
    return res.status(403).json({ msg: error.message })
  }

  res.json(task)
}

const updateTask = async (req, res) => {
  const { id } = req.params
  const task = await Task.findById(id).populate("project")

  if (!task) {
    const error = new Error("Tarea no encontrada")
    return res.status(404).json({ msg: error.message })
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no válida")
    return res.status(403).json({ msg: error.message })
  }
/* actualiza las propiedades de un objeto Task con los valores de req.body
por otro lado || task.user hace que si los valores son nulos se conserven los ya existentes */
  task.user = req.body.user || task.user
  task.description = req.body.description || task.description
  task.priority = req.body.priority || task.priority
  task.deliveryDate = req.body.deliveryDate || task.deliveryDate

  try {
    const storedTask = await task.save()
    res.json(storedTask)
  } catch (error) {
    console.log(error)
  }
}

const deleteTask = async (req, res) => {
  const { id } = req.params
  const task = await Task.findById(id).populate("project")

  if (!task) {
    const error = new Error("Tarea no encontrada")
    return res.status(404).json({ msg: error.message })
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no válida")
    return res.status(403).json({ msg: error.message })
  }

  try {
    const project = await Project.findById(task.project)
    project.tasks.pull(task._id)
    await Promise.allSettled([await project.save(), await task.deleteOne()])
    res.json({ msg: "La Tarea se eliminó" })
  } catch (error) {
    console.log(error)
  }
}

const changeStatus = async (req, res) => {
  const { id } = req.params

  const task = await Task.findById(id).populate("project")

  if (!task) {
    const error = new Error("Tarea no encontrada")
    return res.status(404).json({ msg: error.message })
  }

  if (
    task.project.creator.toString() !== req.user._id.toString() &&
    !task.project.members.some(
      (member) => member._id.toString() === req.user._id.toString()
    )
  ) {
    const error = new Error("Acción no válida")
    return res.status(403).json({ msg: error.message })
  }

  task.state = !task.state
  task.complete = req.user._id
  await task.save()

  const storedTask = await Task.findById(id)
    .populate("project")
    .populate("complete")

  res.json(storedTask)
}

export {addTask,getTask,updateTask,deleteTask,changeStatus}