import express from 'express';
import { userLogin, userRegister, getUserInfo, changePassword, editUserInfo, getAllUsers } from '../controllers/AuthControllers/Auth.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { upload } from '../controllers/AuthControllers/Auth.js';
const userRouter = express.Router();

userRouter.post('/register', userRegister);
userRouter.post('/login', userLogin);
userRouter.get('/userInfo', authMiddleware, getUserInfo);
userRouter.put('/changePassword', authMiddleware, changePassword);
userRouter.put("/update-profile", authMiddleware, upload.single("image"), editUserInfo);
userRouter.get("/getAllUsers", getAllUsers);

export default userRouter;