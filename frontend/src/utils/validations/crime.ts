import { z } from "zod";

export const crimeSchema = z.object({
  // const {division,district,upazila,description,address,type} =req.body;

  division: z.string().min(1, { message: "Select division" }),
  district: z.string().min(1, { message: "Select district" }),
  upazila: z.string().min(1, { message: "Select upazila" }),
  description: z.string().min(1, { message: "Select description" }),
  address: z.string().min(1, { message: "Select address" }),
  type: z.string().min(1, { message: "Select crime type" }),
});
