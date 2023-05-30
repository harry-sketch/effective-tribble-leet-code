import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cw = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
