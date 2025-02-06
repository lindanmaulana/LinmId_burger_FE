import { ImageBurger } from "../../../assets/images/burger";

const ProfileBanner = () => {
  return (
    <figure className="overflow-hidden border-2 border-black h-44 rounded-3xl">
      <img
        src={ImageBurger.profileBackground}
        alt="profile-background"
        className="object-cover object-center w-full h-full"
      />
    </figure>
  );
};

export default ProfileBanner;
