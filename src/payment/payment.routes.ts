import { Router } from "express";
import { PaymentController } from "./payment.controller";

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *         - bookingId
 *         - amount
 *         - method
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the payment
 *         bookingId:
 *           type: integer
 *           description: Related booking ID
 *         amount:
 *           type: number
 *           format: float
 *           description: Payment amount
 *         method:
 *           type: string
 *           description: Payment method (e.g., credit card, PayPal)
 *         status:
 *           type: string
 *           description: Payment status (e.g., pending, completed, failed)
 *         booking:
 *           $ref: '#/components/schemas/Booking'
 *       example:
 *         id: 1
 *         bookingId: 5
 *         amount: 200.50
 *         method: "Credit Card"
 *         status: "Completed"
 */

const router = Router();

/**
 * @swagger
 * /api/payments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: List of all payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */
router.get("/", PaymentController.getPayments);

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Create a payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       201:
 *         description: Payment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 */
router.post("/", PaymentController.createPayment);

export default router;
