import { Dispatch } from "@reduxjs/toolkit";
import { detailProduct } from "../../types/type-product";
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../../redux/slices/client/Cart.features";

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
    })
  );
};

interface handleRemoveFromCartProps {
  product: {
    id: string;
  };
  dispatch: Dispatch;
}
export const handleRemoveFromCart = (props: handleRemoveFromCartProps) => {
  const { dispatch, product } = props;
  dispatch(removeFromCart(product));
};

interface increaseOrDecreaseCartProps {
  product: {
    id: string;
    price: number;
  };
  dispatch: Dispatch;
}
export const handleIncreaseQtyCart = (props: increaseOrDecreaseCartProps) => {
  const { dispatch, product } = props;

  dispatch(increaseQty(product));
};

export const handleDecreaseQtyCart = (props: increaseOrDecreaseCartProps) => {
  const { dispatch, product } = props;

  dispatch(decreaseQty(product));
};
