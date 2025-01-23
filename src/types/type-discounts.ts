import { product } from "./type-product"

export type statusDiscount = "active" | "expired" | "upcoming"

export interface discount {
    createdAt: string
    discount_percentage: number
    name_discount: string
    end_date: string
    start_date: string
    status: statusDiscount
    updateAt: string
    __v: number
    _id: string
    id_product: product
}