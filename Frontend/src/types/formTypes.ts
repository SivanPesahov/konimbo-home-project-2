import type { FormData } from "../components/formComponent";

export type FieldDef = {
  name: keyof FormData;
  label: string;
  input: "text" | "email" | "textarea";
  placeholder?: string;
  rows?: number;
};

export type ContactFormValues = {
  fullName: string;
  email: string;
  message: string;
};
