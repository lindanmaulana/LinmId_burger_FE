import { useQuery } from '@tanstack/react-query'
import { ServiceUserDetailGetAll } from '../../../utils/users'

const useQueryUserDetail = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["queryUserDetailGetAll"],
        queryFn: () => ServiceUserDetailGetAll()
    })
    
  return {
    dataUserDetail: data,
    loadingUserDetail: isLoading,
    errorUserDetail: isError,
    error
  }
}

export default useQueryUserDetail
