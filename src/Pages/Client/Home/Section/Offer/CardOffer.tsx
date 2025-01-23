import { PiShoppingCartSimpleFill } from "react-icons/pi";
import ButtonLink from "../../../../../Components/Button/ButtonLink";
import { baseURLImage } from "../../../../../utils/axiosInstance";
import { discount } from "../../../../../types/type-discounts";
export interface CardOfferProps {
  data: discount[];
}
const CardOffer = (props: CardOfferProps) => {
  const { data } = props;
  
  return (
    <>
      {data.slice(0, 2).map((product) => {
      return (
        <div
          key={product._id}
          className="flex items-center gap-3 p-5 text-white rounded-md bg-primary"
        >
          <figure className="h-40 p-3 overflow-hidden border-4 rounded-full w-[168px] border-devOrange group">
            <img
              src={`${baseURLImage}/${product.id_product.id_image.name}`}
              alt={product.id_product.name}
              className="w-full h-full group-hover:scale-125 transition-global"
            />
          </figure>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-3xl font-dancing-script-semibold">
              {product.name_discount}
            </h3>
            <p className="font-dancing-script-semibold">
              <span className="text-4xl">{product.discount_percentage}%</span>{" "}
              off
            </p>
            <ButtonLink
              to={`/order/${product.id_product}`}
              className="flex items-center gap-2 px-8 py-3"
            >
              Order Now <PiShoppingCartSimpleFill className="text-xl" />
            </ButtonLink>
          </div>
        </div>
      )})}
    </>
  );
};

export default CardOffer;
