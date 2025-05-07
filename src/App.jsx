import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import {TasksList} from './components/TasksList';
function App() {
  const initialTasks = () => {
    const localStorageTasks = localStorage.getItem("tasks");
    return localStorageTasks ? JSON.parse(localStorageTasks) : []; //si hay elementos en el carrito loss converitmos a string si no lo dejamos vacio
  };

  const [tasks, setTasks] = useState(initialTasks);



  const [taskToEdit, setTaskToEdit] = useState(null);

  // LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEdit = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    setTaskToEdit(task); // Pre-llenamos el formulario con la tarea a editar
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };


  const handleUpdate = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null); // Limpiamos el formulario de edición después de actualizar
  };


  return (
    <div>
      <TaskForm addTask={addTask} taskToEdit={taskToEdit} handleUpdate={handleUpdate}  />
      <TasksList tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}

export default App

