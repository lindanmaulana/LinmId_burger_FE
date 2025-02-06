import { createSlice } from "@reduxjs/toolkit"

export interface initialStateNavbar {
    dropdownNavbar: boolean
}

const initialState: initialStateNavbar = {
    dropdownNavbar: false
}


const FeaturesNavbar = createSlice({
    name: "DropdownNavbar",
    initialState,
    reducers: {
        handleDropdownNavbar: (state) => {
            state.dropdownNavbar = !state.dropdownNavbar
        }
    }
})

export const {handleDropdownNavbar} = FeaturesNavbar.actions
export default FeaturesNavbar.reducer