import { order } from "../orders/order.type";


export type paymentMethod = "bank" | "transfer" | "cash";
export type paymentStatus = "pending" | "completed" | "failed";

export interface payment {
  _id: string;
  id_order: order;
  id_user: string;
  amount: number;
  method: paymentMethod;
  payment_date: string;
  status: paymentStatus;
}

export interface dataPayment extends payment {
  createdAt: string;
  updateAt: string;
  __v: number;
}
