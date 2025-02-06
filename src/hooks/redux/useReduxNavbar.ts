import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useReduxNavbar = () => {
  const { dropdownNavbar } = useSelector((state: RootState) => state.navbar);
  return {
    dropdownNavbar,
  };
};

export default useReduxNavbar;
