import { Document } from "mongoose";
import { Request } from "express";
export enum userRole {
  ADMIN = "ADMIN",
  USER = "USER",
  INVESTIGATOR = "INVESTIGATOR",
}

// export interface IDecodedToken {
//   id?: string;
//   iat: number;
//   exp: number;
// }
export interface IReqAuth extends Request {
  user?: IUser;
}
export interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  isPasswordMatched: (enteredPassword: string) => Promise<boolean>;
  createPasswordResetToken: () => Promise<string>;
}