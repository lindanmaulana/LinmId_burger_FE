import { Link } from "react-router-dom";
import { useReduxDashboardHeader } from "../../../hooks/redux/dashboard/useReduxDashboardHeader";

const DashboardNavbarProfileMenu = () => {
  const { profile } = useReduxDashboardHeader();
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
          <Link to={""}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavbarProfileMenu;
