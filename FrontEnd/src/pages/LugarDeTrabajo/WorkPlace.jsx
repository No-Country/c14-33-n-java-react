import React, {useEffect, useState} from "react";
import Button from "../../components/Button";
import Task from "../../components/Task";
import Member from "../../components/Member";
import ProyectForm from '../../components/ProyectForm';

export const WorkPlace = () => {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    }
    /* Codigo para el Modal */
    const [visible, setVisible] = useState(false);
    

    return <>

        <div className="grid grid-cols-5 grid-rows-3 h-screen gap-5">
            <div className="bg-gray-300 row-span-3 col-span-1 p-5 rounded-tr-3xl rounded-br-3xl">
                <div className="flex justify-between items-center">
                    <h1>Proyectos</h1>
                    <div className="bg-blue-600 p-2 m-1 rounded-md cursor-pointer" 
                    onClick={() => setVisible(!visible)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </div>
                </div>
                <div className="h-1 w-full bg-gray-400 rounded-2xl my-1"></div>

                <Button isActive={
                        activeButton === 1
                    }
                    onClick={
                        () => handleButtonClick(1)
                    }/>
                <Button isActive={
                        activeButton === 2
                    }
                    onClick={
                        () => handleButtonClick(2)
                    }/>
                <Button isActive={
                        activeButton === 3
                    }
                    onClick={
                        () => handleButtonClick(3)
                    }/>

            </div>

            <div className="bg-gray-300 row-span-3 col-span-3 p-5">
                <div className="h-20 w-auto rounded-3xl bg-gray-500 text-center grid content-center">
                    <h1 className="text-3xl">Proyecto X</h1>
                </div>

                <div>

                    <Task/>
                    <Task/>
                    <Task/>

                </div>

            </div>

            <div className="bg-gray-300 row-span-3 col-span-1 p-5 rounded-tl-3xl rounded-bl-3xl">
                <h1>Miembros</h1>
                <div className="h-1 w-full bg-gray-400 rounded-2xl my-1"></div>

                <Member/>
                <Member/>
                <Member/>

            </div>

            <ProyectForm visible={visible} setVisible={setVisible}/>
        </div>

    </>;
};
