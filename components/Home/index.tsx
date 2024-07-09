import React from "react";
import ServicesSection from "./ServicesSection";
import WhyAllZoneSection from "./WhyAllZoneSection";
import ClientsSection from "./ClientsSection";
import HeroSection, { HeroSectionType } from "./HeroSection";

type HomeProps = {
  homePageData: any;
};

export default function Home({ homePageData }: HomeProps) {
  const servicesData = homePageData?.find(
    (item: any) => item?.blockName === "Services Section"
  );
  const whyAllzoneData = homePageData?.find(
    (item: any) => item?.blockName === "Why Allzone Section"
  );
  const clientsData = homePageData?.find(
    (item: any) => item?.blockName === "Our Clients"
  );
  const heroData: HeroSectionType[] = homePageData?.filter(
    (item: any) => item?.blockName === "Hero Section"
  );
  return (
    <div className="bg-white">
      <HeroSection heroData={heroData} />
      <ServicesSection serviceData={servicesData} />
      <WhyAllZoneSection whyAllzoneData={whyAllzoneData} />
      <ClientsSection clientsData={clientsData} />
    </div>
  );
}
