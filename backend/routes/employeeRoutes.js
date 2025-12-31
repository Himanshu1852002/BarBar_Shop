import express from 'express';
import { addEmployee, deleteEmployee, editEmployee, getEmployees } from '../controllers/Admin/EmployeeController.js';
import { upload } from '../controllers/Admin/EmployeeController.js';

const employeeRouter = express.Router();

/**
 * @swagger
 * /api/employees/addEmployee:
 *   post:
 *     summary: Add a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - position
 *             properties:
 *               name:
 *                 type: string
 *                 description: Employee full name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Employee email address
 *               phone:
 *                 type: string
 *                 description: Employee phone number
 *               position:
 *                 type: string
 *                 description: Employee position/role
 *               experience:
 *                 type: string
 *                 description: Years of experience
 *               specialization:
 *                 type: string
 *                 description: Employee specialization
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Employee profile image
 *     responses:
 *       201:
 *         description: Employee added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 employee:
 *                   $ref: '#/components/schemas/Employee'
 *       400:
 *         description: Bad request - Validation error or employee already exists
 */
employeeRouter.post('/addEmployee', upload.single('image'), addEmployee);

/**
 * @swagger
 * /api/employees/getEmployees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     parameters:
 *       - in: query
 *         name: position
 *         schema:
 *           type: string
 *         description: Filter employees by position
 *       - in: query
 *         name: isActive
 *         schema:
 *           type: boolean
 *         description: Filter by active status
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit number of results
 *     responses:
 *       200:
 *         description: List of employees retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Internal server error
 */
employeeRouter.get('/getEmployees', getEmployees);

/**
 * @swagger
 * /api/employees/editEmployee/{id}:
 *   put:
 *     summary: Edit employee information
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated employee name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Updated employee email
 *               phone:
 *                 type: string
 *                 description: Updated employee phone
 *               position:
 *                 type: string
 *                 description: Updated employee position
 *               experience:
 *                 type: string
 *                 description: Updated years of experience
 *               specialization:
 *                 type: string
 *                 description: Updated employee specialization
 *               isActive:
 *                 type: boolean
 *                 description: Employee active status
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Updated employee profile image
 *     responses:
 *       200:
 *         description: Employee updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 employee:
 *                   $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Employee not found
 *       400:
 *         description: Bad request - Validation error
 */
employeeRouter.put('/editEmployee/:id', upload.single('image'), editEmployee);

/**
 * @swagger
 * /api/employees/deleteEmployee/{id}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID to delete
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Employee deleted successfully
 *       404:
 *         description: Employee not found
 *       500:
 *         description: Internal server error
 */
employeeRouter.delete('/deleteEmployee/:id', deleteEmployee);

export default employeeRouter;