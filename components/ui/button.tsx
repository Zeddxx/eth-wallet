import { cn } from "@/lib/utils/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "link" | "outline";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  disabled = false,
  ...props
}) => {
  const variantClasses = {
    default:
      "bg-black hover:bg-black/80 transition-colors disabled:opacity-40 duration-200 text-white rounded",
    primary:
      "bg-primary hover:opacity-90 transition-colors disabled:opacity-40 duration-200 text-white rounded",
    secondary:
      "bg-secondary hover:bg-secondary/80 transition-colors duration-200 disabled:opacity-40 text-white rounded",
    link: "underline transition-colors text-primary hover:opacity-90 duration-200 underline-offset-2",
    outline: "border transition-colors rounded border-muted text-white disabled:opacity-50 bg-transparent hover:bg-stone-950 duration-300"
  };

  return (
    <button
      disabled={disabled}
      {...props}
      className={cn(
        "py-2 px-3 focus:outline outline-2 focus:outline-offset-2 focus:ring",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
