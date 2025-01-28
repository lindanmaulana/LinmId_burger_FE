import BreadCrumbs from "../../../../components/breadcrumbs";
import DashboardCardData from "./cardData";

const ViewDashboard = () => {
  return (
      <div className="flex flex-col w-full">
        <BreadCrumbs />
        <DashboardCardData />
      </div>
  );
};

export default ViewDashboard;
