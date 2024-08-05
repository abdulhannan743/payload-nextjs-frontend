import React from "react";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import Image from "next/image";

type HeroSectionProps = {
  heroSectionData: AboutLayoutItemType | undefined;
};

function Banner({ heroSectionData }: HeroSectionProps) {
  return (
    <div className="container relative px-0 max-auto overflow-hidden rounded-md my-10">
      <div className="container rounded-md bg-black/50 text-white w-full py-20 justify-center relative z-10 flex items-center ">
        <div className="xl:w-3/4 flex flex-col gap-4 md:gap-8 items-center text-center">
          <h2 className="text-4xl text-secondary lg:px-20 xl:px-40">
            {heroSectionData?.heading}
          </h2>
          <p className="text-lg">{heroSectionData?.text}</p>
        </div>
      </div>
      <Image
        className="absolute inset-0 object-cover w-full h-full bg-cover lg:object-fill"
        src={heroSectionData?.Image?.url || ""}
        alt={heroSectionData?.Image?.alt || ""}
        width={heroSectionData?.Image?.width}
        height={heroSectionData?.Image?.height}
      />
    </div>
  );
}

export default Banner;
