import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Label from "./components/form/Label";
import { baseURLImage } from "../../../utils/axiosInstance";
import useReduxProfile from "../../../hooks/redux/client/useReduxProfile";
import { useState } from "react";
import { userDetailRedux } from "../../../redux/slices/client/Profile.features";

const schema = z.object({
  full_name: z.string(),
  birthdate: z.date(),
  gender: z.string(),
  address: z.string(),
  profile_picture: z.string(),
});

type schemaUserDetail = z.infer<typeof schema>;

const ProfileUpdate = () => {
  const {profileUpdate} = useReduxProfile()
  const { handleSubmit, register, reset } = useForm<schemaUserDetail>({
    resolver: zodResolver(schema),
  });

  return (
    <>
    {profileUpdate ? (
      <div className="grid grid-cols-2 p-4">
        <figure>
            {/* <img src={`${baseURLImage}/${dataUserDetail.profile_picture.name}`} alt={dataUserDetail.full_name} /> */}
        </figure>
      <form action="" className="w-full py-6">
        <div className="flex flex-col gap-6 text-sm">
          <Label htmlFor="full_name">
            <span>Nama lengkap</span>
            <input
              type="text"
              id="full_name"
              placeholder="Nama lengkap"
              className="w-full px-2 py-1 border rounded "
            />
          </Label>
          <Label htmlFor="birthdate">
            <span>Tanggal lahir</span>
            <input type="date" id="birthdate" className="w-full px-2 py-1 border rounded " />
          </Label>

          <Label htmlFor="gender">
            <span>Jenis kelamin</span>
            <select name="" id="gender" className="w-full px-2 py-1 border rounded ">
              <option value="">--gender--</option>
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
            ></textarea>
          </Label>
        </div>
      </form>
    </div>
    ) : null }
    </>
  );
};

export default ProfileUpdate;
