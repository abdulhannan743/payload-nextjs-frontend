import React from "react";
import ServicesSection from "./ServicesSection";
import WhyAllZoneSection from "./WhyAllZoneSection";

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
  return (
    <div className="bg-white">
      <ServicesSection serviceData={servicesData} />
      <WhyAllZoneSection whyAllzoneData={whyAllzoneData} />
    </div>
  );
}
