import { useQuery } from "@tanstack/react-query";
import { ServiceProductGetOne } from "../../../utils/services/products";

const useQueryProductDetail = (id: string | undefined) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["queryProductDetail"],
    queryFn: () => ServiceProductGetOne(id),
  });

  return {
    dataDetailProduct: data,
    loadingDetailProduct: isLoading,
    errorDetailProduct: isError,
  };
};

export default useQueryProductDetail;
