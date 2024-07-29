import React from "react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type CarousalContainerProps = {
  carousalData: any;
  renderCard: (item: any, index: number) => React.ReactNode;
  className?: string;
  autoPlay?: boolean;
  slidesPerView?: number;
};

function CarousalContainer({
  carousalData,
  renderCard,
  className = "block md:hidden",
  autoPlay = false,
  slidesPerView = 1,
}: CarousalContainerProps) {
  return (
    <Swiper
      className={className}
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={40}
      slidesPerView={slidesPerView}
      navigation
      pagination={autoPlay ? false : { clickable: true }}
      scrollbar={autoPlay ? false : { draggable: true }}
      autoplay={
        autoPlay && {
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true,
          reverseDirection: true,
        }
      }
    >
      <style>
        {`
            .swiper-pagination-bullet-active {
              background: #0D4C8F;
            }
        `}
      </style>
      {carousalData?.map((item: any, index: number) => (
        <SwiperSlide key={index}>{renderCard(item, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarousalContainer;
