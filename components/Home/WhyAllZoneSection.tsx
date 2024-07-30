"use client";
import React from "react";
import Image from "next/image";
import DottedLine from "../ui/DottedLine";
import CarousalContainer from "../ui/CarousalContainer";
import {
  ServiceBlockItemType,
  ServiceBlockType,
} from "@/src/types/ServiceBlockTypes";

type WhyAllZoneSectionProps = {
  whyAllzoneData: ServiceBlockType;
};

const WhyAllzoneCarousalCard = (item: ServiceBlockItemType) => (
  <div
    key={item.id}
    className="bg-light-gray p-6 pt-16 shadow-md rounded-lg flex flex-col text-left gap-5 relative h-[400px] mb-12"
  >
    <Image
      src={`/assets/icons/cardEllipse.svg`}
      alt={`${item.title} icon`}
      className="absolute top-0 right-0"
      width={100}
      height={100}
    />
    <Image
      src={item.image?.url ?? `/assets/icons/${item.iconName}.svg`}
      alt={item.image?.alt ?? `${item.title} icon`}
      width={item.image?.width ?? 60}
      height={item.image?.height ?? 60}
    />
    <p className="text-sm text-gray font-medium max-w-5xl mx-auto">
      {item.description}
    </p>
    <div className="flex justify-center align-center bg-primary rounded-md p-3 mt-auto text-center">
      <h3 className="text-lg font-bold text-white">{item.title}</h3>
    </div>
  </div>
);

function WhyAllZoneSection({ whyAllzoneData }: WhyAllZoneSectionProps) {
  return (
    <div className="container pt-16 mx-auto bg-[#FFFFFFCC]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-3xl mx-auto">
        {whyAllzoneData.title}
      </h1>
      <div className="pb-8">
        <DottedLine />
      </div>
      <CarousalContainer
        carousalData={whyAllzoneData?.items}
        renderCard={WhyAllzoneCarousalCard}
        isOneSlidePerView={false}
      />
    </div>
  );
}

export default WhyAllZoneSection;
