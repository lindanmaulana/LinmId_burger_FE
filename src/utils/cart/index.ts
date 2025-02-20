import { Dispatch } from "@reduxjs/toolkit";
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../../redux/slices/client/Cart.features";
import { detailProduct } from "../../types/type-product";

interface handleCartProps {
  product: detailProduct;
  dispatch: Dispatch;
}
export const handleAddCart = (props: handleCartProps) => {
  const { dispatch, product } = props;
  dispatch(
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      qty: 1,
      stock: product.stock,
      image: product.id_image.name
    })
  );
};

interface handleRemoveFromCartProps {
  idProduct: string
  dispatch: Dispatch;
}
export const handleRemoveFromCart = (props: handleRemoveFromCartProps) => {
  const { dispatch, idProduct } = props;
  dispatch(removeFromCart({id: idProduct}));
};

interface increaseOrDecreaseCartProps {
  idProduct: string
  dispatch: Dispatch;
}
export const handleIncreaseQtyCart = (props: increaseOrDecreaseCartProps) => {
  const { dispatch, idProduct } = props;

  dispatch(increaseQty({id: idProduct}));
};

export const handleDecreaseQtyCart = (props: increaseOrDecreaseCartProps) => {
  const { dispatch, idProduct } = props;

  dispatch(decreaseQty({id: idProduct}));
};
