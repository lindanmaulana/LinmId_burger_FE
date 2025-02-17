import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const useReduxCart = () => {
  const { cart, cartProductId } = useSelector(
    (state: RootState) => state.client.FeaturesCart
  );
  return {
    cart,
    cartProductId,
  };
};

export default useReduxCart;
