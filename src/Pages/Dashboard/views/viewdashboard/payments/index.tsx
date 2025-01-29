import useQueryPayments from "../../../../../hooks/query/payments/useQueryPayments"
import PageDataLayout from "../layouts/PageDataLayout"

const ViewDashboardPayments = () => {
    const {dataPayment, loadingPayment, errorPayment} = useQueryPayments()

    if(loadingPayment) return <p>Loading...</p>

    if(errorPayment) return <p>Error...</p>

    return (
        <PageDataLayout>
            Payments
        </PageDataLayout>
    )
}

export default ViewDashboardPayments