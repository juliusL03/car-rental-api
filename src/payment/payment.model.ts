import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PaymentModel = {
  findAll: () => prisma.payment.findMany({ include: { booking: true } }),
  create: (data: { bookingId: number; amount: number; method: string; status: string }) =>
    prisma.payment.create({ data }),
};
