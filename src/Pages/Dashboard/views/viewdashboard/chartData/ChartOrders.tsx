import { LuChartColumnBig } from "react-icons/lu";
import SErrorData from "../../../../../components/error/ErrorData";
import SLoadingData from "../../../../../components/loading/LoadingData";
import useQueryOrders from "../../../../../hooks/query/orders/useQueryOrders";
import { helperFormatDate } from "../../../../../utils/helpers/formatDate";
import LineChart from "../components/chart/LineChart";
import { dataOrder, order } from "../../../../../types/type-orders";

const ChartDataOrders = () => {
  const { dataOrder, errorOrder, loadingOrder, error } = useQueryOrders();
  
  if (loadingOrder) {
    return <SLoadingData>Loading..</SLoadingData>;
  }

  if (errorOrder) {
    return <SErrorData>{error?.message}</SErrorData>;
  }

  // Ambil data yang diperlukan
  const orderData = dataOrder.data.map((order: dataOrder) => ({
    createdAt: order.createdAt,
    total_price: order.total_price,
  }));

  // Urutkan berdasarkan createdAt
  orderData.sort((a: dataOrder, b: dataOrder) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  // Konversi format tanggal
  const labels = orderData.map((order: dataOrder) => helperFormatDate(order.createdAt))

  // Ambil total price
  const totalPrices = orderData.map((order: order) => order.total_price);

  // Data untuk Chart
  const data = {
    labels,
    datasets: [
      {
        label: "Total Price per Order",
        data: totalPrices,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        fill: true,
      },
    ],
  };

  // Konfigurasi Chart
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Order Total Price Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Order Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Price",
        },
      },
    },
  };
  
  return (
    <div className="border rounded border-primary/30">
      <div className="p-2 bg-primary/10">
        <h3 className="flex items-center gap-2 text-sm font-open-sans-regular">
          <LuChartColumnBig />
          Chart Orders
        </h3>
      </div>
      <div><LineChart data={data} options={options} /></div>
    </div>
  );
};

export default ChartDataOrders;
