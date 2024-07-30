import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import TwoColumnSection from "../sharedComponents/TwoColumnSection";
import WhyAllZoneSection from "@/components/Home/WhyAllZoneSection";
import ServicesSection from "@/components/Home/ServicesSection";

type HealthCareProps = {
  healthCareData: AboutLayoutItemType[];
};

const HealthCare = ({ healthCareData }: HealthCareProps) => {
  const HeroSectionData = healthCareData.find(
    (item) => item.blockName === "Hero Section"
  );

  const reasonsToChoose: any = healthCareData.find(
    (item) => item.blockName === "Reasons to choose All zone"
  );

  const SoftwareDevelopmentCompany: any = healthCareData.find(
    (item) => item.blockName === "Healthcare Software Development Company"
  );

  const stepByStepProcess: any = healthCareData.find(
    (item) => item.blockName === "step by step process"
  );

  const TopTierSoftwareDevelopment: any = healthCareData.find(
    (item) => item.blockName === "Top Tier Software Development"
  );

  const OurTechExpertise: any = healthCareData.find(
    (item) => item.blockName === "Our Tech Expertise"
  );

  const twoColumnData = [
    reasonsToChoose,
    SoftwareDevelopmentCompany,
    stepByStepProcess,
  ];

  return (
    <>
      <HeroSection heroSectionData={HeroSectionData} />
      <TwoColumnSection twoColumnSectionData={twoColumnData} />
      <WhyAllZoneSection whyAllzoneData={TopTierSoftwareDevelopment} />
      <ServicesSection
        serviceData={OurTechExpertise}
        isBackgroundWhite={true}
      />
    </>
  );
};

export default HealthCare;
