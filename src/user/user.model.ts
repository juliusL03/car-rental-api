import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const UserModel = {
  create: (data: any) => prisma.user.create({ data }),
  findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),
};
