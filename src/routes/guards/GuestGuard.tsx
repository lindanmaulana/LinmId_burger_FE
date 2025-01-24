import { Navigate, Outlet } from "react-router-dom";
import useReduxAuth from "../../hooks/redux/useReduxAuth";
import { guardProps } from "./guard.type";

const GuestGuard = (props: guardProps) => {
  const { children } = props;
  const { token } = useReduxAuth();

  if (token) return <Navigate to={"/"} replace />;

  return children || <Outlet />;
};

export default GuestGuard;
