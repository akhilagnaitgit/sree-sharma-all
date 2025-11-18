import db from "../config/db.js";

// SAFE JSON PARSER
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
// GET ALL MUHURTAS
// -----------------------------------------
export const getAllMuhurta = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM muhurta");

    const formatted = results.map((row) => ({
      ...row,
      benefits: safeParse(row.benefits),
      programDetails: safeParse(row.programDetails),
    }));

    res.json(formatted);
  } catch (error) {
    console.error("getAllMuhurta ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// -----------------------------------------
// GET MUHURTA BY SLUG
// -----------------------------------------
export const getMuhurtaById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM muhurta WHERE id = ?",  [id]);

    if (results.length === 0)
      return res.status(404).json({ message: "Muhurta not found" });

    const row = results[0];

    res.json({
      ...row,
      benefits: safeParse(row.benefits),
      programDetails: safeParse(row.programDetails),
    });
  } catch (error) {
    console.error("getMuhurtaBySlug ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// -----------------------------------------
// ADD MUHURTA
// -----------------------------------------
export const addMuhurta = async (req, res) => {
  try {
    const {
      slug, title, img, price, rating, participants, duration,
      description, whyPerform, benefits, programDetails,
      prasadam, otherInfo
    } = req.body;

    await db.query(
      `INSERT INTO muhurta
      (slug, title, img, price, rating, participants, duration, 
       description, whyPerform, benefits, programDetails, prasadam, otherInfo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        slug, title, img, price, rating, participants, duration,
        description, whyPerform, JSON.stringify(benefits),
        JSON.stringify(programDetails), prasadam, otherInfo
      ]
    );

    res.json({ message: "Muhurta added successfully" });
  } catch (error) {
    console.error("addMuhurta ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// -----------------------------------------
// UPDATE MUHURTA
// -----------------------------------------
export const updateMuhurta = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title, img, price, rating, participants, duration,
      description, whyPerform, benefits, programDetails,
      prasadam, otherInfo
    } = req.body;

    const [result] = await db.query(
      `UPDATE muhurta SET
      title=?, img=?, price=?, rating=?, participants=?, duration=?,
      description=?, whyPerform=?, benefits=?, programDetails=?,
      prasadam=?, otherInfo=?
      WHERE id=?`,
      [
        title, img, price, rating, participants, duration,
        description, whyPerform, JSON.stringify(benefits),
        JSON.stringify(programDetails), prasadam, otherInfo,
        id
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Muhurta not found" });

    res.json({ message: "Muhurta updated successfully" });
  } catch (error) {
    console.error("updateMuhurta ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// -----------------------------------------
// DELETE MUHURTA
// -----------------------------------------
export const deleteMuhurta = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      "DELETE FROM muhurta WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Muhurta not found" });

    res.json({ message: "Muhurta deleted successfully" });
  } catch (error) {
    console.error("deleteMuhurta ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};





// import db from "../config/db.js"; // MySQL connection

// //  Safe JSON parser helper
// function safeJSONParse(data) {
//   try {
//     return JSON.parse(data || "[]");
//   } catch {
//     return [];
//   }
// }

// //  Get all Homas
// export const getAllMuhurtas = async (req, res) => {
//   console.log(" getAllMuhurtas called");
//   try {
//     const sql = "SELECT * FROM muhurta";
//     db.query(sql, (err, results) => {
//       if (err) {
//         console.error(" MySQL Query Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       const parsed = results.map(row => ({
//         ...row,
//         benefits: safeJSONParse(row.benefits),
//         programDetails: safeJSONParse(row.programDetails)
//       }));

//       res.json(parsed);
//     });
//   } catch (error) {
//     console.error(" Controller Error in getAllMuhurtas:", error);
//     res.status(500).json({ error: "Server error: " + error.message });
//   }
// };

// //  Get Muhurta by ID
// export const getMuhurtaById = async (req, res) => {
//   console.log(" getMuhurtaById called");
//   try {
//     const { id } = req.params;
//     const sql = "SELECT * FROM muhurta WHERE id = ?";
//     db.query(sql, [id], (err, results) => {
//       if (err) {
//         console.error(" MySQL Query Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (results.length === 0) {
//         return res.status(404).json({ message: " Muhurta not found" });
//       }

//       const row = results[0];
//       res.json({
//         ...row,
//         benefits: safeJSONParse(row.benefits),
//         programDetails: safeJSONParse(row.programDetails)
//       });
//     });
//   } catch (error) {
//     console.error(" Controller Error in getMuhurtaById:", error);
//     res.status(500).json({ error: "Server error: " + error.message });
//   }
// };

// //  Add New Homa
// export const addMuhurta = async (req, res) => {
//   console.log(" addMuhurta called");
//   try {
//     const {
//       slug = "",
//       title = "",
//       img = "",
//       price = "",
//       rating = "",
//       participants = "",
//       duration = "",
//       description = "",
//       whyPerform = "",
//       benefits = [],
//       programDetails = [],
//       prasadam = "",
//       otherInfo = ""
//     } = req.body;

//     if (!slug || !title) {
//       return res.status(400).json({ error: "Missing required fields: slug or title" });
//     }

//     const sql = `
//       INSERT INTO muhurta
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
//       otherInfo
//     ];

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error(" Insert Error:", err);
//         return res.status(500).json({ error: err.message });
//       }
//       res.json({ message: " Muhurta added successfully!", id: result.insertId });
//     });
//   } catch (error) {
//     console.error(" Controller Error in addMUhurta:", error);
//     res.status(500).json({ error: "Failed to add Muhurta", details: error.message });
//   }
// };

// //  Update Homa
// export const updateMuhurta = async (req, res) => {
//   console.log(" updateMuhurta called");
//   try {
//     const { id } = req.params;
//     if (!id) return res.status(400).json({ error: "Missing ID parameter" });

//     const {
//       slug = "",
//       title = "",
//       img = "",
//       price = "",
//       rating = "",
//       participants = "",
//       duration = "",
//       description = "",
//       whyPerform = "",
//       benefits = [],
//       programDetails = [],
//       prasadam = "",
//       otherInfo = ""
//     } = req.body;

//     const sql = `
//       UPDATE homaData
//       SET slug = ?, title = ?, img = ?, price = ?, rating = ?, participants = ?, duration = ?, description = ?,
//           whyPerform = ?, benefits = ?, programDetails = ?, prasadam = ?, otherInfo = ?
//       WHERE id = ?
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
//       id
//     ];

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error(" Update Error:", err);
//         return res.status(500).json({ error: err.message });
//       }
//       if (result.affectedRows === 0)
//         return res.status(404).json({ message: " Muhurta not found" });

//       res.json({ message: " Muhurta updated successfully!" });
//     });
//   } catch (error) {
//     console.error(" Controller Error in updateMuhurta:", error);
//     res.status(500).json({ error: "Failed to update Muhurta", details: error.message });
//   }
// };

// //  Delete Homa
// export const deleteMuhurta = async (req, res) => {
//   console.log(" deleteMuhurta called");
//   try {
//     const { id } = req.params;
//     if (!id) return res.status(400).json({ error: "Missing ID parameter" });

//     const sql = "DELETE FROM muhurta WHERE id = ?";
//     db.query(sql, [id], (err, result) => {
//       if (err) {
//         console.error(" Delete Error:", err);
//         return res.status(500).json({ error: err.message });
//       }
//       if (result.affectedRows === 0)
//         return res.status(404).json({ message: " Muhurta not found" });

//       res.json({ message: " Muhurta deleted successfully!" });
//     });
//   } catch (error) {
//     console.error(" Controller Error in deleteMuhurta:", error);
//     res.status(500).json({ error: "Failed to delete Muhurta", details: error.message });
//   }
// };
