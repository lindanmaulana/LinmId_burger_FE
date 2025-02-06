import { image } from "./type-image";

export type gender = "male" | "female";


export interface user {
    _id: string
    username: string
    role: "user" | "admin"
}

export interface userDetail {
  address: string;
  birthdate: string;
  full_name: string;
  gender: gender;
  id_user: user;
  profile_picture: image;
  _id: string;
}

export interface dataUserDetail extends userDetail {
  __v: number;
  createdAt: string;
  updatedAt: string;
}
