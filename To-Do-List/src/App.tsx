import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar'
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
    <div className="app">
      <Navbar></Navbar>
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} ></TaskList>
    </div>
    </>
  )
}

export default App
