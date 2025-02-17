import { BiAddToQueue } from "react-icons/bi";
import { SwiperSlide } from "swiper/react";
import ButtonAction from "../../../components/button/ButtonAction";
import LayoutContainer from "../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../components/layouts/LayoutSection";
import SSwiper from "../../../components/swiper";
import useQueryProducts from "../../../hooks/query/services/useQueryProducts";
import { baseURLImage } from "../../../utils/axiosInstance";
import { Autoplay, Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import useQueryProductDetail from "../../../hooks/query/services/useQueryProductDetail";
import { detailProduct } from "../../../types/type-product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { addCart } from "../../../redux/slices/client/Cart.features";
import useReduxCart from "../../../hooks/redux/client/useReduxCart";
import { useEffect } from "react";

const PageOrder = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { dataProduct, errorProduct, loadingProduct } = useQueryProducts();
  const { cart, cartProductId } = useReduxCart();

  const { dataDetailProduct, loadingDetailProduct, errorDetailProduct } =
    useQueryProductDetail(id);

  useEffect(() => {
    if (dataDetailProduct?.data) {
      dispatch(
        addCart({
          id: dataDetailProduct?.data._id,
          name: dataDetailProduct?.data.name,
          price: dataDetailProduct?.data.price,
          qty: 1,
          stock: dataDetailProduct?.data.stock,
        })
      );
    }
  }, [dataDetailProduct, dispatch]);

  if (loadingProduct || loadingDetailProduct) return <p>Loading...</p>;

  if (errorProduct || errorDetailProduct)
    return <p>Error loading product...</p>;

  const handleAddCart = (product: detailProduct) => {
    dispatch(
      addCart({
        id: product._id,
        name: product.name,
        price: product.price,
        qty: 1,
        stock: product.stock,
      })
    );
  };
  return (
    <LayoutSection className="">
      <header className="py-10 -mb-20">
        <SSwiper
          slidesPerView={3}
          spaceBetween={10}
          slidesOffsetAfter={10}
          slidesOffsetBefore={10}
          loop={true}
          pagination={{ dynamicBullets: true, clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 1000,
            disabledOnInteraction: false,
          }}
          speed={1000}
          classname="flex gap-10 h-[300px] pointer-events-auto"
        >
          {dataProduct?.data.map((product) => (
            <SwiperSlide
              key={product._id}
              className="w-full h-full p-5 border bg-devGray rounded-2xl border-devWhitePurple"
            >
              <div className="relative flex flex-col items-start justify-between h-full">
                <img
                  src={`${baseURLImage}/${product.id_image.name}`}
                  alt={product.name}
                  className="object-cover m-auto w-60"
                />
                <ButtonAction
                  onClick={() => handleAddCart(product)}
                  className="absolute top-0 right-0 z-[60] flex items-center gap-px text-devGray"
                >
                  <BiAddToQueue /> Add
                </ButtonAction>
              </div>
            </SwiperSlide>
          ))}
        </SSwiper>
      </header>
      <LayoutContainer className="relative z-10 max-w-6xl pb-5">
        <div className="flex gap-6">
          <div className="w-2/3 p-6 bg-white border rounded-3xl border-devWhitePurple">
            <h3>Daftar Pesananmu</h3>
            <div className="flex flex-col gap-2">
              {cart.map((cart) => (
                <div key={cart.id} className="grid grid-cols-4">
                  <p className="col-span-2">{cart.name}</p>
                  <p>{cart.qty}</p>
                  <p>{cart.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/3 gap-5 p-6 h-[300px] bg-white border border-devWhitePurple rounded-3xl">
            <h3 className="font-bold">Your Order Details</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-base">
                <p className="font-medium ">Sub Total</p>
                <p className="font-extrabold ">
                  Rp {dataDetailProduct?.data.price}
                </p>
              </div>
              <div className="flex items-center justify-between text-base">
                <p className="font-medium ">Grand Total</p>
                <p className="text-lg font-extrabold text-green-600">
                  Rp {dataDetailProduct?.data.price}
                </p>
              </div>
            </div>

            <ButtonAction
              disabled={cartProductId.length <= 0}
              className={`${
                cartProductId.length <= 0 ? "!bg-devGray/40" : "!bg-devGray"
              } py-3`}
            >
              Payment
            </ButtonAction>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default PageOrder;
