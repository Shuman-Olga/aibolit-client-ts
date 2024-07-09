"use strict";
exports.__esModule = true;
exports.formChema = void 0;
var zod_1 = require("zod");
var phoneRegex = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,10}$/);
exports.formChema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Укажите ваше имя" }),
    phone: zod_1.z
        .string()
        .regex(phoneRegex, { message: "Укажите ваше номер телефона" }),
    address: zod_1.z.string() || null,
    doctor: zod_1.z.string() || null,
    message: zod_1.z.string() || null,
    accept: zod_1.z.literal(true)
});
