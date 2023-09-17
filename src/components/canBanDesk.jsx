import React, { useEffect, useState } from "react";
import { Task } from "./task/task";

export const CanBanDesk = () => {
    const [tasks, setTasks] = useState({
        toDo: ["Протестить таргет", "Сделать Домашнее задание"],
        inProgress: ["Сделать доску"],
        done: ["Записать задачи"] 
    })

    const handleAddTask = (task) => {
        setTasks(prevState => {
            const updatedTasks = [...prevState[task.name], task.value];
            return {
                ...prevState,
                [task.name]: updatedTasks
            };
        });
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    const handleMoveTask = () => {
        
    }

    return (
        <>
            {tasks && <div className="flex justify-around w-8/12">
                <Task
                    label="Нужно сделать"
                    value={tasks.toDo}
                    name="toDo"
                    addTask={handleAddTask}
                />
                <Task
                    label="В процессе"
                    name="inProgress"
                    value={tasks.inProgress}
                    addTask={handleAddTask}
                />
                <Task
                    label="Готово"
                    name="done"
                    value={tasks.done}
                    addTask={handleAddTask}
                />
            </div>}
        </>
    )
}