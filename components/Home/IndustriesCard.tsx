import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionData, IndustriesCardProps } from "@/src/types/HomeTypes";

const extractAccordionData = (matadata: any): AccordionData[] => {
  return matadata.typoPara.map((item: any) => {
    const question = item.typography.root.children[0].children[0].text;
    const answer = item.paragraph.root.children[0].children[0].text;
    return { question, answer };
  });
};

const IndustriesCard = ({ heading, matadata }: IndustriesCardProps) => {
  const dataArray: AccordionData[] = extractAccordionData(matadata);

  console.log("matadata", dataArray);
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mt-8">{heading}</h2>
      <Accordion type="single" collapsible className="w-full">
        {dataArray.map((data, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{data.question}</AccordionTrigger>
            <AccordionContent>{data.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default IndustriesCard;
