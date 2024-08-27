import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
  getContactForDmList,
  searchContact,
} from "../controllers/ContactControler.js";

const contactRoutes = Router();

contactRoutes.post("/search", verifyToken, searchContact);
contactRoutes.get("/get-contact-for-dm", verifyToken, getContactForDmList);
export default contactRoutes;
