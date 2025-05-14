import { createSlice } from "@reduxjs/toolkit";
const loadTasksFromStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
};
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: loadTasksFromStorage(),
    reducers: {
        addTask: (state, action) => {
            const newTask = { id: Date.now(), text: action.payload, status: "pending" };
            state.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(state));
        },
        deleteTask: (state, action) => {
            const updatedTasks = state.filter(task => task.id !== action.payload);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updatedTasks;
        },
        completeTask: (state, action) => {
            console.log(action.payload);
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.status = "completed";
                localStorage.setItem("tasks", JSON.stringify(state));
            }
        },
    }
});

export const { addTask, deleteTask, completeTask } = taskSlice.actions;

export default taskSlice.reducer;