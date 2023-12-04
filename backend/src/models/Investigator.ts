import mongoose from "mongoose";
import { IInvestigator } from "../utils/interface";


const investigatorSchema=new mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    division:String,
    district:String,
    upazila:String,
    address:String,
})

export default mongoose.model<IInvestigator>("investigator", investigatorSchema);