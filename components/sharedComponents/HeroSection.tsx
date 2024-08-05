import React from "react";
import { Button } from "../ui/button";
import { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import Image from "next/image";

type HeroSectionProps = {
  heroSectionData: AboutLayoutItemType | undefined;
  isContentCentered?: boolean;
  isAboutUsSection?: boolean;
  isDisplayCircleImage?: boolean;
};

function HeroSection({
  heroSectionData,
  isContentCentered = false,
  isAboutUsSection = false,
  isDisplayCircleImage = true,
}: HeroSectionProps) {
  const renderDescription = (
    description: string,
    isContentCentered: boolean
  ) => {
    const [mainParagraph, ...features] = description.split("\n");
    return (
      <div
        className={`text-md max-w-4xl ${
          isAboutUsSection ? "md:text-4xl" : "md:text-lg"
        }`}
      >
        <p>{mainParagraph}</p>
        <ul className="list-disc ml-5 mt-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container mx-auto w-full ">
      <div className="container relative px-0 max-auto overflow-hidden rounded-md">
        <div
          className={`rounded-md bg-black/50 text-white w-full min-h-[544px] px-6 md:px-16 py-12 relative z-10 flex items-center ${
            isContentCentered ? "justify-center" : ""
          }`}
        >
          <div
            className={`flex flex-col text-2xl gap-4 md:gap-8 max-auto  ${
              isContentCentered ? "items-center" : ""
            }`}
          >
            <h2
              className={`font-bold text-2xl max-w-3xl ${
                isContentCentered ? "text-4xl lg:text-6xl" : " md:text-4xl"
              }`}
            >
              {heroSectionData?.heading}
            </h2>
            {renderDescription(heroSectionData?.text || "", isContentCentered)}
            {!isContentCentered && (
              <div>
                <Button variant="secondary" className="text-white">
                  <a href={heroSectionData?.link[0]?.page?.slug}>
                    {heroSectionData?.link[0]?.label}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
        <Image
          className="absolute inset-0 object-cover w-full h-full bg-cover lg:object-fill"
          src={heroSectionData?.Image?.url || ""}
          alt={heroSectionData?.Image?.alt || ""}
          width={heroSectionData?.Image?.width}
          height={heroSectionData?.Image?.height}
        />
        {isDisplayCircleImage && (
          <div>
            <div className="absolute rounded-full bg-secondary opacity-30 w-96 h-96 md:-bottom-24 -bottom-64  md:-right-32 -right-28 flex items-end justify-center text-white p-4"></div>
            <div className="absolute rounded-full bg-secondary opacity-30 w-10 h-10 lg:w-12 lg:h-12 top-48 right-5 max-sm:inset-y-80 max-sm:inset-x-72 flex items-end justify-center text-white p-4"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
