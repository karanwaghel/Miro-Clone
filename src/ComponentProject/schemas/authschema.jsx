import { z } from "zod";

export const commonSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Field must not be empty!")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Invalid email format",
    }),

  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 Character long." })
    .max(20, { message: "Too long" }),
});

export const ForgotPasswordSchema = z.object({
  email:z
    .string()
    .trim()
    .min(1, "Field must not be empty!")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Invalid email format",
    }),
})
