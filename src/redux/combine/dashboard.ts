import { combineSlices } from "@reduxjs/toolkit";
import FeaturesHeaderDashboard from "../slices/dashboard/header"

const CombineAdmin = combineSlices({
    header: FeaturesHeaderDashboard
})

export default CombineAdmin