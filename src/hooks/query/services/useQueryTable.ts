import { useQuery } from "@tanstack/react-query"
import { ServiceTableGetAll } from "../../../utils/services/tables"

const useQueryTable = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["queryTableGetAll"],
        queryFn: () => ServiceTableGetAll()
    })

  return {
    dataTable: data,
    loadingTable: isLoading, 
    errorTable: isError,
    error
  }
}

export default useQueryTable
