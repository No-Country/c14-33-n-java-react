import React, {useState} from "react";
import Button from "../../components/Button";
import Proyect from "../../components/Proyect";
import Member from "../../components/Member";

export const WorkPlace = () => {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    }

    return <>

            <div className="grid grid-cols-5 grid-rows-3 h-screen gap-5">
                <div className="bg-gray-300 row-span-3 col-span-1 p-5 rounded-tr-3xl rounded-br-3xl">
                    <h1>Proyectos</h1>
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

                        <Proyect/>
                        <Proyect/>
                        <Proyect/>

                    </div>

                </div>

                <div className="bg-gray-300 row-span-3 col-span-1 p-5 rounded-tl-3xl rounded-bl-3xl">
                    <h1>Miembros</h1>
                    <div className="h-1 w-full bg-gray-400 rounded-2xl my-1"></div>

                    <Member/>
                    <Member/>
                    <Member/>

                </div>
            </div>

    </>;
};
