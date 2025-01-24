import { Navigate, Outlet } from "react-router-dom";
import useReduxAuth from "../../hooks/redux/useReduxAuth";
import { guardProps } from "./guard.type";

const UserGuard = (props: guardProps) => {
  const { children } = props;
  const { token } = useReduxAuth();

  if (!token) return <Navigate to={"/auth/login"} replace />;

  return children || <Outlet />;
};

export default UserGuard;
