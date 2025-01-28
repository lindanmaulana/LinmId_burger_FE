import { useQuery } from "@tanstack/react-query";
import { ServiceProductsGetAll } from "../../../utils/products";

const useQueryProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["queryProductsGetAll"],
    queryFn: () => ServiceProductsGetAll(),
  });
  return {
    dataProducts: data,
    loadingProducts: isLoading,
    errorProducts: isError,
  };
};

export default useQueryProducts;
