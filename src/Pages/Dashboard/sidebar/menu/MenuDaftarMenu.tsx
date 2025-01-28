import { CgMenuBoxed } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useReduxDashboardHeader } from "../../../../hooks/redux/dashboard/useReduxDashboardHeader";
import { SET_DAFTARMENU } from "../../../../redux/slices/dashboard/const";
import { handleSidebarMenu } from "../../../../redux/slices/dashboard/header";
import { AppDispatch } from "../../../../redux/store";
import MenuTitle from "../../components/sidebarDropdownMenu/MenuTitle";
import { handleSetLocation } from "../../../../redux/slices/dashboard/breadCrumb";
import SidebarAction from "../../components/SidebarAction";
import { useNavigate } from "react-router-dom";

const MenuDaftarMenu = () => {
  const { menu } = useReduxDashboardHeader();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const handleDaftarMenu = () => {
    dispatch(handleSidebarMenu({ type: SET_DAFTARMENU }));
  };

  const handleNavigate = ( path: string) => {
    dispatch(handleSetLocation({path: ["/dashboard", "/food", `/${path}`], active: path}))

    navigate(`/dashboard/food/${path}`)
  }

  return (
    <>
      <MenuTitle onClick={handleDaftarMenu} condition={menu.daftarMenu.active}>
        <CgMenuBoxed />
        Daftar Menu
      </MenuTitle>
      <ul
        className={`${
          menu.daftarMenu.active ? "h-36" : "h-0"
        } overflow-hidden flex flex-col justify-center gap-3 ps-6 transition-global`}
      >
        <li>
          <SidebarAction onClick={() => handleNavigate("burger")}  className="">
            Burger
          </SidebarAction>
        </li>
        <li>
          <SidebarAction onClick={() => handleNavigate("pizza")}  className="">
            Pizza
          </SidebarAction>
        </li>
        <li>
          <SidebarAction onClick={() => handleNavigate("pasta")}  className="">
            Pasta
          </SidebarAction>
        </li>
        <li>
          <SidebarAction onClick={() => handleNavigate("fries")} className="">
            Fries
          </SidebarAction>
        </li>
      </ul>
    </>
  );
};

export default MenuDaftarMenu;
