import express, { json } from 'express';
const bookingRouter = express.Router();
import { createBooking, updateBooking, cancelBooking } from '../controllers/booking.controller.js';
import { userAuth } from '../middleware/userAuth.middleware.js';

bookingRouter.post("/book", userAuth, createBooking);
bookingRouter.post("/update-booking", userAuth, updateBooking);
bookingRouter.post("/cancel-booking", userAuth, cancelBooking);

export default bookingRouter