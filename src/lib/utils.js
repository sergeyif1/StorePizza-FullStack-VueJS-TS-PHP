import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Функция объединения классов с Tailwind
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// export function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }
