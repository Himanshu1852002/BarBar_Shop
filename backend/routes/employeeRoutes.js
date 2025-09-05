import express from 'express';
import { addEmployee, deleteEmployee, editEmployee, getEmployees } from '../controllers/Admin/EmployeeController.js';
import { upload } from '../controllers/Admin/EmployeeController.js';

const employeeRouter = express.Router();

employeeRouter.post('/addEmployee', upload.single('image'), addEmployee);
employeeRouter.get('/getEmployees', getEmployees);
employeeRouter.put('/editEmployee/:id', upload.single('image'), editEmployee);
employeeRouter.delete('/deleteEmployee/:id', deleteEmployee);

export default employeeRouter;