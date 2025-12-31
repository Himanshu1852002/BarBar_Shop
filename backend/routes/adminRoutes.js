import express from 'express';
const adminRouter = express.Router();
import { adminLogin, adminRegister, adminUpdateProfile, getAdminProfile } from '../controllers/Admin/AdminController.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

/**
 * @swagger
 * /api/admin/register:
 *   post:
 *     summary: Register a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *                 description: Admin full name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Admin email address
 *               password:
 *                 type: string
 *                 minLength: 6
 *                 description: Admin password
 *               phone:
 *                 type: string
 *                 description: Admin phone number
 *     responses:
 *       201:
 *         description: Admin registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 admin:
 *                   $ref: '#/components/schemas/Admin'
 *       400:
 *         description: Bad request - Admin already exists or validation error
 */
adminRouter.post("/register", adminRegister);

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: Admin login
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Admin email address
 *               password:
 *                 type: string
 *                 description: Admin password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                   description: JWT authentication token
 *                 admin:
 *                   $ref: '#/components/schemas/Admin'
 *       401:
 *         description: Invalid credentials
 *       404:
 *         description: Admin not found
 */
adminRouter.post("/login", adminLogin);

/**
 * @swagger
 * /api/admin/adminProfile:
 *   get:
 *     summary: Get admin profile information
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Admin not found
 */
adminRouter.get("/adminProfile", adminMiddleware , getAdminProfile);

/**
 * @swagger
 * /api/admin/updateProfile:
 *   put:
 *     summary: Update admin profile
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated admin name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Updated admin email
 *               phone:
 *                 type: string
 *                 description: Updated admin phone number
 *               currentPassword:
 *                 type: string
 *                 description: Current password for verification
 *               newPassword:
 *                 type: string
 *                 description: New password (optional)
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 admin:
 *                   $ref: '#/components/schemas/Admin'
 *       400:
 *         description: Bad request - Validation error
 *       401:
 *         description: Unauthorized - Invalid token or password
 */
adminRouter.put("/updateProfile", adminMiddleware , adminUpdateProfile);

export default adminRouter;
