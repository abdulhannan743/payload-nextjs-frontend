import React from "react";
import ServicesSection from "./ServicesSection";
import WhyAllZoneSection from "./WhyAllZoneSection";
import ClientsSection from "./ClientsSection";

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
  return (
    <div className="bg-white">
      <ServicesSection serviceData={servicesData} />
      <WhyAllZoneSection whyAllzoneData={whyAllzoneData} />
      <ClientsSection clientsData={clientsData} />
    </div>
  );
}
