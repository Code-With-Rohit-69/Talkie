import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./utils/socket.js";

dotenv.config();

const port = process.env.PORT || 7000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

server.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
  connectDB();
});
