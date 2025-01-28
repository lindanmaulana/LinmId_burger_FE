import { FiUsers } from "react-icons/fi";
import MenuTitle from "../../components/sidebarDropdownMenu/MenuTitle";
import MenuHeadList from "../../components/sidebarDropdownMenu/MenuHeadList";
import MenuList from "../../components/sidebarDropdownMenu/MenuList";
import { useReduxDashboardHeader } from "../../../../hooks/redux/dashboard/useReduxDashboardHeader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { handleSidebarMenu } from "../../../../redux/slices/dashboard/header";
import { SET_USERS } from "../../../../redux/slices/dashboard/const";

const MenuUsers = () => {
  const { menu } = useReduxDashboardHeader();
  const dispatch = useDispatch<AppDispatch>();

  const handleUsers = () => {
    dispatch(handleSidebarMenu({ type: SET_USERS }));
  };
  return (
    <>
      <MenuTitle onClick={handleUsers} condition={menu.users.active}>
        <FiUsers /> Users
      </MenuTitle>
      <MenuHeadList condition={menu.users.active} styleActive="!h-14">
        <MenuList to="" className="">
          Akun
        </MenuList>
        <MenuList to="" className="">
          Profile
        </MenuList>
      </MenuHeadList>
    </>
  );
};

export default MenuUsers;
