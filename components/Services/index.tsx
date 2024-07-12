import React from "react";
import ServiceSection from "./ServiceSection";
import HeroSection from "../sharedComponents/HeroSection";

type ServicesProps = {
  servicesPageData: any;
};
function Services({ servicesPageData }: ServicesProps) {
  const heroSectionData = servicesPageData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );
  const softwareServicesData = servicesPageData?.find(
    (item: any) => item?.blockName === "Software Services Section"
  );
  const mobileApplicationData = servicesPageData?.find(
    (item: any) => item?.blockName === "Mobile Application Development"
  );
  const devOpsServicesData = servicesPageData?.find(
    (item: any) => item?.blockName === "DevOps Services"
  );
  const aiServicesData = servicesPageData?.find(
    (item: any) => item?.blockName === "AI Development Services"
  );
  const dataAnalyticsData = servicesPageData?.find(
    (item: any) => item?.blockName === "Data Analytics"
  );
  const iotDevelopmentData = servicesPageData?.find(
    (item: any) => item?.blockName === "IoT Development"
  );
  const hireEngineersData = servicesPageData?.find(
    (item: any) => item?.blockName === "Hire Software Engineers"
  );
  return (
    <div className="bg-white">
      <HeroSection heroSectionData={heroSectionData} />
      <ServiceSection serviceSectionData={softwareServicesData} />
      <ServiceSection
        serviceSectionData={mobileApplicationData}
        backgroundDark={true}
      />
      <ServiceSection serviceSectionData={devOpsServicesData} />
      <ServiceSection
        serviceSectionData={aiServicesData}
        backgroundDark={true}
      />
      <ServiceSection serviceSectionData={dataAnalyticsData} />
      <ServiceSection
        serviceSectionData={iotDevelopmentData}
        backgroundDark={true}
      />
      <ServiceSection serviceSectionData={hireEngineersData} />
    </div>
  );
}

export default Services;
