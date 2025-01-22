import { configureStore } from "@reduxjs/toolkit";
import FeaturesAuth from "./slices/auth"
import FeaturesAlertMessage from "./slices/alertMessage"
import FeaturesPrivacyPolicy from "./slices/privacyPolicy"
import FeaturesIsLoading from "./slices/isLoading"
const store = configureStore({
    reducer: {
        auth: FeaturesAuth,
        alertMessage: FeaturesAlertMessage,
        privacyPolicy: FeaturesPrivacyPolicy,
        isLoading: FeaturesIsLoading
    }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store