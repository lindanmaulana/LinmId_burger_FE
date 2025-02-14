import { api, baseURL } from "../axiosInstance"
import { errorService } from "../errors/errorService"

export const ServiceDiscountsGetAll = async () => {
    try {
        const response = await api.get(`${baseURL}/cms/discounts`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}