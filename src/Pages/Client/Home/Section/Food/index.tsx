import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import {
  CLEAR_TOTAL,
  handleTotal,
  SET_TOTAL,
} from "../../../../../redux/slices/client/HomeFood";

import ButtonAction from "../../../../../components/button/ButtonAction";
import LayoutSection from "../../../../../components/layouts/LayoutSection";
import LayoutContainer from "../../../../../components/layouts/LayoutContainer";
import STitleSection from "../../../../../components/title/titleSection";
import ActionFood from "./ActionDataFood";
import CardFood from "./CardFood";
import useQueryProducts from "../../../../../hooks/query/products/useQueryProducts";

const Food = () => {
  const { total } = useSelector((state: RootState) => state.client.homeFood);
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useQueryProducts();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error...</p>;

  const handleReadMore = () => {
    if (total) {
      dispatch(handleTotal({ type: CLEAR_TOTAL }));
    } else {
      dispatch(handleTotal({ type: SET_TOTAL, total: 9 }));
    }
  };

  return (
    <LayoutSection className="py-10">
      <LayoutContainer className="max-w-6xl ">
        <div className="flex flex-col items-center gap-8">
          <STitleSection className="text-center">Our Menu</STitleSection>
          <div className="grid w-[40%] grid-cols-5 mb-8">
            <ActionFood />
          </div>
          <div className="grid w-full grid-cols-3 gap-7">
            <CardFood data={data.data} />
          </div>
          <ButtonAction onClick={handleReadMore} className="flex mx-auto">
            Read More
          </ButtonAction>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default Food;
