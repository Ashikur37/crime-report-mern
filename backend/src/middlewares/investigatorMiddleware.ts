import { Request, Response, NextFunction } from "express";
import jsonwebtoken, { TokenExpiredError } from "jsonwebtoken";
import User from "../models/User";
import { IReqAuth, userRole } from "../utils/interface";

export const investigatorMiddleware = async (
  req: IReqAuth,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  console.log(token);

  if (!token) {
    res.status(401).json({
      message: "Unauthenticated",
    });
    return;
  }

  try {
    const decoded: any = jsonwebtoken.verify(
      token,
      process.env.ACCESS_TOKEN as string
    );

    const user = await User.findById(decoded?.id);

    if (!user) {
      res.status(401).json({
        message: "Unauthenticated",
      });
      return;
    }

    if (user.role !== userRole.INVESTIGATOR) {
      res.status(401).json({
        message: "Unauthenticated",
      });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      res.status(401).json({
        message: "Token expired",
      });
    } else {
      // Handle other errors, e.g., invalid signature, etc.
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
};