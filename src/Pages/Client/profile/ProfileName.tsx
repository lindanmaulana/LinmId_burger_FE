export interface ProfileNameProps {
  username?: string;
  full_name?: string;
  role?: "user" | "admin";
}
const ProfileName = (props: ProfileNameProps) => {
  const { full_name, username, role } = props;
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl">{full_name}</h2>
        <p className="flex items-center gap-1 px-2 text-xs capitalize border border-black rounded-full">
          <span className="self-center block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
          {role}
        </p>
      </div>
      <p className="text-base">{username}</p>
    </div>
  );
};

export default ProfileName;
