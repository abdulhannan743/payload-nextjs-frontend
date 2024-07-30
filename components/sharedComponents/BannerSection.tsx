import React from "react";
import Image from "next/image";
import { AboutLayoutItemType } from "@/src/types/AboutUsTypes";

type BannerSectionProps = {
  bannerSectionData: AboutLayoutItemType;
};

function BannerSection({ bannerSectionData }: BannerSectionProps) {
  return (
    <div className="w-full py-8 bg-[#1B1A16] flex justify-center items-center">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-white text-center md:text-left">
          {bannerSectionData?.heading}
        </h1>
        <Image
          src={bannerSectionData?.Image?.url || ""}
          alt={bannerSectionData?.Image?.alt || "icon"}
          width={bannerSectionData?.Image?.width}
          height={bannerSectionData?.Image?.height}
        />
      </div>
    </div>
  );
}

export default BannerSection;
