import { z } from "zod";

export const formOtzyvShema = z.object({
  name: z.string().min(1, { message: "Укажите ваше имя" }),
  email: z.string().email({ message: "Не верный email" }) || null,
  doctor: z.string() || null,
  otzyv: z.string() || null,
  accept: z.literal(true),
});

export type TypeForm = z.infer<typeof formOtzyvShema>;
