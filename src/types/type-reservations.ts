export interface table {
  location: string;
  seats: number;
  table_number: number;
  _id: string;
}
export type reservationsStatus = "confirmed" | "canceled" | "pending";
export interface reservation {
  _id: string;
  id_table: table;
  id_user: string;
  guest_count: number;
  reservation_date: string;
  reservation_time: string;
  status: reservationsStatus;
}

export interface dataReservation extends reservation {
  createdAt: string;
  updateAt: string;
  __v: number;
}

