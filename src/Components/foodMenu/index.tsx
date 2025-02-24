import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
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
  const { total } = useReduxFood();
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState<string>();
  const [searchDebounce] = useDebounce(search, 500);
  const { dataProduct, errorProduct, loadingProduct } = useQueryProducts({
    keyword: searchDebounce,
  });

  const handleReadMore = () => {
    if (total) {
      dispatch(handleTotal({ type: CLEAR_TOTAL }));
    } else {
      dispatch(handleTotal({ type: SET_TOTAL, total: 9 }));
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    
    
    setSearch(value);
  };

  return (
    <div className="relative flex flex-col items-center gap-8">
      <div className="flex flex-col items-center justify-center w-full gap-4 mb-8">
        <STitleSection className="text-center">Our Menu</STitleSection>
        <div className="flex items-center w-[40%] relative">
          <IoMdSearch className="absolute text-xl left-2" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            className="w-full px-10 py-1 border rounded-md border-primary/50"
          />
        </div>
        <div className="grid w-[40%] grid-cols-5">
          <ActionFood />
        </div>
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
