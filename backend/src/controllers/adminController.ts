import { Request, Response } from "express";
import Crime from "../models/Crime";
import { IReqAuth, userRole } from "../utils/interface";
import Investigator from "../models/Investigator";
import User from "../models/User";

const allCrimeList = async (req: IReqAuth, res: Response) => {
  const crimes = await Crime.find({});
  res.json({
    success: true,
    data: crimes,
  });
};
const getCrime=async(req:Request,res:Response)=>{
  const crime=await Crime.findById(req.params.id);
  res.json({
    success: true,
    data: crime,
  });
}
const investigaorList = async (req: IReqAuth, res: Response) => {
  const investigators = await User.find({role:userRole.INVESTIGATOR});
  res.json({
    success: true,
    data: investigators,
  });
};

const assignInvestigator = async (req: IReqAuth, res: Response) => {
  const {crime_id,investigator}=req.body;
  const crime=await Crime.findByIdAndUpdate(crime_id,{
    InvestigatorId:investigator
  })
  res.json({
    success: true,
    data: crime,
  });
}
const createInvestigator = async (req: IReqAuth, res: Response) => {
  const {
    fullname,
    email,
    password,
    phone,
    division,
    district,
    upazila,
    address,
  } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.json({
      success: false,
      message: "Email already exist",
    });
    return;
  }
  const existingPhoneUser = await User.findOne({ phone });
  if (existingPhoneUser) {
    res.json({
      success: false,
      message: "Phone already exist",
    });
    return;
  }

  const newUser = await User.create({
    fullname,
    email,
    password,
    phone,
    role:userRole.INVESTIGATOR
  });
  const investigator = await Investigator.create({
    UserId: newUser._id,
    division,
    district,
    upazila,
    address,
  });
  res.json({
    success: true,
    message: "Investigator added successfully",
    data: investigator,
  });
};

export { allCrimeList, investigaorList, createInvestigator,getCrime,assignInvestigator };
