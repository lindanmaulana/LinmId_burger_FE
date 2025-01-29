import { getDataSignin } from ".."
import { api, baseURL, setToken } from "../axiosInstance"
import { errorService } from "../errors/errorService"

const {token} = getDataSignin()

export const ServiceOrdersGetAll = async () => {
    setToken(token)
    try {
        const response = await api.get(`${baseURL}/orders`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}