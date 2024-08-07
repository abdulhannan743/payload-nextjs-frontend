import { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import React from "react";

interface HeaderBannerProps {
  HeaderBannerData: AboutLayoutItemType | undefined;
}

const HeaderBanner = ({ HeaderBannerData }: HeaderBannerProps) => {
  return (
    <div className="bg-primary container rounded-md md:py-12 py-28  text-white  relative overflow-hidden">
      <h1 className="pb-2 text-start md:text-center">
        {HeaderBannerData?.heading}
      </h1>
      <p className="text-2xl text-start md:text-center">
        {HeaderBannerData?.text}
      </p>
      <div className="absolute rounded-full bg-secondary opacity-30 md:w-96 md:h-96 w-60 h-60 md:-bottom-72 -bottom-44  md:-right-24 -right-14 flex items-end justify-center text-white p-4"></div>
      <div className="absolute rounded-full bg-secondary opacity-30 w-10 h-10 md:w-12 md:h-12 md:top-4 md:right-8 top-48 right-6  flex items-end justify-center text-white p-4"></div>

      <div className="absolute rounded-full bg-secondary opacity-30 md:w-96 md:h-96  md:-top-72 -top-28  md:-left-24 -left-10 flex items-end justify-center text-white p-4"></div>
      <div className="absolute rounded-full bg-secondary opacity-30  md:w-12 md:h-12 md:top-24 md:left-36 flex items-end justify-center text-white"></div>
    </div>
  );
};

export default HeaderBanner;
