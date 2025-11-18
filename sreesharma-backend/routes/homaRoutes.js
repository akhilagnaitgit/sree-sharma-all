// import express from "express";
// import {
//   getAllHomas,
//   getHomaById,
//   addHoma,
//   updateHoma,
//   deleteHoma,
// } from "../controllers/homaController.js";

// const router = express.Router();

// router.get("/", getAllHomas);
// router.get("/:id", getHomaById);
// router.post("/", addHoma);
// router.put("/:id", updateHoma);
// router.delete("/:id", deleteHoma);

// export default router;

import { Router } from "express";
import {
  getAllHomas,
  getHomaById,
  addHoma,
  updateHoma,
  deleteHoma
} from "../controllers/homaController.js";
const router = Router();

router.get("/", getAllHomas);
router.get("/:id", getHomaById);

// Admin usage later if needed
router.post("/", addHoma);
router.put("/:id", updateHoma);
router.delete("/:id", deleteHoma);

export default router;
