import { z } from "zod";

export const crimeSchema = z.object({
  // const {division,district,upazila,description,address,type} =req.body;

  division: z.string().min(1, { message: "Select division" }),
  district: z.string().min(1, { message: "Select district" }),
  upazila: z.string().min(1, { message: "Select upazila" }),
  address: z.string().min(1, { message: "Select address" }),
  description: z.string().min(1, { message: "Select description" }),
  type: z.string().min(1, { message: "Select crime type" }),
});

export const guestCrimeSchema = z.object({
  // const {division,district,upazila,description,address,type} =req.body;
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  fullname: z.string().min(1, { message: "Firstname is required" }),
  phone: z.string().min(11, { message: "Enter valid phone" }),
  division: z.string().min(1, { message: "Select division" }),
  district: z.string().min(1, { message: "Select district" }),
  upazila: z.string().min(1, { message: "Select upazila" }),
  address: z.string().min(1, { message: "Select address" }),
  description: z.string().min(1, { message: "Select description" }),
  type: z.string().min(1, { message: "Select crime type" }),
});
