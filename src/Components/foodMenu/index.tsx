import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import useQueryProducts from "../../hooks/query/products/useQueryProducts";
import {
  CLEAR_TOTAL,
  handleTotal,
  SET_TOTAL,
} from "../../redux/slices/client/HomeFood";
import ActionFood from "./ActionDataFood";
import CardFoodMenu from "./CardFood";
import ButtonAction from "../button/ButtonAction";
import STitleSection from "../title/titleSection";

const SFoodMenu = () => {
  const { total } = useSelector((state: RootState) => state.client.FeaturesHomeFood);
  const dispatch = useDispatch<AppDispatch>();
  const { dataProduct, errorProduct, loadingProduct } = useQueryProducts();

  if (loadingProduct) return <p>Loading...</p>;

  if (errorProduct) return <p>Error...</p>;

  const handleReadMore = () => {
    if (total) {
      dispatch(handleTotal({ type: CLEAR_TOTAL }));
    } else {
      dispatch(handleTotal({ type: SET_TOTAL, total: 9 }));
    }
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <STitleSection className="text-center">Our Menu</STitleSection>
      <div className="grid w-[40%] grid-cols-5 mb-8">
        <ActionFood />
      </div>
      <div className="grid w-full grid-cols-3 mb-6 gap-7">
        <CardFoodMenu data={dataProduct.data} />
      </div>
      <ButtonAction onClick={handleReadMore} className="flex mx-auto">
        Read More
      </ButtonAction>
    </div>
  );
};

export default SFoodMenu;
