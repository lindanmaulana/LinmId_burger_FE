import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { foodCategorie } from "../../redux/slices/client/HomeFood";
import { AppDispatch, RootState } from "../../redux/store";
import { detailProduct } from "../../types/type-product";
import { baseURLImage } from "../../utils/axiosInstance";
import { handleAddCart } from "../../utils/cart";
import ButtonAction from "../button/ButtonAction";
import { handleSetAlert } from "../../redux/slices/alertMessage";

export interface CardFoodProps {
  data: detailProduct[];
}

interface filterDataProps {
  data: detailProduct[];
  total?: number | null;
  categorie: foodCategorie;
}

const handleFilterData = (props: filterDataProps) => {
  const { categorie, data, total } = props;
  if (categorie !== "") {
    const limitData = data.filter(
      (menu) => menu.id_categorie.name === categorie
    );

    return total ? limitData.splice(0, total) : limitData;
  } else {
    return total ? data.slice(0, total) : data;
  }
};

const CardFoodMenu = (props: CardFoodProps) => {
  const { data } = props;
  const { categorie, total } = useSelector(
    (state: RootState) => state.client.FeaturesHomeFood
  );
  const dispatch = useDispatch<AppDispatch>();

  const dataFilter = handleFilterData({ categorie, data, total });

  const handleAddToCart = (product: detailProduct) => {
    dispatch(handleSetAlert({
      active: true,
      message: "Item di tambahkan ke keranjang",
      transition: true,
      type: "success"
    }))
    handleAddCart({ dispatch, product });
  };

  return (
    <>
      {dataFilter.map((menu) => (
        <div
          key={menu._id}
          className="flex flex-col justify-between text-white bg-primary h-[440px] rounded-2xl overflow-hidden"
        >
          <Link
            to={`/product/detail/${menu._id}`}
            className="flex relative items-center justify-center group w-full h-[55%] py-10  rounded-bl-[50px] bg-devWhiteGrey"
          >
            <span className="absolute px-2 py-1 text-sm rounded-xl top-3 bg-devGray left-3">
              Best Seller
            </span>
            <img
              src={`${baseURLImage}/${menu.id_image.name}`}
              alt="example"
              className="w-[50%] group-hover:scale-125 transition-global"
            />
          </Link>
          <div className="p-4 h-[45%] flex flex-col justify-center gap-2">
            <h3 className="text-xl">{menu.name}</h3>
            <p className="mb-3 line-clamp-3">{menu.description}</p>
            <div className="flex items-center justify-between">
              <p>{menu.price}</p>
              <ButtonAction
                onClick={() => handleAddToCart(menu)}
                className="!p-3 rounded-full "
              >
                <PiShoppingCartSimpleFill className="text-xl" />
              </ButtonAction>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardFoodMenu;
