import { useRoutes } from "react-router-dom";
import PageAbout from "../../pages/client/about";
import PageBookTable from "../../pages/client/bookTable";
import PageDetailProduct from "../../pages/client/detail/DetailProduct";
import PageHome from "../../pages/client/home";
import PageMenu from "../../pages/client/menu";
import PageOrder from "../../pages/client/order";
import PageProfile from "../../pages/client/profile";
import PageCart from "../../pages/client/cart";
import PageMyOrder from "../../pages/client/myOrder";
import PagePaymentSuccess from "../../pages/paymentSuccess";

const RouterClient = () => {
  const router = useRoutes([
    {
      index: true,
      element: <PageHome />,
    },
    {
      path: "profile/*",
      element: <PageProfile />
    },
    {
      path: "menu",
      element: <PageMenu />,
    },
    {
      path: "about",
      element: <PageAbout />,
    },
    {
      path: "book-table",
      element: <PageBookTable />,
    },
    {
      path: "product/detail/:id",
      element: <PageDetailProduct />
    },
    {
      path: "order",
      element: <PageOrder />
    },
    {
      path: "cart",
      element: <PageCart />
    },
    {
      path: "my-order",
      element: <PageMyOrder />
    },
    {
      path: "payment-success/*",
      element: <PagePaymentSuccess />
    }
  ]);

  return router;
};

export default RouterClient;
