import React from 'react'
import Proyect from './Proyect';
import {useState} from 'react';

export default function ProyectsList({activeButton, handleButtonClick}) {
    

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
