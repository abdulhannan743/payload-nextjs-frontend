"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaDiamondTurnRight } from "react-icons/fa6";
import DottedLine from "../ui/DottedLine";

interface Office {
  officeName: string;
  officeAddress: string;
  officeImage: { url: string };
  link: { type: string; label: string; url: string }[];
}

interface FormField {
  name: string;
  label: string;
  width: number;
  defaultValue?: string;
  required: boolean;
  blockType: string;
}

interface ContactForm {
  id: string;
  title: string;
  fields: FormField[];
  submitButtonLabel: string;
}

export interface ContactFormBlockProps {
  title: string;
  subtitle: string;
  description: string;
  offices: Office[];
  contactForm: ContactForm;
}

const ContactFormBlock: React.FC<ContactFormBlockProps> = ({
  title,
  subtitle,
  description,
  offices,
  contactForm,
}) => {
  const [formData, setFormData] = useState(() =>
    contactForm.fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {} as { [key: string]: string })
  );

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("clicked");
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};

    contactForm.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log(formData);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4 ">
      <div className="text-center flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-blue-900 uppercase">
          {title}
        </h2>
        <DottedLine />

        <p className="text-4xl font-bold">{subtitle}</p>
        <p className="text-black font-semibold mb-14">{description}</p>
      </div>
      <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="relative bg-gray-900 rounded-lg overflow-hidden h-40"
                style={{
                  backgroundImage: `url(${office.officeImage.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative p-4 text-white flex flex-col justify-center h-full">
                  <h3 className="text-lg font-bold">{office.officeName}</h3>
                  <p className="mb-4">{office.officeAddress}</p>
                  {office.link.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url}
                      className="inline-flex items-center text-blue-400 hover:text-blue-600"
                    >
                      <Button
                        variant={"outline"}
                        className="bg-transparent text-white"
                      >
                        <FaDiamondTurnRight className="mr-2" />
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {contactForm.fields.map((field, index) => {
                const commonProps = {
                  name: field.name,
                  value: formData[field.name],
                  onChange: handleChange,
                  className:
                    "form-input mt-1 block w-full border-gray-300 rounded-md bg-white p-2",
                };

                return (
                  <div key={index} className="mb-4">
                    <label className="block text-gray-700">{field.label}</label>
                    {field.blockType === "text" && (
                      <input type="text" {...commonProps} />
                    )}
                    {field.blockType === "email" && (
                      <input type="email" {...commonProps} />
                    )}
                    {field.blockType === "number" && (
                      <input type="text" {...commonProps} />
                    )}
                    {field.blockType === "textarea" && (
                      <textarea
                        rows={5}
                        {...commonProps}
                        className="form-textarea mt-1 block w-full border-gray-300 rounded-md bg-white p-2"
                      />
                    )}
                    {errors[field.name] && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                );
              })}
              <div className="mb-4">
                <label className="block text-gray-700">Upload a file</label>
                <div className="flex items-center">
                  <input
                    type="file"
                    name="file"
                    className="form-input mt-1 block w-full border-gray-300 rounded-md bg-white p-2"
                  />
                </div>
              </div>
              <Button variant={"brand"} type="submit">
                {contactForm.submitButtonLabel}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormBlock;
