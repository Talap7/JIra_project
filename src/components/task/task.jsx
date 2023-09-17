import React, { useState } from "react";
import "./task.css";
import { TextField } from "../../form/textField";

export const Task = ({ label, value, addTask, name }) => {
    const [activeAddTask, setAddTasks] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [currentTask, setCurrentTask] = useState(null);

    const handleChange = ({ target }) => {
        setTaskName(target.value)
    }

    const handleDragStart = (e, item) => {
        e.target.style.transform = "rotate(10deg)";
        setCurrentTask(e.target)
    }

    const handleDragOver = (e, item) => {
        e.preventDefault
        if (e.target.className === "task_content") {
            e.target.style.boxShadow = "0 2px 3px gray"
        }
    }

    const handleDragEnter = (e) => {
        console.log("Enter")
    }

    const handleDragEnd = (e) => {
        e.target.style.transform = "rotate(0deg)";
        e.target.style.boxShadow = "none"
    }

    const handleDragLeave = (e) => {
        e.target.style.boxShadow = "none"
    }

    const handleDragDrop = (e) => {
        e.preventDefault()
        console.log("hi")
    }


    return (
        <div className="task__block">
            <div className="task_title">{label}</div>
            <div className="task_content">
                {value.map(item => (
                    <div
                        className="task"
                        key={item}
                        draggable={true}
                        onDragStart={(e) => handleDragStart(e, item)}
                        onDragEnter={(e) => handleDragEnter(e)}
                        onDragLeave={(e) => handleDragLeave(e)}
                        onDragOver={(e) => handleDragOver(e)}
                        onDragEnd={(e) => handleDragEnd(e, item)}
                        onDrop={(e) => handleDragDrop(e)}
                    >
                        {item}
                    </div>))}
            </div>
            <div className={activeAddTask ? "drop_down active text-xs font-thin" : "drop_down"}>
                <TextField
                    value={taskName}
                    type="text"
                    onChange={handleChange}
                />
                <div className="flex">
                    <button className="font-thin mr-5 bg-blue-500 text-xs px-2 mt-3 rounded text-white" onClick={() => {
                        addTask({ name: name, value: taskName })
                        setTaskName("")
                        setAddTasks(false)
                    }}>Добавить карточку</button>
                    <span className="mt-3" onClick={() => {
                        setAddTasks(false)
                        setTaskName("")
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className={activeAddTask ? "add_task_button gap-2" : "add_task_button active"} onClick={() => setAddTasks(true)}>+ Добавить карточку</div>
        </div>
    )
}