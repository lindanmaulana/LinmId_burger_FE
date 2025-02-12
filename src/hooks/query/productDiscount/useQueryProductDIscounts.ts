import { useQuery } from "@tanstack/react-query";
import { ServiceDiscountsGetAll } from "../../../utils/discounts";

const useQueryProductDiscounts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["queryGetAllDiscount"],
    queryFn: () => ServiceDiscountsGetAll(),
  });
  return {
    dataProductDiscount: data,
    loadingProductDiscount: isLoading,
    errorProductDiscount: isError,
    error,
  };
};

export default useQueryProductDiscounts;
