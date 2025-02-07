import ProfileAction from "./ProfileAction";
import ProfileImage from "./ProfileImage";

export interface ProfileUserProps {
  username?: string;
  full_name?: string;
  role?: "user" | "admin";
  urlImage?: string
}
const ProfileUser = (props: ProfileUserProps) => {
  const { full_name, username, role, urlImage } = props;
  return (
    <div>
      <div className="relative flex items-center justify-between">
        <ProfileImage full_name={full_name} urlImage={urlImage} />
        <ProfileAction  />
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl">{full_name}</h2>
          <p className="flex items-center gap-1 px-2 text-xs capitalize border border-black rounded-full">
            <span className="self-center block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
            {role}
          </p>
        </div>
        <p className="text-base">{username}</p>
      </div>
    </div>
  );
};

export default ProfileUser;
