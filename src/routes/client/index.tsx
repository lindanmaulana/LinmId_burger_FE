import { useRoutes } from "react-router-dom";
import PageAbout from "../../pages/client/about";
import PageBookTable from "../../pages/client/bookTable";
import PageHome from "../../pages/client/home";
import PageMenu from "../../pages/client/menu";
import PageDetailProduct from "../../pages/client/detail/DetailProduct";
import PageProfile from "../../pages/client/profile";
import ProfileUpdate from "../../pages/client/profile/ProfileUpdate";

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
  ]);

  return router;
};

export default RouterClient;
