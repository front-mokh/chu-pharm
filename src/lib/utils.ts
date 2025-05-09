import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "@/lib/db";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, locale: string = "fr") {
  const formattedLocale =
    locale === "ar" ? "ar-DZ" : locale === "fr" ? "fr-FR" : "en-US";
  return new Intl.DateTimeFormat(formattedLocale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function prettifyEnum(value?: string | null): string {
  if (!value) return "";
  return value
    .replace(/_/g, " ") // Replace underscores with spaces
    .toLowerCase() // Convert to lowercase
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

export function formatCurrency(
  value: number,
  locale: string = "fr-FR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "DZD",
  }).format(value);
}



export async function getUserServiceId(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { serviceId: true },
  });

  return user?.serviceId ?? null;
}