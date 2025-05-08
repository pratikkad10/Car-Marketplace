import React, { Children } from "react";

const Button = ({ children, onClick, variant = "primary", className }) => {
  const baseClasses = "py-2 px-4 rounded-md font-semibold focus:outline-none cursor-pointer transition duration-200 ease-in-out";
  const variantClasses = {
    primary: "bg-[#3B82F6] text-white hover:bg-blue-600",
    secondary: "bg-transparent text-[#3B82F6] outline border-[#3B82F6] hover:bg-[#80808080] ",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${className || " text-[16px]"}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
