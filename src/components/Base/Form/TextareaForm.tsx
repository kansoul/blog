import React from "react";

interface TextareaProps {
  placeholder?: string;
  register: any;
  name: string;
  error?: any;
}

const TextareaForm: React.FC<TextareaProps> = ({
  placeholder,
  register,
  name,
  error,
}) => (
  <div className="mb-6 text-left">
    <textarea
      className="w-full placeholder-[#7E9CC7] bg-transparent border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none p-2 dark:focus:border-[#66768f]"
      placeholder={placeholder || ""}
      {...register(name)}
    />
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

export default TextareaForm;
