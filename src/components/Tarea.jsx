import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";


export const Tarea = ({ task, handleDelete, handleEdit, className }) => {

  const [isCompleted, setIsCompleted] = useState(task.completada);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted); // Cambiar el estado de la tarea
  };

  return (
    <div className={`${className} flex flex-col justify-between gap-2 min-w-[280px] max-h-[250px] rounded-lg p-4 text-left text-black bg-[#F2F2F2] border-2 border-[#C0BBD7]`}>
      <div className="task-content-top">
        <div className="flex items-center gap-2">
          <h2
            className={`text-2xl font-bold font_bitter text-[#2F1D7B] ${isCompleted ? "line-through text-gray-500" : ""
              }`}
          >
            {task.titulo}
          </h2>
          <span className="text-sm bg-neutral-300 rounded-full px-1">#{task.tags}</span>
        </div>
        <p className="text-sm">{task.fecha}</p>

        <p className="text-sm text-[#C0BBD7] font_cal">{task.descripcion}</p>
      </div>

      <div className="flex gap-4 justify-between mt-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="completada" id="completada" checked={isCompleted}
            onChange={handleCheckboxChange} value={task.completada} />
          <span className="text-sm">Terminado</span>
        </label>
        <div className="flex gap-4 flex-wrap text-sm">
          <button className="text-[#2F1D7B] cursor-pointer" onClick={() => handleEdit(task.id)}>
            <Icon icon="proicons:compose" width={24} height={24} />
          </button>
          <button className="border-2 border-red-300 text-[#2F1D7B] bg-red-200 p-1 rounded-md cursor-pointer" onClick={() => handleDelete(task.id)}>
            <Icon icon="proicons:delete" width={24} height={24} />
          </button>
        </div>

      </div>
    </div>
  );
};