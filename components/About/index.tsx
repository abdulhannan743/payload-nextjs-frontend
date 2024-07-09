import React from "react";
import HeroSection from "../sharedComponents/HeroSection";

type AboutProps = {
  aboutPageData: any;
};

const About = ({ aboutPageData }: AboutProps) => {
  const HeroSectionData = aboutPageData.find(
    (item: any) => item.blockName === "Hero"
  );

  return <HeroSection HeroSectionData={HeroSectionData} />;
};

export default About;
