import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB = process.env.DB;

export const connectDb = async() => {
    try{
        await mongoose.connect(DB);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}