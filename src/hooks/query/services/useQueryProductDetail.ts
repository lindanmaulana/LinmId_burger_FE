import { useQuery } from "@tanstack/react-query";
import { APIRESPONSE } from "../../../types/type-API-RESPONSE";
import { detailProduct } from "../../../types/type-product";
import { ServiceProductGetOne } from "../../../utils/services/products";

const useQueryProductDetail = (id: string | undefined) => {
  const { data, isLoading, isError } = useQuery<APIRESPONSE<detailProduct>>({
    queryKey: ["queryProductDetail"],
    queryFn: () => ServiceProductGetOne(id) as Promise<APIRESPONSE<detailProduct>>,
  });

  return {
    dataDetailProduct: data,
    loadingDetailProduct: isLoading,
    errorDetailProduct: isError,
  };
};

export default useQueryProductDetail;
