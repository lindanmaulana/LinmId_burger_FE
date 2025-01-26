import { IoPersonSharp, IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { handleProfile } from "../../../redux/slices/dashboard/header";
import { TiArrowSortedDown } from "react-icons/ti";

const DashboardNavbarAction = () => {
    const dispatch = useDispatch<AppDispatch>()

    const handleProfileMenu = () => {
        dispatch(handleProfile())
    }

  return (
    <div className="flex items-center gap-5 pe-6">
      <label
        htmlFor=""
        className="flex items-center h-full overflow-hidden bg-white rounded"
      >
        <input
          type="text"
          className="h-full px-2 text-sm outline-none"
          placeholder="Search for..."
        />
        <button className="px-3 py-2 text-white bg-devBlue">
          <IoSearch className="" />
        </button>
      </label>
      <button onClick={handleProfileMenu} className="flex items-center text-xl text-devWhiteGrey">
        <IoPersonSharp />
        <TiArrowSortedDown />
      </button>
    </div>
  );
};

export default DashboardNavbarAction;
