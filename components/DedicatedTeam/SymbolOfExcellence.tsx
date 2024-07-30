"use client";
import React from "react";
import type {
  ServiceBlockItemType,
  ServiceBlockType,
} from "@/src/types/ServiceBlockTypes";
import DottedLine from "../ui/DottedLine";
import CarousalContainer from "../ui/CarousalContainer";
import ScrollableContainer from "../ui/ScrollableContainer";

type SymbolOfExcellenceProps = {
  SymbolOfExcellenceData: ServiceBlockType;
};

const SymbolOfExcellenceCard = (item: ServiceBlockItemType) => (
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

function SymbolOfExcellence({
  SymbolOfExcellenceData,
}: SymbolOfExcellenceProps) {
  return (
    <div className="container pt-16 md:py-16 mx-auto bg-[#FFFFFFCC]">
      <div className="max-w-5xl mx-auto flex flex-col justify-center gap-6 mb-12 items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          {SymbolOfExcellenceData?.title}
        </h1>
        <DottedLine />
        <p className="text-lg text-gray">
          {SymbolOfExcellenceData?.description}
        </p>
      </div>
      <div className="hidden md:block">
        <ScrollableContainer scrollAxis="x">
          <div className="flex gap-8 p-1 pb-8">
            {SymbolOfExcellenceData?.items.map((item) => (
              <div
                key={item.id}
                className="bg-[#F5F5F5] p-6 pt-20 shadow-md rounded-lg min-w-[350px] max-w-[350px] flex flex-col text-left gap-5 relative"
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
        </ScrollableContainer>
      </div>
      <CarousalContainer
        carousalData={SymbolOfExcellenceData?.items}
        renderCard={SymbolOfExcellenceCard}
      />
    </div>
  );
}

export default SymbolOfExcellence;
