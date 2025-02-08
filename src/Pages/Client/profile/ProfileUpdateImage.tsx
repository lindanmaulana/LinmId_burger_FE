import { z } from "zod"
import { baseURLImage } from "../../../utils/axiosInstance"

export interface ProfileUpdateImageProps {
    imgurl?: string
}

const Schema = z.object({
    image: z
      .instanceof(FileList)
      .refine((files) => files.length === 1, {
        message: "Please upload exactly one file.",
      })
      .refine(
        (files) =>
          ["image/jpeg", "image/png", "image/jpg"].includes(files[0]?.type),
        {
          message: "The file must be an image (jpg, png, jpeg, etc).",
        }
      )
      .refine((files) => files[0]?.size <= 3000000, {
        message: "Maximum file size is 3MB.",
      }),
  });


const ProfileUpdateImage = (props: ProfileUpdateImageProps) => {
    const {imgurl} = props
  return (
    <div className="w-1/3">
      <figure className="max-w-64">
        <img src={`${baseURLImage}/${imgurl}`} alt="" />
      </figure>
      <form>

    </form>
    </div>
  )
}

export default ProfileUpdateImage
