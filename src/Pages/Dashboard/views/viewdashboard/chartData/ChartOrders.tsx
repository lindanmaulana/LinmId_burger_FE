import { LuChartColumnBig } from "react-icons/lu";
import SErrorData from "../../../../../components/error/ErrorData";
import SLoadingData from "../../../../../components/loading/LoadingData";
import useQueryOrders from "../../../../../hooks/query/orders/useQueryOrders";
import { getFieldValues } from "../../../../../utils/helpers/getFieldValues";
import LineChart from "../components/chart/LineChart";
import { order } from "../orders/order.type";

const ChartDataOrders = () => {
  const { dataOrder, errorOrder, loadingOrder, error } = useQueryOrders();
  
  if (loadingOrder) {
    return <SLoadingData>Loading..</SLoadingData>};
    
  if (errorOrder) {
    return <SErrorData>{error?.message}</SErrorData>};

  
  const totalPriceOrder = getFieldValues<order, "total_price">(dataOrder.data, "total_price")
  const statusOrder = getFieldValues<order, "status">(dataOrder.data, "status")
  
  const data = {
    labels: statusOrder,
    datasets: [
      {
        label: "Orders",
        data: totalPriceOrder,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)"
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
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
