import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const BookingModel = {
  findAll: () => prisma.booking.findMany({ include: { car: true } }),
  findById: (id: number) => prisma.booking.findUnique({ where: { id }, include: { car: true } }),
  create: (data: { carId: number; customerId: number; startDate: Date; endDate: Date }) =>
    prisma.booking.create({ data }),
  delete: (id: number) => prisma.booking.delete({ where: { id } }),
};
