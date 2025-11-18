import { Router } from "express";
import { signup, signin, me, signout } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/me", authMiddleware, me);
router.post("/signout", authMiddleware, signout);

export default router;
