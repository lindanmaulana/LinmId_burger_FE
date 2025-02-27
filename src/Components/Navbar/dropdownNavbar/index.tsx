import { AiOutlineSetting } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { RiHome9Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useReduxNavbar from "../../../hooks/redux/useReduxNavbar";
import { handleLogout } from "../../../redux/slices/auth";
import { handleDropdownNavbar } from "../../../redux/slices/navbar.features";
import { AppDispatch } from "../../../redux/store";
import useReduxAuth from "../../../hooks/redux/useReduxAuth";
import { RxDashboard } from "react-icons/rx";

const enableDropdownMenu = ["/auth/login", "/auth/register"];

const DropdownNavbar = () => {
  const { role } = useReduxAuth();
  const { pathname } = useLocation();
  const { dropdownNavbar } = useReduxNavbar();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleDropdown = () => {
    dispatch(handleDropdownNavbar());
  };

  const handleDropdownLogout = () => {
    dispatch(handleLogout());

    navigate("/auth/login");
  };

  const handleDropdownNavigate = (url: string) => {
    dispatch(handleDropdownNavbar());

    navigate(url);
  };

  return (
    <>
      {!enableDropdownMenu.includes(pathname) && (
        <div className="fixed flex flex-col items-center gap-2 right-6 bottom-6">
          <nav
            className={`${
              dropdownNavbar ? "h-36 p-2 opacity-100" : "h-0 opacity-0"
            }  rounded-xl bg-devGray transition-global`}
          >
            <ul className="flex flex-col h-full gap-3 text-white ">
              {role === "admin" && (
                <li className="flex items-center w-full h-full ">
                  <button onClick={() => handleDropdownNavigate("/dashboard")}>
                    <RxDashboard className="text-lg" />
                  </button>
                </li>
              )}
              <li className="flex items-center w-full h-full ">
                <button onClick={() => handleDropdownNavigate("/")}>
                  <RiHome9Line className="text-lg" />
                </button>
              </li>
              <li className="flex items-center w-full h-full ">
                <button onClick={() => handleDropdownNavigate("/menu")}>
                  <BiFoodMenu className="text-lg" />
                </button>
              </li>
              <li className="flex items-center w-full h-full ">
                <button onClick={handleDropdownLogout}>
                  <IoMdLogOut className="text-lg text-red-500" />
                </button>
              </li>
            </ul>
          </nav>
          <button
            onClick={handleDropdown}
            className="relative z-50 p-2 text-white rounded-full bg-devBlack"
          >
            <AiOutlineSetting
              className={`${
                dropdownNavbar ? "rotate-90" : ""
              } text-2xl transition-global`}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default DropdownNavbar;
