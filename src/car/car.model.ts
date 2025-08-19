import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CarModel = {
  findAll: () => prisma.car.findMany({ include: { vendor: true } }),
  findById: (id: number) => prisma.car.findUnique({ where: { id }, include: { vendor: true } }),

  create: (data: { vendorId: number; brand: string; model: string; pricePerDay: number }) =>
    prisma.car.create({
      data: {
        vendorId: data.vendorId,
        brand: data.brand,
        model: data.model,
        pricePerDay: data.pricePerDay,
      },
    }),

  update: (
    id: number,
    data: Partial<{ brand: string; model: string; pricePerDay: number; available: boolean }>
  ) => prisma.car.update({ where: { id }, data }),

  delete: (id: number) => prisma.car.delete({ where: { id } }),
};
