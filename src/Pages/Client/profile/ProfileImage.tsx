import { baseURLImage } from "../../../utils/axiosInstance";

export interface ProfileImageProps {
  urlImage?: string;
  full_name?: string;
}
const ProfileImage = (props: ProfileImageProps) => {
  const { full_name, urlImage } = props;

  return (
    <div className="relative">
      <figure className="absolute w-32 bg-white border-4 border-black rounded-full -top-24">
        <img
          src={`${baseURLImage}/${urlImage}`}
          alt={full_name}
          className="w-full h-full"
        />
      </figure>
    </div>
  );
};

export default ProfileImage;
