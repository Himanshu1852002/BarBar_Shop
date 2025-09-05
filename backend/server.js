import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { connectDataBase } from './db/db.js';
import userRouter from './routes/authRoutes.js';
import bookingRouter from './routes/bookingRoute.js';
import path from "path";
import { fileURLToPath } from "url";
import adminRouter from './routes/adminRoutes.js';
import employeeRouter from './routes/employeeRoutes.js';

const app = express();
const PORT = 5000;

// middlewares
app.use(express.json());
app.use(cors());
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static folder serve
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// database connection
connectDataBase();

// API

app.use('/api/users', userRouter);
app.use('/api/bookings', bookingRouter);

// admin
app.use('/api/admin', adminRouter);
app.use('/api/employees', employeeRouter);

app.listen(PORT, () => {
     console.log(`Server Started on http://localhost:${PORT}`)
})