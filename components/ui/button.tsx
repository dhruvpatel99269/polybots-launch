"use client";
import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  default: "bg-[#d97757] text-white hover:bg-[#c86a4a]",
  outline: "border border-[#d97757] bg-transparent hover:bg-[#d97757] hover:text-white",
  secondary: "bg-[#d97757]/10 text-[#d97757] hover:bg-[#d97757]/20",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  asChild?: boolean;
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition h-10 px-4 py-2";

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(baseClasses, buttonVariants[variant], className),
        ref,
        ...props,
      } as React.HTMLAttributes<HTMLElement>);
    }

    return (
      <button
        className={cn(baseClasses, buttonVariants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
