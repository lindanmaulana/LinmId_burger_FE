import { TbLogout2 } from "react-icons/tb";
import SidebarAction from "../../components/SidebarAction";

const SidebarLogout = () => {
  return (
    <SidebarAction onClick={() => {}} className="text-red-500">
      <TbLogout2 />
        Logout
    </SidebarAction>
  );
};

export default SidebarLogout;
