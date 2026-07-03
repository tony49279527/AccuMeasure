import { z } from "zod";

const emailField = z
  .string()
  .min(1, "Email is required")
  .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Please enter a valid email");

const privacyField = z
  .boolean()
  .refine((v) => v === true, "You must agree to the privacy policy");

export const countryList = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
  "Egypt",
  "Morocco",
  "South Africa",
  "Nigeria",
  "Kenya",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "Vietnam",
  "Thailand",
  "Philippines",
  "India",
  "Pakistan",
  "Bangladesh",
  "South Korea",
  "Japan",
  "China",
  "Australia",
  "New Zealand",
  "Brazil",
  "Mexico",
  "Argentina",
  "Chile",
  "Colombia",
  "Peru",
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Turkey",
  "Russia",
  "Poland",
  "Other",
];

export const productInterestOptions = [
  "Level Sensors",
  "Flow Meters",
  "Pressure Sensors",
  "OEM/ODM",
  "Custom",
  "Not Sure",
];

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company"),
  email: emailField,
  whatsapp: z.string().optional(),
  country: z.string().min(1, "Please select your country"),
  productInterest: z
    .array(z.string())
    .refine((v) => v.length > 0, "Select at least one option"),
  quantity: z.string().optional(),
  message: z.string().optional(),
  productId: z.string().optional(),
  privacy: privacyField,
});

export type InquiryValues = z.infer<typeof inquirySchema>;

export const customizationTypes = ["OEM", "ODM", "Non-standard"] as const;
export const productCategories = [
  "Level Sensors",
  "Flow Meters",
  "Pressure Sensors",
  "Other / Not Sure",
];

export const customizationSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company"),
  email: emailField,
  whatsapp: z.string().optional(),
  customizationType: z.string().min(1, "Please select a customization type"),
  productCategory: z.string().min(1, "Please select a product category"),
  quantity: z.string().optional(),
  requirements: z
    .string()
    .min(10, "Please describe your requirements (at least 10 characters)"),
  fileName: z.string().optional(),
  privacy: privacyField,
});

export type CustomizationValues = z.infer<typeof customizationSchema>;
