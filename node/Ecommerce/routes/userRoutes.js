import express from 'express';
import { signUp, login, logout } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/login', login);
userRouter.get('/logout', logout);

export default userRouter;