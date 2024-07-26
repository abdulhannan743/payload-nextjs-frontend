"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import CarousalContainer from "../ui/CarousalContainer";
import { splitHeadingAtWord } from "@/src/utilities/splitTitle";
import { ServiceBlockItemType } from "@/src/types/ServiceBlockTypes";
import { HeroSectionType } from "@/src/types/HeroBlockTypes";
import { RESOURCE_TYPES } from "@/src/constants/common";
import HireDeveloperButton from "../ui/HireDeveloperButton";

type HeroSectionProps = {
  heroSectionData: HeroSectionType;
};

const SlidesCard = (item: ServiceBlockItemType) => (
  <div className="relative">
    <Image
      src={item.image?.url || ""}
      alt={item.image?.alt || "icon"}
      width={item.image?.width}
      height={item.image?.height}
    />
    <div
      className="absolute top-[6%] right-0 lg:right-[10.5%] bg-white rounded-md p-5 flex flex-col items-start m-4 speech-bubble"
      style={{ boxShadow: "0px 0px 8.58px 0px #00000033" }}
    >
      <h6 className="text-primary">{item?.title}</h6>
      <p className="text-xs text-secondary">{item?.description}</p>
    </div>
  </div>
);

function DeveloperHeroSection({ heroSectionData }: HeroSectionProps) {
  const { heading, subHeading } = splitHeadingAtWord(
    heroSectionData.heading,
    "Developer"
  );
  return (
    <div className="container pb-16">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div>
            <div className="relative">
              <h1 className="text-primary">{heading}</h1>
              <img src="/assets/icons/Clip.svg" className="absolute bottom-0" />
            </div>
            <h1 className="text-dark-blue font-normal">{subHeading}</h1>
          </div>
          <p>{heroSectionData.text}</p>
          <div>
            <HireDeveloperButton>
              {heroSectionData.link[0]?.label}
            </HireDeveloperButton>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <CarousalContainer
            className="md:block"
            carousalData={heroSectionData.slides}
            autoPlay={true}
            renderCard={SlidesCard}
          />
        </div>
      </div>
    </div>
  );
}

export default DeveloperHeroSection;
