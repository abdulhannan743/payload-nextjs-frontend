"use client";

import React, { useRef } from "react";
import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { ContactFormProps } from "@/src/types/HomeTypes";
import renderField from "./RenderField";

interface FormValues {
  [key: string]: string;
}

const ContactForm: React.FC<{ contactForm: ContactFormProps }> = ({
  contactForm,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formID = "669003e609d26fbe3e19e82c";
  const initialValues = contactForm?.fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || "";
    return acc;
  }, {} as Record<string, string>);

  const validationSchema = Yup.object(
    contactForm?.fields.reduce((acc, field) => {
      if (field.required) {
        acc[field.name] = Yup.string().required(`${field.label} is required`);
      }
      return acc;
    }, {} as Record<string, Yup.AnySchema>)
  );

  const formik: FormikProps<FormValues> = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          formData.append(key, values[key]);
        }
      }

      const handleFormSubmission = async () => {
        const bodyData = Array.from(formData.entries()).map(([key, value]) => ({
          field: key,
          value,
        }));

        try {
          const req = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form-submissions`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                form: formID,
                submissionData: bodyData,
              }),
            }
          );

          const res = await req.json();

          if (req.status >= 400) {
            throw new Error(
              res.errors?.[0]?.message || "Internal Server Error"
            );
          }

          resetForm();
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          toast.success(
            contactForm.confirmationMessage.root.children[0].children[0].text
          );
        } catch (error: any) {
          console.error(error);
          toast.error(error.message || "Internal Server Error");
        }
      };

      if (fileInputRef.current?.files?.length) {
        const file = fileInputRef.current.files[0];
        const fileData = new FormData();
        fileData.append("file", file);
        try {
          const fileReq = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/media`,
            {
              method: "POST",
              credentials: "include",
              body: fileData,
            }
          );
          const fileRes = await fileReq.json();
          if (fileReq.status >= 400) {
            throw new Error(
              fileRes.errors?.[0]?.message || "File upload error"
            );
          }

          if (fileRes.doc.id) {
            formData.delete("file");
            formData.append("file", fileRes.doc.url);
          }
        } catch (error: any) {
          console.error(error);
          toast.error(error.message || "File upload error");
          return;
        }
      }

      await handleFormSubmission();
    },
  });

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 max-w-lg lg:max-w-2xl"
    >
      {contactForm?.fields.map((field, index) =>
        renderField({ field, index, formik, fileInputRef, handleFileClick })
      )}
      <Button type="submit" variant={"brand"} className="py-3">
        {contactForm?.submitButtonLabel}
      </Button>
    </form>
  );
};

export default ContactForm;
