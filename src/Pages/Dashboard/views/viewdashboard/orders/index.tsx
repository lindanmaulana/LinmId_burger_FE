import { BsTable } from "react-icons/bs";
import useQueryOrders from "../../../../../hooks/query/orders/useQueryOrders";
import PageDataLayout from "../layouts/PageDataLayout";
import { dataOrder } from "./order.type";
import { Fragment } from "react/jsx-runtime";
import { formatTimeStamps } from "../../../../../utils/helpers/formatDate";

const ViewDashboardOrders = () => {
  const { dataOrder, errorOrder, loadingOrder } = useQueryOrders();

  if (loadingOrder) return <p>Loading...</p>;

  if (errorOrder) return <p>Error...</p>;

  console.log(dataOrder.data);

  return (
    <PageDataLayout title="Orders">
          <div></div>
          <table className="w-full font-open-sans-regular">
            <thead>
              <tr className="text-sm text-left">
                <th className="p-2 border border-devBlack/30">User</th>
                <th className="p-2 border border-devBlack/30">Status</th>
                <th className="p-2 border border-devBlack/30">Total Price</th>
                <th className="p-2 border border-devBlack/30">Date</th>
              </tr>
            </thead>
            <tbody>
              {dataOrder.data.map((order: dataOrder) => {
                const orderDate = formatTimeStamps(order.createdAt)
                return (
                <Fragment key={order._id}>
                  <tr className="text-sm text-devBlack/80 hover:bg-devBlack/20">
                    <td className="p-2 border border-devBlack/30">{order.id_user}</td>
                    <td className="p-2 border border-devBlack/30">{order.status}</td>
                    <td className="p-2 border border-devBlack/30">{order.total_price}</td>
                    <td className="p-2 border border-devBlack/30">{orderDate}</td>
                  </tr>
                </Fragment>
              )})}
            </tbody>
          </table>
    </PageDataLayout>
  );
};

export default ViewDashboardOrders;
