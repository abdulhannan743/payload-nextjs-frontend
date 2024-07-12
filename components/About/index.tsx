import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import OurTeamSection from "./OurTeamSection";
import CoreValuesSection from "./CoreValues";
import AboutCompany from "./AboutCompany";

type AboutProps = {
  aboutPageData: AboutLayoutItemType[];
};

const About = ({ aboutPageData }: AboutProps) => {
  const HeroSectionData = aboutPageData.find(
    (item) => item.blockName === "Hero"
  );

  const TeamSectionData = aboutPageData.find(
    (item) => item.blockName === "Our Team"
  );

  const CoreValuesSectionData = aboutPageData.find(
    (item) => item.blockName === "Core Values"
  );

  const AboutCompanyData = aboutPageData.find(
    (item) => item.blockName === "About Company"
  );
  return (
    <>
      <HeroSection heroSectionData={HeroSectionData} isContentCentered={true} />
      <AboutCompany AboutCompanyData={AboutCompanyData} />
      <CoreValuesSection CoreValuesSectionData={CoreValuesSectionData} />
      <OurTeamSection TeamSectionData={TeamSectionData} />
    </>
  );
};

export default About;
