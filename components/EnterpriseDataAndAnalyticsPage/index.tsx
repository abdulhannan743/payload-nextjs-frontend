import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import Analytics from "../sharedComponents/AnalyticsServices";
import AccordianSection from "../sharedComponents/AccordianSection";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import DataAnalyticsOverview from "../sharedComponents/DataAnalyticsOverview";
import ServicesSection from "../Home/ServicesSection";
type EnterpriseDataAndAnalyticsProps = {
  enterpriseDataPageData: any;
};

function EnterpriseDataAndAnalytics({
  enterpriseDataPageData,
}: EnterpriseDataAndAnalyticsProps) {
  const heroSectionData = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );

  const industries = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Industries Services Section"
  );

  const servicesData = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Services Section"
  );

  const analytics = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Analytics Section"
  );

  const accordianSectionData = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Accordian Section"
  );

  const serviceInfoSectionData = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Service Info Section"
  );

  const analyticsData = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "analytics"
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
      <HeroSection heroSectionData={heroSectionData} />
      <ServiceInfoSection sectionData={serviceInfoSectionData} />
      <AccordianSection accordianSectionData={accordianSectionData} />
      <ServicesSection serviceData={servicesData} />
      <DataAnalyticsOverview analyticsData={analyticsData} />
      <Analytics analyticsData={analytics} />
    </div>
  );
}

export default EnterpriseDataAndAnalytics;
