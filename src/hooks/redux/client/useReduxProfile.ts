import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const useReduxProfile = () => {
  const { userDetail, profileUpdate } = useSelector(
    (state: RootState) => state.client.FeaturesProfile
  );
  return {
    userDetail,
    profileUpdate
  };
};

export default useReduxProfile;
