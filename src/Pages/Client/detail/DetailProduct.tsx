import { useParams } from "react-router-dom";
import LayoutContainer from "../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../components/layouts/LayoutSection";
import useQueryProductDetail from "../../../hooks/query/services/useQueryProductDetail";
import { baseURLImage } from "../../../utils/axiosInstance";
import { product } from "../../../types/type-product";
import { helperFormatCurrency } from "../../../utils/helpers/formatCurrency";
import ButtonAction from "../../../components/button/ButtonAction";
import { ImageBurger } from "../../../assets/images/burger";

const PageDetailProduct = () => {
  const { id } = useParams();
  const { dataDetailProduct, errorDetailProduct, loadingDetailProduct } =
    useQueryProductDetail(id);

  if (loadingDetailProduct) return <p>Loading...</p>;

  if (errorDetailProduct) return <p>Error...</p>;

  const { description, id_image, name, price, stock } =
    dataDetailProduct.data as product;

  const priceProduct = helperFormatCurrency(price);

  return (
    <LayoutSection className="">
      <div className="h-[320px] relative -mb-20 -z-10">
        <div className="absolute top-0 right-0 block w-full h-full bg-gradient-to-t from-black/70"></div>
        <img
          src={ImageBurger.heroBg}
          alt="linmburger"
          className="object-cover w-full h-full"
        />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          Nikmati kelezatan Tiap Gigitannya
        </p>
      </div>
      <LayoutContainer className="max-w-6xl">
        <div className="flex items-start w-full h-[520px] gap-6">
          <div className="flex flex-col w-2/3 gap-6">
            <figure className="w-full px-6 py-8 bg-white border border-devWhitePurple rounded-3xl">
              <span className="px-3 py-2 text-sm font-medium text-white bg-devGray rounded-3xl">Best Seller</span>
              <img
                src={`${baseURLImage}/${id_image.name}`}
                alt=""
                className="w-1/2 h-full mx-auto"
              />
            </figure>
            <div className="p-6 bg-white border rounded-3xl border-devWhitePurple">
              <h3 className="text-2xl font-bold">{name}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/3 gap-8 p-6 h-[280px] bg-white border border-devWhitePurple rounded-3xl">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold">{priceProduct}</p>
              <p className={`${stock < 10 ? "text-red-500" : "text-primary"}`}>
                Stok: {stock}
              </p>
            </div>
            <div className="flex flex-col gap-2">
                <ButtonAction className=" !text-sm py-3 bg-white border !rounded-3xl border-devGray !text-devGray">
                  Keranjang
                </ButtonAction>
                <ButtonAction className="!rounded-3xl !text-xs border py-3 border-devGray !bg-devGray">
                  Pesan Sekarang
                </ButtonAction>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default PageDetailProduct;
