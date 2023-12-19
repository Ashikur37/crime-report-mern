import { Request, Response } from "express";
import Crime from "../models/Crime";
import { IReqAuth } from "../utils/interface";
import User from "../models/User";

const createCrime = async (req: IReqAuth, res: Response) => {
    const {division,district,upazila,description,address,type} =req.body;

    const crime=await Crime.create({
        division,
        district,
        upazila,
        address,
        description,
        type,
        UserId:req.user?._id
    })
    console.log(crime);
    res.json({
        success: true,
        message: "Crime reported successfull",
        data: crime,
      });

}
const createGuestCrime = async (req: Request, res: Response) => {
    const {division,district,upazila,description,address,type,fullname,phone,email} =req.body;

    const crime=await Crime.create({
        division,
        district,
        upazila,
        address,
        description,
        type,
        UserId:null,
        info:{
            fullname,
            phone,
            email
        }
    })
    console.log(crime);
    res.json({
        success: true,
        message: "Crime reported successfull",
        data: crime,
      });

}
const crimeList = async (req: IReqAuth, res: Response) => {
    const crimes=await Crime.find({UserId:req.user?._id});
    res.json({
        success: true,
        data: crimes,
      });

}
const getCrime=async(req:Request,res:Response)=>{
    const crime=await Crime.findById(req.params.id);
    const investigator=await User.findById(crime?.InvestigatorId);
    const user=await User.findById(crime?.UserId);
    res.json({
      success: true,
      data: crime,
      user,
      investigator
    });
  }


export {createCrime,crimeList,createGuestCrime,getCrime};