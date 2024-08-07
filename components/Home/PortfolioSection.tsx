"use client";
import React from "react";
import Link from "next/link";
import { ArrowRightIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import DottedLine from "../ui/DottedLine";
import CarousalContainer from "../ui/CarousalContainer";
import {
  ServiceBlockItemType,
  ServiceBlockType,
} from "@/src/types/ServiceBlockTypes";
import Image from "next/image";

type PortfolioProps = {
  portfolioData: ServiceBlockType;
};

const PortfolioCarousalCard = (item: ServiceBlockItemType) => (
  <div className="rounded-lg overflow-hidden">
    <Link
      href={item.link?.[0]?.url || "#"}
      className="block hover:text-primary hover:underline"
    >
      <div className="pb-12">
      <Image
          src={item?.image?.url || ""}
          alt={item?.image?.alt || ""}
          width={item?.image?.width}
          height={item?.image?.height}
          className="w-full h-auto mb-3 object-cover"
        />
        <div className="flex items-center justify-between">
          <h4 className="text-md font-semibold">{item.link?.[0]?.label}</h4>
          <ArrowRightIcon className="w-6 h-6" />
        </div>
      </div>
    </Link>
  </div>
);

function PortfolioSection({ portfolioData }: PortfolioProps) {
  return (
    <div className="container py-12 mx-auto">
      <div className="text-left mb-8 md:mb-12 flex flex-col gap-4  max-w-3xl">
        <h3 className="text-primary text-lg font-bold uppercase">
          {portfolioData?.blockName}
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-lightDark">
          {portfolioData?.title}
        </h1>
        <div className="flex">
          <DottedLine />
        </div>
        <p className="text-lg text-[#1F1F1F]">{portfolioData.description}</p>
      </div>
      <Link
        href={portfolioData?.link?.[0]?.url || "#"}
        className="hover:underline block md:hidden mb-8"
      >
        <div className="flex items-center gap-1">
          <TriangleRightIcon className="w-6 h-6 text-primary" />
          <p className="text-lg font-semibold text-black">
            {portfolioData?.link?.[0]?.label}
          </p>
        </div>
      </Link>
      <CarousalContainer
        carousalData={portfolioData?.items}
        renderCard={PortfolioCarousalCard}
        isOneSlidePerView={false}
        shouldFiveSlidesPerViewEnable={true}
      />
      <Link
        href={portfolioData?.link?.[0]?.url || "#"}
        className="hover:underline hidden md:block"
      >
        <div className="flex items-center gap-1">
          <TriangleRightIcon className="w-6 h-6 text-primary" />
          <p className="text-lg font-semibold text-lightDark">
            {portfolioData?.link?.[0]?.label}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioSection;
