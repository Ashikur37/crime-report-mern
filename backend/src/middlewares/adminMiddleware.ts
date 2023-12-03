import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";
import { IReqAuth, userRole } from "../utils/interface";
export const adminMiddleware = async (
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
    res.status(401).json({
        message:"Unauthenticated"
      })
      return;
  }
  if(user.role!=userRole.ADMIN){
    res.status(401).json({
        message:"Unauthenticated"
      })
  }
  req.user = user;

  next();
};
