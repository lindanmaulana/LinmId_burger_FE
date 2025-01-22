import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const SET_PRIVACY = "privacy/true";
export const CLEAR_PRIVACY = "privacy/false";
export const SET_AGREEMENT = "agreement/true";
export const CLEAR_AGREEMENT = "agreement/false";

export interface initialStatePrivacyPolicy {
  active: boolean;
  agreement: boolean;
}

const initialState: initialStatePrivacyPolicy = {
  active: false,
  agreement: false,
};

const FeaturesPrivacyPolicy = createSlice({
  name: "PrivacyPolicy",
  initialState,
  reducers: {
    handlePrivacy: (
      state,
      action: PayloadAction<{ type: string }>
    ) => {
      switch (action.payload.type) {
        case "privacy/true":
          state.active = true;
          break;
        case "privacy/false":
          state.active = false;
      }
    },

    handleAgreement: (
      state,
      action: PayloadAction<{ type: string }>
    ) => {
      switch (action.payload.type) {
        case "agreement/true":
          state.agreement = true;
          break;
        case "agreement/false":
          state.agreement = false;
          break;
        default:
          return initialState
      }
    },
  },
});

export const {handlePrivacy, handleAgreement} = FeaturesPrivacyPolicy.actions

export default FeaturesPrivacyPolicy.reducer;
