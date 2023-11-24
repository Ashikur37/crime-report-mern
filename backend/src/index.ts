import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from './routes/authRouter'
import connectDB from './utils/db';
import path from "path";
import cors from "cors";
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
app.use(cors({
  origin :'http://localhost:5173',
  credentials:true
}));
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello from Express angf!');
});

app.use("/api/auth", authRouter);

app.listen(PORT, async() => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});