import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { foodCategorie } from "../../redux/slices/client/HomeFood";
import { RootState } from "../../redux/store";
import { detailProduct } from "../../types/type-product";
import { baseURLImage } from "../../utils/axiosInstance";
import ButtonAction from "../button/ButtonAction";

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
    (state: RootState) => state.client.homeFood
  );

  const dataFilter = handleFilterData({ categorie, data, total });

  return (
    <>
      {dataFilter.map((menu) => (
        <Link
          to={`/product/detail/${menu._id}`}
          key={menu._id}
          className="flex flex-col justify-between text-white bg-primary h-[440px] rounded-2xl overflow-hidden"
        >
          <figure className="flex items-center justify-center group w-full h-[55%] py-10  rounded-bl-[50px] bg-devWhiteGrey">
            <img
              src={`${baseURLImage}/${menu.id_image.name}`}
              alt="example"
              className="w-[50%] group-hover:scale-125 transition-global"
            />
          </figure>
          <div className="p-4 h-[45%] flex flex-col justify-center gap-2">
            <h3>{menu.name}</h3>
            <p className="mb-3 line-clamp-3">{menu.description}</p>
            <div className="flex items-center justify-between">
              <p>{menu.price}</p>
              <ButtonAction className="!p-3 rounded-full ">
                <PiShoppingCartSimpleFill className="text-xl" />
              </ButtonAction>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CardFoodMenu;
