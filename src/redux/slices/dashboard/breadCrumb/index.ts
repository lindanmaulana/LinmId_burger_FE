import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface initialStateDashboardBreadCrumb {
    location: string[]
    active: string
}

export const initialState: initialStateDashboardBreadCrumb = {
    location: ["/dashboard"],
    active: "/dashboard"
}


const FeaturesBreadCrumbDashboard = createSlice({
    name: "DashboardBreadCrumb",
    initialState,
    reducers: {
        handleSetLocation: (state, action: PayloadAction<{path: string[], active: string}>) => {
            const {active, path} = action.payload

            state.active = `/${active}`
            state.location = path
        },

        handleClearLocation: (state, action: PayloadAction<{path: string}>) => {
            state.location.filter((location) => location !== action.payload.path)
        },

        handleResetLocation: () => {
            return initialState
        }
    }
})


export const {handleClearLocation, handleSetLocation, handleResetLocation} = FeaturesBreadCrumbDashboard.actions
export default FeaturesBreadCrumbDashboard.reducer