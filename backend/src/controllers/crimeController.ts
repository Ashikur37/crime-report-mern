import { Request, Response } from "express";
import Crime from "../models/Crime";
import { IReqAuth } from "../utils/interface";

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
    const {division,district,upazila,description,address,type,fullname,phone} =req.body;

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
            phone
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


export {createCrime,crimeList,createGuestCrime};