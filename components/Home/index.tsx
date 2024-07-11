import React from "react";
import ServicesSection from "./ServicesSection";
import WhyAllZoneSection from "./WhyAllZoneSection";
import ClientsSection from "./ClientsSection";
import PortfolioSection from "./PortfolioSection";
import IndustriesFAQCard from "./IndustriesFAQCard";
import IndustriesServicesCard from "./IndustriesServicesCard";

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
  const portfolioData = homePageData?.find(
    (item: any) => item?.blockName === "Our Work"
  );
  const matadata = homePageData?.find(
    (item: any) => item?.blockName === "Industries FAQ's Section"
  );
  const industries = homePageData?.find(
    (item: any) => item?.blockName === "Industries Services Section"
  );

  return (
    <div className="bg-white">
      <ServicesSection serviceData={servicesData} />
      <IndustriesServicesCard industries={industries} />
      <WhyAllZoneSection whyAllzoneData={whyAllzoneData} />
      <PortfolioSection portfolioData={portfolioData} />
      <ClientsSection clientsData={clientsData} />
      <IndustriesFAQCard matadata={matadata} />
    </div>
  );
}
