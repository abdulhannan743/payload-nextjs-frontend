"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DottedLine from "../ui/DottedLine";
import { ContactFormBlockProps } from "@/src/types/HomeTypes";
import Offices from "./Offices";
import ContactForm from "./ContactForm";

const ContactFormBlock: React.FC<ContactFormBlockProps> = ({
  title,
  subtitle,
  description,
  offices,
  contactForm,
}) => {
  return (
    <div className="container mx-auto py-10 px-4">
      <ToastContainer />
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-blue-900 uppercase">
          {title}
        </h2>
        <DottedLine />
        <p className="text-4xl font-bold">{subtitle}</p>
        <p className="text-black font-semibold mb-14">{description}</p>
      </div>
      <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Offices offices={offices} />
          <ContactForm contactForm={contactForm} />
        </div>
      </div>
    </div>
  );
};

export default ContactFormBlock;
