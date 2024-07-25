import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import OurTeamSection from "./OurTeamSection";
import CoreValuesSection from "./CoreValues";
import AboutCompany from "./AboutCompany";
import Analytics from "../sharedComponents/AnalyticsServices";
import OurCultureSection from "./OurCulture";

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

  const analyticsData = aboutPageData.find(
    (item) => item.blockName === "analytics"
  );

  const OurCultureSectionData = aboutPageData.find(
    (item) => item.blockName === "Our Culture"
  );

  return (
    <>
      <HeroSection
        heroSectionData={HeroSectionData}
        isContentCentered={true}
        isAboutUsSection={true}
      />
      <AboutCompany AboutCompanyData={AboutCompanyData} />
      <CoreValuesSection CoreValuesSectionData={CoreValuesSectionData} />
      <Analytics analyticsData={analyticsData} />
      <OurTeamSection TeamSectionData={TeamSectionData} />
      <OurCultureSection OurCultureSectionData={OurCultureSectionData} />
    </>
  );
};

export default About;
