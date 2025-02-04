import { dataReservation, table } from "../../../../../types/type-reservations";
import { getFieldValues } from "../../../../../utils/helpers/getFieldValues";
import DoughnutChart from "../components/chart/DoughnutChart";

export interface ReservationChartProps {
  data: dataReservation[];
}

const ReservationChart = (props: ReservationChartProps) => {
  const { data } = props;

  // Ambil semua tabel yang dipesan
  const tables = getFieldValues<dataReservation, "id_table">(data, "id_table");

  // Ambil nomor meja dari setiap tabel
  const tableNumbers = getFieldValues<table, "table_number">(tables, "table_number");

  // Hitung jumlah reservasi per nomor meja
  const reservationsCount: Record<number, number> = {};

  tableNumbers.forEach((tableNumber) => {
    if (reservationsCount[tableNumber]) {
      reservationsCount[tableNumber] += 1;
    } else {
      reservationsCount[tableNumber] = 1;
    }
  });

  const labels = Object.keys(reservationsCount).map(Number); // Nomor meja
  const dataValues = Object.values(reservationsCount); // Jumlah reservasi per meja

  const dataChart = {
    labels: labels.map(label => `Table Number: ${label}`),
    datasets: [
      {
        data: dataValues, // Jumlah reservasi per meja
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
        ],
        hoverBackgroundColor: [
          "#ff4c74",
          "#2a92db",
          "#ffb600",
          "#3aa8a8",
          "#774bff",
        ],
      },
    ],
  };

  const optionsChart = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="grid grid-cols-2">
      <DoughnutChart data={dataChart} options={optionsChart} />
      <div>
        <h3>Chart data Reservation</h3>
      </div>
    </div>
  );
};

export default ReservationChart;
