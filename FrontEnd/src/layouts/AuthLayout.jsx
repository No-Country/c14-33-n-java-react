import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <main className="flex  bg-slate-400 min-h-screen">
        <div className="container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center">
          <div className="lg:w-2/6">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}

export default AuthLayout
