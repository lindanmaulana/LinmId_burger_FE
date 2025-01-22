import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const storage = localStorage.getItem("auth");

export interface initialStateAuth {
  token: string;
  role: string;
}

const setInitialState = () => {
  try {
    return storage ? JSON.parse(storage) : { token: "", role: "" };
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      throw new Error(err.response.data.msg);
    }
    localStorage.clear();
    return {
      token: "",
      role: "",
    };
  }
};

const initialState: initialStateAuth = setInitialState();

const FeaturesAuth = createSlice({
  name: "ClientAuth",
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<initialStateAuth>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },

    handleLogout: (state) => {
      state.token = "";
      state.role = "";

      localStorage.clear();
    },
  },
});

export const { handleLogin, handleLogout } = FeaturesAuth.actions;
export default FeaturesAuth.reducer;
