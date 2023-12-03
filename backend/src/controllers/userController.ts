import { Request, Response } from "express";
import User from "../models/User";
import generateToken from "../utils/jwt";
import { IReqAuth } from "../utils/interface";
const signUp = async (req: Request, res: Response) => {
  const { fullname, email, password, phone } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.json({
      success: false,
      message: "Email already exist",
    });
    return;
  }
  const existingPhoneUser = await User.findOne({ phone });
  if (existingPhoneUser) {
    res.json({
      success: false,
      message: "Phone already exist",
    });
    return;
  }

  const newUser = await User.create({
    fullname,
    email,
    password,
    phone,
  });
  res.json({
    success: true,
    message: "Registration successfull",
    data: newUser,
  });
  // res.json(newUser);
};

const signIn = async (req: Request, res: Response) => {
  const { phone, password } = req.body;
  const user = await User.findOne({
    phone,
  });
  if (!user) {
    res.status(401).json({
      success: false,
      message: "Phone not found",
    });
    return;
  }
  if (await user.isPasswordMatched(password)) {
    const token = generateToken(user?._id);
    res.cookie("token", token, {
      httpOnly: false,
      // secure: true,
      // sameSite: "none",
      maxAge: 720 * 60 * 660 * 1000,
    });
    res.json({
      data: {
        token,
        fullname: user.fullname,
        _id: user._id,
        email: user.email,
        phone: user.phone,
        role:user.role

      },
      success: true,
      message: "Login successfull",
    });
    return;
  }
  res.status(401).json({
    success: false,
    message: "Incorrect password",
  });
};

const getUser = async (req: IReqAuth, res: Response) => {
  console.log(req.user);
  res.send("hello");
};
export { signUp, signIn, getUser };
