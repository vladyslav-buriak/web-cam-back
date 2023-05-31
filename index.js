import * as dotenv from 'dotenv';
import express from "express";
import authRoutes from "./app/auth/authRoutes.js";
import mongoose from "mongoose";
import { formDataValidation } from "./app/validations/validations.js";

dotenv.config()

mongoose.connect(
    process.env.DATABASE_URL
).then(() => {
    console.log('DB connect')
}).catch(() => console.log('DB error'))

console.log(process.env)

const app = express();
app.use(express.json());

app.use('/auth', formDataValidation, authRoutes)


const PORT = 8888;
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server work')
})