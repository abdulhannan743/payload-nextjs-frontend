import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import CoreValuesSection from "./CoreValues";

type AboutProps = {
  aboutPageData: AboutLayoutItemType[];
};

const About = ({ aboutPageData }: AboutProps) => {
  const HeroSectionData = aboutPageData.find(
    (item) => item.blockName === "Hero"
  );

  const CoreValuesSectionData = aboutPageData.find(
    (item) => item.blockName === "Leadership"
  );

  return (
    <>
      <HeroSection HeroSectionData={HeroSectionData} />
      <CoreValuesSection
        CoreValuesSectionData={CoreValuesSectionData}
        aboutPageData={aboutPageData}
      />
    </>
  );
};

export default About;
