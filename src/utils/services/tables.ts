import { api, baseURL } from "../axiosInstance"
import { errorService } from "../errors/errorService"

export const ServiceTableGetAll = async () => {
    try {
        const response = await api.get(`${baseURL}/cms/tables`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}