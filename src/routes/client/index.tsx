import { useRoutes } from "react-router-dom"
import PageHome from "../../Pages/Client/Home"

const RouterClient = () => {
    const router = useRoutes([
        {
            index: true,
            element: <PageHome />
        }
    ])

    return router
}

export default RouterClient