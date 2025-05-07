import { useState } from 'react';
import TaskForm from './components/TaskForm';
import {TasksList} from './components/TasksList';
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;

