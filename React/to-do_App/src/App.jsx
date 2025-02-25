import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./slices/taskSlice";

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

  return (
    <>
      <div>
        <h2>Task Form </h2>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              {t.text}
              <button onClick={() => dispatch(deleteTask(t.id))}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App
