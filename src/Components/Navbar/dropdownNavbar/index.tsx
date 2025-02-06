import { AiOutlineSetting } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import useReduxNavbar from "../../../hooks/redux/useReduxNavbar";
import { RiHome9Line } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { handleDropdownNavbar } from "../../../redux/slices/navbar.features";

const enableDropdownMenu = ["/profile", "/profile/update"];

const DropdownNavbar = () => {
  const { pathname } = useLocation();
  const { dropdownNavbar } = useReduxNavbar();
  const dispatch = useDispatch<AppDispatch>()

  const handleDropdown = () => {
    dispatch(handleDropdownNavbar())
  }
  
  return (
    <>
      {enableDropdownMenu.includes(pathname) && (
        <div className="fixed flex flex-col items-center gap-2 right-6 bottom-6">
          <nav className={`${dropdownNavbar ? "h-16 px-1 py-2 opacity-100" : "h-0 opacity-0"}  rounded bg-devGray transition-global`}>
            <ul className="flex flex-col gap-2 text-white">
              <li>
                <Link to={"/"}>
                  <RiHome9Line className="text-xl" />
                </Link>
              </li>
              <li>
                <Link to={"/menu"}>
                  <BiFoodMenu className="text-xl" />
                </Link>
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
