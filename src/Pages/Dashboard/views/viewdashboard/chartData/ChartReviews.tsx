import { LuChartColumnBig } from "react-icons/lu";
import useQueryReservations from "../../../../../hooks/query/reservations/useQueryReservations";
import { getFieldValues } from "../../../../../utils/helpers/getFieldValues";
import BarChart from "../components/chart/BarChart";
import { reservation, table } from "../reservations/reservations.type";
import SLoadingData from "../../../../../components/loading/LoadingData";
import SErrorData from "../../../../../components/error/ErrorData";

const ChartDataReviews = () => {
  const { dataReservation, loadingReservation, errorReservation, error} = useQueryReservations();
  if (loadingReservation) return <SLoadingData>Loading...</SLoadingData>;

  if (errorReservation) return <SErrorData>{error?.message}</SErrorData>;

  const reservationsTable = getFieldValues<reservation, "id_table">(dataReservation.data, "id_table")
  const reservationsGuestCount = getFieldValues<reservation, "guest_count">(dataReservation.data, "guest_count")
  const reservationTableNumber = reservationsTable.map((reservation: table) => reservation.table_number)
  
  const data = {
    labels: reservationTableNumber,
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        borderWidth: 1,
        data: reservationsGuestCount
      }
    ]
  };

  // **Options untuk Chart**
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Sembunyikan legenda
      title: { display: true, text: "Revenue Over Time" } // Judul chart
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { maxTicksLimit: 6 }
      },
      y: {
        min: 1,
        max: 6,
        ticks: { maxTicksLimit: 5 },
        grid: { display: true }
      }
    }
  };
  
  return (
    <div className="border rounded border-primary/30">
      <div className="p-2 bg-primary/10">
        <h3 className="flex items-center gap-2 text-sm font-open-sans-regular">
          <LuChartColumnBig />
          Chart Reservations
        </h3>
      </div>
      <div>
        <BarChart data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartDataReviews;
