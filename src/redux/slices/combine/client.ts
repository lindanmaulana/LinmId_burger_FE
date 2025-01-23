import {  combineSlices } from "@reduxjs/toolkit";
import menuProducts from "../client/menuProduct"

const CombineClient = combineSlices({
    menuProducts
})

export default CombineClient