import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Footer from './../components/Footer';
import NavBar from './../components/NavBar';


const ProtectedRoute = () => {

    const{auth,loading}=useAuth()

    if (loading)return'loading...'
  return (
    <>
      {auth._id?
      (
      <div className="bg-gray-100">
        <NavBar/>
        <div className="md:flex md:min-h-screen">
            <Sidebar/>
            <main className="flex-1 p-10 bg-slate-200 ">
                <Outlet/>
            </main>
        </div>
      </div>
      ):<Navigate to='/'/>}
    </>
  )
}

export default ProtectedRoute
