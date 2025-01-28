import MenuContainer from "../../components/sidebarDropdownMenu/MenuContainer";
import MenuDaftarMenu from "./MenuDaftarMenu";
import MenuUsers from "./MenuUsers";

const SidebarMenu = () => {
  return (
    <MenuContainer title="Menu">
      <MenuDaftarMenu />
      <MenuUsers />
    </MenuContainer>
  );
};

export default SidebarMenu;
