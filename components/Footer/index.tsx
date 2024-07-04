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
import { FooterData } from "@/src/types/footerTypes";

const Footer: React.FC = () => {
  const { layout, heading, navLinks, linkHeading, link }: FooterData =
    footer as FooterData;

  const companySection = layout?.[0];
  const contactSection = layout?.[1];
  const imageSection = layout?.[2];
  const textSection = layout?.[3];

  const renderRichText = (richTextObject: any) =>
    richTextObject?.root?.children
      ?.map((child: any) => child.children[0]?.text)
      .join(" ") || "";

  return (
    <footer className="bg-zinc-200 pt-10 md:pt-14">
      <div className="flex flex-col md:flex-row px-20  lg:flex-nowrap md:flex-wrap">
        {companySection && (
          <CompanyCard
            footerImage={companySection.Image}
            text={companySection.text}
            buttonData={companySection.link?.[0]}
          />
        )}
        {heading && navLinks && (
          <NavigationCard heading={heading} navLinks={navLinks} />
        )}
        {linkHeading && link && (
          <TechnologiesCard linkHeading={linkHeading} link={link} />
        )}
        {contactSection && <ContactInfoCard layout={contactSection} />}
      </div>

      {imageSection?.slides?.[0]?.media && (
        <div className="ml-4 md:ml-32 mt-4 md:mt-0">
          <Image
            src={imageSection.slides[0].media.url}
            alt={imageSection.slides[0].media.alt}
            width={700}
            height={500}
          />
        </div>
      )}

      <div className="bg-sky-950 w-full md:w-10/12 h-16 flex flex-col md:flex-row items-center justify-between pl-4 md:pl-16 pr-4 md:pr-24 clip-diagonal-top-right mt-4 md:mt-0">
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
