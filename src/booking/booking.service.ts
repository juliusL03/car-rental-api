import { BookingModel } from "./booking.model";

export const BookingService = {
  getBookings: () => BookingModel.findAll(),
  getBookingById: (id: number) => BookingModel.findById(id),
  createBooking: (data: { carId: number; customerId: number; startDate: Date; endDate: Date }) =>
    BookingModel.create(data),
  cancelBooking: (id: number) => BookingModel.delete(id),
};
