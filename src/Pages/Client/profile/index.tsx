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
import ProfileUpdate from "./ProfileUpdate";
import useReduxProfile from "../../../hooks/redux/client/useReduxProfile";
import ProfileAction from "./ProfileAction";
import ProfileBanner from "./ProfileBanner";
import ProfileUser from "./ProfileUser";
import ProfileImage from "./ProfileImage";

const PageProfile = () => {
  const { dataUserDetail, loadingUserDetail, errorUserDetail, error } =
    useQueryUserDetail();
  const { profileUpdate } = useReduxProfile();
  const [userDetail, setUserDetail] = useState<dataUserDetail>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (dataUserDetail?.data?.length > 0) {
      const dataProfile: dataUserDetail = dataUserDetail.data[0];
      setUserDetail(dataProfile);
    }
  }, [dataUserDetail, dispatch]);

  if (loadingUserDetail) return <SLoadingData>Loading...</SLoadingData>;

  if (errorUserDetail) return <SErrorData>{error?.message}</SErrorData>;

  return (
    <LayoutSection className="py-4">
      <LayoutContainer className="max-w-6xl">
        <ProfileBanner />
        <div className="flex items-start justify-between px-8 py-4">
          <div className="relative flex flex-col gap-7">
            <ProfileImage
              urlImage={userDetail?.profile_picture.name}
              full_name={userDetail?.full_name}
            />
            <ProfileUser
              username={userDetail?.id_user.username}
              role={userDetail?.id_user.role}
              full_name={userDetail?.full_name}
            />
            <ProfileDate
              createdAt={userDetail?.createdAt}
              updatedAt={userDetail?.updatedAt}
              birthdate={userDetail?.birthdate}
              gender={userDetail?.gender}
            />
          </div>
          <ProfileAction />
        </div>
        {profileUpdate && (
          <ProfileUpdate
            _id={userDetail?._id}
            profile_picture={userDetail?.profile_picture}
            address={userDetail?.address}
            birthdate={userDetail?.birthdate}
            full_name={userDetail?.full_name}
            gender={userDetail?.gender}
          />
        )}
      </LayoutContainer>
    </LayoutSection>
  );
};

export default PageProfile;
