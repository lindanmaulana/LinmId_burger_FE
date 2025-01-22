import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type IType = "success" | "error"

export interface initialStateAlert {
    type: IType
    active: boolean,
    message: string
    transition: boolean
}

const initialState: initialStateAlert = {
    type: "error",
    active: false,
    message: "",
    transition: false
}

const FeaturesAlertMessage = createSlice({
    name: "AlertMessage",
    initialState,
    reducers: {
        handleSetAlert: (state, action: PayloadAction<initialStateAlert>) => {
            state.type = action.payload.type
            state.active = action.payload.active
            state.message = action.payload.message
            state.transition = action.payload.transition
        },

        handleClearAlert: () => {
            return initialState
        },

        handleClearTransition: (state) => {
            return {...state, transition: false}
        }
    }
})


export const {handleSetAlert, handleClearAlert, handleClearTransition} = FeaturesAlertMessage.actions
export default FeaturesAlertMessage.reducer