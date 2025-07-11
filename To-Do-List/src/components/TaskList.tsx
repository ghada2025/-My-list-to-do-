import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {Pencil, Trash2} from "lucide-react";

// definir le type task pour structurer les taches
type Task = {
    id: number;
    title: string;
    completed: boolean;
};

// definir le type TaskListProps
type TaskListProps = {
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
};


export function TaskList({ tasks, setTasks }: TaskListProps) {

        const inputRef = React.useRef<HTMLInputElement>(null);
        const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

        useEffect(() => {
            const savedTasks = localStorage.getItem("tasks"); 
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks)); 
            }
        }, [setTasks]);
    
        useEffect(() => {
            if (tasks.length > 0) { 
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        }, [tasks]);
        
        const deleteTask = (id: number) => {
            const isConfirmed = window.confirm("Voulez-vous vraiment supprimer cette tâche ?");
            if (isConfirmed) {
                setTasks(tasks.filter(task => task.id !== id));
            }
        };

        const TaskEdit = (id: number) => {
            setEditingTaskId(id);
            setTimeout(() => inputRef.current?.focus(), 0); 
        };

        const handleSave = (id: number) => {
            if (inputRef.current) {
                setTasks((prevTasks) => {
                    const updatedTasks = prevTasks.map(task => 
                        task.id === id ? { ...task, title: inputRef.current!.value } : task
                    );
                    return sortTasks(updatedTasks);
                });
            }
            setEditingTaskId(null);
        };

        const sortTasks = (tasks: Task[]) => {
            return [...tasks].sort((a, b) => Number(a.completed) - Number(b.completed));
        };

        const toggleTask = (id: number) => {
            setTasks((prevTasks) => {
                const updatedTasks = prevTasks.map((task) =>
                    task.id === id ? { ...task, completed: !task.completed } : task
                );
                return sortTasks(updatedTasks); 
            });
        };


    return (
        <div className="bg-white rounded-b-xl shadow-md p-6 w-[480px] h-screen border-2 border-[#D1A28B]">
            <h1 className="text-xl font-semibold mb-4 text-[#D1A28B]">List of To Do</h1>
            {tasks.map((task) => (
                <div
                key={task.id}
                className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-lg p-3 mb-2"
                >
                <div className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="form-checkbox w-5 h-5 text-[#D1A28B]"
                    />
                    {editingTaskId === task.id ? (
                    <input
                        type="text"
                        defaultValue={task.title}
                        ref={inputRef}
                        onBlur={() => handleSave(task.id)}
                        autoFocus
                        className="bg-white border-b border-gray-300 focus:outline-none focus:border-[#D1A28B] w-[300px]"
                    />
                    ) : (
                    <p className="text-gray-800">{task.title}</p>
                    )}
                </div>

                <div className="flex space-x-2">
                    <Pencil onClick={() => TaskEdit(task.id)} className=" w-5 h-5 cursor-pointer text-[#9e9e9e] hover:text-red-500"/>
                    <Trash2 onClick={() => deleteTask(task.id)} className=" w-5 h-5 cursor-pointer text-[#9e9e9e] hover:text-red-500" />
                </div>
                </div>
            ))}
        </div>

    ) 
}
