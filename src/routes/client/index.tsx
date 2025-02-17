import { useRoutes } from "react-router-dom";
import PageAbout from "../../pages/client/about";
import PageBookTable from "../../pages/client/bookTable";
import PageDetailProduct from "../../pages/client/detail/DetailProduct";
import PageHome from "../../pages/client/home";
import PageMenu from "../../pages/client/menu";
import PageOrder from "../../pages/client/order";
import PageProfile from "../../pages/client/profile";

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
      path: "order/:id",
      element: <PageOrder />
    }
  ]);

  return router;
};

export default RouterClient;
