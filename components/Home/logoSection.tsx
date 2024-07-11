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
  logoData = {
    backgroundColor: "blue",
    slides: [
      {
        id: "668fb9b4b4e0c6e9c906fdf7",
        media: {
          id: "668fb8e611c881027bc02974",
          url: "http://localhost:4000/media/All_Zone-transformed 1.png",
          alt: "1",
          width: 158,
          height: 48,
        },
      },
      {
        id: "668fb9bcb4e0c6e9c906fdf8",
        media: {
          id: "668fb8f911c881027bc02992",
          url: "http://localhost:4000/media/All_Zone5-transformed 1.png",
          alt: "2",
          width: 143,
          height: 38,
        },
      },
      {
        id: "668fb9c4b4e0c6e9c906fdf9",
        media: {
          id: "668fb90f11c881027bc029b0",
          url: "http://localhost:4000/media/White 1.png",
          alt: "3",
          width: 72,
          height: 46,
        },
      },
      {
        id: "668fb9cbb4e0c6e9c906fdfa",
        media: {
          id: "668fb94e11c881027bc029da",
          url: "http://localhost:4000/media/Group.png",
          alt: "4",
          width: 140,
          height: 26,
        },
      },
      {
        id: "668fb9d1b4e0c6e9c906fdfb",
        media: {
          id: "668fb96911c881027bc029f8",
          url: "http://localhost:4000/media/EM_logo_color_white_H 1.png",
          alt: "5",
          width: 119,
          height: 30,
        },
      },
      {
        id: "668fb9d6b4e0c6e9c906fdfc",
        media: {
          id: "668fb97a11c881027bc02a12",
          url: "http://localhost:4000/media/Asset-1-4 1.png",
          alt: "6",
          width: 86,
          height: 35,
        },
      },
    ],
  };
  return (
    <div className="w-full h-[105px] bg-[#0D4C8F] flex justify-center items-center px-64">
      <div className="w-full flex justify-between items-center px-4">
        {logoData.slides.map((slide) => (
          <div key={slide.id} className="m-4">
            <Image
              src={slide.media.url}
              alt={slide.media.alt}
              width={slide.media.width}
              height={slide.media.height}
              layout="fixed"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoSection;
