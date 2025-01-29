import { useQuery } from '@tanstack/react-query'
import { ServiceOrdersGetAll } from '../../../utils/orders'

const useQueryOrders = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["queryOrderGetAll"],
        queryFn: () => ServiceOrdersGetAll()
    })
  return {  
    dataOrder: data,
    loadingOrder: isLoading,
    errorOrder: isError
  }
}

export default useQueryOrders
