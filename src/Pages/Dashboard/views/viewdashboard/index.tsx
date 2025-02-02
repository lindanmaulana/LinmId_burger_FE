import BreadCrumbs from "../../../../components/breadcrumbs";
import DashboardCardData from "./cardData";
import DashboardChartData from "./chartData";

const ViewDashboard = () => {
  return (
      <div className="flex flex-col w-full gap-4">
        <BreadCrumbs />
        <DashboardCardData />
        <DashboardChartData />
      </div>
  );
};

export default ViewDashboard;
