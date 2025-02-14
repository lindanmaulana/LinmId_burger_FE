import useQueryPayments from "../../../../../hooks/query/services/useQueryPayments";

const ChartPayments = () => {
  const { dataPayment, loadingPayment, errorPayment } = useQueryPayments();

  if (loadingPayment) return <p>Loading...</p>;
  if (errorPayment) return <p>Error...</p>;

  // const data = {
  //     labels: reservationTableNumber,
  //     datasets: [
  //       {
  //         label: "Revenue",
  //         backgroundColor: "rgba(2,117,216,1)",
  //         borderColor: "rgba(2,117,216,1)",
  //         borderWidth: 1,
  //         data: reservationsGuestCount
  //       }
  //     ]
  //   };

  // **Options untuk Chart**
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Sembunyikan legenda
      title: { display: true, text: "Revenue Over Time" }, // Judul chart
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { maxTicksLimit: 6 },
      },
      y: {
        min: 1,
        max: 6,
        ticks: { maxTicksLimit: 5 },
        grid: { display: true },
      },
    },
  };
  return <div></div>;
};

export default ChartPayments;
