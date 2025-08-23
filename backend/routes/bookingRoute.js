import express from 'express';
import { createBookings, getBookings, cancelBooking, rescheduledBooking } from '../controllers/BookiingControllers/BookingService.js';

const bookingRouter = express.Router();

bookingRouter.post('/createBookings', createBookings);
bookingRouter.get('/getBookings', getBookings);
bookingRouter.delete('/cancelBooking/:id', cancelBooking);
bookingRouter.put('/rescheduledBooking/:id', rescheduledBooking);

export default bookingRouter;
