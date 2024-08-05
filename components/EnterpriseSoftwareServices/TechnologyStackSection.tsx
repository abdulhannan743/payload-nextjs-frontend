"use client";
import React from "react";
import DottedLine from "../ui/DottedLine";
import { ServiceType } from "@/src/types/ServicesTypes";

type TechnologyStackSectionProps = {
  technologyStacksData: ServiceType;
};
function TechnologyStackSection({
  technologyStacksData,
}: TechnologyStackSectionProps) {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {technologyStacksData?.title}
        </h1>
        <DottedLine />
        <p className="text-lg text-center text-gray">
          {technologyStacksData?.description}
        </p>
      </div>
      <div className="md:bg-secondary-light md:rounded-full flex flex-col md:flex-row md:justify-evenly md:mb-16 gap-4 md:gap-0 md:items-center">
        {technologyStacksData.tabs.map((tab, index) => (
          <div key={tab.id}>
            <div className="bg-secondary-light md:bg-transparent rounded-full flex justify-center items-center">
              <button
                className={`p-3 rounded-full text-lg font-medium text-nowrap ${
                  activeTab === index
                    ? "bg-primary text-white"
                    : "text-dark-blue"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <h6>{tab.heading}</h6>
              </button>
            </div>
            {index === activeTab && (
              <div className="flex flex-col items-center gap-2 md:hidden mt-4">
                {tab.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <img src={item.image?.url} alt={item.title} />
                    <h3 className="text-lg text-dark-blue">{item.title}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-end justify-evenly">
        {technologyStacksData.tabs[activeTab]?.items.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-6">
            <img src={item.image?.url} alt={item.title} />
            <h3 className="text-lg text-dark-blue">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologyStackSection;
