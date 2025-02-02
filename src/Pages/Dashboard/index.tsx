import { ReactNode } from "react";
import DashboardNavbar from "../../components/navbar/dashboardNavbar";
import DashboardSidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import useReduxDashboartdLocation from "../../hooks/redux/dashboard/useReduxDashboartdLocation";

export interface PageDashboardProps {
  children: ReactNode;
}
const PageDashboard = (props: PageDashboardProps) => {
  const { children } = props;
  const { location, active } = useReduxDashboartdLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
      <div className="flex h-screen overflow-hidden">
      <DashboardNavbar />
        <DashboardSidebar />
        <div className="flex-1 h-full px-4 overflow-y-auto py-7">
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-open-sans-semibold">Dashboard</h2>
              <div className="flex items-center gap-1">
                {location &&
                  location.map((loc: string) => (
                    <button
                      key={loc}
                      disabled={loc === active && true}
                      onClick={() => handleNavigate(loc)}
                      className={`${
                        loc === active ? "text-primary/50" : "text-primary"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
  );
};

export default PageDashboard;
