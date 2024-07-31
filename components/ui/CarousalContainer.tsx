"use client";
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
  isOneSlidePerView?: boolean;
  shouldFiveSlidesPerViewEnable?: boolean;
};

function CarousalContainer({
  carousalData,
  renderCard,
  className,
  autoPlay = false,
  isOneSlidePerView = true,
  shouldFiveSlidesPerViewEnable = false,
}: CarousalContainerProps) {
  return (
    <Swiper
      className={className}
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={40}
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
      breakpoints={
        isOneSlidePerView
          ? {}
          : {
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: shouldFiveSlidesPerViewEnable ? 5 : 4,
              },
            }
      }
    >
      <style>
        {`
            .swiper-pagination-bullet-active {
              background: #20C897;
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
