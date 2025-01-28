import { MdSpaceDashboard } from "react-icons/md";
import MenuContainer from "../../components/sidebarDropdownMenu/MenuContainer";
import SidebarLink from "../../components/SidebarLink";

const SidebarDashboard = () => {
  return (
    <MenuContainer title="CORE">
      <SidebarLink to="/dashboard" className="">
        <MdSpaceDashboard />
        Dashboard
      </SidebarLink>
    </MenuContainer>
  );
};

export default SidebarDashboard;
