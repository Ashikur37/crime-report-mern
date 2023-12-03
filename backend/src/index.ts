import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter";
import crimeRouter from "./routes/crimeRoutes";
import adminRouter from "./routes/adminRoutes";


import connectDB from "./utils/db";
import path from "path";
import cors from "cors";
import User from "./models/User";
import { userRole } from "./utils/interface";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from Express angf!");
});

app.use("/api/auth", authRouter);
app.use("/api/crime", crimeRouter);
app.use("/api/admin", adminRouter);


app.listen(PORT, async () => {
  await connectDB();

  const user = await User.findOne({ email: "admin@gmail.com" });
  if (!user) {
    console.log("creating admin");
    await User.create({
      fullname: "Admin",
      email: "admin@gmail.com",
      password: "admin1234",
      phone: "01711111111",
      role: userRole.ADMIN,
    });
  }
});
