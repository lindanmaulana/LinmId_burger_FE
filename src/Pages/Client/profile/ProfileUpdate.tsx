import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IoReload } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { z } from "zod";
import useReduxLoading from "../../../hooks/redux/useReduxLoading";
import { handleSetAlert } from "../../../redux/slices/alertMessage";
import { handleProfileUpdate } from "../../../redux/slices/client/Profile.features";
import { errorMessage } from "../../../redux/slices/errorMessage";
import {
  CLEAR_LOADING,
  handleIsLoading,
  SET_LOADING,
} from "../../../redux/slices/isLoading";
import { AppDispatch } from "../../../redux/store";
import { image } from "../../../types/type-image";
import { baseURLImage } from "../../../utils/axiosInstance";
import {
  dataUserDetailUpdate,
  ServiceUserDetailUpdate,
} from "../../../utils/users";
import Label from "./components/form/Label";
import { ServiceImageCreate } from "../../../utils/images";
import SErrorData from "../../../components/error/ErrorData";

const schema = z.object({
  full_name: z.string().optional(),
  birthdate: z.string().optional(),
  gender: z.string().optional(),
  address: z.string().optional(),
  profile_picture: z
    .union([
      z
        .instanceof(FileList)
        .refine((files) => files.length === 0 || files.length === 1, {
          message: "Please upload exactly one file.",
        })
        .superRefine((files, ctx) => {
          if (files.length === 1) {
            const file = files[0];
            if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "The file must be an image (jpg, png, jpeg, etc).",
              });
            }
            if (file.size > 3000000) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Maximum file size is 3MB.",
              });
            }
          }
        }),
      z.undefined(),
      z.null(),
      z.literal(""),
    ])
    .optional(),
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

export interface userDetailPayloadUpdate {
  full_name?: string;
  birthdate?: string;
  gender?: string;
  address?: string;
  profile_picture?: string;
}

const ProfileUpdate = (props: ProfileUpdateProps) => {
  const {
    _id,
    address,
    birthdate,
    full_name,
    gender,
    profile_picture: userImage,
  } = props;
  const { loading } = useReduxLoading();
  const dispatch = useDispatch<AppDispatch>();
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<schemaUserDetail>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["mutateImageCreate"],
    mutationFn: (file: File) => ServiceImageCreate(file),
  });

  const { mutate } = useMutation({
    mutationKey: ["mutateUserDetailUpdate"],
    mutationFn: (data: dataUserDetailUpdate) =>
      ServiceUserDetailUpdate({ id: _id, data }),
  });

  const handleFormSubmit = handleSubmit(async (data: schemaUserDetail) => {
    const { address, birthdate, full_name, gender, profile_picture } = data;
    dispatch(handleIsLoading({ type: SET_LOADING }));
    let id_image = userImage?._id;

    if (profile_picture instanceof FileList && profile_picture.length > 0) {
      const file = profile_picture[0];
      
      await mutateAsync(file, {
        onSuccess: (data) => {
          id_image = data.data._id;
        },
        onError: (err) => {
          alert(errorMessage(err));
        },
      });
    }

    const payload: userDetailPayloadUpdate = {
      address,
      birthdate,
      full_name,
      gender,
    };
    
    if (profile_picture instanceof FileList && profile_picture.length > 0) {
      payload.profile_picture = id_image;
    }

    await mutate(payload, {
      onSuccess: (data) => {
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
        dispatch(
          handleSetAlert({
            active: true,
            message: data.message,
            transition: true,
            type: "success",
          })
        );
        queryClient.invalidateQueries({
          queryKey: ["queryUserDetailGetAll"],
        });
        reset();
        dispatch(handleProfileUpdate());
      },
      onError: (err) => {
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
        dispatch(
          handleSetAlert({
            active: true,
            message: errorMessage(err),
            transition: true,
            type: "error",
          })
        );
      },
      onSettled: () => {
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
      },
    });
  });

  return (
    <div className="flex items-center w-full gap-8 p-4">
      <form onSubmit={handleFormSubmit} className="w-full gap-4 py-6">
        <div className="flex justify-center w-full gap-6 text-sm">
          <label htmlFor="profile_picture" className="flex flex-col gap-2">
            <figure className="max-w-64">
              <img src={`${baseURLImage}/${userImage?.name}`} alt="" />
            </figure>
            <input
              {...register("profile_picture")}
              type="file"
              id="profile_picture"
            />
            {errors.profile_picture && (
              <SErrorData>{errors.profile_picture.message}</SErrorData>
            )}
          </label>
          <div className="flex flex-col gap-6">
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
              {errors.full_name && <SErrorData>{errors.full_name.message}</SErrorData>}
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
              {errors.birthdate && <SErrorData>{errors.birthdate.message}</SErrorData>}
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
              {errors.gender && <SErrorData>{errors.gender.message}</SErrorData>}
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
              {errors.address && <SErrorData>{errors.address.message}</SErrorData>}
            </Label>
            <div className="flex items-center gap-2 text-sm text-white font-open-sans-regular">
              <button type="reset" className="px-4 py-1 rounded bg-devRed">
                Reset
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-1 rounded bg-devGreen"
              >
                {loading ? (
                  <IoReload className="text-xl w-11 animate-spin" />
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
