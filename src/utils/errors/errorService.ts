import { AxiosError } from "axios"

export const errorService = (err: unknown) => {
    if(err instanceof AxiosError && err.message) {
        throw new Error(err.response?.data.msg)
    } else {
        throw new Error("Unexpected error")
    }
}