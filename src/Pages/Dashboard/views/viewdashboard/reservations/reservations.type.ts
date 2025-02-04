import { dataReservation, reservationsStatus } from "../../../../../types/type-reservations";

export interface ReservationProps {
  data: dataReservation[];
}


export const dataReservationsStatus: reservationsStatus[] = [
  "canceled", "confirmed", "pending"
]