import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import type { PropsWithChildren } from "react";

type ButtonVariant = "primary" | "light" | "borderless";

const classMap: Record<ButtonVariant, string> = {
  primary:
    "px-10 py-3 bg-primary text-white rounded-2xl flex items-center justify-center gap-4 w-fit max-w-xs shadow-md hover:bg-opacity-80 hover:shadow-lg ease-in-out duration-200",
  light: "",
  borderless: "",
};

type Props = {
  className?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  variant = "primary",
  onClick,
  href,
  disabled = false,
  ...props
}) => {
  const rootClassName = twMerge(classMap[variant], className ? className : "");

  if (href) {
    return (
      <Link href={href} className={rootClassName} {...props}>
        {children}
      </Link>
    );
  }

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
