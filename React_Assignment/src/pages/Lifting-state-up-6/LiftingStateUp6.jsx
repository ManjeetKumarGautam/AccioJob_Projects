import React, { useState } from 'react'
import TodoList from './TodoList';

const LiftingStateUp6 = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            taskName: "Learn React",
            completed: false
        },
        {
            id: 2,
            taskName: "Build a React app",
            completed: false
        },
        {
            id: 3,
            taskName: "Deploy the React app",
            completed: false
        }
    ]);

    const handleCompleted = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: true } : todo
            )
        );
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <TodoList todos={todos} handleCompleted={handleCompleted} />
        </div>
    )
}

export default LiftingStateUp6;