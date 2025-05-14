import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, completeTask } from "./slices/taskSlice";
import './App.css'

function App() {

  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    return a.status === "pending" ? -1 : 1;
  });

  return (
    <div className="app">
      <div className="add-task-container">
        <h2>Task Form </h2>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask} className="add-btn">Add Task</button>
      </div>
      <div className="task-container">
        <h2>Task List</h2>
        <ul className="task-list">
          {sortedTasks.map((t, i) => (
            <li key={t.id} className={`task ${t.status == "completed" ? "completed" : "pending"}`} >
              <span className="task-num">#{i + 1}</span>
              <span className="task-name">{t.text}</span>
              <div className="btns">
                <button onClick={() => dispatch(completeTask(t.id, "completed"))} className={`btn c_btn ${t.status == "completed" ? "hidden" : ""}`}>Complete</button>
                <button onClick={() => dispatch(deleteTask(t.id))} className="btn d_btn">Delete</button>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}

export default App
