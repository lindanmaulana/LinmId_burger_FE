import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SConfirmationModal from "../../../../../components/confirmationModal";
import SErrorData from "../../../../../components/error/ErrorData";
import SLoadingData from "../../../../../components/loading/LoadingData";
import useQueryOrders from "../../../../../hooks/query/orders/useQueryOrders";
import { handleSetAlert } from "../../../../../redux/slices/alertMessage";
import {
  handleClearConfirmation,
  handleSetConfirmationModal,
} from "../../../../../redux/slices/confirmationModal";
import {
  CLEAR_LOADING,
  handleIsLoading,
  SET_LOADING,
} from "../../../../../redux/slices/isLoading";
import { AppDispatch } from "../../../../../redux/store";
import { errorMessage } from "../../../../../utils/errors/errorMessage";
import PageDataLayout from "../layouts/PageDataLayout";
import OrderTable from "./OrderTable";
import { statusOrder } from "../../../../../types/type-orders";
import { ServiceOrderUpdate, ServiceOrderUpdateData } from "../../../../../utils/orders";
import OrderFilter from "./OrderFilter.tsx";

const ViewDashboardOrders = () => {
  const { dataOrder, errorOrder, loadingOrder, error } = useQueryOrders();
  const queryClient = useQueryClient();
  const dispatch = useDispatch<AppDispatch>();
  const [idOrder, setIdOrder] = useState<string>("")
  const [status, setStatus] = useState<statusOrder>("pending")

  const { mutate } = useMutation({
    mutationKey: ["mutateOrderUpdate"],
    mutationFn: (data: ServiceOrderUpdateData) => ServiceOrderUpdate(data),
  });

  if (loadingOrder) return <SLoadingData>Loading...</SLoadingData>;

  if (errorOrder) return <SErrorData>{error?.message}</SErrorData>;

  const handleOrder = (data: ServiceOrderUpdateData) => {
    dispatch(handleIsLoading({ type: SET_LOADING }));
    dispatch(handleClearConfirmation())

    mutate(data, {
      onSuccess: (data) => {
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
        dispatch(
          handleSetAlert({
            active: true,
            message: data.message,
            transition: true,
            type: "success",
          })
        );

        queryClient.invalidateQueries({ queryKey: ["queryOrderGetAll"] });
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

  const handleActionOrder = (id: string, message: string, status: statusOrder) => {
    dispatch(
      handleSetConfirmationModal({
        active: true,
        message: message,
        transition: true,
      })
    );

    setIdOrder(id)
    setStatus(status)
  };

  const handleCancelConfirmation = () => {
    dispatch(handleClearConfirmation());
  };

  return (
    <PageDataLayout title="Orders">
      <div></div>
      <OrderFilter data={dataOrder.data} handleActionOrder={handleActionOrder} />
      <SConfirmationModal
        confirm={() => status === "completed" ? handleOrder({id: idOrder, status: status}) : handleOrder({id: idOrder, status: status})}
        cancel={handleCancelConfirmation}
      />
    </PageDataLayout>
  );
};

export default ViewDashboardOrders;
