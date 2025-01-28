import { useRoutes } from "react-router-dom"
import ViewMenuBurger from "../../../pages/dashboard/views/viewMenu/menuBurger"

const RouterDashboardMenu = () => {
    const router = useRoutes([
        {
            path: "burger",
            element: <ViewMenuBurger />
        }
    ])
    return router
}

export default RouterDashboardMenu