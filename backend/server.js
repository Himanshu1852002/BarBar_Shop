import express from 'express';
import cors from 'cors';
import { connectDataBase } from './db/db.js';

const app = express();
const PORT = 5000;

// middlewares
app.use(express.json());
app.use(cors());

// database connection
connectDataBase();

app.listen(PORT, () => {
     console.log(`Server Started on http://localhost:${PORT}`)
})