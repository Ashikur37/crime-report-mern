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
  fullname: z.string().min(1, { message: "Firstname is required" }),
  phone: z.string().min(11, { message: "Enter valid phone" }),
  division: z.string().min(1, { message: "Select division" }),
  district: z.string().min(1, { message: "Select district" }),
  upazila: z.string().min(1, { message: "Select upazila" }),
  address: z.string().min(1, { message: "Select address" }),
  description: z.string().min(1, { message: "Select description" }),
  type: z.string().min(1, { message: "Select crime type" }),
});
