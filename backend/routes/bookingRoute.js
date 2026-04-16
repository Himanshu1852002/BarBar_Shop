import express from 'express';
import { createBookings, getBookings, cancelBooking, rescheduledBooking, deleteBooking, getDateWiseBookings, getRecentBookings } from '../controllers/BookiingControllers/BookingService.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const bookingRouter = express.Router();

/**
 * @swagger
 * /api/bookings/createBookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerName
 *               - customerPhone
 *               - service
 *               - date
 *               - time
 *             properties:
 *               customerName:
 *                 type: string
 *               customerPhone:
 *                 type: string
 *               service:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               time:
 *                 type: string
 *               employeeId:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Bad request
 */
bookingRouter.post('/createBookings', createBookings);

/**
 * @swagger
 * /api/bookings/getBookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, confirmed, completed, cancelled]
 *         description: Filter by booking status
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter by specific date
 *     responses:
 *       200:
 *         description: List of bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 */
bookingRouter.get('/getBookings', adminMiddleware, getBookings);

/**
 * @swagger
 * /api/bookings/cancelBooking/{id}:
 *   delete:
 *     summary: Cancel a booking
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking cancelled successfully
 *       404:
 *         description: Booking not found
 */
bookingRouter.delete('/cancelBooking/:id', adminMiddleware, cancelBooking);

/**
 * @swagger
 * /api/bookings/rescheduledBooking/{id}:
 *   put:
 *     summary: Reschedule a booking
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *               time:
 *                 type: string
 *               employeeId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Booking rescheduled successfully
 *       404:
 *         description: Booking not found
 */
bookingRouter.put('/rescheduledBooking/:id', adminMiddleware, rescheduledBooking);

/**
 * @swagger
 * /api/bookings/deleteBooking/{id}:
 *   delete:
 *     summary: Delete a booking permanently
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 */
bookingRouter.delete('/deleteBooking/:id', adminMiddleware, deleteBooking);

/**
 * @swagger
 * /api/bookings/getDateWiseBookings:
 *   get:
 *     summary: Get bookings grouped by date
 *     tags: [Bookings]
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date for filtering
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: End date for filtering
 *     responses:
 *       200:
 *         description: Date-wise booking data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Booking'
 */
bookingRouter.get('/getDateWiseBookings', adminMiddleware, getDateWiseBookings);

/**
 * @swagger
 * /api/bookings/getRecentBookings:
 *   get:
 *     summary: Get recent bookings
 *     tags: [Bookings]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of recent bookings to fetch
 *     responses:
 *       200:
 *         description: List of recent bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 */
bookingRouter.get('/getRecentBookings', adminMiddleware, getRecentBookings);

export default bookingRouter;
