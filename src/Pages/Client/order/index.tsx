import { useMutation } from "@tanstack/react-query";
import { BiAddToQueue } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import ButtonAction from "../../../components/button/ButtonAction";
import SConfirmationModal from "../../../components/confirmationModal";
import LayoutContainer from "../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../components/layouts/LayoutSection";
import SSwiper from "../../../components/swiper";
import useQueryProducts from "../../../hooks/query/services/useQueryProducts";
import useReduxCart from "../../../hooks/redux/client/useReduxCart";
import { handleSetAlert } from "../../../redux/slices/alertMessage";
import {
  handleClearConfirmation,
  handleSetConfirmationModal,
} from "../../../redux/slices/confirmationModal";
import { errorMessage } from "../../../redux/slices/errorMessage";
import {
  CLEAR_LOADING,
  handleIsLoading,
  SET_LOADING,
} from "../../../redux/slices/isLoading";
import { AppDispatch } from "../../../redux/store";
import { baseURLImage } from "../../../utils/axiosInstance";
import {
  handleAddCart,
  handleClearCart,
  handleDecreaseQtyCart,
  handleIncreaseQtyCart,
  handleRemoveFromCart,
} from "../../../utils/cart";
import {
  ServiceOrderCreate,
  ServiceOrderCreateData,
} from "../../../utils/services/orders";

const PageOrder = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { dataProduct, errorProduct, loadingProduct } = useQueryProducts();
  const { cart } = useReduxCart();

  const { mutate } = useMutation({
    mutationKey: ["mutationOrderCreate"],
    mutationFn: (data: ServiceOrderCreateData) => ServiceOrderCreate(data),
  });

  if (loadingProduct) return <p>Loading...</p>;

  if (errorProduct) return <p>Error loading product...</p>;

  const handleOrder = () => {
    dispatch(
      handleSetConfirmationModal({
        active: true,
        message: "Apakah anda yakin ingin melakukan pemesanan ?",
        transition: true,
      })
    );
  };

  const handleConfirmationOrder = () => {
    dispatch(handleClearConfirmation());
    const dataOrder = () => {
      const orders = cart.map((cart) => {
        return {
          id_product: cart.id,
          quantity: cart.qty,
        };
      });

      return {
        order_items: orders,
      };
    };

    dispatch(handleIsLoading({ type: SET_LOADING }));
    dispatch(
      handleSetAlert({
        active: true,
        message: "Loading please wait...",
        transition: true,
        type: "error",
      })
    );
    mutate(dataOrder(), {
      onSuccess: (data) => {
        dispatch(handleClearConfirmation());
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
        dispatch(
          handleSetAlert({
            active: true,
            message: data.message,
            transition: true,
            type: "success",
          })
        );

        handleClearCart({dispatch})

        navigate("/my-order");
      },
      onError: (err) => {
        dispatch(handleClearConfirmation());
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
        dispatch(
          handleSetAlert({
            active: true,
            message: errorMessage(err),
            transition: true,
            type: "error",
          })
        );
      },
    });
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
            delay: 2000,
            disabledOnInteraction: false,
          }}
          speed={2000}
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
                  onClick={() => handleAddCart({ dispatch, product })}
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
            <h3 className="mb-3">Daftar Pesananmu</h3>
            <table className="w-full">
              <thead className="overflow-hidden text-left">
                <th className="py-2">Pesanan</th>
                <th className="py-2">Jumlah</th>
                <th className="py-2">Total Harga</th>
                <th className="py-2"></th>
              </thead>
              <tbody>
                {cart.map((cart) => (
                  <tr key={cart.id} className="">
                    <td className="py-2">{cart.name}</td>
                    <td className="py-2">{cart.qty}</td>
                    <td className="py-2">{cart.price}</td>
                    <td className="flex items-center gap-2 py-2 text-xl">
                      <button
                        onClick={() =>
                          handleDecreaseQtyCart({
                            dispatch,
                            idProduct: cart.id,
                          })
                        }
                        className="px-2 py-px text-white bg-red-500 border rounded"
                      >
                        <LuMinus />
                      </button>
                      <button
                        onClick={() =>
                          handleRemoveFromCart({
                            dispatch,
                            idProduct: cart.id,
                          })
                        }
                        className="p-px px-2 py-px text-white bg-red-500 border rounded"
                      >
                        <IoClose />
                      </button>
                      <button
                        onClick={() =>
                          handleIncreaseQtyCart({
                            dispatch,
                            idProduct: cart.id,
                          })
                        }
                        className="p-px px-2 py-px text-white bg-blue-500 border rounded"
                      >
                        <LuPlus />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col justify-between w-1/3 gap-5 p-6 h-[300px] bg-white border border-devWhitePurple rounded-3xl">
            <h3 className="font-bold">Your Order Details</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-base">
                <p className="font-medium ">Sub Total Order</p>
                <p className="font-extrabold ">
                  {cart
                    .map((product) => product.qty)
                    .reduce((acc, call) => (acc += call), 0)}
                </p>
              </div>
              <div className="flex items-center justify-between text-base">
                <p className="font-medium ">Grand Total</p>
                <p className="text-lg font-extrabold text-green-600">
                  Rp{" "}
                  {cart
                    .map((product) => product.price)
                    .reduce((acc, call) => (acc += call), 0)
                    .toLocaleString("id")}
                </p>
              </div>
            </div>

            <ButtonAction
              onClick={handleOrder}
              disabled={cart.length <= 0}
              className={`${
                cart.length <= 0 ? "!bg-devGray/40" : "!bg-devGray"
              } py-3`}
            >
              Konfirmasi Pesanan
            </ButtonAction>
          </div>
        </div>
      </LayoutContainer>
      <SConfirmationModal
        cancel={() => dispatch(handleClearConfirmation())}
        confirm={() => handleConfirmationOrder()}
      />
    </LayoutSection>
  );
};

export default PageOrder;
