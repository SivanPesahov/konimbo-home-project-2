import type { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import type { ContactFormValues, FieldDef } from "../types/formTypes";

type FormItemType = {
  f: FieldDef;
  field: ControllerRenderProps<ContactFormValues, any>;
};

function FormItemComponent({ f, field }: FormItemType) {
  return (
    <FormItem>
      <FormLabel className="text-sm">{f.label}</FormLabel>
      <FormControl>
        {f.input === "textarea" ? (
          <textarea
            {...field}
            rows={f.rows ?? 4}
            placeholder={f.placeholder}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 text-gray-500"
          />
        ) : (
          <Input
            {...field}
            type={f.input}
            inputMode={f.input === "email" ? "email" : undefined}
            placeholder={f.placeholder}
            className="h-11 rounded-lg border-gray-300 bg-white focus-visible:ring-2 focus-visible:ring-indigo-500"
          />
        )}
      </FormControl>
      <FormMessage className="text-xs" />
    </FormItem>
  );
}

export default FormItemComponent;
