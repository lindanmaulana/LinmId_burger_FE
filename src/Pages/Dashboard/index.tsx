import { ReactNode } from "react";
import DashboardNavbar from "../../components/navbar/dashboardNavbar";

export interface PageDashboardProps {
    children: ReactNode
}
const PageDashboard = (props: PageDashboardProps) => {
    const {children} = props

  return (
    <div>
        <DashboardNavbar />
        <div className="h-screen">
            <div className="h-full min-w-40 bg-primary">
                
            </div>
            <div className="flex-1 bg-white">{children}</div>
        </div>
    </div>
  );
};

export default PageDashboard;
