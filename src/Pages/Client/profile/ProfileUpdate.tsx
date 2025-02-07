import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { handleIsLoading, SET_LOADING } from "../../../redux/slices/isLoading";
import { AppDispatch } from "../../../redux/store";
import { image } from "../../../types/type-image";
import { baseURLImage } from "../../../utils/axiosInstance";
import {
  dataUserDetailUpdate,
  ServiceUserDetailUpdate,
} from "../../../utils/users";
import Label from "./components/form/Label";
import { errorMessage } from "../../../redux/slices/errorMessage";

const schema = z.object({
  full_name: z.string().optional(),
  birthdate: z.string().optional(),
  gender: z.string().optional(),
  address: z.string().optional(),
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
  const {_id, address, birthdate, full_name, gender, profile_picture} = props
  const dispatch = useDispatch<AppDispatch>();
  const queryClient = useQueryClient()

  const { handleSubmit, register, reset, formState: {errors} } = useForm<schemaUserDetail>({
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["mutateUserDetailUpdate"],
    mutationFn: (data: dataUserDetailUpdate) => ServiceUserDetailUpdate({id:_id, data}),
  });

  const handleFormSubmit = handleSubmit((data: dataUserDetailUpdate) => {
    dispatch(handleIsLoading({ type: SET_LOADING }));

    mutate(data, {
      onSuccess: (data) => {
        console.log(data)
        queryClient.invalidateQueries({queryKey: ["queryUserDetailGetAll"]})
      },
      onError: (err) => {
        console.log(errorMessage(err))
      },
      onSettled: () => {
        console.log("running")
      }
    })
  });

  return (
    <div className="flex items-center gap-8 p-4">
      <figure className="max-w-56">
        <img
          src={`${baseURLImage}/${profile_picture?.name}`}
          alt={full_name}
        />
      </figure>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-end w-full gap-4 py-6">
        <div className="flex flex-col w-3/4 gap-6 text-sm">
          <Label htmlFor="full_name">
            <span>Nama lengkap</span>
            <input
              {...register("full_name")}
              type="text"
              id="full_name"
              placeholder="Nama lengkap"
              className="w-full px-2 py-1 border rounded "
              defaultValue={full_name}
            />
            {errors.full_name && <span>{errors.full_name.message}</span>}
          </Label>
          <Label htmlFor="birthdate">
            <span>Tanggal lahir</span>
            <input
              {...register("birthdate")}
              type="date"
              id="birthdate"
              className="w-full px-2 py-1 border rounded "
              defaultValue={birthdate}
            />
            {errors.birthdate && <span>{errors.birthdate.message}</span>}
          </Label>

          <Label htmlFor="gender">
            <span>Jenis kelamin</span>
            <select
              {...register("gender")}
              id="gender"
              className="w-full px-2 py-1 border rounded"
              defaultValue={gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <span>{errors.gender.message}</span>}
          </Label>

          <Label htmlFor="address">
            <span>Alamat</span>
            <textarea
              {...register("address")}
              id="address"
              placeholder="Address"
              className="w-full px-2 py-1 border rounded "
              defaultValue={address}
            ></textarea>
            {errors.address && <span>{errors.address.message}</span>}
          </Label>
        </div>
        <div className="flex items-center gap-2 text-sm text-white font-open-sans-regular">
          <button type="reset" className="px-4 py-1 rounded bg-devRed">Reset</button>
          <button type="submit" className="px-4 py-1 rounded bg-devGreen">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
