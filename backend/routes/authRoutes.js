import express from 'express';
import { userRegister } from '../controllers/AuthControllers/Auth.js';
const userRouter = express.Router();

userRouter.post('/register', userRegister);

export default userRouter;