import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import AboutCompany from "./AboutCompany";

type AboutProps = {
  aboutPageData: AboutLayoutItemType[];
};

const About = ({ aboutPageData }: AboutProps) => {
  const HeroSectionData = aboutPageData.find(
    (item) => item.blockName === "Hero"
  );

  const AboutCompanyData = aboutPageData.find(
    (item) => item.blockName === "About Company"
  );

  return (
    <>
      <HeroSection HeroSectionData={HeroSectionData} />
      <AboutCompany AboutCompanyData={AboutCompanyData} />
    </>
  );
};

export default About;
