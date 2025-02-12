import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SET_DAFTARMENU, SET_PRODUCT_DISCOUNT, SET_USERS } from "./const";

export interface initialStateHeader {
  sidebar: {
    active: boolean;
    menu: {
      daftarMenu: {
        active: boolean;
      };
      users: {
        active: boolean;
      };
      productDiscount: {
        active: boolean
      }
    };
  };
  profile: {
    active: boolean;
  };
}

const initialState: initialStateHeader = {
  sidebar: {
    active: true,
    menu: {
      daftarMenu: {
        active: false,
      },
      users: {
        active: false,
      },
      productDiscount: {
        active: false
      }
    },
  },
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
      state.sidebar.active = !state.sidebar.active;
    },

    handleSidebarMenu: (state, action: PayloadAction<{ type: string }>) => {
      switch (action.payload.type) {
        case SET_DAFTARMENU:
          state.sidebar.menu.daftarMenu.active =
            !state.sidebar.menu.daftarMenu.active;
          break;
        case SET_USERS:
          state.sidebar.menu.users.active = !state.sidebar.menu.users.active;
          break;
        case SET_PRODUCT_DISCOUNT:
          state.sidebar.menu.productDiscount.active = !state.sidebar.menu.productDiscount.active
      }
    },
  },
});

export const { handleProfile, handleSidebar, handleSidebarMenu } =
  FeaturesHeaderDashboard.actions;
export default FeaturesHeaderDashboard.reducer;
