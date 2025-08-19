import express from "express";
import cors from "cors";
import userRoutes from "./user/user.routes";
import carRoutes from "./car/car.routes";
import bookingRoutes from "./booking/booking.routes";
import paymentRoutes from "./payment/payment.routes";
import { setupSwagger } from "./swagger"; // 👈 import swagger

const app = express();
app.use(cors());
app.use(express.json());

// Swagger docs
setupSwagger(app);

app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);

// Welcome page at "/"
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Car Rental API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f7f9;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #2c3e50;
          }
          button {
            margin-top: 20px;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            color: white;
            background-color: #27ae60;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          button:hover {
            background-color: #219150;
          }
        </style>
      </head>
      <body>
        <h1>🚗 Welcome to Car Rental API 🚗</h1>
        <p>Manage cars, rentals, and customers with ease!</p>
        <a href="/api-docs"><button>View API Docs</button></a>
      </body>
    </html>
  `);
});

export default app;
