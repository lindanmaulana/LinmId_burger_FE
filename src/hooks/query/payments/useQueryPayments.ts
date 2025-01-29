import { useQuery } from '@tanstack/react-query'
import { ServicePaymentsGetAll } from '../../../utils/payments'

const useQueryPayments = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["queryPaymentGetAll"],
        queryFn: () => ServicePaymentsGetAll()
    })

  return {
    dataPayment: data,
    loadingPayment: isLoading,
    errorPayment: isError
  }
}

export default useQueryPayments
