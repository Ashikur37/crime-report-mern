import mongoose from "mongoose";
import { crimeStatus, crimeType } from "../utils/interface";

const crimeSchema = new mongoose.Schema(
  {
    info:{},
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: {
      type: String,
      enum: crimeType,
    },
    division: String,
    district: String,
    upazila: String,
    address: String,
    images: {
      type: [String], // Specifies that it's an array of strings
      default: [], // Optional: default value for the array (empty array in this case)
    },
    description: String,
    status:{
      type:String,
      enum:crimeStatus,
      default:crimeStatus.Pending
    },
    InvestigatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    comments:{
      type:[],
      default:[]
    }
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("crime", crimeSchema);