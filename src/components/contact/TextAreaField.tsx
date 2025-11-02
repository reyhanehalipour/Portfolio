// components/TextAreaField.tsx
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextAreaFieldProps {
  label: string;
  placeholder?: string;
  rows?: number;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  placeholder,
  rows = 5,
  registration,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label}</label>
      <textarea
        {...registration}
        placeholder={placeholder}
        rows={rows}
        className={`border-b px-3 py-2 focus:outline-none transition-colors duration-200
        ${error ? "border-b-red-500" : "border-b-gray-300"}
        focus:border-b-green-500 focus:text-green-600`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default TextAreaField;
