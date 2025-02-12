import { useDispatch } from "react-redux";
import { useReduxDashboardHeader } from "../../../hooks/redux/dashboard/useReduxDashboardHeader";
import { handleSidebar } from "../../../redux/slices/dashboard/header";
import { AppDispatch } from "../../../redux/store";
import SidebarDashboard from "./dashboard";
import SidebarMenu from "./menu";
import SidebarLogout from "./logout";
import SidebarProductDiscount from "./productDiscount";

const DashboardSidebar = () => {
  const { sidebar } = useReduxDashboardHeader();
  const dispatch = useDispatch<AppDispatch>();


  const handleMenuSidebar = () => {
    dispatch(handleSidebar());
  };

  return (
    <div
      className={`${
        sidebar.active ? "w-56 px-4" : "w-0"
      }  h-full bg-primary transition-global overflow-y-auto py-10`}
    >
      <div className="flex flex-col gap-6 py-6">
        <SidebarDashboard />
        <SidebarMenu />
        <SidebarProductDiscount />
        <SidebarLogout />
      </div>
    </div>
  );
};

export default DashboardSidebar;
