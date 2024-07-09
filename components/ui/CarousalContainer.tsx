import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type CarousalContainerProps = {
  carousalData: any;
  renderCard: (item: any, index: number) => React.ReactNode;
  className?: string;
};

function CarousalContainer({
  carousalData,
  renderCard,
  className,
}: CarousalContainerProps) {
  return (
    <Swiper
      className={`block md:hidden ${className}`}
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
