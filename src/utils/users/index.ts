import { getDataSignin } from ".."
import { api, baseURL, setToken } from "../axiosInstance"
import { errorService } from "../errors/errorService"

export const ServiceUsersGetAll = async () => {
    const {token} = getDataSignin()
    setToken(token)
    
    try {
        const response = await api.get(`${baseURL}/users`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}