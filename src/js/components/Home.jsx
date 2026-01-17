import React, { useState } from "react";
import TaskItem from "./TaskItem";
import "../../styles/index.css";
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (task.trim() === "") return;

      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const deleteTask = (indexToDelete) => {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(newTasks);
  };

  return (
    <div className="todo-page">
      <div className="todo-card">
        <h1 className="todo-title">Tu Lista de Tareas</h1>

        <input
          className="todo-input"
          type="text"
          placeholder="¿Qué necesitas hacer?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <ul className="todo-list">
          {tasks.length === 0 ? (
            <li className="todo-empty">No hay tareas, añadir tareas</li>
          ) : (
            tasks.map((t, index) => (
              <TaskItem
                key={index}
                text={t}
                onDelete={() => deleteTask(index)}
              />
            ))
          )}
        </ul>

        <div className="todo-footer">
          {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
        </div>
      </div>
    </div>
  );
};

export default Home;
