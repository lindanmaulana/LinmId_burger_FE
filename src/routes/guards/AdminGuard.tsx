import { Navigate, Outlet } from "react-router-dom";
import useReduxAuth from "../../hooks/redux/useReduxAuth";
import { guardProps } from "./guard.type";

const AdminGuard = (props: guardProps) => {
  const { children } = props;

  const { role, token } = useReduxAuth();

  if (!token) return <Navigate to={"/auth/login"} replace />;

  if (role !== "admin") return <Navigate to={"/"} replace />;

  return children || <Outlet />;
};

export default AdminGuard;
