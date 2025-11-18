// import db from "../config/db.js";
// import { Router } from "express";
// const router = Router();
// // -----------------------------------------
// // SAFE JSON PARSER (never crashes)
// // -----------------------------------------
// function safeParse(value) {
//   try {
//     if (!value) return [];
//     if (typeof value === "object") return value;
//     return JSON.parse(value);
//   } catch {
//     return [];
//   }
// }

// // -----------------------------------------
// // GET ALL VASTU
// // -----------------------------------------
// export const getAllVastu = async (req, res) => {
//   console.log(" getAllVastu called");

//   try {
//     const sql = "SELECT * FROM vastuData";

//     db.query(sql, (err, results) => {
//       if (err) {
//         console.error(" MySQL Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       const parsed = results.map((row) => ({
//         ...row,
//         benefits: safeParse(row.benefits),
//         programDetails: safeParse(row.programDetails),
//       }));

//       res.json(parsed);
//     });
//   } catch (error) {
//     console.error(" Controller Error:", error);
//     res.status(500).json({ error: "Server error: " + error.message });
//   }
// };

// // -----------------------------------------
// // GET VASTU BY ID
// // -----------------------------------------
// export const getVastuById = async (req, res) => {
//   console.log(" getVastuById called");

//   try {
//     const { id } = req.params;
//     const sql = "SELECT * FROM vastuData WHERE id = ?";

//     db.query(sql, [id], (err, results) => {
//       if (err) {
//         console.error(" MySQL Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (results.length === 0)
//         return res.status(404).json({ message: "Vastu item not found" });

//       const row = results[0];

//       res.json({
//         ...row,
//         benefits: safeParse(row.benefits),
//         programDetails: safeParse(row.programDetails),
//       });
//     });
//   } catch (error) {
//     console.error(" Controller Error:", error);
//     res.status(500).json({ error: "Server error: " + error.message });
//   }
// };

// // -----------------------------------------
// // ADD VASTU ITEM
// // -----------------------------------------
// export const addVastu = async (req, res) => {
//   console.log(" addVastu called");

//   try {
//     const {
//       slug = "",
//       title = "",
//       img = "",
//       price = "",
//       rating = null,
//       participants = "",
//       duration = "",
//       description = "",
//       whyPerform = "",
//       benefits = [],
//       programDetails = [],
//       prasadam = "",
//       otherInfo = "",
//     } = req.body;

//     if (!slug || !title) {
//       return res
//         .status(400)
//         .json({ error: "Missing required fields: slug or title" });
//     }

