import useQueryPayments from "../../../../../hooks/query/payments/useQueryPayments"
import PageDataLayout from "../layouts/PageDataLayout"
import PaymentTable from "./PaymentTable"

const ViewDashboardPayments = () => {
    const {dataPayment, loadingPayment, errorPayment} = useQueryPayments()

    if(loadingPayment) return <p>Loading...</p>

    if(errorPayment) return <p>Error...</p>
    console.log(dataPayment)
    return (
        <PageDataLayout title="Payments">
            <div></div>
            <PaymentTable data={dataPayment.data} />
        </PageDataLayout>
    )
}

export default ViewDashboardPayments