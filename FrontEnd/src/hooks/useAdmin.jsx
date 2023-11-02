import useProjects from "./useProjects"
import useAuth from './useAuth';

const useAdmin = () => {
    const { proyecto } = useProjects()
    const { auth } = useAuth()
    return proyecto.creador === auth._id
}

export default useAdmin 