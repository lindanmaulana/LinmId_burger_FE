import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useReduxLoading = () => {
  const { loading } = useSelector((state: RootState) => state.isLoading);
  
  return {
    loading,
  };
};

export default useReduxLoading;
