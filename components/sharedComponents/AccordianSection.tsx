import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import DottedLine from "../ui/DottedLine";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import Image from "next/image";
import DevelopmentModelImage from "../../public/images/DevelopmentModel.png";

type AccordianSectionProps = {
  accordianSectionData: ServiceBlockType;
  backgroundStyling?: boolean;
};

function AccordianSection({
  accordianSectionData,
  backgroundStyling = true,
}: AccordianSectionProps) {
  return (
    <div className={`py-16 ${backgroundStyling && "bg-dark-blue text-white"}`}>
      <div
        className={`container mx-auto flex ${
          backgroundStyling
            ? "justify-between flex-col md:flex-row"
            : "flex-col"
        }`}
      >
        <div
          className={`flex flex-col gap-4 relative ${
            backgroundStyling
              ? " items-baseline md:w-2/5 lg:w-1/3"
              : "container lg:px-20 px-0 justify-center text-center"
          }`}
        >
          {backgroundStyling ? (
            <></>
          ) : (
            <h2 className="w-full text-9xl text-center font-bold text-[#20C8971A] -inset-y-[5%] -inset-x-[10%] absolute lg:-inset-y-[20%] lg:inset-x-[0%] z-[-1] overflow-hidden text-nowrap">
              Artificial Intelligence
            </h2>
          )}
          <h1
            className={`lg:text-4xl text-3xl font-bold ${
              backgroundStyling ? "" : "text-lightDark"
            }`}
          >
            {accordianSectionData?.title}
          </h1>
          <DottedLine />
          <p
            className={`max-sm:text-base ${
              backgroundStyling ? "" : "text-gray"
            }`}
          >
            {accordianSectionData?.description}
          </p>
        </div>

        {backgroundStyling ? (
          <div className="md:w-2/5 lg:w-1/3">
            <Accordion type="single" collapsible>
              {accordianSectionData?.items.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger
                    closedClassName="text-white"
                    openClassName="text-green-400"
                    className="accordion-trigger text-base lg:text-xl"
                  >
                    <h2 className="text-4xl font-medium">{item?.title}</h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lg">{item?.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <div className="container flex lg:flex-row flex-col items-center px-0 justify-between my-4">
            <div className="py-4">
              <Image
                src={DevelopmentModelImage}
                alt="development model image"
                width={400}
                height={400}
              />
            </div>
            <div className=" w-full px-4 lg:px-0 lg:w-1/2">
              <Accordion type="single" collapsible>
                {accordianSectionData?.items.map((item, index) => (
                  <AccordionItem value={`item-${index + 1}`} key={index}>
                    <AccordionTrigger
                      closedClassName={`${
                        !backgroundStyling ? "text-white" : "text-lightDark"
                      }`}
                      openClassName="text-green-400"
                      className="accordion-trigger text-base lg:text-xl"
                    >
                      <h2 className="lg:text-4xl font-medium text-3xl">
                        {item?.title}
                      </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p
                        className={`lg:text-xl text-lg ${
                          backgroundStyling ? "text-white" : "text-gray"
                        }`}
                      >
                        {item?.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccordianSection;
