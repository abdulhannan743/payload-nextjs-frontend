"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaDiamondTurnRight } from "react-icons/fa6";
import DottedLine from "../ui/DottedLine";
import type { ContactFormBlockProps } from "@/src/types/HomeTypes";

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
    }, {} as { [key: string]: string | File })
  );
  console.log("formData", formData);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      setIsLoading(true);
      try {
        let fileUrl = "";

        // Check if file is selected
        if (formData.file instanceof File) {
          const formDataFile = new FormData();
          formDataFile.append("file", formData.file);

          const fileReq = await fetch(
            `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/media`,
            {
              method: "POST",
              credentials: "include",
              body: formDataFile,
            }
          );

          const fileRes = await fileReq.json();
          if (fileRes.doc.id) {
            fileUrl = fileRes.doc.url;
          }

          if (fileReq.status >= 400) {
            throw new Error(
              fileRes.errors?.[0]?.message || "File upload error"
            );
          }
        }

        const req = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form-submissions`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              form: "669003e609d26fbe3e19e82c",
              submissionData: {
                ...formData,
                file: fileUrl,
              },
            }),
          }
        );

        const res = await req.json();
        console.log("data", res);

        if (req.status >= 400) {
          throw new Error(res.errors?.[0]?.message || "Internal Server Error");
        }

        setIsLoading(false);
        // handle successful form submission
      } catch (error) {
        console.warn(error);
        setIsLoading(false);
        setErrors({ status: true, message: errors.message });
      }
    }
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      console.log("files", files);
      const file = files[0];
      setFormData({ ...formData, file });
    }
  };

  // Find the number field
  const numberField = contactForm.fields.find(
    (field) => field.blockType === "number"
  );

  return (
    <div className="container mx-auto py-10 px-4">
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
          <div className="space-y-6">
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
                <div className="absolute inset-0 bg-black opacity-65"></div>
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
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              encType="multipart/form-data"
            >
              {contactForm.fields.map((field, index) => {
                const commonProps = {
                  name: field.name,
                  value: formData[field.name] as string,
                  onChange: handleChange,
                  className:
                    "form-input mt-1 block w-full border border-gray-300 rounded-md bg-white p-2",
                };

                if (field.blockType === "text") {
                  return (
                    <div key={index} className="mb-4">
                      <label className="block text-gray-700 font-semibold">
                        {field.label}
                      </label>
                      <input type="text" {...commonProps} />
                    </div>
                  );
                } else if (field.blockType === "email") {
                  return (
                    <div key={index} className="flex gap-x-4 mb-4">
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold">
                          {field.label}
                        </label>
                        <input type="email" {...commonProps} />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold">
                          {numberField ? numberField.label : "Phone"}
                        </label>
                        <input
                          type="text"
                          name={numberField ? numberField.name : "phone"}
                          value={
                            formData[
                              numberField ? numberField.name : "phone"
                            ] as string
                          }
                          onChange={handleChange}
                          className="form-input mt-1 block w-full border border-gray-300 rounded-md bg-white p-2"
                        />
                      </div>
                    </div>
                  );
                } else if (field.blockType === "textarea") {
                  return (
                    <div key={index} className="mb-4">
                      <label className="block text-gray-700 font-semibold">
                        {field.label}
                      </label>
                      <textarea
                        rows={7}
                        {...commonProps}
                        className="form-textarea mt-1 block w-full border border-gray-300 rounded-md bg-white p-2 mb-6"
                      />
                    </div>
                  );
                } else if (field.blockType === "file") {
                  return (
                    <div key={index} className="">
                      <label className="block text-gray-700 font-semibold">
                        {field.label}
                      </label>
                      <div className="flex">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <input
                          type="text"
                          name="uploadFile"
                          value={
                            formData.file instanceof File
                              ? formData.file.name
                              : ""
                          }
                          placeholder="No file chosen"
                          readOnly
                          className="form-input block w-3/4 border border-gray-300 rounded-md rounded-r-none bg-white p-2"
                        />
                        <Button
                          variant={"brand"}
                          className="rounded-l-none w-40 h-12"
                          onClick={handleFileClick}
                        >
                          Choose File
                        </Button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
              <div>
                {contactForm.fields.map((field, index) => {
                  return (
                    errors[field.name] && (
                      <span key={index} className="text-red-600 block">
                        {field.label} is required
                      </span>
                    )
                  );
                })}
              </div>
              <Button variant={"brand"} type="submit" isLoading={isLoading}>
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
