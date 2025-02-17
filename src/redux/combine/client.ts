import { combineSlices } from "@reduxjs/toolkit";
import FeaturesHomeFood from "../slices/client/HomeFood";
import FeaturesProfile from "../slices/client/Profile.features";
import FeaturesCart from "../slices/client/Cart.features";

const CombineClient = combineSlices({
  FeaturesHomeFood,
  FeaturesProfile,
  FeaturesCart,
});

export default CombineClient;
