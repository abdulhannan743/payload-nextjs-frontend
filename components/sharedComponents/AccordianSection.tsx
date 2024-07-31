import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import DottedLine from "../ui/DottedLine";
import type {
  ServiceBlockItemType,
  ServiceBlockType,
} from "@/src/types/ServiceBlockTypes";
import Image from "next/image";
import DevelopmentModelImage from "../../public/images/DevelopmentModel.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { SlArrowRight } from "react-icons/sl";

type AccordianSectionProps = {
  accordianSectionData: ServiceBlockType | undefined;
  backgroundStyling?: boolean;
  accordianContent?: (item: ServiceBlockItemType) => React.ReactNode;
};

function AccordianSection({
  accordianSectionData,
  backgroundStyling = true,
  accordianContent,
}: AccordianSectionProps) {
  return (
    <div
      className={`py-16 ${
        backgroundStyling && "bg-dark-blue text-white"
      }`}
    >
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
          <div className="w-full md:w-1/2">
            <Accordion type="single" collapsible>
              {accordianSectionData?.items.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger
                    closedClassName="text-white"
                    openClassName="text-green-400"
                    className="accordion-trigger text-base lg:text-xl"
                  >
                    <h2 className="text-4xl font-medium flex ">
                      {(item.image || item.iconName) && (
                        <img
                          src={
                            item?.image?.url ??
                            `/assets/icons/${item.iconName}.svg`
                          }
                          alt={item?.image?.alt ?? `${item.iconName} icon`}
                          className="mr-3"
                        />
                      )}
                      {item?.title}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    {accordianContent?.(item) || (
                      <p className="text-lg">{item?.description}</p>
                    )}
                    <p className="text-lg">{item?.description}</p>
                    {item.link?.length > 0 && (
                      <Link href={`/${item?.link?.[0]?.page?.slug}`}>
                        <Button
                          variant={"outline"}
                          className="mt-4 px-4 py-2 bg-[#0D2234] text-white rounded uppercase text-xs font-normal"
                        >
                          {item?.link?.[0]?.label}
                          <SlArrowRight size={8} className="ml-2" />
                        </Button>
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <div className="container flex lg:flex-row flex-col items-center px-0 justify-between my-4">
            <div className="py-4">
              <Image
                src={accordianSectionData?.image?.url || ""}
                alt={accordianSectionData?.image?.alt || ""}
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
