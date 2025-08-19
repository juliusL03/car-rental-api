import { PaymentModel } from "./payment.model";

export const PaymentService = {
  getPayments: () => PaymentModel.findAll(),
  addPayment: (data: { bookingId: number; amount: number; method: string; status: string }) =>
    PaymentModel.create(data),
};
