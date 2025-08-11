import type { FieldDef } from "../types/formTypes";

export const formFields: readonly FieldDef[] = [
  {
    name: "fullName",
    label: "Full Name",
    input: "text",
    placeholder: "John Doe",
  },
  {
    name: "email",
    label: "Email",
    input: "email",
    placeholder: "you@example.com",
  },
  {
    name: "message",
    label: "Message",
    input: "textarea",
    placeholder: "Enter your message here...",
    rows: 5,
  },
];
