"use client";
import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import AccordianSection from "../sharedComponents/AccordianSection";
import WhyAllZoneSection from "../Home/WhyAllZoneSection";

interface DevopsProps {
  DevopsPageData: any;
}
const Devops = ({ DevopsPageData }: DevopsProps) => {
  const heroSectionData = DevopsPageData?.find(
    (item: any) => item?.blockName === "Hero"
  );
  const servicesSectionData = DevopsPageData?.find(
    (item: any) => item?.blockName === "services"
  );
  const DevelopmentSectionData = DevopsPageData?.find(
    (item: any) => item?.blockName === "development"
  );
  const whyAllZoneSectionData = DevopsPageData?.find(
    (item: any) => item?.blockName === "whyallzone"
  );
  const whyChoseSectionData = DevopsPageData?.find(
    (item: any) => item?.blockName === "whychose"
  );
  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <ServiceInfoSection sectionData={servicesSectionData} />
      <div className="relative  ">
        <div className="absolute w-full flex justify-center">
          <img src="/assets/images/devops.png" alt="devops" />
        </div>
        <AccordianSection
          accordianSectionData={DevelopmentSectionData}
          backgroundStyling={false}
        />
      </div>
      <WhyAllZoneSection whyAllzoneData={whyAllZoneSectionData} />
      <HeroSection
        heroSectionData={whyChoseSectionData}
        isContentCentered={true}
        isDisplayCircleImage={false}
      />
    </div>
  );
};

export default Devops;
