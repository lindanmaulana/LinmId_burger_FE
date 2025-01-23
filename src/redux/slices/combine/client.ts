import {  combineSlices } from "@reduxjs/toolkit";
import homeFood from "../client/HomeFood"

const CombineClient = combineSlices({
    homeFood
})

export default CombineClient