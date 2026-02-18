import express from "express";
const router = express.Router();
import { getUsers, getProfile } from "../controllers/userController.js";
import { isUser } from "../middleware/auth.js";


router.get("/", isUser, getUsers);
router.get("/profile", isUser, getProfile);

export default router;
