import { useEffect, useState } from "react";
import { helperFormatDate } from "../../../utils/helpers/formatDate";

export interface ProfileDateProps {
  createdAt?: string;
  updatedAt?: string;
  birthdate?: string
  gender?: "male" | "female"
}
const ProfileDate = (props: ProfileDateProps) => {
  const { createdAt, updatedAt, birthdate, gender } = props;
  const [dated, setDated] = useState<{created: string, updated: string}>({created: "", updated: ""})

  useEffect(() => {
    if(createdAt && updatedAt) {
        const create = helperFormatDate(createdAt)
        const update = helperFormatDate(updatedAt)
        setDated({created: create, updated: update})
    }
  }, [createdAt, updatedAt, setDated])


  return (
    <div className="flex items-center gap-10 py-5 border-b divide-x-2">
      <div className="flex flex-col gap-2 px-4">
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
    </div>
  );
};

export default ProfileDate;
