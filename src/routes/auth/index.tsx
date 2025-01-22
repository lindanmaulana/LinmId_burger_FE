import { useRoutes } from "react-router-dom";
import PageAuthLogin from "../../Pages/Auth/Login";
import PageAuthRegister from "../../Pages/Auth/Register";

const RouterAuth = () => {
  const router = useRoutes([
    {
      path: "login",
      element: <PageAuthLogin />,
    },
    {
      path: "register",
      element: <PageAuthRegister />,
    },
  ]);
  return router;
};

export default RouterAuth;
