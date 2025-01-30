import useQueryReservations from "../../../../../hooks/query/reservations/useQueryReservations"
import PageDataLayout from "../layouts/PageDataLayout"
import ReservationTable from "./ReservationTable"

const ViewDashboardReservations = () => {
    const {dataReservation, loadingReservation, errorReservation} = useQueryReservations()

    if(loadingReservation) return <p>Loading... </p>

    if(errorReservation) return <p>Error...</p>
    
    return (    
        <PageDataLayout title="Reservations">
            <div></div>
            <ReservationTable data={dataReservation.data} />
        </PageDataLayout>
            
    )
}

export default ViewDashboardReservations