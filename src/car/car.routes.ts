import { Router } from "express";
import { CarController } from "./car.controller";

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Car management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       required:
 *         - vendorId
 *         - brand
 *         - model
 *         - pricePerDay
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the car
 *         vendorId:
 *           type: integer
 *           description: The vendor (user) ID who owns the car
 *         brand:
 *           type: string
 *           description: Brand of the car
 *         model:
 *           type: string
 *           description: Model of the car
 *         pricePerDay:
 *           type: number
 *           description: Price per day to rent the car
 *         available:
 *           type: boolean
 *           default: true
 *       example:
 *         id: 1
 *         vendorId: 2
 *         brand: Toyota
 *         model: Corolla
 *         pricePerDay: 50
 *         available: true
 */

const router = Router();

/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: List of all cars
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 */
router.get("/", CarController.getCars);

/**
 * @swagger
 * /api/cars/{id}:
 *   get:
 *     summary: Get a car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Car ID
 *     responses:
 *       200:
 *         description: Car data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Car not found
 */
router.get("/:id", CarController.getCar);

/**
 * @swagger
 * /api/cars:
 *   post:
 *     summary: Create a new car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Car created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 */
router.post("/", CarController.createCar);

/**
 * @swagger
 * /api/cars/{id}:
 *   put:
 *     summary: Update a car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Car ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               model:
 *                 type: string
 *               pricePerDay:
 *                 type: number
 *               available:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Car updated successfully
 *       404:
 *         description: Car not found
 */
router.put("/:id", CarController.updateCar);

/**
 * @swagger
 * /api/cars/{id}:
 *   delete:
 *     summary: Delete a car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Car ID
 *     responses:
 *       200:
 *         description: Car deleted successfully
 *       404:
 *         description: Car not found
 */
router.delete("/:id", CarController.deleteCar);

export default router;
