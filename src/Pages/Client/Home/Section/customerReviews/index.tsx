import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import LayoutContainer from "../../../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../../../components/layouts/LayoutSection";
import SSwiper from "../../../../../components/swiper";
import STitleSection from "../../../../../components/title/titleSection";
import { useQueryReviews } from "../../../../../hooks/query/reviews/useQueryReviews";
import { review } from "../../../../../types/type-reviews";

const CustomerReviews = () => {
  const { dataReviews, errorReviews, loadingReviews } = useQueryReviews();

  if (loadingReviews) return <p>Loading...</p>;

  if (errorReviews) return <p>Error...</p>;
  return (
    <LayoutSection className="pt-10 pb-20">
      <LayoutContainer className="max-w-6xl">
        <STitleSection className="mb-12 text-center">
          What Say Our Customers
        </STitleSection>
        <SSwiper
          classname="py-20"
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disabledOnInteraction: false }}
          speed={1000}
          slidesPerView={2}
          spaceBetween={30}
        >
          {dataReviews.data.map((review: review) => (
            <SwiperSlide key={review._id} className="">
              <div className="flex flex-col justify-between h-40 gap-4 p-5 text-white rounded line-clamp-3 bg-primary">
                <p className="text-base">{review.comment}</p>
                <h3>Mike Michell</h3>
              </div>
            </SwiperSlide>
          ))}
        </SSwiper>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default CustomerReviews;
