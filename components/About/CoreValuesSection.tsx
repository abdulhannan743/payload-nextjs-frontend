"use client";

import Image from "next/image";
import React from "react";
import styledBox from "../../public/images/RightBox.png";
import squareVector from "../../public/images/Vector.png";
import dotsStyle from "../../public/images/Group 39932.png";
import Hamburger from "../../public/images/Hamburger.png";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import DottedLine from "../ui/DottedLine";
import coreValuesBg from "../../public/CoreValuesbg.png";

type CoreValuesSectionProps = {
  CoreValuesSectionData: AboutLayoutItemType | undefined;
};

type tabsDataTypes = {
  value: string;
  name: string;
};

const tabsData: tabsDataTypes[] = [
  { value: "01", name: "Leadership" },
  { value: "02", name: "Commitments" },
  { value: "03", name: "Quality" },
  { value: "04", name: "Teamwork" },
  { value: "05", name: "Innovation" },
  { value: "06", name: "Respect" },
];

const CoreValuesSection = ({
  CoreValuesSectionData,
}: CoreValuesSectionProps) => {
  const coreValuesData = CoreValuesSectionData?.content[0].layout;

  const InitialData = coreValuesData?.find(
    (item) => item.blockName === "Leadership"
  );

  const [activeLink, setActiveLink] = React.useState<string>("Leadership");
  const [activeSection, setActiveSection] = React.useState<string>("01");
  const [activeSectionInfo, setActiveSectionInfo] = React.useState<
    AboutLayoutItemType | undefined
  >(InitialData);

  const nextSection = () => {
    const currentIndex = tabsData.findIndex((tab) => tab.name === activeLink);

    const nextIndex = (currentIndex + 1) % tabsData.length;

    const nextTab = tabsData[nextIndex];

    const nextActiveSection = coreValuesData?.find(
      (item) => item.blockName === nextTab.name
    );
    setActiveLink(nextTab.name);
    setActiveSection(nextTab.value);
    setActiveSectionInfo(nextActiveSection);
  };
  const previousSection = () => {
    const currentIndex = tabsData.findIndex((tab) => tab.name === activeLink);

    const prevIndex = (currentIndex - 1 + tabsData.length) % tabsData.length;

    const prevTab = tabsData[prevIndex];

    const prevActiveSection = coreValuesData?.find(
      (item) => item.blockName === prevTab.name
    );
    setActiveLink(prevTab.name);
    setActiveSection(prevTab.value);
    setActiveSectionInfo(prevActiveSection);
  };
  return (
    <div className="relative w-full my-16">
      <div className="flex flex-col align-middle justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-lightDark mb-3">
          {CoreValuesSectionData?.heading}
        </h2>
        <DottedLine />
      </div>
      {/* <div className="container flex flex-row gap-16 items-center justify-between mt-10 overflow-hidden">
        {tabsData.map((tab: tabsDataTypes, index) => (
          <div key={index} className="text-base font-bold relative z-20">
            <p
              className="text-gray cursor-pointer"
              onClick={() => {
                const activeData = coreValuesData?.find(
                  (item) => item.blockName === tab.name
                );
                setActiveLink(tab.name);
                setActiveSection(tab.value);
                setActiveSectionInfo(activeData);
              }}
            >
              <span className="text-primary">{tab.value} </span>
              {tab.name}
            </p>
            <hr
              className={`w-4 h-4 rounded-full border ${
                activeLink === tab.name ? "bg-primary" : "bg-white"
              } mt-4`}
            />
          </div>
        ))}
      </div> */}
      {/* <div className="absolute inset-y-32 w-full h-0.5 bg-[#E9EDF5]"></div> */}
      <div className="container relative flex items-center mx-auto my-5">
        <Image
          src={coreValuesBg}
          alt="Core Values Background"
          // className="w-full h-[360px]"
        />
        {/* <div className="w-full flex flex-col gap-2 absolute -inset-x-36 inset-y-24 items-end">
          <div className="">
            <Image
              className="w-52 h-36"
              src={activeSectionInfo?.image?.url || ""}
              width={activeSectionInfo?.image?.width}
              height={activeSectionInfo?.image?.height}
              alt={activeSectionInfo?.image?.alt || ""}
            />
          </div>
          <div className="w-32 ">
            <div className="lg:w-72 w-52 md:w-64">
              <h2 className="font-bold lg:text-3xl text-base text-lightDark">
                {activeSectionInfo?.heading}
              </h2>
              <p className="text-gray lg:text-xl text-xs">
                {activeSectionInfo?.text}
              </p>
            </div>
          </div>
        </div> */}
      </div>

      <div className="lg:container absolute inset-y-[95%] inset-x-0 w-full flex felx-row justify-around">
        <div className="text-primary cursor-pointer" onClick={previousSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 lg:size-6 lg:w-10 lg:h-10 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="lg:text-lg text-sm font-bold text-secondary">
            {activeSection.split("0")} / 6
          </p>
        </div>
        <div className="text-primary cursor-pointer" onClick={nextSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 lg:size-6 lg:w-10 lg:h-10 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
