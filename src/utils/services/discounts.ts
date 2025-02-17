import { statusDiscount } from "../../types/type-product"
import { api, baseURL, setToken } from "../axiosInstance"
import { errorService } from "../errors/errorService"
import { getDataSignin } from "../helpers"

export const ServiceDiscountsGetAll = async () => {
    try {
        const response = await api.get(`${baseURL}/cms/discounts`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}

export const ServiceDiscountGetOne = async (id: string) => {
    try {
        const response = await api.get(`${baseURL}/cms/discounts/${id}`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}

export interface dataDiscountUpdate {
    name_discount: string
    discount_percentage: number
    status: statusDiscount
    start_date: string
    end_date: string
}

export const ServiceDiscountUpdate = async (id: string, data: dataDiscountUpdate) => {
    const {token} = getDataSignin()
    setToken(token)
    try {
        const response = await api.patch(`${baseURL}/cms/discounts/${id}`, data)

        return response.data
    } catch (err) {
        errorService(err)
    }
}