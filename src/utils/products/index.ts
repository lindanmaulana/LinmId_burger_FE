import { api, baseURL } from "../axiosInstance"
import { errorService } from "../errors/errorService"

export const ServiceProductsGetAll = async () => {
    try {
        const response = await api.get(`${baseURL}/cms/products`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}