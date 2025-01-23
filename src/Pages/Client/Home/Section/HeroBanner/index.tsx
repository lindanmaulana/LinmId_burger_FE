import { SwiperSlide } from "swiper/react";
import { ImageBurger } from "../../../../../assets/images/burger";
import ButtonLink from "../../../../../Components/Button/ButtonLink";
import LayoutContainer from "../../../../../Components/Layouts/LayoutContainer";
import LayoutSection from "../../../../../Components/Layouts/LayoutSection";
import SSwiper from "../../../../../Components/Swiper";
import { dataBannerList } from "./types";
import { Autoplay, Pagination } from "swiper/modules";

const HeroBanner = () => {
  return (
    <LayoutSection
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${ImageBurger.heroBg})` }}
    >
      <LayoutContainer className="h-screen max-w-6xl">
        <SSwiper
          classname="w-full h-full"
          pagination={{ dynamicBullets: true, clickable: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{delay: 3000, disabledOnInteraction: false}}
          speed={1000}
        >
          {dataBannerList?.map((banner) => (
            <SwiperSlide key={banner.id} className="w-full h-full">
              <div className="flex flex-col items-start justify-center w-full h-full gap-6 ">
                <h2 className="text-5xl text-white font-dancing-script-bold">
                  {banner.title}
                </h2>
                <p className="text-white max-w-[500px]">{banner.description}</p>
                <ButtonLink to="" className="py-3 text-center px-9 min-w-40">
                  Order Now
                </ButtonLink>
              </div>
            </SwiperSlide>
          ))}
        </SSwiper>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default HeroBanner;
