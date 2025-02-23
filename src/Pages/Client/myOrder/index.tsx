import { useMutation } from "@tanstack/react-query";
import LayoutContainer from "../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../components/layouts/LayoutSection";
import useQueryOrders from "../../../hooks/query/services/useQueryOrders";
import { order } from "../../../types/type-orders";
import { getStatusColorOrder } from "../../../types/type-status-colors";
import {
  ServiceMidtransPayment,
  ServiceMidtransPaymentParams,
} from "../../../utils/services/midtrans-payment";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import {
  CLEAR_LOADING,
  handleIsLoading,
  SET_LOADING,
} from "../../../redux/slices/isLoading";
import useReduxLoading from "../../../hooks/redux/useReduxLoading";
import { handleSetAlert } from "../../../redux/slices/alertMessage";
import { errorMessage } from "../../../redux/slices/errorMessage";

const isDisableButtonPayment = ["paid", "canceled", "delivered"]

const PageMyOrder = () => {
  const { dataOrder, error, errorOrder, loadingOrder } = useQueryOrders();
  const { loading } = useReduxLoading();
  const dispatch = useDispatch<AppDispatch>();

  const { mutate } = useMutation({
    mutationKey: ["mutateMidtransPayment"],
    mutationFn: (data: ServiceMidtransPaymentParams) =>
      ServiceMidtransPayment(data),
  });

  const handlePayment = (data: ServiceMidtransPaymentParams) => {
    dispatch(handleIsLoading({ type: SET_LOADING }));

    mutate(data, {
      onSuccess: (data) => {
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));

        window.snap.pay(data.token);
      },
      onError: (err) => {
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));

        dispatch(
          handleSetAlert({
            active: true,
            message: errorMessage(err),
            transition: true,
            type: "error",
          })
        );
      },
    });
  };

  if (loadingOrder) return <p>Loading...</p>;
  if (errorOrder) return <p>Error...</p>;

  return (
    <LayoutSection className="py-10">
      <LayoutContainer className="max-w-6xl">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Order List</h2>
          <div>
            <table className="w-full">
              <thead className="flex items-center justify-between p-1 mb-4 text-center bg-white rounded-lg shadow">
                <th className="p-2">No</th>
                <th className="p-2">Order_ID</th>
                <th className="p-2">Total Harga</th>
                <th className="p-2">Status</th>
                <th className="p-2">Bayar</th>
              </thead>
              <tbody className="flex flex-col gap-4 text-center">
                {dataOrder.data.map((order: order, index: number) => (
                  <tr
                    key={order._id}
                    className="flex items-center justify-between bg-white rounded-lg shadow border-devWhitePurple"
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{order._id}</td>
                    <td className="p-2">
                      {order.total_price.toLocaleString("id")}
                    </td>
                    <td className="p-2">
                      <p className={`${getStatusColorOrder(order.status)}`}>
                        {order.status}
                      </p>
                    </td>
                    <td className="p-2">
                      <button
                        disabled={isDisableButtonPayment.includes(order.status)}
                        onClick={() =>
                          handlePayment({
                            id_order: order._id,
                            total_price: order.total_price,
                          })
                        }
                        className={`${
                          !isDisableButtonPayment.includes(order.status)
                            ? "bg-statusPaid"
                            : "bg-statusCanceled/50"
                        } rounded p-1 text-white text-sm`}
                      >
                        {loading ? "Loading.." : isDisableButtonPayment.includes(order.status) ? "Success" : "Payment"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default PageMyOrder;
