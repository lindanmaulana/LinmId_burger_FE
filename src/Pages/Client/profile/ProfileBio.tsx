import { useEffect, useState } from "react";
import { helperFormatDate } from "../../../utils/helpers/formatDate";
import { gender } from "../../../types/type-user-detail";

export interface ProfileDateProps {
  createdAt?: string;
  updatedAt?: string;
  birthdate?: string
  gender?: gender
  address?: string
}
const ProfileBio = (props: ProfileDateProps) => {
  const { createdAt, updatedAt, birthdate, gender, address } = props;
  const [dated, setDated] = useState<{created: string, updated: string, birthdate: string}>({created: "", updated: "", birthdate: ""})

  useEffect(() => {
    if(createdAt && updatedAt && birthdate) {
        const create = helperFormatDate(createdAt)
        const update = helperFormatDate(updatedAt)
        const bithdate = helperFormatDate(birthdate)
        setDated({created: create, updated: update, birthdate: bithdate})
    }
  }, [createdAt, updatedAt, setDated, birthdate])


  return (
    <div className="flex items-center w-full gap-10 border-b divide-x-2">
      <div className="flex flex-col gap-2 py-4">
        <h3 className="text-sm text-devGray/80">Tanggal daftar</h3>
        <p>{dated.created}</p>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-sm text-devGray/80">Terakhir di perbarui</h3>
        <p>{dated.updated}</p>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-sm text-devGray/80">Tanggal lahir</h3>
        <p>{birthdate ? birthdate : "-"}</p>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-sm text-devGray/80">Gender</h3>
        <p>{gender}</p>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-sm text-devGray/80">Address</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default ProfileBio;
