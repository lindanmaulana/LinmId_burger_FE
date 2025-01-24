import { useRoutes } from "react-router-dom";
import PageHome from "../../pages/client/home";

const RouterClient = () => {
  const router = useRoutes([
    {
      index: true,
      element: <PageHome />,
    },
  ]);

  return router;
};

export default RouterClient;
