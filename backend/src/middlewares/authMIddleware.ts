import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";
import { IReqAuth } from "../utils/interface";
export const authMiddleware = async (
  req: IReqAuth,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  console.log(token)
  if (!token) {
    res.status(401).json({
      message:"Unauthenticated"
    })
    return;
  }
  const decoded: any = jsonwebtoken.verify(
    token,
    process.env.ACCESS_TOKEN as string
  );
  const user = await User.findById(decoded?.id);
  if (!user) {
    res.status(401);
    throw new Error("Not authorized, user not found");
  }
  req.user = user;

  next();
};
