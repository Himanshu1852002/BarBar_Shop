import express from 'express';
import { userLogin, userRegister, getUserInfo } from '../controllers/AuthControllers/Auth.js';
import authMiddleware from '../middleware/authMiddleware.js';
const userRouter = express.Router();

userRouter.post('/register', userRegister);
userRouter.post('/login', userLogin);
userRouter.get('/userInfo', authMiddleware, getUserInfo);

export default userRouter;