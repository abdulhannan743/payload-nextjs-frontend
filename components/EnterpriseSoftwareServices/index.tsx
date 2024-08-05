import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import ServicesSection from "../Home/ServicesSection";
import AccordianSection from "../sharedComponents/AccordianSection";
import WhyAllZoneSection from "../Home/WhyAllZoneSection";
import TechnologyStackSection from "./TechnologyStackSection";
import Image from "next/image";

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
        <Image
          src="/assets/images/oval_background.png"
          alt="heroSectionBg"
          width={450}
          height={450}
        />
      </div>
      <HeroSection heroSectionData={heroSectionData} />
      <ServiceInfoSection sectionData={companyInfoData} />
      <AccordianSection accordianSectionData={methodologiesData} />
      <WhyAllZoneSection whyAllzoneData={servicesProviderData} />
      <div className="relative">
        <div className="absolute top-12 md:top-0 lg:-top-4 xl:-top-8 flex items-center justify-center w-full">
          <Image
            src="/assets/images/Technologybg.png"
            alt="Technology Background"
            width={1140}
            height={1140}
          />
        </div>
        <TechnologyStackSection technologyStacksData={technologyStacksData} />
      </div>

      <ServicesSection
        serviceData={enjoyOurServicesData}
        isBackgroundWhite={true}
      />
    </div>
  );
}

export default EnterpriseSoftwareServices;
