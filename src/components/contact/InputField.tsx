import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  registration,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className={`border-b px-3 py-2 focus:outline-none transition-colors ${
          error ? "border-b-red-500" : "border-b-gray"
        } focus:border-b-green`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
