import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { SwiperModule } from "swiper/types";
import "swiper/swiper-bundle.css";
// coverflow type
type TCoverflowEffect = {
  rotate?: number;
  stretch?: number;
  depth?: number;
  modifier?: number;
  slideShadows?: boolean;
};

type TAutoPlay = {
  delay?: number;
  disabledOnInteraction?: boolean;
};

type TPagination = {
    dynamicBullets?: boolean
    clickable?: boolean
}

type TModules = SwiperModule[];

type TSwiperProps = {
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  centeredSlides?: boolean;
  loop?: boolean;
  effect?: string;
  onSlideChange?: () => void;
  onSwiper?: () => void;
  children?: ReactNode;
  classname?: string;
  autoplay?: TAutoPlay;
  modules?: TModules;
  speed?: number;
  pagination?: TPagination
  //   effect
  coverflowEffect?: TCoverflowEffect;
};

const SSwiper = (props: TSwiperProps) => {
  const {
    spaceBetween,
    slidesPerView,
    centeredSlides,
    loop,
    effect,
    onSlideChange,
    onSwiper,
    children,
    classname,
    autoplay,
    modules,
    speed,
    coverflowEffect,
    pagination
  } = props;
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
      centeredSlides={centeredSlides}
      loop={loop}
      effect={effect}
      autoplay={autoplay}
      modules={modules}
      speed={speed}
      coverflowEffect={coverflowEffect}
      pagination={pagination}
      className={classname}
    >
      {children}
    </Swiper>
  );
};

export default SSwiper;
