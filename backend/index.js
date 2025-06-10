import express from 'express';
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.use("/api/auth", authRoutes);
app.listen(3000,(req,res)=>{
    connectDB();
    console.log('server is running on port 3000');
})