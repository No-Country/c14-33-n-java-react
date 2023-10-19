import React, { useState } from "react";
import Button from "../../components/Button";

export const WorkPlace = () => {

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  }

  return <>

  <div className="grid grid-cols-5 grid-rows-3 h-screen gap-5">
    <div className="bg-red-300 row-span-3 col-span-1 p-5 rounded-tr-3xl rounded-br-3xl">
      Proyectos

      <Button
          isActive={activeButton === 1}
          onClick={() => handleButtonClick(1)}
        />
        <Button
          isActive={activeButton === 2}
          onClick={() => handleButtonClick(2)}
        />
        <Button
          isActive={activeButton === 3}
          onClick={() => handleButtonClick(3)}
        />

    </div>

    <div className="bg-green-300 row-span-3 col-span-3 p-5">
    <div className="h-20 w-auto rounded-3xl bg-gray-500 text-center grid content-center">
        <h1 className="text-3xl">Proyecto 1</h1>
      </div>
    </div>

    <div className="bg-blue-300 row-span-3 col-span-1 p-5 rounded-tl-3xl rounded-bl-3xl">
      Miembros
    </div>
  </div>

    </>;
};
