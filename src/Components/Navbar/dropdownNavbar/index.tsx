import { AiOutlineSetting } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useReduxNavbar from "../../../hooks/redux/useReduxNavbar";
import { RiHome9Line } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { handleDropdownNavbar } from "../../../redux/slices/navbar.features";
import { handleLogout } from "../../../redux/slices/auth";

const enableDropdownMenu = ["/", "/profile", "/profile/update"];

const DropdownNavbar = () => {
  const { pathname } = useLocation();
  const { dropdownNavbar } = useReduxNavbar();
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleDropdown = () => {
    dispatch(handleDropdownNavbar())
  }

  const handleDropdownLogout = () => {
    dispatch(handleLogout())

    navigate("/auth/login")
  }
  
  return (
    <>
      {enableDropdownMenu.includes(pathname) && (
        <div className="fixed flex flex-col items-center gap-2 right-6 bottom-6">
          <nav className={`${dropdownNavbar ? "h-28 p-2 opacity-100" : "h-0 opacity-0"}  rounded-xl bg-devGray transition-global`}>
            <ul className="flex flex-col h-full gap-3 text-white ">
              <li className="flex items-center w-full h-full ">
                <Link to={"/"}>
                  <RiHome9Line className="text-lg" />
                </Link>
              </li>
              <li className="flex items-center w-full h-full ">
                <Link to={"/menu"}>
                  <BiFoodMenu className="text-lg" />
                </Link>
              </li>
              <li className="flex items-center w-full h-full ">
                <button onClick={handleDropdownLogout}>
                  <IoMdLogOut className="text-lg text-red-500" />
                </button>
              </li>
            </ul>
          </nav>
          <button onClick={handleDropdown} className="z-50 p-2 text-white rounded-full bg-devBlack">
            <AiOutlineSetting className={`${dropdownNavbar ? "rotate-90" : ""} text-2xl transition-global`} />
          </button>
        </div>
      )}
    </>
  );
};

export default DropdownNavbar;
