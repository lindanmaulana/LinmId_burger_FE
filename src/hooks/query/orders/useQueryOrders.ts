import { useQuery } from '@tanstack/react-query'
import { ServiceOrdersGetAll } from '../../../utils/orders'

const useQueryOrders = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["queryOrderGetAll"],
        queryFn: () => ServiceOrdersGetAll()
    })
  return {  
    dataOrder: data,
    loadingOrder: isLoading,
    errorOrder: isError,
    error: error
  }
}

export default useQueryOrders
