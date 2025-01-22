import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export const SET_LOADING = "loading/true"
export const CLEAR_LOADING = "loading/false"

export interface initialStateIsLoading {
    loading: boolean
}

const initialState: initialStateIsLoading = {
    loading: false
}

const FeaturesIsLoading = createSlice({
    name: "isLoading",
    initialState,
    reducers: {
        handleIsLoading: (state, action: PayloadAction<{type: string}>) => {
            switch(action.payload.type) {
                case SET_LOADING:
                    state.loading = true
                break;
                case CLEAR_LOADING:
                    state.loading = false
                break
                default:
                    return initialState
            }
        }
    }
})

export const {handleIsLoading} = FeaturesIsLoading.actions
export default FeaturesIsLoading.reducer