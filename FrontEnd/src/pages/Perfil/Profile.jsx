import React from "react";

export const Profile = () => {
    return <>

        <div className="conteiner">
            <nav className="bg-blue-700 py-6 relative">
                <div className="c-bar mx-auto flex flex-grow justify-between px-5"></div>
            </nav>

            <div className="h-screen m-10 flex">
                <div className="bg-gray-300 h-screen w-2/5 rounded-3xl place-items-center">
                    <div className="bg-gray-400 h-72 w-72 rounded-full"></div>
                    <h1>User name</h1>
                </div>

                <div className="h-screen w-1 bg-gray-300 mx-5 rounded-md"></div>

                <div className="bg-gray-300 h-screen w-3/5 rounded-3xl"></div>

            </div>

        </div>

    </>;
};
