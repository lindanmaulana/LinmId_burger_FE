import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cart {
  id: string;
  name: string;
  price: number;
  stock: number;
  qty: number;
}

interface carProduct {
  id_product: string
  quantity: number
}

interface initialStateCart {
  cart: cart[];
  cartProductId: carProduct[];
}

const initialState: initialStateCart = {
  cart: [],
  cartProductId: [],
};

const FeaturesCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cart>) => {
      const cartExist = state.cart.find(
        (cart) => cart.id === action.payload.id
      );

      const cartProducExist = state.cartProductId.find(cart => cart.id_product === action.payload.id)


      if(cartExist && cartProducExist) {
        cartExist.qty += action.payload.qty
        cartExist.price += action.payload.price

        cartProducExist.quantity++
      } else {
        state.cart = [...state.cart, action.payload]
        state.cartProductId = [...state.cartProductId, {id_product: action.payload.id, quantity: action.payload.qty}]
      }

    },

    removeFromCart: (state, action:PayloadAction<{id: string}>) => {
      state.cart = state.cart.filter(cart => cart.id !== action.payload.id)
      state.cartProductId = state.cartProductId.filter(cart => cart !== action.payload.id)
    },

    increaseQty: (state, action: PayloadAction<{id: string}>) => {
      const existFromCart = state.cart.find(cart => cart.id === action.payload.id)

      if(existFromCart) {
        existFromCart.qty++
      }

      state.cartProductId = [...state.cartProductId, action.payload.id]
    },

    decreaseQty: (state, action: PayloadAction<{id: string}>) => {
      const existFromCart = state.cart.find(cart => cart.id === action.payload.id)

      if(existFromCart) {
        existFromCart.qty--
      }


    }
  },
});

export const { addToCart, removeFromCart } = FeaturesCart.actions;
export default FeaturesCart.reducer;
