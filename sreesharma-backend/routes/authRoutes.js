import { Router } from "express";
import { signup, signin, me, signout } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// jwt.sign(payload, process.env.JWT_SECRET)
// jwt.verify(token, process.env.JWT_SECRET)


router.post("/signup", signup);
router.post("/signin", signin);
router.get("/me", authMiddleware, me);
router.post("/signout", authMiddleware, signout);

export default router;
