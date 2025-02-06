import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SErrorData from "../../../components/error/ErrorData";
import LayoutContainer from "../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../components/layouts/LayoutSection";
import SLoadingData from "../../../components/loading/LoadingData";
import useQueryUserDetail from "../../../hooks/query/users/useQueryUserDetail";
import { AppDispatch } from "../../../redux/store";
import { dataUserDetail } from "../../../types/type-user-detail";
import ProfileDate from "./ProfileDate";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";
import ProfileUpdate from "./ProfileUpdate";
import useReduxProfile from "../../../hooks/redux/client/useReduxProfile";

const PageProfile = () => {
  const { dataUserDetail, loadingUserDetail, errorUserDetail, error } =
    useQueryUserDetail();
  const [userDetail, setUserDetail] = useState<dataUserDetail>();
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (dataUserDetail?.data?.length > 0) {
      const dataProfile: dataUserDetail = dataUserDetail.data[0]      
      setUserDetail(dataProfile);
    }
  }, [dataUserDetail, dispatch]);

  if (loadingUserDetail) return <SLoadingData>Loading...</SLoadingData>;

  if (errorUserDetail) return <SErrorData>{error?.message}</SErrorData>;

  return (
    <LayoutSection className="py-4">
      <LayoutContainer className="max-w-6xl">
        <div>
          <ProfileImage urlImage={userDetail?.profile_picture.name} full_name={userDetail?.full_name} />
          <ProfileName full_name={userDetail?.full_name} username={userDetail?.id_user.username} role={userDetail?.id_user.role} />
          <ProfileDate createdAt={userDetail?.createdAt} updatedAt={userDetail?.updatedAt} birthdate={userDetail?.birthdate} gender={userDetail?.gender}  />
          <ProfileUpdate />
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default PageProfile;
