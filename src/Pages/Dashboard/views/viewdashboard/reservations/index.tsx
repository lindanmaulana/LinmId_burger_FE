import useQueryReservations from "../../../../../hooks/query/reservations/useQueryReservations"
import PageDataLayout from "../layouts/PageDataLayout"

const ViewDashboardReservations = () => {
    const {dataReservation, loadingReservation, errorReservation} = useQueryReservations()

    if(loadingReservation) return <p>Loading... </p>

    if(errorReservation) return <p>Error...</p>

    return (    
        <PageDataLayout>
            Reservations
        </PageDataLayout>
            
    )
}

export default ViewDashboardReservations