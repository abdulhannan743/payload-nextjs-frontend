import React from "react";
import Image from "next/image";

export type LogoSectionType = {
  backgroundColor: string;
  slides: {
    id: string;
    media: {
      id: string;
      url: string;
      alt: string;
      width: number;
      height: number;
    };
  }[];
};

type LogoProps = {
  logoData: LogoSectionType;
};

function LogoSection({ logoData }: LogoProps) {
  return (
    <div className="w-full md:h-28 mt-10">
      <div className="hidden lg:block h-28 bg-primary w-full">
        <div className="container flex justify-between items-center h-full">
          {logoData?.slides?.map((slide, index) => (
            <div key={index}>
              <Image
                src={slide?.media?.url}
                alt={slide?.media?.alt}
                width={slide?.media?.width}
                height={slide?.media?.height}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex lg:hidden overflow-hidden items-center">
        <div className="px-8 flex animate-marquee whitespace-nowrap">
          {logoData?.slides?.map((slide, index) => (
            <div key={index} className="w-40">
              <Image
                src={slide.media?.url}
                alt={slide.media?.alt}
                width={slide.media.width}
                height={slide.media.height}
                className="object-cover mx-5"
              />
            </div>
          ))}
        </div>
        <div className=" px-8 flex absolute top-0 animate-marquee2 whitespace-nowrap">
          {logoData?.slides?.map((slide, index) => (
            <div key={index} className="w-40">
              <Image
                src={slide.media?.url}
                alt={slide.media?.alt}
                width={slide.media.width}
                height={slide.media.height}
                className="object-cover mx-5"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
