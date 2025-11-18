// import express from "express";
// import db from "../config/db.js";
// import {
//     getAllMuhurta,
//     getMuhurtaById,
//     addMuhurta,
//     updateMuhurta,
//     deleteMuhurta,
// } from "../controllers/muhurtaController.js";


// const router = express.Router();

// router.get("/", getAllMuhurta);
// router.get("/:id", getMuhurtaById);
// router.post("/", addMuhurta);
// router.put("/:id", updateMuhurta);
// router.delete("/:id", deleteMuhurta);

// export default router;

// routes/muhurtaRoutes.js




// import express from "express";
// import db from "../config/db.js";
// const router = express.Router();

// //  GET all Muhurtas
// router.get("/", async (req, res) => {
//   try {
//     const [rows] = await db.query("SELECT * FROM muhurta");
//     // Parse JSON fields safely
//     const parsed = rows.map(r => ({
//       ...r,
//       benefits: r.benefits ? JSON.parse(r.benefits) : [],
//       programDetails: r.programDetails ? JSON.parse(r.programDetails) : []
//     }));
//     res.json(parsed);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch Muhurtas" });
//   }
// });

// //  GET by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const [rows] = await db.query("SELECT * FROM muhurta WHERE id = ?", [req.params.id]);
//     if (rows.length === 0) return res.status(404).json({ error: "Not found" });
//     const muhurta = rows[0];
//     muhurta.benefits = muhurta.benefits ? JSON.parse(muhurta.benefits) : [];
//     muhurta.programDetails = muhurta.programDetails ? JSON.parse(muhurta.programDetails) : [];
//     res.json(muhurta);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch muhurta" });
//   }
// });

// //  POST new Muhurta
// router.post("/", async (req, res) => {
//   const {
//     slug, title, img, price, rating, participants, duration,
//     description, whyPerform, benefits, programDetails, prasadam, otherInfo
//   } = req.body;

//   try {
//     const [result] = await db.query(
//       `INSERT INTO muhurta 
//       (slug, title, img, price, rating, participants, duration, description, whyPerform, benefits, programDetails, prasadam, otherInfo)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CAST(? AS JSON), CAST(? AS JSON), ?, ?)`,
//       [
//         slug, title, img, price, rating, participants, duration,
//         description, whyPerform,
//         JSON.stringify(benefits || []),
//         JSON.stringify(programDetails || []),
//         prasadam, otherInfo
//       ]
//     );
//     res.status(201).json({ message: "Muhurta added", id: result.insertId });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to add muhurta" });
//   }
// });

// // ✅ PUT Update
// router.put("/:id", async (req, res) => {
//   const {
//     slug, title, img, price, rating, participants, duration,
//     description, whyPerform, benefits, programDetails, prasadam, otherInfo
//   } = req.body;

//   try {
//     await db.query(
//       `UPDATE muhurta SET 
//         slug=?, title=?, img=?, price=?, rating=?, participants=?, duration=?, description=?, whyPerform=?,
//         benefits=CAST(? AS JSON), programDetails=CAST(? AS JSON), prasadam=?, otherInfo=? 
//        WHERE id=?`,
//       [
//         slug, title, img, price, rating, participants, duration, description, whyPerform,
//         JSON.stringify(benefits || []),
//         JSON.stringify(programDetails || []),
//         prasadam, otherInfo,
//         req.params.id
//       ]
//     );
//     res.json({ message: "Muhurta updated" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to update muhurta" });
//   }
// });

// // ✅ DELETE
// router.delete("/:id", async (req, res) => {
//   try {
//     await db.query("DELETE FROM muhurta WHERE id = ?", [req.params.id]);
//     res.json({ message: "Muhurta deleted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to delete muhurta" });
//   }
// });

// export default router;



// import express from "express";
// import {
//   getAllMuhurtas,
//   getMuhurtaById,
//   addMuhurta,
//   updateMuhurta,
//   deleteMuhurta,
// } from "../controllers/muhurtaController.js";

// const router = express.Router();

// router.get("/", getAllMuhurtas);
// router.get("/:id", getMuhurtaById);
// router.post("/", addMuhurta);
// router.put("/:id", updateMuhurta);
// router.delete("/:id", deleteMuhurta);

// export default router;



// import express from "express";
// import {
//   getAllMuhurtas,
//   getMuhurtaById,
//   addMuhurta,
//   updateMuhurta,
//   deleteMuhurta,
// } from "../controllers/muhurtaController.js";

// const router = express.Router();

// router.get("/", getAllMuhurtas);
// router.get("/:id", getMuhurtaById);
// router.post("/", addMuhurta);
// router.put("/:id", updateMuhurta);
// router.delete("/:id", deleteMuhurta);

// export default router;


import { Router } from "express";
import {
  getAllMuhurta,
  getMuhurtaById,
  addMuhurta,
  updateMuhurta,
  deleteMuhurta
} from "../controllers/muhurtaController.js";

const router = Router();

router.get("/", getAllMuhurta);
router.get("/:id", getMuhurtaById);

// Admin only (if needed)
router.post("/", addMuhurta);
router.put("/:id", updateMuhurta);
router.delete("/:id", deleteMuhurta);

export default router;

