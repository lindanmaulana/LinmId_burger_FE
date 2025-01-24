import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import ButtonLink from "../../../../../components/button/ButtonLink";
import { RootState } from "../../../../../redux/store";
import { detailProduct } from "../../../../../types/type-product";
import { baseURLImage } from "../../../../../utils/axiosInstance";
import { foodCategorie } from "../../../../../redux/slices/client/HomeFood";

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

const CardFood = (props: CardFoodProps) => {
  const { data } = props;
  const { categorie, total } = useSelector(
    (state: RootState) => state.client.homeFood
  );

  const dataFilter = handleFilterData({ categorie, data, total });

  return (
    <>
      {dataFilter.map((menu) => (
        <div
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
              <ButtonLink to="" className="!p-3 rounded-full ">
                <PiShoppingCartSimpleFill className="text-xl" />
              </ButtonLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardFood;
