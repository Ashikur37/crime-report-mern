import { Request, Response } from "express";
import Crime from "../models/Crime";
import { IReqAuth, userRole } from "../utils/interface";
import Investigator from "../models/Investigator";
import User from "../models/User";
import { sendMail } from "../utils/mail";

const allCrimeList = async (req: IReqAuth, res: Response) => {
  const crimes = await Crime.find({
    InvestigatorId:req.user?.id
  });
  res.json({
    success: true,
    data: crimes,
  });
};

const getCrime=async(req:Request,res:Response)=>{
    const crime=await Crime.findById(req.params.id);
    const investigator=await User.findById(crime?.InvestigatorId);
    const user=await User.findById(crime?.UserId);
    res.json({
      success: true,
      data: crime,
      investigator,
      user
    });
  } 
  const updateCrime = async (req: IReqAuth, res: Response) => {
    const {crime_id,status}=req.body;
    const crime=await Crime.findByIdAndUpdate(crime_id,{
      status
    });
    let name="";
    let email="";
    let phone="";
  
    if(crime?.UserId){
      const user=await User.findById(crime?.UserId);
      name=user?.fullname!;
      email=user?.email!;
      phone=user?.phone!;
  
    }
    else{
      name=crime?.info?.fullname;
      email=crime?.info?.email;
      phone=crime?.info?.phone;
  
    }
    await sendMail(email,"Report status updated",`
      Your reported crime status updated to ${status}
    `);
   
    res.json({
      success: true,
      data: crime,
    });
  }
export {allCrimeList,getCrime,updateCrime}