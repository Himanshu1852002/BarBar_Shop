import express from 'express';
const adminRouter = express.Router();
import { adminLogin, adminRegister, adminUpdateProfile, getAdminProfile } from '../controllers/Admin/AdminController.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

adminRouter.post("/register", adminRegister);
adminRouter.post("/login", adminLogin);
adminRouter.get("/adminProfile", adminMiddleware , getAdminProfile);
adminRouter.put("/updateProfile", adminMiddleware , adminUpdateProfile);

export default adminRouter;
