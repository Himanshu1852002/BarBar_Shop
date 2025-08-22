import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { connectDataBase } from './db/db.js';
import userRouter from './routes/authRoutes.js';
import bookingRouter from './routes/bookingRoute.js';

const app = express();
const PORT = 5000;

// middlewares
app.use(express.json());
app.use(cors());
dotenv.config();

// database connection
connectDataBase();

// API

app.use('/api/users', userRouter);
app.use('/api/bookings', bookingRouter);

app.listen(PORT, () => {
     console.log(`Server Started on http://localhost:${PORT}`)
})