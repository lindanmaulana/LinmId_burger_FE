import useQueryReservations from "../../../../../hooks/query/reservations/useQueryReservations";
import PageDataLayout from "../layouts/PageDataLayout";
import ReservationChart from "./ReservationChart";
import ReservationTable from "./ReservationTable";

const ViewDashboardReservations = () => {
  const { dataReservation, loadingReservation, errorReservation } =
    useQueryReservations();

  if (loadingReservation) return <p>Loading... </p>;

  if (errorReservation) return <p>Error...</p>;

  return (
    <PageDataLayout title="Reservations">
      <div></div>
      <div className="flex flex-col gap-6">
        <ReservationTable data={dataReservation.data} />
        <ReservationChart data={dataReservation.data} />
      </div>
    </PageDataLayout>
  );
};

export default ViewDashboardReservations;
