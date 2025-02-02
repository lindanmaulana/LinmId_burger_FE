import { useQuery } from "@tanstack/react-query"
import { ServiceReservationsGetAll } from "../../../utils/reservations"

const useQueryReservations = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["queryReservationGetAll"],
        queryFn: () => ServiceReservationsGetAll()
    })
    return {
        dataReservation: data,
        loadingReservation: isLoading,
        errorReservation: isError,
        error
    }
}

export default useQueryReservations