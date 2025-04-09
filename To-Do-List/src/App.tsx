import { useState } from 'react';
import './App.css'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <>
    <div className="flex flex-col items-center h-screen bg-white w-[500px]">
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} ></TaskList>
    </div>
    </>
  )
}

export default App
