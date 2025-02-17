import { useQuery } from '@tanstack/react-query'
import { APIRESPONSE } from '../../../types/type-API-RESPONSE'
import { ServiceDiscountGetOne } from '../../../utils/services/discounts'

const useQueryDiscountGetOne = <T>(id: string) => {
    const {data, isLoading, isError, error} = useQuery<APIRESPONSE<T>>({
        queryKey: ["queryDiscountGetOne"],
        queryFn: () => ServiceDiscountGetOne(id) as Promise<APIRESPONSE<T>>
    })

  return {
    dataDiscountOne: data?.data,
    loadingDiscountOne: isLoading,
    errorDiscountOne: isError,
    error: error
  }
}

export default useQueryDiscountGetOne