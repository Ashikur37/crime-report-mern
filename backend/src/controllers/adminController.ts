import { Request, Response } from "express";
import Crime from "../models/Crime";
import { IReqAuth } from "../utils/interface";


const allCrimeList = async (req: IReqAuth, res: Response) => {
    const crimes=await Crime.find({});
    res.json({
        success: true,
        data: crimes,
      });

}


export {allCrimeList};