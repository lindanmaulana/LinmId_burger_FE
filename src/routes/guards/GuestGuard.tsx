import { Navigate, Outlet } from "react-router-dom";
import useReduxAuth from "../../hooks/redux/useReduxAuth";
import { guardProps } from "./guard.type";

const GuestGuard = (props: guardProps) => {
  const { children } = props;
  const { token, role } = useReduxAuth();

  if (token && role === "admin") {
    return <Navigate to={"/dashboard"} replace />;

  } else if (token && role === "user") {
    return <Navigate to={"/"} replace />;

  }

  return children || <Outlet />;
};

export default GuestGuard;
