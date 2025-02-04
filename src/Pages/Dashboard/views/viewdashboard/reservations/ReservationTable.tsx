import { Link } from "react-router-dom";
import { helperFormatDate } from "../../../../../utils/helpers/formatDate";
import Table from "../../../components/table";
import Tbody from "../../../components/table/Tbody";
import TbodyItem from "../../../components/table/TbodyTd";
import TbodyTr from "../../../components/table/TbodyTr";
import Thead from "../../../components/table/Thead";
import { ReservationProps } from "./reservations.type";
import { dataReservation } from "../../../../../types/type-reservations";

const ReservationTable = (props: ReservationProps) => {
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
          "",
        ]}
      />
      <Tbody>
        {data.length > 0 ? (
          data.map((reservation: dataReservation) => {
            const reservationDate = helperFormatDate(
              reservation.reservation_date
            );
            return (
              <TbodyTr key={reservation._id}>
                <TbodyItem>{reservation.id_user}</TbodyItem>
                <TbodyItem>{reservation.id_table.table_number}</TbodyItem>
                <TbodyItem>{reservation.id_table.seats}</TbodyItem>
                <TbodyItem>{reservation.guest_count}</TbodyItem>
                <TbodyItem>{reservation.id_table.location}</TbodyItem>
                <TbodyItem>{reservationDate}</TbodyItem>
                <TbodyItem>{reservation.reservation_time}</TbodyItem>
                <TbodyItem className="text-center">
                  <p
                    className={`
                    ${
                      reservation.status === "canceled"
                        ? "bg-red-500"
                        : reservation.status === "pending"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    } rounded text-white text-xs px-2 py-1`}
                  >
                    {reservation.status}
                  </p>
                </TbodyItem>
                <TbodyItem>
                  <Link
                    to={"/"}
                    className="px-2 py-1 text-xs text-white rounded bg-devBlue"
                  >
                    View Detail
                  </Link>
                </TbodyItem>
              </TbodyTr>
            );
          })
        ) : (
          <TbodyTr>
            <TbodyItem className="text-center" colSpan={9}>
              <p className="text-sm text-red-500">Not found</p>
            </TbodyItem>
          </TbodyTr>
        )}
      </Tbody>
    </Table>
  );
};

export default ReservationTable;
