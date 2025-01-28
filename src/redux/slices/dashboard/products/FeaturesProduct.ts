import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { detailProduct } from "../../../../types/type-product";

interface initialStateProduct {
  data: detailProduct[];
}

const initialState: initialStateProduct | { data: [] } = {
  data: [],
};

const FeaturesProduct = createSlice({
  name: "Product",
  initialState,
  reducers: {
    handleSetProduct: (state, action: PayloadAction<detailProduct[]>) => {
      if (action.payload) {
        state.data = action.payload;
      }
    },
  },
});

export const { handleSetProduct } = FeaturesProduct.actions;
export default FeaturesProduct.reducer;
