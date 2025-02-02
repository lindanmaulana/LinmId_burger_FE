import { Link } from "react-router-dom";
import useQueryOrders from "../../../../../hooks/query/orders/useQueryOrders";
import { helperFormatDate } from "../../../../../utils/helpers/formatDate";
import PageDataLayout from "../layouts/PageDataLayout";
import { Fragment } from "react/jsx-runtime";
import { dataOrder } from "../../../../../types/type-orders";
import SLoadingData from "../../../../../components/loading/LoadingData";
import SErrorData from "../../../../../components/error/ErrorData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ServiceOrderEdit, ServiceOrderEditData } from "../../../../../utils/orders";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { CLEAR_LOADING, handleIsLoading, SET_LOADING } from "../../../../../redux/slices/isLoading";
import { handleSetAlert } from "../../../../../redux/slices/alertMessage";
import { errorMessage } from "../../../../../utils/errors/errorMessage";
import SConfirmationModal from "../../../../../components/confirmationModal";

const ViewDashboardOrders = () => {
  const { dataOrder, errorOrder, loadingOrder, error } = useQueryOrders();
  const queryClient = useQueryClient()
  const dispatch = useDispatch<AppDispatch>()

  const {mutate} = useMutation({
    mutationKey: ["mutateOrderEdit"],
    mutationFn: (data: ServiceOrderEditData) => ServiceOrderEdit(data)
  })

  if (loadingOrder) return <SLoadingData>Loading...</SLoadingData>;

  if (errorOrder) return <SErrorData>{error?.message}</SErrorData>;

  const handleApproveOrder = (data: ServiceOrderEditData) => {
    dispatch(handleIsLoading({type: SET_LOADING}))
    mutate(data, {
      onSuccess: (data) => {
        dispatch(handleIsLoading({type: CLEAR_LOADING}))
        dispatch(handleSetAlert({
          active: true,
          message: data.message,
          transition: true,
          type: "success"
        }))

        queryClient.invalidateQueries({queryKey: ["queryOrderGetAll"]})
      },

      onError: (err) => {
        dispatch(handleIsLoading({type: CLEAR_LOADING}))
        dispatch(handleSetAlert({
          active: true,
          message: errorMessage(err),
          transition: true,
          type: "error"
        }))
      }
    })
  }

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
                <th className="p-2 border border-devBlack/30"></th>
                <th className="p-2 border border-devBlack/30"></th>
              </tr>
            </thead>
            <tbody>
              {dataOrder.data.map((order: dataOrder) => {
                const orderDate = helperFormatDate(order.createdAt)
                return (
                <Fragment key={order._id}>
                  <tr className="text-sm text-devBlack/80 hover:bg-devBlack/20">
                    <td className="p-2 border border-devBlack/30">{order.id_user}</td>
                    <td className="p-2 border border-devBlack/30">{order.status}</td>
                    <td className="p-2 border border-devBlack/30">{order.total_price}</td>
                    <td className="p-2 border border-devBlack/30">{orderDate}</td>
                    <td className="p-2 text-center border border-devBlack/30">
                      <Link to={`/dashboard/orders/${order._id}`} className="px-6 py-1 text-xs text-white rounded bg-devRed">Cancel</Link>
                    </td>
                    <td className="p-2 text-center border border-devBlack/30">
                      <Link to={`/dashboard/orders/${order._id}`} className="px-6 py-1 text-xs text-white rounded bg-devBlue">Approve</Link>
                    </td>
                  </tr>
                </Fragment>
              )})}
            </tbody>
          </table>

          <SConfirmationModal />
    </PageDataLayout>
  );
};

export default ViewDashboardOrders;
