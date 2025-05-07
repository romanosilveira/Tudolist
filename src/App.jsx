import { useState } from 'react';
import TaskForm from './components/TaskForm';
import {TasksList} from './components/TasksList';
function App() {
  const [tasks, setTasks] = useState([]);

  const [taskToEdit, setTaskToEdit] = useState(null);

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

