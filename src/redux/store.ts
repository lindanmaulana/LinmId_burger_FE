import { configureStore } from "@reduxjs/toolkit";
import FeaturesAuth from "./slices/auth"
import FeaturesAlertMessage from "./slices/alertMessage"
import FeaturesPrivacyPolicy from "./slices/privacyPolicy"
import FeaturesIsLoading from "./slices/isLoading"
import CombineClient from "./slices/combine/client";
const store = configureStore({
    reducer: {
        client: CombineClient,
        auth: FeaturesAuth,
        alertMessage: FeaturesAlertMessage,
        privacyPolicy: FeaturesPrivacyPolicy,
        isLoading: FeaturesIsLoading
    }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store