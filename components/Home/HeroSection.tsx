"use client";
import React from "react";
import Image from "next/image";
import CarousalContainer from "../ui/CarousalContainer";
import { ServiceBlockItemType } from "@/src/types/ServiceBlockTypes";
import { HeroSectionType } from "@/src/types/HeroBlockTypes";
import HireDeveloperButton from "../ui/HireDeveloperButton";
import { useWindowSize } from "@/src/utils/useWindowSizeForResponsiveness";

type HeroSectionProps = {
  heroSectionData: HeroSectionType;
};

const SlidesCard = (item: ServiceBlockItemType) => {
  const windowSize = useWindowSize();
  return (
    <div className="relative flex flex-col lg:flex-row  w-full justify-between items-center container">
      <div className="w-full lg:w-1/3 xl:w-1/2  text-center lg:text-start">
        <div className="relative flex flex-col justify-between">
          <h1 className="text-primary text-4xl font-bold">{item?.title}</h1>
          <img
            src="/assets/icons/Clip.svg"
            className="absolute bottom-0 hidden md:block"
          />
        </div>
        <p className="text-lg font-light my-5">{item?.description}</p>
        <div className="hidden lg:block">
          <HireDeveloperButton>{item.link?.[0]?.label}</HireDeveloperButton>
        </div>
      </div>
      <div className="w-full lg:w-2/3 xl:w-1/2 flex flex-wrap mt-5 justify-center items-center">
        {item.slides.map((slide, index: number) => (
          <div
            key={index}
            className="relative transform transition-transform hover:scale-105 hover:shadow-lg m-2"
            style={{
              margin: "5px",
            }}
          >
            <Image
              src={slide.media.url}
              alt={slide.media.alt}
              width={
                windowSize.width < 768
                  ? slide.media.width / 2
                  : slide.media.width
              }
              height={
                windowSize.width < 768
                  ? slide.media.height / 2
                  : slide.media.height
              }
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="lg:hidden my-3 rounded-full text-base w-36 h-10 bg-primary text-white flex justify-center items-center ">
        <HireDeveloperButton>{item.link?.[0]?.label}</HireDeveloperButton>
      </div>
    </div>
  );
};

function HeroSection({ heroSectionData }: HeroSectionProps) {
  return (
    <CarousalContainer
      className="md:block"
      carousalData={heroSectionData}
      autoPlay={true}
      renderCard={SlidesCard}
    />
  );
}

export default HeroSection;
