import React, { RefObject } from "react";
import { FormikProps } from "formik";
import { Button } from "../ui/button";

interface Field {
  name: string;
  label: string;
  blockType: string;
  required?: boolean;
  defaultValue?: string;
}

interface RenderFieldProps {
  field: Field;
  index: number;
  formik: FormikProps<any>;
  fileInputRef: RefObject<HTMLInputElement>;
  handleFileClick: () => void;
}

const renderField = ({
  field,
  index,
  formik,
  fileInputRef,
  handleFileClick,
}: RenderFieldProps) => {
  const fileButtonLabel = "Chose File";
  const commonProps = {
    name: field.name,
    value: formik.values[field.name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className:
      "form-input mt-1 block w-full border border-gray-300 rounded-md bg-white p-2",
  };

  const renderers: { [key: string]: () => JSX.Element } = {
    text: () => (
      <div key={index} className="mb-4">
        <label className="block text-gray-700 font-semibold">
          {field.label}
        </label>
        <input type="text" {...commonProps} />
        {formik.touched[field.name] && formik.errors[field.name] && (
          <span className="text-red-600">
            {String(formik.errors[field.name])}
          </span>
        )}
      </div>
    ),
    email: () => (
      <div key={index} className="lg:flex gap-x-4 mb-4">
        <div className=" w-full lg:w-1/2">
          <label className="block text-gray-700 font-semibold">
            {field.label}
          </label>
          <input type="email" {...commonProps} />
          {formik.touched[field.name] && formik.errors[field.name] && (
            <span className="text-red-600">
              {String(formik.errors[field.name])}
            </span>
          )}
        </div>
        <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
          <label className="block text-gray-700 font-semibold">
            {field.name === "phone" ? field.label : "Phone *"}
          </label>
          <input
            type="number"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md bg-white p-2"
          />
          {formik.touched.phone && formik.errors.phone && (
            <span className="text-red-600">{String(formik.errors.phone)}</span>
          )}
        </div>
      </div>
    ),
    textarea: () => (
      <div key={index} className="mb-4">
        <label className="block text-gray-700 font-semibold">
          {field.label}
        </label>
        <textarea
          rows={7}
          {...commonProps}
          className="form-textarea mt-1 block w-full border border-gray-300 rounded-md bg-white p-2 mb-6"
        />
        {formik.touched[field.name] && formik.errors[field.name] && (
          <span className="text-red-600">
            {String(formik.errors[field.name])}
          </span>
        )}
      </div>
    ),
    file: () => (
      <div key={index}>
        <label className="block text-gray-700 font-semibold">
          {field.label}
        </label>
        <div className="flex">
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files?.[0]);
            }}
            className="hidden"
          />
          <input
            type="text"
            value={fileInputRef.current?.files?.[0]?.name || ""}
            placeholder="No file chosen"
            readOnly
            className="form-input block w-3/4 border border-gray-300 rounded-md rounded-r-none bg-white p-2"
          />
          <Button
            variant={"brand"}
            className="rounded-l-none w-40 h-12"
            onClick={handleFileClick}
            type="button"
          >
            {fileButtonLabel}
          </Button>
        </div>
        {formik.touched.file && formik.errors.file && (
          <span className="text-red-600">{String(formik.errors.file)}</span>
        )}
      </div>
    ),
  };

  return renderers[field.blockType] ? renderers[field.blockType]() : null;
};

export default renderField;
