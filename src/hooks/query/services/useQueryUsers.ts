import { useQuery } from "@tanstack/react-query";
import { ServiceUsersGetAll } from "../../../utils/services/users";

const useQueryUsers = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["queryUserGetAll"],
    queryFn: () => ServiceUsersGetAll(),
  });
  return {
    dataUser: data,
    loadingUser: isLoading,
    errorUser: isError,
  };
};

export default useQueryUsers;
