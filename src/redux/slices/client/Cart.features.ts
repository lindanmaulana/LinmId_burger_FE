import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface cart {
  id: string;
  name: string;
  price: number;
  stock: number;
  qty: number;
  image: string
}

interface carProduct {
  id_product: string;
  quantity: number;
}

interface initialStateCart {
  cart: cart[];
  cartProductId: carProduct[];
}

const localCart = localStorage.getItem("cart");
const localCartProduct = localStorage.getItem("cartProductId");

const setInitialState = () => {
  try {
    const cart = localCart ? JSON.parse(localCart) : [];
    const cartProduct = localCartProduct ? JSON.parse(localCartProduct) : [];

    return {
      cart,
      cartProductId: cartProduct,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    }

    localStorage.removeItem("cart");
    localStorage.removeItem("cartProductId");
    return {
      cart: [],
      cartProductId: [],
    };
  }
};

const initialState: initialStateCart = setInitialState();

const FeaturesCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cart>) => {
      const cartExist = state.cart.find(
        (cart) => cart.id === action.payload.id
      );

      const cartProducExist = state.cartProductId.find(
        (cart) => cart.id_product === action.payload.id
      );

      if (cartExist && cartProducExist) {
        if (cartExist.stock > cartExist.qty) {
          cartExist.qty += action.payload.qty;
          cartExist.price += action.payload.price;

          cartProducExist.quantity++;
        }
      } else {
        state.cart = [...state.cart, action.payload];
        state.cartProductId = [
          ...state.cartProductId,
          { id_product: action.payload.id, quantity: action.payload.qty },
        ];
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem(
        "cartProductId",
        JSON.stringify(state.cartProductId)
      );
    },

    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((cart) => cart.id !== action.payload.id);
      state.cartProductId = state.cartProductId.filter(
        (cart) => cart.id_product !== action.payload.id
      );

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem(
        "cartProductId",
        JSON.stringify(state.cartProductId)
      );
    },

    increaseQty: (state, action: PayloadAction<{ id: string }>) => {
      const existFromCart = state.cart.find(
        (cart) => cart.id === action.payload.id
      );
      const existFromCartProduct = state.cartProductId.find(
        (cart) => cart.id_product === action.payload.id
      );

      if (existFromCart && existFromCartProduct) {
        if (existFromCart.stock > existFromCart.qty) {
          existFromCart.qty++;
          existFromCart.price = existFromCart.qty * (existFromCart.price / (existFromCart.qty - 1))
          existFromCartProduct.quantity++;
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem(
        "cartProductId",
        JSON.stringify(state.cartProductId)
      );
    },

    decreaseQty: (state, action: PayloadAction<{ id: string}>) => {
      const existFromCart = state.cart.find(
        (cart) => cart.id === action.payload.id
      );
      const existFromCartProduct = state.cartProductId.find(
        (cart) => cart.id_product === action.payload.id
      );

      if (existFromCart && existFromCartProduct) {
        if (existFromCart.qty > 1) {
          existFromCart.qty--;
          existFromCart.price = existFromCart.qty * (existFromCart.price / (existFromCart.qty + 1))

          existFromCartProduct.quantity--;
        } else {
          state.cart = state.cart.filter(
            (cart) => cart.id !== action.payload.id
          );
          state.cartProductId = state.cartProductId.filter(
            (cart) => cart.id_product !== action.payload.id
          );
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem(
        "cartProductId",
        JSON.stringify(state.cartProductId)
      );
    },
  },
});

export const { addToCart, removeFromCart, decreaseQty, increaseQty } = FeaturesCart.actions;
export default FeaturesCart.reducer;