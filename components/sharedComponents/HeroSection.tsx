import Image from "next/image";
import React from "react";

const HeroSection = ({ HeroSectionData }: any) => {
  return (
    <div className="container relative px-0 w-[1269px] h-[585px] overflow-hidden">
      <div className="flex flex-col items-center rounded-md justify-center bg-black/50 text-white w-full h-full py-40 relative z-10">
        <h2 className="font-bold text-6xl mb-2.5 ">
          {HeroSectionData.heading}
        </h2>
        <p className="text-4xl font-semibold">{HeroSectionData.text}</p>
      </div>
      <Image
        className="absolute inset-0 object-fit"
        src={HeroSectionData.Image?.url}
        height={HeroSectionData.Image?.height}
        width={HeroSectionData.Image?.width}
        alt={HeroSectionData.Image?.alt}
      />
      <div className="absolute rounded-full bg-green-300 opacity-30 w-[384px] h-[384px] bottom-[-100px] right-[-100px] flex items-end justify-center text-white p-4"></div>
      <div className="absolute rounded-full bg-green-300 opacity-30 w-12 h-12 top-56 right-5 flex items-end justify-center text-white p-4"></div>
    </div>
  );
};

export default HeroSection;
