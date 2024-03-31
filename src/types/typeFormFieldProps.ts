import { FieldError, UseFormRegister } from "react-hook-form";
import { ValidFieldNames } from "./typeValidFieldNames";
import { TypeForm } from "./formShema";

export type FormFieldProps = {
  id: string;
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<TypeForm>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};