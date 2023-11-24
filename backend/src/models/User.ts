import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { IUser, userRole } from "../utils/interface";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 11,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: userRole,
      default: userRole.USER,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.methods.isPasswordMatched = async function (
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model<IUser>("user", userSchema);
