import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import OurTeamSection from "./OurTeamSection";

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

  return (
    <>
      <HeroSection HeroSectionData={HeroSectionData} />

      <OurTeamSection TeamSectionData={TeamSectionData} />
    </>
  );
};

export default About;
