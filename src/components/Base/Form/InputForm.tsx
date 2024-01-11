import React from "react";

interface InputProps {
  placeholder?: string;
  register: any;
  name: string;
  type?: string;
  error?: any;
  className?: string;
}

const InputForm: React.FC<InputProps> = ({
  placeholder,
  register,
  name,
  type = "text",
  error,
  className,
}) => (
  <div className="mb-6 text-left">
    <input
      className={`w-full placeholder-[#7E9CC7] bg-transparent border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none p-5 dark:focus:border-[#66768f] ${
        className ? className : ""
      }`}
      type={type}
      placeholder={placeholder || ""}
      {...register(name)}
    />
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

export default InputForm;
