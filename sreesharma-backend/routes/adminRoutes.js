import { Router } from "express";
import {
  getUsers,
  getAdmins,
  addAdmin
} from "../controllers/adminController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = Router();

// ADMIN PROTECTED ROUTES
router.get("/users", authMiddleware, adminMiddleware, getUsers);
router.get("/admins", authMiddleware, adminMiddleware, getAdmins);
router.post("/add-admin", authMiddleware, adminMiddleware, addAdmin);

export default router;
