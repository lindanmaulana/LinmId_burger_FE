import { useQuery } from "@tanstack/react-query";
import { ServiceProductsGetAll } from "../../../utils/services/products";

const useQueryProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["queryProductGetAll"],
    queryFn: () => ServiceProductsGetAll(),
  });
  return {
    dataProduct: data,
    loadingProduct: isLoading,
    errorProduct: isError,
  };
};

export default useQueryProducts;
