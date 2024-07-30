"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderDescription from "./RenderDescription";
import { Button } from "../ui/button";
import { HeroSectionType } from "@/src/types/HeroBlockTypes";

type TwoColumnSectionProps = {
  twoColumnSectionData: HeroSectionType[];
};

function TwoColumnSection({ twoColumnSectionData }: TwoColumnSectionProps) {
  let backgroundDark;

  return twoColumnSectionData?.map((section, index) => {
    backgroundDark = index % 2 !== 0;
    return (
      <div key={index} className={`${index % 2 !== 0 && "bg-dark-blue"} py-16`}>
        <div
          className={`container flex flex-col md:flex-row justify-between gap-16 md:${
            index % 2 !== 0 && "flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-1/3">
            <Image
              src={section?.Image?.url || ""}
              alt={section?.Image?.alt}
              width={section?.Image?.width}
              height={section?.Image?.height}
              // className={`rounded-${backgroundDark ? "bl" : "br"}-[200px]`}      //to be considered
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <h1
              className={`${backgroundDark ? "text-white" : "text-lightDark"}`}
            >
              {section.heading}
            </h1>
            <RenderDescription
              description={section.text}
              backgroundDark={backgroundDark}
              isBulletSecondaryOnDarkBackground={false}
            />
            <div>
              <Button
                variant={backgroundDark ? "secondary" : "default"}
                className={`text-white`}
              >
                <Link href={section.link[0]?.page?.slug || ""}>
                  {section.link[0]?.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default TwoColumnSection;
