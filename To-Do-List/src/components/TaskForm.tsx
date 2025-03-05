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
    // definir le state newTask pour la gestion des nouvelles taches
    const [newTask, setNewTask] = useState("");

    // fonction pour ajouter une tache
    function AddTask(event: React.FormEvent) {
        // empecher la soumission du formulaire
        event.preventDefault();
        if (newTask !== "") {// si la tache n'est pas vide
            setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);// ajouter la tache
            setNewTask("");// vider l'input
        }
    }
    return (
        <div className="container">
            <h1 className="title">Add To Do</h1>
            <h4>Date : {new Date().toDateString()}</h4>{/*afficher la date*/}
            <form>{/* formulaire */}
                {/* input pour ajouter une tache utiliser onChange pour mettre a jour la tache */}
                <input onChange={(e) => setNewTask(e.target.value)} value={newTask} type="text" placeholder="Write here..." name="text" className="input" />
                <button className="buttonAdd" style={{ "--clr": ` #00ad54` } as React.CSSProperties}>
                    <span className="button-decor"></span>
                    <div className="button-content">
                        <i className="fa fa-plus button__icon"></i>
                        <span className="button__text" onClick={AddTask}>Add To Do</span>{/*ajouter la tache avec le bouton Ajouter To Do */}
                    </div>
                </button>
            </form>
        </div>
    )
}