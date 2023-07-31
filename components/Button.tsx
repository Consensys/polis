import React from "react";
import { twMerge } from "tailwind-merge";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "light" | "borderless";

const classMap: Record<ButtonVariant, string> = {
  primary:
    "px-10 py-3 bg-primary text-white rounded-2xl flex items-center justify-center gap-2 w-fit max-w-xs shadow-md hover:bg-opacity-80 hover:shadow-lg ease-in-out duration-200",
  light: "",
  borderless: "px-10 py-3 border border-primary text-primary rounded-2xl flex items-center justify-center gap-2 w-fit max-w-xs shadow-md hover:shadow-lg ease-in-out duration-200",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  variant = "primary",
  onClick,
  disabled = false,
  ...props
}) => {
  const rootClassName = twMerge(classMap[variant], className ? className : "");

  return (
 
    <button
      onClick={onClick}
      disabled={disabled}
      className={rootClassName}
      {...props}
    >
    
      {children}
    </button>
  
  );
};

export default Button;
