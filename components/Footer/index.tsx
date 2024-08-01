import React from "react";
import footer from "@/src/globalData/footer.json";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io5";
import CompanyCard from "./CompanyCard";
import NavigationCard from "./NavigationCard";
import TechnologiesCard from "./TechnologiesCard";
import ContactInfoCard from "./ContactInfoCard";
import type { FooterData, RichTextType } from "@/src/types/footerTypes";
import FlexContainer from "./FlexContainer";
import FlexChild from "./FlexChild";

const Footer: React.FC = () => {
  const { layout, heading, navLinks, linkHeading, link } = footer as FooterData;

  const companySection = layout?.[0];
  const contactSection = layout?.[1];
  const imageSection = layout?.[2];
  const textSection = layout?.[3];

  const renderRichText = (richTextObject?: RichTextType) =>
    richTextObject?.root?.children
      ?.map((child) => child.children[0]?.text)
      .join(" ") || "";

  return (
    <footer className="bg-zinc-200 pt-10 md:pt-14">
      <FlexContainer className="lg:flex-row md:flex-row flex-col-reverse sm:flex-wrap lg:px-20 lg:flex-nowrap md:flex-wrap container">
        {companySection &&
          companySection.Image &&
          companySection.text &&
          companySection.link?.[0] && (
            <FlexChild className="hidden sm:hidden lg:block">
              <CompanyCard
                footerImage={companySection.Image}
                text={companySection.text}
                buttonData={companySection.link[0]}
              />
            </FlexChild>
          )}
        {heading && navLinks && (
          <FlexChild>
            <NavigationCard heading={heading} navLinks={navLinks} />
          </FlexChild>
        )}
        {linkHeading && link && (
          <FlexChild>
            <TechnologiesCard linkHeading={linkHeading} link={link} />
          </FlexChild>
        )}
        {contactSection && (
          <FlexChild>
            <ContactInfoCard layout={contactSection} />
          </FlexChild>
        )}
        {companySection &&
          companySection.Image &&
          companySection.text &&
          companySection.link?.[0] && (
            <FlexChild className="block lg:hidden sm:block ">
              <CompanyCard
                footerImage={companySection.Image}
                text={companySection.text}
                buttonData={companySection.link[0]}
              />
            </FlexChild>
          )}
      </FlexContainer>
      {imageSection?.slides?.[0]?.media && (
        <div className="ml-4 md:ml-32 mt-4 md:mt-0 md:mr-20">
          <Image
            src={imageSection.slides[0].media.url}
            alt={imageSection.slides[0].media.alt}
            width={imageSection.slides[0].media.width}
            height={imageSection.slides[0].media.height}
          />
        </div>
      )}

      <div className="bg-sky-950 lg:max-w-screen-xl md:w-10/12 h-16 flex flex-col md:flex-row items-center justify-between pl-4 md:pl-16 pr-4 md:pr-24 clip-diagonal-top-right mt-4 md:mt-0">
        {textSection && (
          <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
            {renderRichText(textSection.typography)}
            <span className="text-white font-semibold ml-1">
              {renderRichText(textSection.paragraph)}
            </span>
          </p>
        )}
        <div className="flex flex-row text-blue-600 space-x-2 mt-2 md:mt-0">
          <FaLinkedin size={20} color="white" />
          <BiLogoInstagramAlt size={20} color="white" />
          <IoLogoFacebook size={20} color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
