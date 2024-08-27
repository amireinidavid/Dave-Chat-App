import { Router } from "express";
import { getMessages } from "../controllers/MessagesControler.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

const messagesRoute = Router();

messagesRoute.post("/get-messages", verifyToken, getMessages);

export default messagesRoute;
