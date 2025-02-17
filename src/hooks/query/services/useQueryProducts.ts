import { useQuery } from "@tanstack/react-query";
import { APIRESPONSE } from "../../../types/type-API-RESPONSE";
import { detailProduct } from "../../../types/type-product";
import { ServiceProductsGetAll } from "../../../utils/services/products";

const useQueryProducts = () => {
  const { data, isLoading, isError } = useQuery<APIRESPONSE<detailProduct[]>>({
    queryKey: ["queryProductGetAll"],
    queryFn: () => ServiceProductsGetAll() as Promise<APIRESPONSE<detailProduct[]>>,
  });
  return {
    dataProduct: data,
    loadingProduct: isLoading,
    errorProduct: isError,
  };
};

export default useQueryProducts;
