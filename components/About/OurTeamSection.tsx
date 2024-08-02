"use client";
import Image from "next/image";
import React from "react";

import type {
  AboutLayoutItemType,
  TeamSectionLayout,
} from "@/src/types/AboutUsTypes";
import DottedLine from "../ui/DottedLine";
import CarousalContainer from "../ui/CarousalContainer";

type OurTeamProps = {
  TeamSectionData: AboutLayoutItemType | TeamSectionLayout | undefined;
};

const TeamCarousalCard = (item: any) => (
  <div className="flex flex-col items-center rounded-lg my-10">
    <div className="shadow-md">
      <Image
        src={item?.image.url || ""}
        width={item?.image.width}
        height={item?.image.height}
        alt={item?.image.alt || ""}
      />
    </div>
    <h3 className="text-xl font-semibold text-primary mt-4">{item?.heading}</h3>
    <p className="text-base text-secondary mt-1 font-medium ">{item.text}</p>
  </div>
);

function isTeamSectionLayout(
  data: AboutLayoutItemType | TeamSectionLayout | undefined
): data is TeamSectionLayout {
  return (data as TeamSectionLayout)?.content !== undefined;
}

const OurTeamSection = ({ TeamSectionData }: OurTeamProps) => {
  if (!isTeamSectionLayout(TeamSectionData)) {
    return null;
  }

  return (
    <div className="container mt-16 mb-14">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2746] mb-3">
          {TeamSectionData?.heading}
        </h2>
        <DottedLine />
      </div>
      <CarousalContainer
        carousalData={TeamSectionData?.content}
        renderCard={TeamCarousalCard}
        shouldFiveSlidesPerViewEnable={false}
        isOneSlidePerView={false}
      />
    </div>
  );
};

export default OurTeamSection;
