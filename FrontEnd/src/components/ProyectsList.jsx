import React from 'react'
import Proyect from './Proyect';
import {useState} from 'react';

export default function ProyectsList() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    }

    return (<>

        <Proyect isActive={
                activeButton === 1
            }
            onClick={
                () => handleButtonClick(1)
            }/>
        <Proyect isActive={
                activeButton === 2
            }
            onClick={
                () => handleButtonClick(2)
            }/>
        <Proyect isActive={
                activeButton === 3
            }
            onClick={
                () => handleButtonClick(3)
            }/>

    </>)
}
