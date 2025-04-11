import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const PORT = 3000;

const app = express();

mongoose.connect(process.env.MONGOD_URL, {
 }).then(() => {
    console.log("DB connected");
 }).catch((err) => {
    console.error("DB connection error:", err);
 });

app.listen(PORT, "0.0.0.0", () => {
   console.log(`Server is running on http://localhost:${PORT}`);
})