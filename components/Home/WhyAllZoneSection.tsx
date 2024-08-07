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
    className="bg-light-gray p-6 pt-16 shadow-md rounded-lg flex flex-col text-left gap-5 relative min-h-[450px] mb-12"
  >
    <Image
      src={`/assets/icons/cardEllipse.svg`}
      alt={`${item.title} icon`}
      className="absolute top-0 right-0 rounded-tr-lg"
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
    <div className="flex justify-center align-center bg-primary rounded-md h-16 p-4 items-center mt-auto text-center">
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
    </div>
  </div>
);

function WhyAllZoneSection({ whyAllzoneData }: WhyAllZoneSectionProps) {
  return (
    <div className="container pt-16 mx-auto bg-[#FFFFFFCC]">
      <h1
        className={`text-center mb-7 mx-auto ${
          !whyAllzoneData?.description && "max-w-3xl"
        }`}
      >
        {whyAllzoneData?.title}
      </h1>
      <div className="pb-7">
        <DottedLine />
      </div>
      <p className="text-gray text-center mb-7 max-w-4xl mx-auto">
        {whyAllzoneData?.description}
      </p>
      <CarousalContainer
        carousalData={whyAllzoneData?.items}
        renderCard={WhyAllzoneCarousalCard}
        isOneSlidePerView={false}
      />
    </div>
  );
}

export default WhyAllZoneSection;
