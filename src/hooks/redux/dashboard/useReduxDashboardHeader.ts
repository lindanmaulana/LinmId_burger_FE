import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

export const useReduxDashboardHeader = () => {
    const {profile, sidebar} = useSelector((state: RootState) => state.dashboard.header)
    return {
        profile,
        sidebar,
        menu: sidebar.menu
    }
}