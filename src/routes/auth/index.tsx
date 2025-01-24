import { useRoutes } from "react-router-dom";
import PageAuthLogin from "../../Pages/Auth/Login";
import PageAuthRegister from "../../pages/auth/register";

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
