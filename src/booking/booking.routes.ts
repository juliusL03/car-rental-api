import { Router } from "express";
import { BookingController } from "./booking.controller";

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Booking management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - carId
 *         - customerId
 *         - startDate
 *         - endDate
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the booking
 *         carId:
 *           type: integer
 *           description: The car being booked
 *         customerId:
 *           type: integer
 *           description: The customer making the booking
 *         startDate:
 *           type: string
 *           format: date
 *           description: Start date of the booking
 *         endDate:
 *           type: string
 *           format: date
 *           description: End date of the booking
 *         car:
 *           $ref: '#/components/schemas/Car'
 *       example:
 *         id: 1
 *         carId: 2
 *         customerId: 3
 *         startDate: 2025-08-20
 *         endDate: 2025-08-25
 */

const router = Router();

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: List of all bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 */
router.get("/", BookingController.getBookings);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       404:
 *         description: Booking not found
 */
router.get("/:id", BookingController.getBooking);

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 */
router.post("/", BookingController.createBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Cancel a booking
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking cancelled successfully
 *       404:
 *         description: Booking not found
 */
router.delete("/:id", BookingController.cancelBooking);

export default router;
