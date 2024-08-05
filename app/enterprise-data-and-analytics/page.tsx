import React from "react";
import { Metadata } from "next";

import HeroSection from "@/components/sharedComponents/HeroSection";
import ServiceInfoSection from "@/components/sharedComponents/ServiceInfoSection";
import AccordianSection from "@/components/sharedComponents/AccordianSection";
import ServicesSection from "@/components/Home/ServicesSection";
import DataAnalyticsOverview from "@/components/sharedComponents/DataAnalyticsOverview";
import Analytics from "@/components/sharedComponents/AnalyticsServices";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { getPageURL } from "@/src/utils";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import { DataAnalyticsOverviewType } from "@/src/types/DataAnalyticsTypes";
import Image from "next/image";
import { fetchMetadata } from "@/src/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.ENTERPRISE_DATA_AND_ANALYTICS);
  return fetchMetadata(url);
}

async function EnterpriseDataAndAnalyticsPage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.ENTERPRISE_DATA_AND_ANALYTICS),
    method: "GET",
  });
  const enterpriseDataPageData = response?.docs[0].layout;

  const heroSectionData: AboutLayoutItemType = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Hero Section"
  );

  const servicesData: ServiceBlockType = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Services Section"
  );

  const analytics: AboutLayoutItemType = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Analytics Section"
  );

  const accordianSectionData: ServiceBlockType = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Accordian Section"
  );

  const serviceInfoSectionData: ServiceBlockType = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "Service Info Section"
  );

  const analyticsData: DataAnalyticsOverviewType = enterpriseDataPageData?.find(
    (item: any) => item?.blockName === "analytics"
  );

  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <div className="relative">
        <div className="absolute bottom-10 right-0 z-[-1]">
          <Image
            src="/assets/images/oval_background.png"
            alt="heroSectionBg"
            width={430}
            height={430}
          />
        </div>
        <ServiceInfoSection sectionData={serviceInfoSectionData} />
      </div>

      <AccordianSection accordianSectionData={accordianSectionData} />
      <div className="relative">
        <div className="absolute w-full flex justify-center">
          <h2 className="w-full text-9xl text-center font-bold text-[#20C8971A] overflow-hidden text-nowrap">
            Data Analytics
          </h2>
        </div>
        <ServicesSection serviceData={servicesData} isBackgroundWhite={true} />
      </div>
      <DataAnalyticsOverview analyticsData={analyticsData} />
      <Analytics analyticsData={analytics} />
    </div>
  );
}

export default EnterpriseDataAndAnalyticsPage;
