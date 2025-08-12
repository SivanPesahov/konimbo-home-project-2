import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form, FormField } from "../components/ui/form";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import api from "../services/api.service";
import { FORMFIELDS } from "../lib/constants";
import FormItemComponent from "./formItemComponent";

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Please write a short message (min 5 chars)"),
});

export type FormData = z.infer<typeof formSchema>;

function ContactPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(values: FormData) {
    try {
      await api.post("/table/createRecord", values);
      form.reset();
      setErrorMessage("");
      setSuccessMessage("✅ User created successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error: any) {
      setSuccessMessage("");
      setErrorMessage("Something went wrong. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-lg border-none shadow-xl backdrop-blur bg-white/80">
        <CardHeader className="pb-2">
          <div className="inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50">
            <span>📬</span> Register
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-semibold mt-3">
            Create a user
          </CardTitle>
          <CardDescription className="text-sm">
            Fill out the form and we’ll get back to you shortly.
          </CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <CardContent className="space-y-4">
              {successMessage && (
                <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              {FORMFIELDS.map((f) => (
                <FormField
                  key={f.name}
                  control={form.control}
                  name={f.name}
                  render={({ field }) => (
                    <FormItemComponent f={f} field={field} />
                  )}
                />
              ))}
            </CardContent>

            <CardFooter className="pt-0">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-transform hover:translate-y-[-1px] active:translate-y-0 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Create User"}
              </Button>
            </CardFooter>
          </form>
        </Form>

        <div className="px-6 pb-6">
          <p className="text-[11px] text-gray-500">
            We care about your data. Read our{" "}
            <span className="underline cursor-pointer font-bold">
              privacy policy.
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default ContactPage;
