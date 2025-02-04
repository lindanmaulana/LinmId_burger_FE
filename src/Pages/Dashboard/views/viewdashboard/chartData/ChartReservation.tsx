import { LuChartColumnBig } from "react-icons/lu";
import SErrorData from "../../../../../components/error/ErrorData";
import SLoadingData from "../../../../../components/loading/LoadingData";
import useQueryReservations from "../../../../../hooks/query/reservations/useQueryReservations";
import BarChart from "../components/chart/BarChart";
import { reservation } from "../../../../../types/type-reservations";

const ChartDataReservation = () => {
  const { dataReservation, loadingReservation, errorReservation, error} = useQueryReservations();
  if (loadingReservation) return <SLoadingData>Loading...</SLoadingData>;

  if (errorReservation) return <SErrorData>{error?.message}</SErrorData>;

  const reservationsData = dataReservation.data.map((reservation: reservation) => ({
    tableNumber: reservation.id_table.table_number, // Ambil nomor meja
    guestCount: reservation.guest_count, // Ambil jumlah tamu
  }));
  
  // Kelompokkan data berdasarkan table_number
  const aggregatedData: Record<number, number> = {};
  
  reservationsData.forEach((a: {tableNumber: number, guestCount: number}) => {
    const tableNumber = a.tableNumber
    const guestCount = a.guestCount
    if (!aggregatedData[tableNumber]) {
      aggregatedData[tableNumber] = 0;
    }
    aggregatedData[tableNumber] += guestCount; // Akumulasi jumlah tamu di meja yang sama
  });
  
  const labels = Object.keys(aggregatedData); // X-axis (Nomor Meja)
  const guestCounts = Object.values(aggregatedData); // Y-axis (Total Guest Count)
  
  // Data untuk chart
  const data = {
    labels: labels.map((label: string) => `Table number ${label}`),
    datasets: [
      {
        label: "Total Guests",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        borderWidth: 1,
        data: guestCounts,
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

export default ChartDataReservation;
