import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cart {
  id: string;
  name: string;
  price: number;
  stock: number;
  qty: number;
}

interface initialStateCart {
  cart: cart[];
  cartProductId: string[];
}

const initialState: initialStateCart = {
  cart: [],
  cartProductId: [],
};

const FeaturesCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<cart>) => {
      const updateCart = state.cart.map((cart) => {
        return cart.id === action.payload.id
          ? { ...cart, qty: (cart.qty += 1)}
          : cart;
      });

      const updatePrice = updateCart.map((cart) => {
        return cart.id === action.payload.id ? {...cart, price: cart.price *= cart.qty } : cart
      })

      const cartExist = state.cart.some(
        (cart) => cart.id === action.payload.id
      );

      state.cart = cartExist ? updatePrice : [...state.cart, action.payload];

      state.cartProductId = [...state.cartProductId, action.payload.id];
    },
  },
});

export const { addCart } = FeaturesCart.actions;
export default FeaturesCart.reducer;
