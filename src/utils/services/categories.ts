import { api, baseURL } from "../axiosInstance"
import { errorService } from "../errors/errorService"

export const ServiceCategoriesGetAll = async () => {
    try {
        const response = await api.get(`${baseURL}/cms/categories`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}