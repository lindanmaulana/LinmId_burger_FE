import { combineSlices } from "@reduxjs/toolkit";
import FeaturesHeaderDashboard from "../slices/dashboard/header";
import FeaturesProducts from "../slices/dashboard/products/FeaturesProduct";
import FeaturesLocationDashboard from "../slices/dashboard/breadCrumb/index";

const CombineAdmin = combineSlices({
  header: FeaturesHeaderDashboard,
  dataProduct: FeaturesProducts,
  location: FeaturesLocationDashboard,
});

export default CombineAdmin;
