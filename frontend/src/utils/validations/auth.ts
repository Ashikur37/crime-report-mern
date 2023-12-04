import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().min(11, { message: "Enter valid phone" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export const registerSchema = z
  .object({
    fullname: z.string().min(1, { message: "Firstname is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    phone: z.string().min(11, { message: "Enter valid phone" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

  export const investigaotrSchema = z
  .object({
    fullname: z.string().min(1, { message: "Firstname is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    phone: z.string().min(11, { message: "Enter valid phone" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    division: z.string().min(1, { message: "Select division" }),
    district: z.string().min(1, { message: "Select district" }),
    upazila: z.string().min(1, { message: "Select upazila" }),
    address: z.string().min(1, { message: "Select address" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });
