import { Link, useNavigate } from "react-router-dom";
import { useReduxDashboardHeader } from "../../../hooks/redux/dashboard/useReduxDashboardHeader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { handleLogout } from "../../../redux/slices/auth";

const DashboardNavbarProfileMenu = () => {
  const { profile } = useReduxDashboardHeader();
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const handleActionLogout = () => {
    dispatch(handleLogout())
    
    navigate("/auth/login")
  }
  return (
    <div
      className={`${
        profile.active ? "block" : "hidden"
      } fixed bg-white border rounded top-14 border-primary/30 right-10 min-w-40`}
    >
      <ul className="flex flex-col gap-2 py-2 text-sm text-primary/90">
        <div className="flex flex-col pb-2 border-b border-primary/30">
          <li className="px-3 py-2 hover:bg-primary/10">
            <Link to={""}>Settings</Link>
          </li>
          <li className="px-3 py-2 hover:bg-primary/10">
            <Link to={""}>Activity Log</Link>
          </li>
        </div>
        <li className="px-3 py-2 hover:bg-primary/10">
          <button onClick={handleActionLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavbarProfileMenu;
