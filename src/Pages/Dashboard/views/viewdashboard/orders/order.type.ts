export type statusOrder =
  | "pending"
  | "paid"
  | "delivered"
  | "canceled"
  | "completed";

export interface order {
  _id: string;
  id_user: string;
  status: statusOrder;
  total_price: number;
}

export interface dataOrder extends order {
  createdAt: string;
  updateAt: string;
  __v: number;
}
