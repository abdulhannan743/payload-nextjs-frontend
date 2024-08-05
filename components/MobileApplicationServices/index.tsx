import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import MobilServices from "./MobilServices";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import ServicesSection from "../Home/ServicesSection";
import AccordianSection from "../sharedComponents/AccordianSection";

type MobileApplicationServicesProps = {
  mobileApplicationServicesData: any;
};

function MobileApplicationServices({
  mobileApplicationServicesData,
}: MobileApplicationServicesProps) {
  const heroSectionData = mobileApplicationServicesData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );
  const companyProcessData = mobileApplicationServicesData?.find(
    (item: any) => item?.blockName === "Company’s Process"
  );
  const mobileApplicationData = mobileApplicationServicesData?.find(
    (item: any) => item?.blockName === "Mobile Application Services"
  );
  const planingToExecutionData = mobileApplicationServicesData?.find(
    (item: any) => item?.blockName === "Planning to Execution"
  );
  const appDevelopmentTeamData = mobileApplicationServicesData?.find(
    (item: any) => item?.blockName === "Expertise of Our App Development Team"
  );

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 z-[-1]">
        <img
          src="/assets/images/oval_background.png"
          alt="heroSectionBg"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-[18.5%] md:top-[22%] lg:top-[21.8%] xl:top-[19.5%] z-[0] w-full">
        <img
          src="/assets/images/AppDevelopmentBG.png"
          alt="Technology Background"
          className="w-full h-full"
        />
      </div>
      <HeroSection heroSectionData={heroSectionData} />
      <ServiceInfoSection sectionData={companyProcessData} />
      <MobilServices mobilServicesData={mobileApplicationData} />
      <AccordianSection
        accordianSectionData={appDevelopmentTeamData}
        backgroundStyling={true}
      />
      <ServicesSection
        serviceData={planingToExecutionData}
        isBackgroundWhite={true}
      />
    </div>
  );
}

export default MobileApplicationServices;
