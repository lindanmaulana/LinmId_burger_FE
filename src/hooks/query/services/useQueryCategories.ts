import { useQuery } from "@tanstack/react-query"
import { ServiceCategoriesGetAll } from "../../../utils/services/categories"

const useQueryCategories = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["queryCategorieGetAll"],
        queryFn: () => ServiceCategoriesGetAll()
    })


    return {
        dataCategorie: data,
        loadingCategorie: isLoading,
        errorCategorie: isError
    }
}

export default useQueryCategories