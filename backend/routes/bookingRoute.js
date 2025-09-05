import express from 'express';
import { createBookings, getBookings, cancelBooking, rescheduledBooking, deleteBooking, getDateWiseBookings, getRecentBookings } from '../controllers/BookiingControllers/BookingService.js';

const bookingRouter = express.Router();

bookingRouter.post('/createBookings', createBookings);
bookingRouter.get('/getBookings', getBookings);
bookingRouter.delete('/cancelBooking/:id', cancelBooking);
bookingRouter.put('/rescheduledBooking/:id', rescheduledBooking);
bookingRouter.delete('/deleteBooking/:id', deleteBooking);
bookingRouter.get('/getDateWiseBookings', getDateWiseBookings);
bookingRouter.get('/getRecentBookings', getRecentBookings);

export default bookingRouter;
