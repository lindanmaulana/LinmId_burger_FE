import { useRoutes } from "react-router-dom";
import ViewDashboard from "../../pages/dashboard/views/viewdashboard";
import ViewDashboardCategories from "../../pages/dashboard/views/viewdashboard/categories";
import ViewDashboardOrders from "../../pages/dashboard/views/viewdashboard/orders";
import ViewDashboardPayments from "../../pages/dashboard/views/viewdashboard/payments";
import ViewDashboardProducts from "../../pages/dashboard/views/viewdashboard/products";
import ViewDashboardReservations from "../../pages/dashboard/views/viewdashboard/reservations";
import ViewDashboardUsers from "../../pages/dashboard/views/viewdashboard/users";
import ViewMenu from "../../pages/dashboard/views/viewMenu";
import ViewProductDiscount from "../../pages/dashboard/views/viewProducts";
import RouterDashboardMenu from "./menu";
import RouterProductDiscount from "./productDiscount";

const RouterDashboard = () => {
  const router = useRoutes([
    {
      index: true,
      element: <ViewDashboard />,
    },
    {
      path: "products",
      element: <ViewDashboardProducts />,
    },
    {
      path: "categories",
      element: <ViewDashboardCategories />,
    },
    {
      path: "orders/*",
      element: <ViewDashboardOrders />,
    },
    {
      path: "payments",
      element: <ViewDashboardPayments />,
    },
    {
      path: "users",
      element: <ViewDashboardUsers />,
    },
    {
      path: "reservations",
      element: <ViewDashboardReservations />,
    },
    {
      path: "food/*",
      element: (
        <ViewMenu>
          <RouterDashboardMenu />
        </ViewMenu>
      ),
    },
    {
      path: "product-discount/*",
      element: (
        <ViewProductDiscount>
          <RouterProductDiscount />
        </ViewProductDiscount>
      ),
    },
  ]);
  return router;
};

export default RouterDashboard;
