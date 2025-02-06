import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Label from "./components/form/Label";
import { useState } from "react";
import { image } from "../../../types/type-image";
import { baseURLImage } from "../../../utils/axiosInstance";

const schema = z.object({
  full_name: z.string(),
  birthdate: z.date(),
  gender: z.string(),
  address: z.string(),
  profile_picture: z.string(),
});

type schemaUserDetail = z.infer<typeof schema>;

export interface ProfileUpdateProps {
  _id?: string;
  full_name?: string;
  birthdate?: string;
  gender?: string;
  address?: string;
  profile_picture?: image;
}
const ProfileUpdate = (props: ProfileUpdateProps) => {
  const [dataProfileUser, setDataProfileUser] =
    useState<ProfileUpdateProps>(props);

  const { handleSubmit, register, reset } = useForm<schemaUserDetail>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="flex items-center gap-8 p-4">
      <figure className="max-w-56">
        <img
          src={`${baseURLImage}/${dataProfileUser.profile_picture?.name}`}
          alt={dataProfileUser.full_name}
        />
      </figure>
      <form action="" className="flex flex-col items-end w-full gap-4 py-6">
        <div className="flex flex-col w-3/4 gap-6 text-sm">
          <Label htmlFor="full_name">
            <span>Nama lengkap</span>
            <input
              type="text"
              id="full_name"
              placeholder="Nama lengkap"
              className="w-full px-2 py-1 border rounded "
              value={dataProfileUser.full_name}
            />
          </Label>
          <Label htmlFor="birthdate">
            <span>Tanggal lahir</span>
            <input
              type="date"
              id="birthdate"
              className="w-full px-2 py-1 border rounded "
              value={dataProfileUser.birthdate}
            />
          </Label>

          <Label htmlFor="gender">
            <span>Jenis kelamin</span>
            <select
              name=""
              id="gender"
              className="w-full px-2 py-1 border rounded"
              value={dataProfileUser.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </Label>

          <Label htmlFor="address">
            <span>Alamat</span>
            <textarea
              name=""
              id="address"
              placeholder="Address"
              className="w-full px-2 py-1 border rounded "
              value={dataProfileUser.address}
            ></textarea>
          </Label>
        </div>
        <div className="flex items-center gap-2 text-sm text-white font-open-sans-regular">
          <button className="px-4 py-1 rounded bg-devRed">Reset</button>
          <button className="px-4 py-1 rounded bg-devGreen">Update</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
