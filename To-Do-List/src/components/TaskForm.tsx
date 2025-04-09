import { Dispatch, SetStateAction, useState } from "react";
// definir le type task pour structurer les taches
type Task = {
    id: number;
    title: string;
    completed: boolean;
};
// definir le type TaskFormProps
type TaskFormProps = {
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
};

export function TaskForm({ tasks, setTasks }: TaskFormProps) {
    const [newTask, setNewTask] = useState("");

    function AddTask(event: React.FormEvent) {
        event.preventDefault();
        if (newTask !== "") {
            setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
            setNewTask("");
        }
    }
    return (
        <div className="bg-white rounded-t-xl shadow-md p-6 w-[480px] mt-6 border-2 border-[#D1A28B]">
            <h1 className="text-xl font-semibold mb-2">Add To Do</h1>
            <h4 className="text-sm text-gray-500 mb-4"><span className="font-semibold text-[#D1A28B]">Date:</span> {new Date().toDateString()}</h4>
            <form onSubmit={(e) => e.preventDefault()} >
                <div className="flex flex-row gap-2 h-12 w-full">
                    <input
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                    type="text"
                    placeholder="Write a task..."
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D1A28B] focus:ring-opacity-50 mb-3"
                    />

                    <button
                    onClick={AddTask}
                    className="w-1/3 bg-[#393433] text-white py-2 rounded-md hover:bg-[#00ad54] transition-colors"
                    >
                    Add
                    </button>
                </div>
                
            </form>
        </div>

    )
}