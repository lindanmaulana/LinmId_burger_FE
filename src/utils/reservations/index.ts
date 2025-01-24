import { getDataSignin } from ".."
import { api, baseURL, setToken } from "../axiosInstance"
import { errorService } from "../errors/errorService"

export interface reservationsCreate {
    id_table: string
    reservation_date: Date
    reservation_time: string
    guest_count: number | string
}

export const ServiceReservationsCreate = async (data: reservationsCreate) => {
    const {token} = getDataSignin()
    setToken(token)
    try {
        const response = await api.post(`${baseURL}/reservations`, data)

        return response.data
    } catch (err) {
        errorService(err)
    }
}