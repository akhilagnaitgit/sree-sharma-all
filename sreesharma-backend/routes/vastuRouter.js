// import express from "express";
// import {
//   getAllVastu,
//   getVastuById,
//   addVastu,
//   updateVastu,
//   deleteVastu,
// } from "../controllers/vastuController.js";

// const router = express.Router();

// router.get("/", getAllVastu);
// router.get("/:id", getVastuById);
// router.post("/", addVastu);
// router.put("/:id", updateVastu);
// router.delete("/:id", deleteVastu);

// export default router;

import { Router } from "express";
import {
  getAllVastu,
  getVastuById,
  addVastu,
  updateVastu,
  deleteVastu
} from "../controllers/vastuController.js";

const router = Router();

router.get("/", getAllVastu);
router.get("/:id", getVastuById);

// Admin only
router.post("/", addVastu);
router.put("/:id", updateVastu);
router.delete("/:id", deleteVastu);

export default router;
