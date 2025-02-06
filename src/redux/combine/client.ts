import { combineSlices } from "@reduxjs/toolkit";
import FeaturesHomeFood from "../slices/client/HomeFood";
import FeaturesProfile from "../slices/client/Profile.features"

const CombineClient = combineSlices({
  FeaturesHomeFood,
  FeaturesProfile
});

export default CombineClient;
