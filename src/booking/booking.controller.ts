import { Request, Response } from "express";
import { BookingService } from "./booking.service";

export const BookingController = {
  getBookings: async (_req: Request, res: Response) => {
    const bookings = await BookingService.getBookings();
    res.json(bookings);
  },

  getBooking: async (req: Request, res: Response) => {
    const booking = await BookingService.getBookingById(Number(req.params.id));
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  },

  createBooking: async (req: Request, res: Response) => {
    const booking = await BookingService.createBooking(req.body);
    res.status(201).json(booking);
  },

  cancelBooking: async (req: Request, res: Response) => {
    await BookingService.cancelBooking(Number(req.params.id));
    res.json({ message: "Booking cancelled" });
  },
};
