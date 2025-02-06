import {
  HiMiniCalendarDateRange,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { TbSettingsCog } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { handleProfileUpdate } from "../../../redux/slices/client/Profile.features";

const ProfileAction = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleActionUpdate = () => {
    dispatch(handleProfileUpdate());
  };
  
  return (
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-1 px-2 py-px text-sm border rounded border-devBlack">
        <HiMiniCalendarDateRange />
        Reservation
      </button>
      <button className="flex items-center gap-1 px-2 py-px text-sm border rounded border-devBlack">
        <HiOutlineClipboardDocumentList />
        Order
      </button>
      <button onClick={handleActionUpdate} className="flex items-center gap-1 px-2 py-px text-sm text-white border rounded border-devBlack bg-devGreen">
        <TbSettingsCog />
        Update profile
      </button>
    </div>
  );
};

export default ProfileAction;
