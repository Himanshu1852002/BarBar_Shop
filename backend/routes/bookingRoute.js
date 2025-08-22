import express from 'express';
import { createBookings, getBookings } from '../controllers/BookiingControllers/BookingService.js';

const bookingRouter = express.Router();

bookingRouter.post('/createBookings', createBookings);
bookingRouter.get('/getBookings', getBookings);

export default bookingRouter;
