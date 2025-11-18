// import db from "../config/db.js";

// // --------------------------------------------
// // SAFE JSON PARSER → Never crashes on bad data
// // --------------------------------------------
// function safeParse(value) {
//   try {
//     if (!value) return [];
//     if (typeof value === "object") return value; // already parsed
//     return JSON.parse(value);
//   } catch (err) {
//     return [];
//   }
// }

// // --------------------------------------------
// // GET ALL HOMAS
// // --------------------------------------------
// export const getAllHomas = async (req, res) => {
//   try {
//     const sql = "SELECT * FROM homaData ORDER BY id DESC";

//     db.query(sql, (err, results) => {
//       if (err) {
//         console.error("❌ MySQL Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       const formatted = results.map((row) => ({
//         ...row,
//         benefits: safeParse(row.benefits),
//         programDetails: safeParse(row.programDetails),
//       }));

//       res.json(formatted);
//     });
//   } catch (error) {
//     console.error("❌ Controller Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // --------------------------------------------
// // GET HOMA BY ID
// // --------------------------------------------
// export const getHomaById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const sql = "SELECT * FROM homaData WHERE id = ?";

//     db.query(sql, [id], (err, results) => {
//       if (err) {
//         console.error("❌ MySQL Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (results.length === 0) {
//         return res.status(404).json({ message: "Homa not found" });
//       }

//       const row = results[0];

//       res.json({
//         ...row,
//         benefits: safeParse(row.benefits),
//         programDetails: safeParse(row.programDetails),
//       });
//     });
//   } catch (error) {
//     console.error("❌ Controller Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // --------------------------------------------
// // ADD NEW HOMA
// // --------------------------------------------
// export const addHoma = async (req, res) => {
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
//       return res.status(400).json({ error: "Slug and title are required" });
//     }

//     const sql = `
//       INSERT INTO homaData 
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
//         console.error("❌ Insert Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       res.json({
//         message: "Homa added successfully",
//         id: result.insertId,
//       });
//     });
//   } catch (error) {
//     console.error("❌ Controller Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // --------------------------------------------
// // UPDATE HOMA
// // --------------------------------------------
// export const updateHoma = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const {
//       slug,
//       title,
//       img,
//       price,
//       rating,
//       participants,
//       duration,
//       description,
//       whyPerform,
//       benefits = [],
//       programDetails = [],
//       prasadam,
//       otherInfo,
//     } = req.body;

//     const sql = `
//       UPDATE homaData SET 
//       slug = ?, title = ?, img = ?, price = ?, rating = ?, participants = ?, duration = ?, 
//       description = ?, whyPerform = ?, benefits = ?, programDetails = ?, prasadam = ?, otherInfo = ?
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
//       id,
//     ];

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error(" Update Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (result.affectedRows === 0) {
//         return res.status(404).json({ message: "Homa not found" });
//       }

//       res.json({ message: "Homa updated successfully" });
//     });
//   } catch (error) {
//     console.error(" Controller Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // --------------------------------------------
// // DELETE HOMA
// // --------------------------------------------
// export const deleteHoma = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const sql = "DELETE FROM homaData WHERE id = ?";

//     db.query(sql, [id], (err, result) => {
//       if (err) {
//         console.error(" Delete Error:", err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (result.affectedRows === 0) {
//         return res.status(404).json({ message: "Homa not found" });
//       }

//       res.json({ message: "Homa deleted successfully" });
//     });
//   } catch (error) {
//     console.error(" Controller Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// };





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

// GET ALL HOMAS
export const getAllHomas = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM homaData");

    const formatted = results.map((row) => ({
      ...row,
      benefits: safeParse(row.benefits),
      programDetails: safeParse(row.programDetails),
    }));

    res.json(formatted);
  } catch (error) {
    console.error("getAllHomas Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// GET HOMA BY ID
export const getHomaById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM homaData WHERE id = ?", [id]);

    if (results.length === 0) return res.status(404).json({ message: "Homa not found" });

    const row = results[0];

    res.json({
      ...row,
      benefits: safeParse(row.benefits),
      programDetails: safeParse(row.programDetails),
    });
  } catch (error) {
    console.error("getHomaById Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// ADD HOMA
export const addHoma = async (req, res) => {
  try {
    const {
      slug, title, img, price, rating, participants, duration,
      description, whyPerform, benefits, programDetails, prasadam, otherInfo
    } = req.body;

    await db.query(
      `INSERT INTO homaData
      (slug,title,img,price,rating,participants,duration,description,whyPerform,benefits,programDetails,prasadam,otherInfo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        slug, title, img, price, rating, participants, duration, description,
        whyPerform, JSON.stringify(benefits), JSON.stringify(programDetails),
        prasadam, otherInfo,
      ]
    );

    res.json({ message: "Homa added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE HOMA
export const updateHoma = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      slug, title, img, price, rating, participants, duration,
      description, whyPerform, benefits, programDetails, prasadam, otherInfo
    } = req.body;

    const [result] = await db.query(
      `UPDATE homaData SET
      slug=?, title=?, img=?, price=?, rating=?, participants=?, duration=?,
      description=?, whyPerform=?, benefits=?, programDetails=?, prasadam=?, otherInfo=?
      WHERE id=?`,
      [
        slug, title, img, price, rating, participants, duration, description,
        whyPerform, JSON.stringify(benefits), JSON.stringify(programDetails),
        prasadam, otherInfo, id,
      ]
    );

    if (result.affectedRows === 0) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Homa updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE HOMA
export const deleteHoma = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM homaData WHERE id = ?", [id]);

    if (result.affectedRows === 0) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Homa deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
