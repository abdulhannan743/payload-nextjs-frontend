"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DottedLine from "../ui/DottedLine";
import { ContactFormBlockProps } from "@/src/types/HomeTypes";
import Offices from "./Offices";
import ContactForm from "./ContactForm";
import { formSectionData } from "@/src/constants/HomePageData"; // this is is constant Data. using just for the time being

const ContactFormBlock: React.FC<ContactFormBlockProps> = ({
  title,
  subtitle,
  description, // these props will be use in future
  offices,
  contactForm,
}) => {
  return (
    <div className="container mx-auto py-10 pb-6 px-4" id="contact-us">
      <ToastContainer />
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-blue-900 uppercase">
          {formSectionData.title}
        </h2>
        <DottedLine />
        <p className="text-4xl font-bold">{formSectionData.subtitle}</p>
        <p className="text-black font-semibold mb-14">
          {formSectionData.description}
        </p>
      </div>
      <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Offices offices={formSectionData.offices} />
          <ContactForm contactForm={formSectionData.contactForm} />
        </div>
      </div>
    </div>
  );
};

export default ContactFormBlock;
