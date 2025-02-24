import { useQuery } from "@tanstack/react-query";
import { APIRESPONSE } from "../../../types/type-API-RESPONSE";
import { detailProduct } from "../../../types/type-product";
import { ServiceProductsGetAll } from "../../../utils/services/products";

interface useQueryProductsParams {
  keyword?: string
}
const useQueryProducts = (params: useQueryProductsParams) => {
  const { data, isLoading, isError, refetch } = useQuery<APIRESPONSE<detailProduct[]>>({
    queryKey: ["queryProductGetAll", params.keyword],
    queryFn: () => ServiceProductsGetAll({keyword: params.keyword}) as Promise<APIRESPONSE<detailProduct[]>>,
  });
  return {
    dataProduct: data,
    loadingProduct: isLoading,
    errorProduct: isError,
    refetchProduct: refetch
  };
};

export default useQueryProducts;
