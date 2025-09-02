import express from 'express';
const adminRouter = express.Router();
import { adminLogin, adminRegister } from '../controllers/Admin/AdminController.js';

adminRouter.post("/register", adminRegister);
adminRouter.post("/login", adminLogin);

export default adminRouter;
