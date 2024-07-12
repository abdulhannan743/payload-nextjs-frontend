import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import CoreValuesSection from "./CoreValues";
import AboutCompany from "./AboutCompany";


type AboutProps = {
  aboutPageData: AboutLayoutItemType[];
};

const About = ({ aboutPageData }: AboutProps) => {
  const HeroSectionData = aboutPageData.find(
    (item) => item.blockName === "Hero"
  );

  const CoreValuesSectionData = aboutPageData.find(
    (item) => item.blockName === "Core Values"
  );    

  const AboutCompanyData = aboutPageData.find(
    (item) => item.blockName === "About Company"

);
  return (
    <>
      <HeroSection HeroSectionData={HeroSectionData} />
      <CoreValuesSection CoreValuesSectionData={CoreValuesSectionData} />
      <AboutCompany AboutCompanyData={AboutCompanyData} />
    </>
  );
};

export default About;
