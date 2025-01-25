import { useParams } from "react-router-dom";
import LayoutContainer from "../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../components/layouts/LayoutSection";
import useQueryProductDetail from "../../../hooks/query/products/useQueryProductDetail";
import { baseURLImage } from "../../../utils/axiosInstance";
import { product } from "../../../types/type-product";
import { ImageBurger } from "../../../assets/images/burger";
import { helperFormatCurrency } from "../../../utils/helpers/formatCurrency";
import ButtonLink from "../../../components/button/ButtonLink";
import ButtonAction from "../../../components/button/ButtonAction";

const PageDetailProduct = () => {
  const { id } = useParams();
  const { dataDetailProduct, errorDetailProduct, loadingDetailProduct } =
    useQueryProductDetail(id);

  if (loadingDetailProduct) return <p>Loading...</p>;

  if (errorDetailProduct) return <p>Error...</p>;

  const { _id, description, id_categorie, id_image, name, price, stock } =
    dataDetailProduct.data as product;

  const priceProduct = helperFormatCurrency(price);

  return (
    <LayoutSection className="">
      <LayoutContainer className="h-screen max-w-6xl">
        <div className="flex items-center justify-center w-full h-full">
          <figure className="w-[50%]">
            <img
              src={`${baseURLImage}/${id_image.name}`}
              alt=""
              className="w-[70%] h-full"
            />
          </figure>
          <div className="w-[50%] flex flex-col gap-12">
            <div className="flex flex-col gap-2 border-b-2 border-primary max-w-[80%]">
              <h4 className="text-4xl tracking-widest">{name}</h4>
              <p className="text-lg">Harga spesial: {priceProduct}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p>{description}</p>
              <div className="flex items-center gap-3">
                <ButtonAction className="!rounded !text-xs bg-white border-2 border-devOrange !text-devOrange">Keranjang</ButtonAction>
                <ButtonAction className="!rounded !text-xs border-2 border-devOrange">Pesan Sekarang</ButtonAction>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default PageDetailProduct;
