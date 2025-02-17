export interface APIRESPONSE<T> {
    data: T
    error: string | null
    message: string
    total?: number
    status: string
}