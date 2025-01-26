import { useRoutes } from "react-router-dom"
import ViewDashboard from "../../pages/dashboard/views/viewdashboard"

const RouterDashboard = () => {
    const router = useRoutes([
        {
            index: true,
            element: <ViewDashboard />
        }
    ])
    return router
}

export default RouterDashboard