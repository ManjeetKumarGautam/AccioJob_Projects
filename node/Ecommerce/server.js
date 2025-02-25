import express from "express";
import { connectDB } from "./config/db.js";
import userRouter from './routes/userRoutes.js'


const app = express();

app.use(express.json())



connectDB();

app.listen(3000, () => {
    console.log("listen port of 3000");
});

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send("hello");
});