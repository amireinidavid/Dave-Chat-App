import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";
import contactRoutes from "./routes/contactRoute.js";
import setupSocket from "./socket.js";
import messagesRoute from "./routes/messagesRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET, POST, PUT, PATCH, DELETE"],
    credentials: true,
  })
);

app.use("/uploads/profiles", express.static("uploads/profiles"));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/messages", messagesRoute);

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

setupSocket(server);
mongoose
  .connect(databaseURL)
  .then(() => console.log("DB Connected Succesfully..."));