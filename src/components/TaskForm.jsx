import { useState, useEffect } from 'react';

function TaskForm({ addTask, taskToEdit, handleUpdate }) {
  const [formData, setFormData] = useState({
    titulo: '',
    fecha: Date,
    descripcion: '',
  });

   // Si hay una tarea para editar, pre-llenamos el formulario
    useEffect(() => {
    if (taskToEdit) {
      setFormData({
        titulo: taskToEdit.titulo,
        fecha: taskToEdit.fecha,
        descripcion: taskToEdit.descripcion,
      });
    }
  }, [taskToEdit]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      // Si estamos editando una tarea existente, la actualizamos
      handleUpdate({ ...taskToEdit, ...formData });
    } else {
      // Si estamos creando una nueva tarea, la agregamos
      const newTask = {
        id: Date.now(),
        ...formData,
      };
      addTask(newTask);
    }
    setFormData({ titulo: '', fecha: '', descripcion: '' }); // Limpiar el formulario
  };


  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Formulario de Tarea</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Título:</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo }
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Fecha límite:</label>
          <input
            name="fecha"
            value={formData.fecha}
            type='date'
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {taskToEdit ? 'Actualizar' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
