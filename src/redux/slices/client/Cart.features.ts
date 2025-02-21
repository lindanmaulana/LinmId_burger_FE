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
}

const localCart = localStorage.getItem("cart");

const setInitialState = () => {
  try {
    const cart = localCart ? JSON.parse(localCart) : [];

    return {
      cart,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    }

    localStorage.removeItem("cart");
    return {
      cart: [],
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

      if (cartExist ) {
        if (cartExist.stock > cartExist.qty) {
          cartExist.qty += action.payload.qty;
          cartExist.price += action.payload.price;

        }
      } else {
        state.cart = [...state.cart, action.payload];
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((cart) => cart.id !== action.payload.id);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increaseQty: (state, action: PayloadAction<{ id: string }>) => {
      const existFromCart = state.cart.find(
        (cart) => cart.id === action.payload.id
      );

      if (existFromCart) {
        if (existFromCart.stock > existFromCart.qty) {
          existFromCart.qty++;
          existFromCart.price = existFromCart.qty * (existFromCart.price / (existFromCart.qty - 1))
      
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decreaseQty: (state, action: PayloadAction<{ id: string}>) => {
      const existFromCart = state.cart.find(
        (cart) => cart.id === action.payload.id
      );

      if (existFromCart ) {
        if (existFromCart.qty > 1) {
          existFromCart.qty--;
          existFromCart.price = existFromCart.qty * (existFromCart.price / (existFromCart.qty + 1))

        } else {
          state.cart = state.cart.filter(
            (cart) => cart.id !== action.payload.id
          );
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearCart: () => {
      return initialState
    }
  },
});

export const { addToCart, removeFromCart, decreaseQty, increaseQty, clearCart } = FeaturesCart.actions;
export default FeaturesCart.reducer;