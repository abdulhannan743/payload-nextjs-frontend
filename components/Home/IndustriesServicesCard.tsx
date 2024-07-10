import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import type { IndustriesProps } from "@/src/types/HomeTypes";
import { SlArrowRight } from "react-icons/sl";
import { Button } from "../ui/button";
import DottedLine from "../ui/DottedLine";
import Link from "next/link";

function IndustriesServicesCard({ industries }: IndustriesProps) {
  return (
    <div className="h-auto bg-[#0D2234] text-white py-14">
      <div className="container mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col items-baseline">
          <h1 className="text-4xl font-bold lg:max-w-lg mb-6 mt-2">
            {industries?.heading}
          </h1>
          <DottedLine />
        </div>
        <div className="lg:w-2/3">
          <Accordion type="single" collapsible>
            {industries?.content.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger
                  closedClassName="text-white"
                  openClassName="text-green-400"
                  className="accordion-trigger text-base sm:text-lg lg:text-xl"
                >
                  <div className="flex items-center gap-2">
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
                  <div className="pl-8">
                    {item.paragraph.root.children.map((para, index) => (
                      <p key={index}>{para.children[0].text}</p>
                    ))}
                    <Link href={`/${item.link[0].page.slug}`}>
                      <Button
                        variant={"outline"}
                        className="mt-4 px-4 py-2 bg-[#0D2234] text-white rounded uppercase text-xs font-normal"
                      >
                        {item.link[0].label}
                        <SlArrowRight size={8} className="ml-2" />
                      </Button>
                    </Link>
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
