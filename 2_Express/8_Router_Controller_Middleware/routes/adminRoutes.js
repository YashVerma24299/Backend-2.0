import express from "express";
import { getDashboard, deleteUser } from "../controllers/adminController.js";
import { isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", isAdmin, getDashboard);
router.get("/delete/:id", isAdmin, deleteUser);

export default router;
