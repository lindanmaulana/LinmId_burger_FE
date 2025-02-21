import { api, baseURL, setToken } from "../axiosInstance"
import { errorService } from "../errors/errorService"
import { getDataSignin } from "../helpers"

export interface ServiceMidtransPaymentParams {
    id_order: string
    total_price: number
}

export const ServiceMidtransPayment = async (params: ServiceMidtransPaymentParams) => {
    const {token} = getDataSignin()

    setToken(token)
    try {
        const response = await api.post(`${baseURL}/midtrans-payment`, params)

        return response.data
    } catch (err) {
        errorService(err)
    }
}