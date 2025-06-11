import express from 'express';
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies


app.get('/',(req,res)=>{
    res.send('Hello World!')
})


app.use("/api/auth", authRoutes);

app.listen(5000,(req,res)=>{
    connectDB();
    console.log('server is running on port 3000');
})