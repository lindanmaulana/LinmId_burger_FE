import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useDispatch } from "react-redux"
import SConfirmationModal from "../../../../../components/confirmationModal"
import useQueryPayments from "../../../../../hooks/query/payments/useQueryPayments"
import { handleSetAlert } from "../../../../../redux/slices/alertMessage"
import { handleClearConfirmation, handleSetConfirmationModal } from "../../../../../redux/slices/confirmationModal"
import { errorMessage } from "../../../../../redux/slices/errorMessage"
import { CLEAR_LOADING, handleIsLoading, SET_LOADING } from "../../../../../redux/slices/isLoading"
import { AppDispatch } from "../../../../../redux/store"
import { ServicePaymentsUpdate, ServicePaymentsUpdateData } from "../../../../../utils/payments"
import PageDataLayout from "../layouts/PageDataLayout"
import { paymentStatus } from "./payment.type"
import PaymentTable from "./PaymentTable"

const ViewDashboardPayments = () => {
    const {dataPayment, loadingPayment, errorPayment} = useQueryPayments()
    const [idPayment, setIdPayment] = useState<string>("")
    const [status, setStatus] = useState<paymentStatus>("pending")
    const dispatch = useDispatch<AppDispatch>()
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["mutatePaymentUpdate"],
        mutationFn: (data: ServicePaymentsUpdateData) => ServicePaymentsUpdate(data)
    })

    if(loadingPayment) return <p>Loading...</p>

    if(errorPayment) return <p>Error...</p>

    const handlePayment = (data: ServicePaymentsUpdateData) => {
        dispatch(handleIsLoading({type: SET_LOADING}))
        dispatch(handleClearConfirmation())

        mutate(data, {
            onSuccess: (data) => {
                dispatch(handleIsLoading({type: CLEAR_LOADING}))
                dispatch(handleSetAlert({
                    active: true,
                    message: data.message,
                    transition: true,
                    type: "success"
                }))

                queryClient.invalidateQueries({queryKey: ["queryPaymentGetAll"]})
            },
            onError: (err) => {
                dispatch(handleIsLoading({type: CLEAR_LOADING}))
                dispatch(handleSetAlert({
                    active: true,
                    message: errorMessage(err),
                    transition: true,
                    type: "success"
                }))
            }
        })
    }

    const handleActionPayment = (id: string, message: string, status: paymentStatus) => {
        dispatch(handleSetConfirmationModal({
            active: true,
            message: message,
            transition: true
        }))

        setIdPayment(id)
        setStatus(status)
    }

    const handleCancelConfirmation = () => {
        dispatch(handleClearConfirmation())
    }

    return (
        <PageDataLayout title="Payments">
            <div></div>
            <PaymentTable data={dataPayment.data} handleActionPayment={handleActionPayment} />
            <SConfirmationModal confirm={() => handlePayment({id: idPayment, status: status})} cancel={handleCancelConfirmation} />
        </PageDataLayout>
    )
}

export default ViewDashboardPayments