import { useQuery } from "@tanstack/react-query";
import { ServiceReviewsGetAll } from "../../../utils/reviews";

export const useQueryReviews = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["queryReviewsGetAll"],
    queryFn: () => ServiceReviewsGetAll(),
  });

  return {
    dataReviews: data,
    loadingReviews: isLoading,
    errorReviews: isError,
  };
};
