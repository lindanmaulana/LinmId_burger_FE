import React, { useState } from "react";
import ReservationTable from "./ReservationTable";
import { dataReservationsStatus, ReservationProps } from "./reservations.type";
import {
  dataReservation,
  reservation,
  reservationsStatus,
} from "../../../../../types/type-reservations";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { helperFormatDate } from "../../../../../utils/helpers/formatDate";

const ReservationFilter = (props: ReservationProps) => {
  const { data } = props;
  const [dataReservations, setDataReservations] =
    useState<dataReservation[]>(data);
  const [isSortGuestCount, setIsSortGuestCount] = useState<boolean>(false);

  const handleFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;

    if (!status) {
      setDataReservations([...dataReservations]);
    }

    if (status === "") {
      setDataReservations(data);
    } else {
      const reservations = data.filter(
        (reservation: reservation) => reservation.status === status
      );

      setDataReservations(reservations);
    }

    setIsSortGuestCount(false);
  };

  const handleFilterGuestCount = () => {
    setIsSortGuestCount(!isSortGuestCount);

    if (isSortGuestCount) {
      const sortData = [...dataReservations].sort(
        (a, b) => a.guest_count - b.guest_count
      );
      setDataReservations(sortData);
    } else {
      const sortData = [...dataReservations].sort(
        (a, b) => b.guest_count - a.guest_count
      );
      setDataReservations(sortData);
    }
  };

  const handleFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;

    if (!filter) {
      setDataReservations([...dataReservations]);
    }

    const filterDataReservations = data.filter((reservation: dataReservation) => {
      const reservations = helperFormatDate(reservation.reservation_date).split(",")[0];

      return reservations === filter;
    });

    setDataReservations(filterDataReservations);
    setIsSortGuestCount(false);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <button
          className="px-2 text-sm text-white rounded bg-devRed"
          onClick={() => setDataReservations(data)}
        >
          Reset
        </button>
        <div className="flex items-center gap-4">
          <label
            htmlFor="filterDate"
            className="px-1 overflow-hidden text-sm border rounded border-devBlack/20"
          >
            <input
              type="date"
              id="filterDate"
              onChange={handleFilterDate}
              className="cursor-pointer"
            />
          </label>

          <button
            onClick={handleFilterGuestCount}
            className="flex items-center gap-px px-1 text-sm border rounded border-devBlack/20"
          >
            Filter
            {isSortGuestCount ? <FaSortUp /> : <FaSortDown />}
          </button>
          <label
            htmlFor="filterStatus"
            className="flex items-center overflow-hidden border rounded border-devBlack/20"
          >
            <select
              id="filterStatus"
              onChange={(e) => handleFilterStatus(e)}
              className="text-sm cursor-pointer"
            >
              <option value="">--status--</option>
              {dataReservationsStatus.map((reservation: reservationsStatus) => (
                <option key={reservation} value={reservation}>
                  {reservation}
                </option>
              ))}
            </select>
            <span className="text-sm"></span>
          </label>
        </div>
      </div>
      <ReservationTable data={dataReservations} />
    </div>
  );
};

export default ReservationFilter;
