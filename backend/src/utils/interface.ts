import { Document } from "mongoose";
import { Request } from "express";
export enum userRole {
  ADMIN = "ADMIN",
  USER = "USER",
  INVESTIGATOR = "INVESTIGATOR",
}

export enum crimeType {
  Fraud = "Fraud",
  Cybercrime = "Cybercrime",
  Robbery = "Robbery",
  Kidnapping = "Kidnapping",
  SexualAssault = "Sexual Assault",
  DrugPossession = "Drug Possession",
}

export enum crimeStatus {
  Pending = "Pending",
  Running = "Running",
  Cancelled = "Cancelled",
  Completed = "Completed",
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
  _id: string;
  fullname: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  isPasswordMatched: (enteredPassword: string) => Promise<boolean>;
  createPasswordResetToken: () => Promise<string>;
}

export interface IInvestigator extends Document {
  _id: string;
  division: String;
  district: String;
  upazila: String;
  address: String;
}
