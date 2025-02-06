import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { image } from "../../../types/type-image";
import { gender } from "../../../types/type-user-detail";

export interface userDetailRedux {
  address: string;
  birthdate: string;
  full_name: string;
  gender: gender;
  profile_picture: image;
  _id: string;
}

export interface initialStateProfile {
  userDetail: userDetailRedux
  profileUpdate: boolean
}

const initialState: initialStateProfile = {
  userDetail: {
    _id: "",
    full_name: "",
    address: "",
    birthdate: "",
    gender: "male",
    profile_picture: {
      _id: "",
      name: "",
    },
  },
  profileUpdate: false
};

const FeaturesProfile = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    handleSetProfileUserDetail: (state, action: PayloadAction<userDetailRedux>) => {
        state.userDetail = action.payload
    },
    handleProfileUpdate: (state) => {
        state.profileUpdate = !state.profileUpdate
    }
  },
});

export const {handleSetProfileUserDetail, handleProfileUpdate} = FeaturesProfile.actions
export default FeaturesProfile.reducer;