//     const sql = `
//       INSERT INTO vastuData
//       (slug, title, img, price, rating, participants, duration, description, whyPerform, benefits, programDetails, prasadam, otherInfo)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     const values = [
//       slug,
//       title,
//       img,
//       price,
//       rating,
//       participants,
//       duration,
//       description,
//       whyPerform,
//       JSON.stringify(benefits),
//       JSON.stringify(programDetails),
//       prasadam,
//       otherInfo,
//     ];

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error(" Insert Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       res.json({
//         message: "Vastu item added successfully!",
//         id: result.insertId,
//       });
//     });
//   } catch (error) {
//     console.error(" Controller Error:", error);
//     res.status(500).json({
//       error: "Failed to add vastu item",
//       details: error.message,
//     });
//   }
// };

// // -----------------------------------------
// // UPDATE VASTU ITEM
// // -----------------------------------------
// export const updateVastu = async (req, res) => {
//   console.log("🔥 updateVastu called");

//   try {
//     const { id } = req.params;

//     const {
//       slug = "",
//       title = "",
//       img = "",
//       price = "",
//       rating = null,
//       participants = "",
//       duration = "",
//       description = "",
//       whyPerform = "",
//       benefits = [],
//       programDetails = [],
//       prasadam = "",
//       otherInfo = "",
//     } = req.body;

//     const sql = `
//       UPDATE vastuData SET
//       slug=?, title=?, img=?, price=?, rating=?, participants=?, duration=?,
//       description=?, whyPerform=?, benefits=?, programDetails=?, prasadam=?, otherInfo=?
//       WHERE id=?
//     `;

//     const values = [
//       slug,
//       title,
//       img,
//       price,
//       rating,
//       participants,
//       duration,
//       description,
//       whyPerform,
//       JSON.stringify(benefits),
//       JSON.stringify(programDetails),
//       prasadam,
//       otherInfo,
//       id,
//     ];

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error(" Update Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (result.affectedRows === 0)
//         return res.status(404).json({ message: "Vastu item not found" });

//       res.json({ message: "Vastu item updated successfully!" });
//     });
//   } catch (error) {
//     console.error(" Controller Error:", error);
//     res.status(500).json({
//       error: "Failed to update vastu item",
//       details: error.message,
//     });
//   }
// };

// // -----------------------------------------
// // DELETE VASTU ITEM
// // -----------------------------------------
// export const deleteVastu = async (req, res) => {
//   console.log("🔥 deleteVastu called");

//   try {
//     const { id } = req.params;

//     const sql = "DELETE FROM vastuData WHERE id = ?";

//     db.query(sql, [id], (err, result) => {
//       if (err) {
//         console.error("❌ Delete Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (result.affectedRows === 0)
//         return res.status(404).json({ message: "Vastu item not found" });

//       res.json({ message: "Vastu item deleted successfully!" });
//     });
//   } catch (error) {
//     console.error("❌ Controller Error:", error);
//     res.status(500).json({
//       error: "Failed to delete vastu item",
//       details: error.message,
//     });
//   }
// };


import db from "../config/db.js";

// SAFE PARSER for JSON strings
function safeParse(value) {
  try {
    if (!value) return [];
    if (typeof value === "object") return value;
    return JSON.parse(value);
  } catch {
    return [];
  }
}

// -----------------------------------------
// GET ALL VASTU
// -----------------------------------------
export const getAllVastu = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM vastuData");

    const formatted = results.map((row) => ({
      ...row,
      benefits: safeParse(row.benefits),
      programDetails: safeParse(row.programDetails),
    }));

    res.json(formatted);
  } catch (error) {
    console.error("getAllVastu ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// -----------------------------------------
// GET VASTU BY SLUG
// -----------------------------------------
export const getVastuById = async (req, res) => {
  try {
    const { id } = req.params;

    const [results] = await db.query("SELECT * FROM vastuData WHERE id = ?", [id]);

    if (results.length === 0)
      return res.status(404).json({ message: "Vastu not found" });

    const row = results[0];

    res.json({
      ...row,
      benefits: safeParse(row.benefits),
      programDetails: safeParse(row.programDetails),
    });
  } catch (error) {
    console.error("getVastuById ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// -----------------------------------------
// ADD NEW VASTU
// -----------------------------------------
export const addVastu = async (req, res) => {
  try {
    const {
      slug, title, img, price, rating, participants, duration,
      description, whyPerform, benefits, programDetails,
      prasadam, otherInfo,
    } = req.body;

    await db.query(
      `INSERT INTO vastuData
      (slug, title, img, price, rating, participants, duration,
       description, whyPerform, benefits, programDetails, prasadam, otherInfo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        slug, title, img, price, rating, participants, duration,
        description, whyPerform,
        JSON.stringify(benefits),
        JSON.stringify(programDetails),
        prasadam, otherInfo,
      ]
    );

    res.json({ message: "Vastu added successfully" });
  } catch (error) {
    console.error("createVastu ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// -----------------------------------------
// UPDATE VASTU
// -----------------------------------------
export const updateVastu = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title, img, price, rating, participants, duration,
      description, whyPerform, benefits, programDetails,
      prasadam, otherInfo,
    } = req.body;

    const [result] = await db.query(
      `UPDATE vastuData SET
      title=?, img=?, price=?, rating=?, participants=?, duration=?,
      description=?, whyPerform=?, benefits=?, programDetails=?, 
      prasadam=?, otherInfo=?
      WHERE id=?`,
      [
        title, img, price, rating, participants, duration,
        description, whyPerform,
        JSON.stringify(benefits),
        JSON.stringify(programDetails),
        prasadam, otherInfo,
        id
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Vastu not found" });

    res.json({ message: "Vastu updated successfully" });
  } catch (error) {
    console.error("updateVastu ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// -----------------------------------------
// DELETE VASTU
// -----------------------------------------
export const deleteVastu = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query("DELETE FROM vastuData WHERE id = ?",[id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Vastu not found" });

    res.json({ message: "Vastu deleted successfully" });
  } catch (error) {
    console.error("deleteVastu ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};
