import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function getColorForEmail(email: string): string {
  const colors = [
    "bg-gradient-to-br from-[#d97757] to-[#e89b7e]",
    "bg-gradient-to-br from-[#e89b7e] to-[#f4b8a5]",
    "bg-gradient-to-br from-[#f4b8a5] to-[#ffc9b4]",
    "bg-gradient-to-br from-[#ffc9b4] to-[#ffdccc]"
  ];

  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = email.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}
