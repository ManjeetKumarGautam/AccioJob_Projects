import React from 'react'

const TodoList = (props) => {
    return (
        <div>
            <h2>Child Component</h2>
            {
                props.todos.map((task) => {
                    return (
                        <div key={task.id}>
                            <label htmlFor="" >{task.taskName}</label>
                            {!task.completed && (
                                <button onClick={() => props.handleCompleted(task.id)}>Complete</button>
                            )}

                        </div>
                    );
                })
            }
        </div>
    )
}

export default TodoList