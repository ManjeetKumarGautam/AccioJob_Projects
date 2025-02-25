import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/taskSlice';

export const Store = configureStore({
    reducer: {
        tasks: taskReducer,
    }
})