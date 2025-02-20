import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { ImageBurger } from "../../../assets/images/burger";
import LayoutContainer from "../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../components/layouts/LayoutSection";
import useReduxCart from "../../../hooks/redux/client/useReduxCart";
import { AppDispatch } from "../../../redux/store";
import { baseURLImage } from "../../../utils/axiosInstance";
import {
  handleDecreaseQtyCart,
  handleIncreaseQtyCart,
  handleRemoveFromCart,
} from "../../../utils/cart";
import { ca } from "date-fns/locale";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
interface dataCart {
  totalAmount: number;
  totalCart: number;
  totalOrder: number;
}
const PageCart = () => {
  const { cart } = useReduxCart();
  const dispatch = useDispatch<AppDispatch>();
  const [dataCart, setDataCart] = useState<dataCart>({
    totalAmount: 0,
    totalCart: 0,
    totalOrder: 0,
  });

  useEffect(() => {
    const countCart = () => {
      const totalAmount = cart.reduce((acc, call) => (acc += call.price), 0);
      const totalOrder = cart.reduce((acc, call) => (acc += call.qty), 0);

      return {
        totalAmount,
        totalCart: cart.length,
        totalOrder,
      };
    };

    const { totalAmount, totalCart, totalOrder } = countCart();

    setDataCart({ totalAmount, totalCart, totalOrder });
  }, [cart]);
  return (
    <LayoutSection className="">
      <div className="relative -mb-20 h-96 -z-10">
        <h2 className="absolute inset-0 z-10 flex items-center justify-center text-4xl font-bold text-white">
          Your Food cart
        </h2>

        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <img
          src={ImageBurger.cartBackground}
          alt="linmburgercart"
          className="object-cover w-full h-full"
        />
      </div>
      <LayoutContainer className="max-w-6xl py-3">
        <div className="flex gap-8">
          <ul className="flex flex-col w-2/3 h-full gap-3 p-6 bg-white border rounded-3xl border-devWhitePurple">
            {cart.length > 0 ? (
              cart.map((cart) => (
                <li
                  key={cart.id}
                  className="relative flex items-center px-4 py-2 shadow-md rounded-xl"
                >
                  <div className="flex flex-col items-center px-4 py-px border rounded border-black/20">
                    <button
                      onClick={() =>
                        handleIncreaseQtyCart({ idProduct: cart.id, dispatch })
                      }
                      className="text-lg"
                    >
                      +
                    </button>
                    <p>{cart.qty}</p>
                    <button
                      onClick={() =>
                        handleDecreaseQtyCart({ idProduct: cart.id, dispatch })
                      }
                      className="text-lg"
                    >
                      -
                    </button>
                  </div>
                  <figure className="h-20 p-4 w-fit">
                    <img
                      src={`${baseURLImage}/${cart.image}`}
                      alt={cart.name}
                      className="w-full h-full "
                    />
                  </figure>
                  <div>
                    <h3>{cart.name}</h3>
                    <p className="text-sm text-devGreen">
                      Rp {cart.price.toLocaleString("id")}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleRemoveFromCart({ idProduct: cart.id, dispatch })
                    }
                    className="absolute text-white bg-red-500 rounded top-3 right-3"
                  >
                    {" "}
                    <IoClose />
                  </button>
                </li>
              ))
            ) : (
              <div className="flex items-center justify-center gap-4 text-red-500">
                <MdOutlineRemoveShoppingCart className="text-xl" />
                <p>Keranjang Kosong</p>
              </div>
            )}
          </ul>
          <div className="flex flex-col justify-between w-1/3 p-6 bg-white border min-h-52 rounded-3xl border-devWhitePurple">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p>Total Harga: </p>
                <p className="text-green-500">
                  Rp {dataCart.totalAmount.toLocaleString("id")}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>Total Food: </p>
                <p className="text-green-500">{dataCart.totalCart}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Total Order: </p>
                <p className="text-green-500">{dataCart.totalOrder}</p>
              </div>
            </div>
            <Link to={"/order"} className="px-4 py-2 text-center bg-green-500 rounded-2xl">
              Go to Order
            </Link>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default PageCart;
