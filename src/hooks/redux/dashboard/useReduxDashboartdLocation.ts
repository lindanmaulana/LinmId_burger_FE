import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const useReduxDashboartdLocation = () => {
  const { location, active } = useSelector(
    (state: RootState) => state.dashboard.location
  );

  return {
    active,
    location
  };
};

export default useReduxDashboartdLocation;
