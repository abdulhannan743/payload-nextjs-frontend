import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import DottedLine from "../ui/DottedLine";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";

type AccordianSectionProps = {
  accordianSectionData: ServiceBlockType;
};

function AccordianSection({ accordianSectionData }: AccordianSectionProps) {
  return (
    <div className="bg-[#0D2234] text-white py-16">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col items-baseline w-1/3 gap-4">
          <h1 className="text-4xl font-bold">{accordianSectionData?.title}</h1>
          <DottedLine />
          <p>{accordianSectionData?.description}</p>
        </div>
        <div className="w-1/2">
          <Accordion type="single" collapsible>
            {accordianSectionData?.items.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger
                  closedClassName="text-white"
                  openClassName="text-green-400"
                  className="accordion-trigger text-base sm:text-lg lg:text-xl"
                >
                  <h2 className="text-4xl font-bold">{item?.title}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">{item?.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default AccordianSection;
