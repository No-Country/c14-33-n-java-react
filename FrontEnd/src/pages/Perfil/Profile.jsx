import React from "react";

export const Profile = () => {
    return <>

        <div className="conteiner">
            <nav className="bg-blue-700 py-6 relative">
                <div className="c-bar mx-auto flex flex-grow justify-between px-5"></div>
            </nav>

            {/*  <div className="h-screen m-10 flex flex-col md:flex-row">
                <div className="bg-gray-300 h-screen w-2/5 rounded-3xl">
                    <div className="flex justify-center m-5"><div className="bg-gray-400 h-72 w-72 rounded-full"></div></div>
                    <h1 className="text-3xl m-5 text-center text-gray-900">User name</h1>
                </div>

                <div className="h-screen w-1 bg-gray-300 mx-5 rounded-md md:block hidden"></div>

                <div className="bg-gray-300 h-screen w-3/5 rounded-3xl p-2 overflow-y-auto">
                    <h1 className="text-gray-500 m-2 mb-8">Nombre completo</h1>
                    <h1 className="text-gray-500 m-2 mb-8">Nombre Publico</h1>
                    <h1 className="text-gray-500 m-2 mb-8">Correo electronico</h1>
                </div>

            </div> */}

            <div>

                <div className="h-96 w-auto mx-60 flex flex-col">
                    <div className="bg-gray-500 rounded-b-lg h-1/2 w-auto flex justify-center">
                        <div className="bg-gray-400 h-52 w-52 rounded-full border-8 border-white mt-20"></div>
                    </div>

                    <div className="h-1/2 w-auto flex flex-col justify-end">
                        <h1 className="text-gray-500 text-center mb-3">Nombre Completo</h1>
                        <h1 className="text-center mb-5 text-xl">Nombre de Ususario</h1>
                    </div>
                </div>

                <div className="w-auto mx-60 mt-5">

                    <div className="h-1 w-auto rounded-md bg-gray-300"></div>

                    <h1 className="m-5 text-gray-500">Nombre Publico</h1>
                    <h1 className="ml-10 mb-8">No Especificado</h1>

                    <h1 className="m-5 text-gray-500">Correo Electronico</h1>
                    <h1 className="ml-10 mb-8">No Especificado</h1>

                    <h1 className="m-5 text-gray-500">Rol Especializado</h1>
                    <h1 className="ml-10 mb-8">No Especificado</h1>

                    
        
                </div>

            </div>

        </div>


    </>;
};
