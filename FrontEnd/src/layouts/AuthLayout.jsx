import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <main className="flex  bg-slate-400">
        <div className="container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center">
          <div className="md:2-3 lg:w-2/5">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}

export default AuthLayout
