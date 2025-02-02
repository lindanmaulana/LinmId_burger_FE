import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface initialStateConfirmationModal {
    active: boolean
    message: string
    transition: boolean
}

const initialState: initialStateConfirmationModal = {
    active: false,
    message: "",
    transition: false
}

const FeaturesConfirmationModal = createSlice({
    name: "ConfirmationModal",
    initialState,
    reducers: {
        handleSetConfirmationModal: (state, action: PayloadAction<initialStateConfirmationModal>) => {
            state.active = action.payload.active
            state.message = action.payload.message
            state.transition = action.payload.transition
        },

        handleClearConfirmation: () => {
            return initialState
        },

        handleClearTransition: (state) => {
            return {...state, transition: false}
        }
    }
})

export const {handleClearConfirmation, handleSetConfirmationModal, handleClearTransition} = FeaturesConfirmationModal.actions
export default FeaturesConfirmationModal.reducer