import { z } from "zod";

const phoneRegex = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,10}$/
);

export const formChema = z.object({
  name: z.string().min(1, { message: "Укажите ваше имя" }),
  phone: z
    .string()
    .regex(phoneRegex, { message: "Укажите ваше номер телефона" }),
  address: z.string() || null,
  doctor: z.string() || null,
  message: z.string() || null,
  accept: z.literal(true),
});

export type TypeForm = z.infer<typeof formChema>;
