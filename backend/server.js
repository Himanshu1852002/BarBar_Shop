import express from 'express';
import cors from 'cors';
import { connectDataBase } from './db/db.js';
import userRouter from './routes/authRoutes.js';

const app = express();
const PORT = 5000;

// middlewares
app.use(express.json());
app.use(cors());

// database connection
connectDataBase();

// API

app.use('/api/users', userRouter);

app.listen(PORT, () => {
     console.log(`Server Started on http://localhost:${PORT}`)
})