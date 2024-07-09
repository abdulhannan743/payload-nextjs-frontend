import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { IndustriesCardProps, AccordionData } from "@/src/types/HomeTypes";

const extractAccordionData = (
  typoPara: IndustriesCardProps["matadata"]["typoPara"]
): AccordionData[] => {
  return typoPara?.map(({ typography, paragraph }) => {
    const question =
      typography?.root?.children?.[0]?.children?.[0]?.text ||
      "No question available";
    const answer =
      paragraph?.root?.children?.[0]?.children?.[0]?.text ||
      "No answer available";
    return { question, answer };
  });
};

const IndustriesFAQCard: React.FC<IndustriesCardProps> = ({
  heading,
  matadata,
}) => {
  const dataArray = extractAccordionData(matadata.typoPara);

  return (
    <div className="py-10 container">
      <h2 className="text-2xl sm:text-3xl font-bold mt-8">{heading}</h2>
      <Accordion type="single" collapsible className="w-full">
        {dataArray?.map((data, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl">
              {data.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base lg:text-lg">
              {data.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default IndustriesFAQCard;
