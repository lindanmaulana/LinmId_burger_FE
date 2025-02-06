import { TbSettingsCog } from "react-icons/tb";
import { ImageBurger } from "../../../assets/images/burger";
import { baseURLImage } from "../../../utils/axiosInstance";
import {
  HiMiniCalendarDateRange,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export interface ProfileImageProps {
  urlImage?: string;
  full_name?: string;
}

const ProfileImage = (props: ProfileImageProps) => {
  const { urlImage, full_name } = props;
  return (
    <>
      <figure className="overflow-hidden border-2 border-black h-44 rounded-3xl">
        <img
          src={ImageBurger.profileBackground}
          alt="profile-background"
          className="object-cover object-center w-full h-full"
        />
      </figure>
      <div className="relative flex flex-col justify-center w-full px-6 py-4 font-open-sans-regular">
        <figure className="absolute w-32 bg-white border-4 border-black rounded-full -top-16">
          <img
            src={`${baseURLImage}/${urlImage}`}
            alt={full_name}
            className="w-full h-full"
          />
        </figure>
        <div className="flex items-center self-end gap-2">
          <button className="flex items-center gap-1 px-2 py-px text-sm border rounded border-devBlack">
            <HiMiniCalendarDateRange />
            Reservation
          </button>
          <button className="flex items-center gap-1 px-2 py-px text-sm border rounded border-devBlack">
            <HiOutlineClipboardDocumentList />
            Order
          </button>
          <Link to={"update"} className="flex items-center gap-1 px-2 py-px text-sm text-white border rounded border-devBlack bg-devGreen">
            <TbSettingsCog />
            Update profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
