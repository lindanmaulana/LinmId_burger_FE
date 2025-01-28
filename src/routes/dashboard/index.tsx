import { useRoutes } from "react-router-dom";
import ViewDashboard from "../../pages/dashboard/views/viewdashboard";
import RouterDashboardMenu from "./menu";
import ViewMenu from "../../pages/dashboard/views/viewMenu";
import ViewDashboardProducts from "../../pages/dashboard/views/viewdashboard/products";

const RouterDashboard = () => {
  const router = useRoutes([
    {
      index: true,
      element: <ViewDashboard />,
    },
    {
        path: "products",
        element: <ViewDashboardProducts />
    },
    {
      path: "food/*",
      element: (
        <ViewMenu>
          <RouterDashboardMenu />
        </ViewMenu>
      ),
    },
  ]);
  return router;
};

export default RouterDashboard;
