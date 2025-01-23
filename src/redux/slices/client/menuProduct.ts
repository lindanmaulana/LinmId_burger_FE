import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const SET_BURGER = "burger";
export const SET_PIZZA = "pizza";
export const SET_PASTA = "pasta";
export const SET_FRIES = "frenchFries";

export const SET_TOTAL = "setTotal";
export const CLEAR_TOTAL = "clearTotal";

export type categorieProduct =
  | "burger"
  | "pizza"
  | "pasta"
  | "frenchFries"
  | "";

export interface initialStateMenuProducts {
  categorie: categorieProduct;
  idActive: number | string;
  total?: number | null;
}

const initialState: initialStateMenuProducts = {
  categorie: "",
  idActive: 1,
  total: null,
};

const FeaturesMenuProducts = createSlice({
  name: "MenuProducts",
  initialState,
  reducers: {
    handleSetMenutProducts: (
      state,
      action: PayloadAction<initialStateMenuProducts>
    ) => {
      switch (action.payload.categorie) {
        case SET_BURGER:
          state.categorie = SET_BURGER;
          state.idActive = action.payload.idActive;
          break;
        case SET_PIZZA:
          state.categorie = SET_PIZZA;
          state.idActive = action.payload.idActive;
          break;
        case SET_PASTA:
          state.categorie = SET_PASTA;
          state.idActive = action.payload.idActive;
          break;
        case SET_FRIES:
          state.categorie = SET_FRIES;
          state.idActive = action.payload.idActive;
          break;
        default:
          return initialState;
      }
    },

    handleTotal: (
      state,
      action: PayloadAction<{ type: string; total?: number | null }>
    ) => {
      console.log({ total: action.payload.total });
      switch (action.payload.type) {
        case SET_TOTAL:
          state.total = action.payload.total;

          break;
        case CLEAR_TOTAL:
          state.total = null;
          break;
        default:
          return initialState;
      }
    },

    handleClearMenuProduct: () => {
      return initialState;
    },
  },
});

export const { handleClearMenuProduct, handleSetMenutProducts, handleTotal } =
  FeaturesMenuProducts.actions;
export default FeaturesMenuProducts.reducer;
