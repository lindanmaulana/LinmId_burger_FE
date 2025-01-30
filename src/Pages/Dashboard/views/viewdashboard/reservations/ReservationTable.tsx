import Table from "../components/table";
import Tbody from "../components/table/Tbody";
import TbodyItem from "../components/table/TbodyTd";
import TbodyTr from "../components/table/TbodyTr";
import Thead from "../components/table/Thead";
import { dataReservation } from "./reservations.type";

export interface ReservationTableProps {
  data: dataReservation[];
}
const ReservationTable = (props: ReservationTableProps) => {
  const { data } = props;
  return (
    <Table>
      <Thead
        titleHeading={[
          "User",
          "Table number",
          "Seats",
          "Guest count",
          "Location",
          "Date",
          "Time",
          "Status",
        ]}
      />
      <Tbody>
        {data.map((reservation: dataReservation) => (
            <TbodyTr>
                <TbodyItem>{reservation.id_user}</TbodyItem>
                <TbodyItem>{reservation.id_table.table_number}</TbodyItem>
                <TbodyItem>{reservation.id_table.seats}</TbodyItem>
                <TbodyItem>{reservation.guest_count}</TbodyItem>
                <TbodyItem>{reservation.id_table.location}</TbodyItem>
                <TbodyItem>{reservation.reservation_date}</TbodyItem>
                <TbodyItem>{reservation.reservation_time}</TbodyItem>
                <TbodyItem>{reservation.status}</TbodyItem>
            </TbodyTr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ReservationTable;
