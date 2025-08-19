# Car Rental API

A RESTful API for managing a car rental system. Built with **Node.js**,
**Express**, and **Prisma**.

## 🚀 Features

- User management (customers, admins)
- Car management (add, update, delete, list cars)
- Booking system (reserve cars for specific dates)
- Payments (track and manage car rental payments)
- Authentication & Authorization (JWT-based)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/car-rental-api.git

# Navigate to the project directory
cd car-rental-api

# Install dependencies
yarn install
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory and configure the following:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/car_rental_db"
JWT_SECRET="your_jwt_secret"
PORT=4000
```

## ▶️ Running the API

```bash
# Run development server
yarn dev

# Run production
yarn build
yarn start
```

## 📖 API Documentation

Swagger UI is available at:

    http://localhost:4000/docs

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Prisma (PostgreSQL)**
- **Swagger UI**
- **JWT Authentication**

## ✅ Available Endpoints

### Authentication

- `POST /auth/register` → Register a new user
- `POST /auth/login` → Login and get a token

### Cars

- `GET /cars` → Get all cars
- `POST /cars` → Add a new car (Admin only)
- `PUT /cars/:id` → Update car details (Admin only)
- `DELETE /cars/:id` → Delete a car (Admin only)

### Bookings

- `GET /bookings` → Get all bookings
- `POST /bookings` → Create a new booking
- `GET /bookings/:id` → Get booking details

### Payments

- `GET /payments` → Get all payments
- `POST /payments` → Create a new payment

## 🧪 Testing

```bash
# Run tests
yarn test
```

## 📜 License

MIT License © 2025 - Julius T. Legaspi
