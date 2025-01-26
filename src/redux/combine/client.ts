import { combineSlices } from "@reduxjs/toolkit";
import homeFood from "../slices/client/HomeFood";

const CombineClient = combineSlices({
  homeFood,
});

export default CombineClient;
