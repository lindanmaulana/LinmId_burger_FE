import { useDispatch } from "react-redux";
import { ImageBurger } from "../../assets/images/burger";
import useQueryProducts from "../../hooks/query/services/useQueryProducts";
import useReduxFood from "../../hooks/redux/client/useReduxFood";
import {
  CLEAR_TOTAL,
  handleTotal,
  SET_TOTAL,
} from "../../redux/slices/client/HomeFood";
import { AppDispatch } from "../../redux/store";
import ButtonAction from "../button/ButtonAction";
import STitleSection from "../title/titleSection";
import ActionFood from "./ActionDataFood";
import CardFoodMenu from "./CardFood";
import SkeletonFood from "./SkeletonFood";

const SFoodMenu = () => {
  const { total } = useReduxFood()
  const dispatch = useDispatch<AppDispatch>();
  const { dataProduct, errorProduct, loadingProduct } = useQueryProducts();

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
        {loadingProduct && (
          <>
            <SkeletonFood />
            <SkeletonFood />
            <SkeletonFood />
          </>
        )}

        {errorProduct && (
          <div className="col-span-3 text-center">
            <p className="flex items-center justify-center gap-1 font-semibold">
              <img src={ImageBurger.error404} alt="404" />
            </p>
          </div>
        )}

        {dataProduct && <CardFoodMenu data={dataProduct.data} />}
      </div>
      <ButtonAction onClick={handleReadMore} className="flex mx-auto">
        Read More
      </ButtonAction>
    </div>
  );
};

export default SFoodMenu;
