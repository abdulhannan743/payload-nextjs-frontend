"use client";
import React from "react";
import {
  ServiceBlockItemType,
  ServiceBlockType,
} from "@/src/types/ServiceBlockTypes";
import DottedLine from "../ui/DottedLine";
import CarousalContainer from "../ui/CarousalContainer";

type WhyAllZoneSectionProps = {
  whyAllzoneData: ServiceBlockType;
};

export const WhyAllzoneCarousalCard = (item: ServiceBlockItemType) => (
  <div className="bg-[#F5F5F5] p-6 pt-20 shadow-md rounded-lg flex flex-col text-left gap-5 relative mb-12">
    <img
      src={`/assets/icons/cardEllipse.svg`}
      alt={`${item.title} icon`}
      className="absolute top-0 right-0 rounded-tr-lg"
    />
    <img
      src={item?.image?.url ?? `/assets/icons/${item.iconName}.svg`}
      alt={`${item.title} icon`}
      className="w-14 h-14"
    />
    <p className="text-sm text-gray font-medium max-w-5xl mx-auto min-h-36">
      {item.description}
    </p>
    <div className="flex justify-center align-center bg-primary rounded-md p-3 mt-auto text-center">
      <h3 className="text-lg font-bold text-white">{item.title}</h3>
    </div>
  </div>
);

function WhyAllZoneSection({ whyAllzoneData }: WhyAllZoneSectionProps) {
  return (
    <div className="container pt-16 md:py-16 mx-auto bg-[#FFFFFFCC]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-3xl mx-auto">
        {whyAllzoneData?.title}
      </h1>
      <div className="pb-8">
        <DottedLine />
        <p className="mt-5">{whyAllzoneData?.description}</p>
      </div>

      <CarousalContainer
        carousalData={whyAllzoneData?.items}
        renderCard={WhyAllzoneCarousalCard}
        className="hidden lg:block"
        slidesPerView={4}
      />
      <CarousalContainer
        carousalData={whyAllzoneData?.items}
        renderCard={WhyAllzoneCarousalCard}
        className="hidden md:block lg:hidden"
        slidesPerView={2}
      />
      <CarousalContainer
        carousalData={whyAllzoneData?.items}
        renderCard={WhyAllzoneCarousalCard}
        className="block md:hidden"
        slidesPerView={1}
      />
    </div>
  );
}

export default WhyAllZoneSection;
