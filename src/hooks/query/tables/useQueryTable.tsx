import { useQuery } from "@tanstack/react-query"
import { ServiceTableGetAll } from "../../../utils/tables"

const useQueryTable = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["queryTableGetAll"],
        queryFn: () => ServiceTableGetAll()
    })

  return {
    dataTable: data,
    loadingTable: isLoading, 
    errorTable: isError
  }
}

export default useQueryTable
