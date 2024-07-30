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

const WhyAllzoneCarousalCard = (item: ServiceBlockItemType) => (
  <div className="bg-[#F5F5F5] p-6 pt-20 shadow-md rounded-lg flex flex-col text-left gap-5 relative mb-12">
    <img
      src={`/assets/icons/cardEllipse.svg`}
      alt={`${item.title} icon`}
      className="absolute top-0 right-0 rounded-tr-lg"
    />
    <img
      src={`/assets/icons/${item.iconName}.svg`}
      alt={`${item.title} icon`}
      className="w-14 h-14"
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
    <div className="container pt-16 md:py-16 mx-auto bg-[#FFFFFFCC]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-3xl mx-auto">
        {whyAllzoneData.title}
      </h1>
      <div className="pb-8">
        <DottedLine />
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyAllzoneData.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5F5F5] p-6 pt-20 shadow-md rounded-lg flex flex-col text-left gap-5 relative"
            >
              <img
                src={`/assets/icons/cardEllipse.svg`}
                alt={`${item.title} icon`}
                className="absolute top-0 right-0 rounded-tr-lg"
              />
              <img
                src={`/assets/icons/${item.iconName}.svg`}
                alt={`${item.title} icon`}
                className="w-14 h-14"
              />
              <p className="text-sm text-gray font-medium max-w-5xl mx-auto">
                {item.description}
              </p>
              <div className="flex justify-center align-center bg-primary rounded-md p-3 mt-auto text-center">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CarousalContainer
        carousalData={whyAllzoneData?.items}
        renderCard={WhyAllzoneCarousalCard}
      />
    </div>
  );
}

export default WhyAllZoneSection;
