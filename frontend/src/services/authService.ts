import { z } from "zod";
import { loginSchema, registerSchema } from "../utils/validations/auth";
import { postRequest } from "./httpService";

const login = async (user: z.infer<typeof loginSchema>) => {
  const result = await postRequest({
    url: "auth/sign-in",
    body: user,
  });
  return result;
};
const signup = async (user: z.infer<typeof registerSchema>) => {
  const result = await postRequest({
    url: "auth/sign-up",
    body: user,
  });
  return result;
};
export { login,signup };
