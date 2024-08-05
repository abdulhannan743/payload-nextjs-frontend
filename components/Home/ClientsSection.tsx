"use client";
import React from "react";
import clsx from "clsx";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import Image from "next/image";

type ClientsSectionProps = {
  clientsData: ServiceBlockType;
};

function ClientsSection({ clientsData }: ClientsSectionProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? clientsData?.items?.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === clientsData?.items?.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#0D2234] py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            {clientsData?.title}
          </h1>
          <p className="text-base text-center text-white mx-auto max-w-2xl">
            {clientsData?.description}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="text-white hidden md:block"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            {clientsData?.items.map((item, index) => (
              <div
                key={item.id}
                className={clsx(
                  "rounded-full overflow-hidden h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 transition-transform duration-500",
                  {
                    "transform scale-100": index === activeIndex,
                    "transform scale-75 opacity-50":
                      index !== activeIndex && activeIndex !== null,
                  }
                )}
              >
                <Image
                  src={item?.image?.url || ""}
                  alt={item?.image?.alt || ""}
                  width={item?.image?.width}
                  height={item?.image?.height}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
            <button
              onClick={handleNext}
              disabled={activeIndex === clientsData?.items?.length - 1}
              className="text-white hidden md:block"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center text-white flex flex-col items-center">
            <p className="text-sm max-w-2xl mx-auto mb-3">
              {clientsData?.items[activeIndex]?.description}
            </p>
            <div className="flex justify-between align-center w-full md:w-auto">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="text-white md:hidden"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  {clientsData?.items[activeIndex]?.title}
                </h3>
                <p className="text-sm text-secondary font-bold">
                  {clientsData?.items[activeIndex]?.iconName}
                </p>
              </div>
              <button
                onClick={handleNext}
                disabled={activeIndex === clientsData?.items?.length - 1}
                className="text-white md:hidden"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsSection;
