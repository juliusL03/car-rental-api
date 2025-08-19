import { Request, Response } from "express";
import { PaymentService } from "./payment.service";

export const PaymentController = {
  getPayments: async (_req: Request, res: Response) => {
    const payments = await PaymentService.getPayments();
    res.json(payments);
  },

  createPayment: async (req: Request, res: Response) => {
    const payment = await PaymentService.addPayment(req.body);
    res.status(201).json(payment);
  },
};
