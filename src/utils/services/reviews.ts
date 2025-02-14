import { api, baseURL } from "../axiosInstance"
import { errorService } from "../errors/errorService"

export const ServiceReviewsGetAll = async () => {
    try {
        const response = await api.get(`${baseURL}/reviews`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}