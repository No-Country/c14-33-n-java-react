import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { io } from "socket.io-client";

let socket

const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([])
    const [alert, setAlert] = useState([])
    const [project, setProject] = useState([])
    const [loading, setLoading] = useState(false)
    const [formTaskModal, setFormTaskModal] = useState(false)
    const [task, setTask] = useState({})
    const [deleteTaskModal, setDeleteTaskModal] = useState(false)
    const [member, setMember] = useState({})
    const [deleteMemberModal, setDeleteMemberModal] = useState(false)
    const [searcher, setSearcher] = useState(false)

    const navigate = useNavigate()
    const { auth } = useAuth()

    useEffect(() => {
        const getProjects = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await axiosClient('/projects', config)
                setProjects(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProjects()
    }, [auth])

    useEffect(() => {
        socket = io(import.meta.env.VITE_BACKEND_URL)
    }, [])

    const showAlert = alert => {
        setAlert(alert)
        /* temporizar la alerta */
        setTimeout(() => {
            setAlert({})
        }, 3000);
    }

    const submitProject = async project => {
        if (project.id) {
            await editProject(project)
        } else {
            await newProject(project)
        }
    }

    const editProject = async project => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await axiosClient.put(`/projects/${project.id}`, project, config)
            console.log(data)/* borrar */

            const updatedProjects = projects.map(projectState => projectState._id === data._id ? data : projectState)
            setProjects(updatedProjects)

            setAlert({
                msg: 'El proyecto se actualizo con exito',
                error: false
            })

            setTimeout(() => {
                setAlert({})
                navigate('/projects')
            }, 3000)

        } catch (error) {
            console.log(error)/* borrar */
        }
        
    }

    const newProject = async project => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axiosClient.post('/projects', project, config)

            setProjects([...projects, data]
            )
            setAlert({
                msg: 'El proyecto se creo con exito!!',
                error: false
            })

            setTimeout(() => {
                setAlert({})
                navigate('/projects')
            }, 3000)
        } catch (error) {
            console.log(error)
        }
        
    }

    /* obtenemos el proyecto */
    const getProject = async id => {
        setLoading(true)
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axiosClient(`/projects/${id}`, config)
            setProject(data)
            setAlert({})
        } catch (error) {
            navigate('/projects')
            setAlert({msg:error.response.data.msg})
            error:true
        } finally {
            setLoading(false)
        }
    }

    const deleteProject = async id => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await axiosClient.delete(`/projects${id}`, project, config)
            const updatedProjects = projects.filter(projectState => projectState._id !== id)
            setProjects(updatedProjects)

            setAlert({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlert({})
                navigate('/projects')
            }, 3000)
        } catch (error) {

        }
    }

    const handleTaskModal = () => {
        setFormTaskModal(!formTaskModal)
        setTask({})
    }

    const submitTask = async task => {
        if (task?.id) {
            await editTask(task)
        } else {
            await createTask(task)
        }
    }
    /* ----------------------------------------- */

    const createTask = async task => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axiosClient.post('/tasks', task, config)

            setAlert({})
            setFormTaskModal(false)

            // SOCKET IO
            socket.emit('nueva tarea', data)
        } catch (error) {
            console.log(error)
        }
    }

    const editTask = async task => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axiosClient.put(`/tasks/${task.id}`, task, config)

            setAlert({})
            setFormTaskModal(false)

            // SOCKET
            socket.emit('actualizar tarea', data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditTaskModal = task => {
        setTask(task)
        setFormTaskModal(true)
    }

    const handleDeleteTaskModal = task => {
        setTask(task)
        setDeleteTaskModal(!deleteTaskModal)
    }

    const deleteTask = async () => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axiosClient.delete(`/tasks/${task._id}`, config)
            setAlert({
                msg: data.msg,
                error: false
            })

            setDeleteTaskModal(false)

            // SOCKET
            socket.emit('eliminar tarea', task)

            setTask({})
            setTimeout(() => {
                setAlert({})
            }, 3000)

        } catch (error) {
            console.log(error)
        }
    }

    const submitMember = async email => {
        setLoading(true)
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axiosClient.post('/projects/members', { email }, config)

            setMember(data)
            setAlert({})
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        } finally {
            setLoading(false)
        }
    }

    const addMember = async email => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await axiosClient.post(`/projects/members/${project._id}`, email, config)

            setAlert({
                msg: data.msg,
                error: false
            })
            setMember({})

            setTimeout(() => {
                setAlert({})
            }, 3000);

        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const handleDeleteMemberModal = (member) => {
        setDeleteMemberModal(!deleteMemberModal)
        setMember(member)
    }

    const deleteMember = async () => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await axiosClient.post(`/projects/delete-member/${project._id}`, { id: member._id }, config)

            const updatedProject = { ...project }

            updatedProject.members = updatedProject.members.filter(memberState => memberState._id !== member._id)

            setProject(updatedProject)
            setAlert({
                msg: data.msg,
                error: false
            })
            setMember({})
            setDeleteMemberModal(false)

            setTimeout(() => {
                setAlert({})
            }, 3000);

        } catch (error) {
            console.log(error.response)
        }
    }

    const completeTask = async id => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await axiosClient.post(`/tasks/state/${id}`, {}, config)
            setTask({})
            setAlert({})

            // socket
            socket.emit('cambiar estado', data)

        } catch (error) {
            console.log(error.response)
        }

    }

    const handleSearcher = () => {
        setSearcher(!searcher)
    }

    // Socket io
    const submitTasksProject = (task) => {
        const updatedProject = { ...project }
        updatedProject.tasks = [...updatedProject.tasks, task]
        setProject(updatedProject)
    }
    const deleteTaskProject = task => {
        console.log(task)
        const updatedProject = { ...project }
        updatedProject.tasks = updatedProject.tasks.filter(taskState => taskState._id !== task._id)
        console.log(updatedProject)
        setProject(updatedProject)
    }

    const updateTaskProject = task => {
        const updatedProject = { ...project }
        updatedProject.tasks = updatedProject.tasks.map(taskState => taskState._id === task._id ? task : taskState)
        setProject(updatedProject)
    }
    const changeStateTask = task => {
        const updatedProject = { ...project }
        updatedProject.tasks = updatedProject.tasks.map(taskState => taskState._id === task._id ? task : taskState)
        setProject(updatedProject)
    }

    const closeSesionProjects = () => {
        setProject([])
        setProject({})
        setAlert({})

    }

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                showAlert,
                alert,
                submitProject,
                getProject,
                project,
                loading,
                deleteProject,
                formTaskModal,
                handleTaskModal,
                submitTask,
                handleEditTaskModal,
                task,
                deleteTaskModal,
                handleDeleteTaskModal,
                deleteTask,
                submitMember,
                member,
                addMember,
                handleDeleteMemberModal,
                deleteMemberModal,
                deleteMember,
                completeTask,
                searcher,
                handleSearcher,
                submitTasksProject,
                deleteTaskProject,
                updateTaskProject,
                changeStateTask,
                closeSesionProjects
            }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export { ProjectsProvider }

export default ProjectsContext