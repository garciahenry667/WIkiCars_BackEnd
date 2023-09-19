import "dotenv/config"
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes"

export const PORT = process.env.PORT || 3001;
export const app = express();

app.use(cors());

app.use("/auth", authRouter)

