import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import ServicesSection from "../Home/ServicesSection";
import AccordianSection from "../sharedComponents/AccordianSection";
import WhyAllZoneSection from "../Home/WhyAllZoneSection";
import TechnologyStackSection from "./TechnologyStackSection";

type EnterpriseSoftwareServicesProps = {
  enterpriseSoftwareServicesData: any;
};

function EnterpriseSoftwareServices({
  enterpriseSoftwareServicesData,
}: EnterpriseSoftwareServicesProps) {
  const heroSectionData = enterpriseSoftwareServicesData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );
  const companyInfoData = enterpriseSoftwareServicesData?.find(
    (item: any) =>
      item?.blockName === "Best Enterprise Software Development Company"
  );
  const methodologiesData = enterpriseSoftwareServicesData?.find(
    (item: any) => item?.blockName === "Startups & Businesses Methodologies"
  );
  const servicesProviderData = enterpriseSoftwareServicesData?.find(
    (item: any) => item?.blockName === "Reasons to Services Provider"
  );
  const enjoyOurServicesData = enterpriseSoftwareServicesData?.find(
    (item: any) => item?.blockName === "Enjoy Our Services"
  );
  const technologyStacksData = enterpriseSoftwareServicesData?.find(
    (item: any) => item?.blockName === "Technology Stacks"
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
      <div className="absolute top-[55%] md:top-[67%] lg:top-[63%] z-[0] w-full h-[2%] md:h-[4%] lg:h-[8%]">
        <img
          src="/assets/images/Technologybg.png"
          alt="Technology Background"
          className="w-full h-full"
        />
      </div>
      <HeroSection heroSectionData={heroSectionData} />
      <ServiceInfoSection sectionData={companyInfoData} />
      <AccordianSection accordianSectionData={methodologiesData} />
      <WhyAllZoneSection whyAllzoneData={servicesProviderData} />
      <TechnologyStackSection technologyStacksData={technologyStacksData} />
      <ServicesSection
        serviceData={enjoyOurServicesData}
        isBackgroundWhite={true}
      />
    </div>
  );
}

export default EnterpriseSoftwareServices;
