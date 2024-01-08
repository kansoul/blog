import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  placeholder?: string;
  register: any;
  name: string;
  type?: string;
  error?: string;
}

const InputForm: React.FC<InputProps> = ({
  placeholder,
  register,
  name,
  type = "text",
  error,
}) => (
  <div className="mb-6 text-left">
    <input
      className="w-full placeholder-[#7E9CC7] bg-transparent border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none p-5 dark:focus:border-[#66768f]"
      type={type}
      placeholder={placeholder || ""}
      {...register(name)}
    />
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

export default InputForm;
