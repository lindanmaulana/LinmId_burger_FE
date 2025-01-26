import { createSlice } from "@reduxjs/toolkit";

export interface initialStateHeader {
  sidebar: boolean;
  profile: {
    active: boolean;
  };
}

const initialState: initialStateHeader = {
  sidebar: false,
  profile: {
    active: false,
  },
};

const FeaturesHeaderDashboard = createSlice({
  name: "headerDashboard",
  initialState,
  reducers: {
    handleProfile: (state) => {
      state.profile.active = !state.profile.active;
    },

    handleSidebar: (state) => {
        state.sidebar = !state.sidebar
    }
  },
});

export const { handleProfile, handleSidebar } = FeaturesHeaderDashboard.actions;
export default FeaturesHeaderDashboard.reducer;
