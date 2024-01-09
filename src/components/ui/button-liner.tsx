import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function ButtonLiner(props: ButtonProps) {
  const { children, loading, className, type, ...rest } = props;
  const buttonClass =
    "text-white font-semibold rounded-lg text-base px-8 py-2 text-center me-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none";
  const buttonLoading = "bg-gray-200 cursor-not-allowed";
  return (
    <button
      type={type}
      disabled={loading}
      className={`${buttonClass} ${className} ${loading ? buttonLoading : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
