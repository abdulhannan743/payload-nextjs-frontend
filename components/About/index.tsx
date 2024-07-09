import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import { AboutLayoutItemType } from "@/src/types/AboutUsTypes";

type AboutProps = {
  aboutPageData: AboutLayoutItemType[];
};

const About = ({ aboutPageData }: AboutProps) => {
  const HeroSectionData = aboutPageData.find(
    (item) => item.blockName === "Hero"
  );

  return <HeroSection HeroSectionData={HeroSectionData} />;
};

export default About;
