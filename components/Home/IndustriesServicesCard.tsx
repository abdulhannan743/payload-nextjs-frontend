import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import { IndustriesProps } from "@/src/types/HomeTypes";

function IndustriesServicesCard({ industries }: IndustriesProps) {
  return (
    <div className="h-auto bg-blue-900 text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row gap-20">
        <h1 className="text-4xl font-bold lg:w-1/3">{industries.heading}</h1>
        <div className="lg:w-2/3">
          <Accordion type="single" collapsible>
            {industries.content.map((item, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                key={index}
                className="text-white"
              >
                <AccordionTrigger
                  closedClassName="text-white"
                  openClassName="text-green-500"
                  className="text-base sm:text-lg lg:text-xl"
                >
                  <div className="flex items-center">
                    <Image
                      src={item.logo.url}
                      alt={item.logo.alt}
                      width={item.logo.width}
                      height={item.logo.height}
                    />
                    {item.typography.root.children[0].children[0].text}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-9">
                    {item.paragraph.root.children.map((para, i) => (
                      <p key={i}>
                        {para.children.map((text, j) => (
                          <React.Fragment key={j}>
                            {text.text}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    ))}
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                      {item.link[0].label}
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default IndustriesServicesCard;
