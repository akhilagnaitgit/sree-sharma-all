// const express = require("express");
// const router = express.Router();
// const db = require("../db");          // your existing DB connection
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = "YOUR_SECRET_KEY"; // change later

// // ---------------------- REGISTER ADMIN ----------------------
// router.post("/register", async (req, res) => {
//   const { username, email, phone, password, full_name } = req.body;

//   if (!password || (!email && !phone && !username)) {
//     return res.status(400).json({ msg: "Missing fields" });
//   }

//   const hashed = bcrypt.hashSync(password, 10);

//   try {
//     const sql = `
//       INSERT INTO admins(username,email,phone,password,full_name)
//       VALUES(?,?,?,?,?)
//     `;
//     db.query(sql, [username, email, phone, hashed, full_name], (err, result) => {
//       if (err) return res.status(500).json({ msg: err });
//       res.json({ msg: "Admin registered", id: result.insertId });
//     });
//   } catch (e) {
//     res.status(500).json({ msg: e.message });
//   }
// });

// // ---------------------- LOGIN ----------------------
// router.post("/login", (req, res) => {
//   const { login, password } = req.body;

//   if (!login || !password)
//     return res.status(400).json({ msg: "Missing login or password" });

//   const sql = `
//     SELECT * FROM admins
//     WHERE email=? OR phone=? OR username=?
//     LIMIT 1
//   `;

//   db.query(sql, [login, login, login], (err, results) => {
//     if (err) return res.status(500).json({ msg: err });

//     if (results.length === 0)
//       return res.status(404).json({ msg: "Admin not found" });

//     const admin = results[0];

//     const valid = bcrypt.compareSync(password, admin.password);
//     if (!valid) return res.status(401).json({ msg: "Invalid password" });

//     // create token
//     const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "7d" });

//     res.json({
//       msg: "Login successful",
//       token,
//       admin: {
//         id: admin.id,
//         username: admin.username,
//         email: admin.email,
//         phone: admin.phone,
//         full_name: admin.full_name,
//       }
//     });
//   });
// });

// // ---------------------- VERIFY TOKEN ----------------------
// router.get("/profile", (req, res) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) return res.status(401).json({ msg: "No token" });

//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).json({ msg: "Invalid token" });

//     const sql = `SELECT id, username, email, phone, full_name FROM admins WHERE id=?`;
//     db.query(sql, [decoded.id], (err, result) => {
//       if (err) return res.status(500).json({ msg: err });
//       res.json(result[0]);
//     });
//   });
// });

// // ---------------------- LOGOUT ----------------------
// router.post("/logout", (req, res) => {
//   res.json({ msg: "Logged out" });
// });

// module.exports = router;


// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import db from "../config/db.js";


// import dotenv from "dotenv";
// dotenv.config();
// const JWT_SECRET = process.env.JWT_SECRET;


// const router = express.Router();

// // const JWT_SECRET = "SUPER_SECRET_KEY";

// // ----------------------- REGISTER ADMIN -----------------------
// router.post("/register", async (req, res) => {
//   const { username, email, phone, password, full_name } = req.body;

//   if (!password || (!email && !phone && !username)) {
//     return res.status(400).json({ msg: "Missing required fields" });
//   }

//   const hashed = bcrypt.hashSync(password, 10);

//   try {
//     const sql = `
//       INSERT INTO admins (username, email, phone, password_hash, full_name)
//       VALUES (?, ?, ?, ?, ?)
//     `;

//     const [result] = await db.query(sql, [
//       username,
//       email,
//       phone,
//       hashed,
//       full_name,
//     ]);

//     res.json({ msg: "Admin registered", id: result.insertId });

//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

// // // ----------------------- LOGIN ADMIN -----------------------
// // router.post("/login", async (req, res) => {
// //   const { login, password } = req.body;

// //   if (!login || !password)
// //     return res.status(400).json({ msg: "Missing login/password" });

// //   try {
// //     const sql = `
// //       SELECT * FROM admins
// //       WHERE email=? OR phone=? OR username=?
// //       LIMIT 1
// //     `;
    
// //     const [rows] = await db.query(sql, [login, login, login]);

// //     if (rows.length === 0)
// //       return res.status(404).json({ msg: "Admin not found" });

// //     const admin = rows[0];

// //     const valid = bcrypt.compareSync(password, admin.password_hash);
// //     if (!valid) {
// //         console.log("User entered:", password);
// // console.log("Stored hash:", admin.password_hash);
// // console.log("Compare result:", bcrypt.compareSync(password, admin.password_hash));
// //         return res.status(401).json({ msg: "Invalid password" });}

// //     const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "7d" });

// //     res.json({
// //       msg: "Login successful",
// //       token,
// //       admin: {
// //         id: admin.id,
// //         username: admin.username,
// //         email: admin.email,
// //         phone: admin.phone,
// //         full_name: admin.full_name,
// //       },
// //     });

// //   } catch (err) {
// //     res.status(500).json({ msg: err.message });
// //   }
// // });


// router.post("/login", async (req, res) => {
//   const { login, password } = req.body;

//   // ... your login checks

//   const valid = bcrypt.compareSync(password, admin.password_hash);
//   if (!valid) return res.status(401).json({ msg: "Invalid password" });

//   // ✅ CREATE TOKEN HERE
//   const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "7d" });

//   res.json({
//     msg: "Login successful",
//     token,
//     admin: {
//       id: admin.id,
//       username: admin.username,
//       email: admin.email,
//       phone: admin.phone,
//       full_name: admin.full_name,
//     },
//   });
// });




// // // ----------------------- PROFILE -----------------------
// // router.get("/profile", async (req, res) => {
// //   const token = req.headers.authorization?.split(" ")[1];

// //   if (!token) return res.status(401).json({ msg: "Token missing" });

// //   try {
// //     const decoded = jwt.verify(token, JWT_SECRET);

// //     const sql = `
// //       SELECT id, username, email, phone, full_name 
// //       FROM admins 
// //       WHERE id=?
// //     `;

// //     const [rows] = await db.query(sql, [decoded.id]);

// //     res.json(rows[0]);

// //   } catch (err) {
// //     res.status(401).json({ msg: "Invalid or expired token" });
// //   }
// // });



// router.get("/profile", async (req, res) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) return res.status(401).json({ msg: "Token missing" });

//   try {
//     // ✅ VERIFY TOKEN HERE
//     const decoded = jwt.verify(token, JWT_SECRET);

//     const sql = `
//       SELECT id, username, email, phone, full_name
//       FROM admins
//       WHERE id=?
//     `;

//     const [rows] = await db.query(sql, [decoded.id]);

//     res.json(rows[0]);
//   } catch (err) {
//     res.status(401).json({ msg: "Invalid or expired token" });
//   }
// });


// // ----------------------- LOGOUT -----------------------
// router.post("/logout", (req, res) => {
//   res.json({ msg: "Logged out" });
// });

// export default router;




import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// --------------------------- REGISTER ---------------------------
router.post("/register", async (req, res) => {
  const { username, email, phone, password, full_name } = req.body;

  if (!password || (!email && !phone && !username)) {
    return res.status(400).json({ msg: "Missing required fields" });
  }

  const hashed = bcrypt.hashSync(password, 10);

  try {
    const sql = `
      INSERT INTO admins (username, email, phone, password_hash, full_name)
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(sql, [
      username,
      email,
      phone,
      hashed,
      full_name,
    ]);

    res.json({ msg: "Admin registered", id: result.insertId });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// --------------------------- LOGIN ---------------------------
router.post("/login", async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password)
    return res.status(400).json({ msg: "Missing login/password" });

  try {
    const sql = `
      SELECT * FROM admins
      WHERE email=? OR phone=? OR username=?
      LIMIT 1
    `;

    const [rows] = await db.query(sql, [login, login, login]);

    if (rows.length === 0)
      return res.status(404).json({ msg: "Admin not found" });

    const admin = rows[0];  // ✅ YOU DELETED THIS LINE EARLIER

    const valid = bcrypt.compareSync(password, admin.password_hash);
    if (!valid) return res.status(401).json({ msg: "Invalid password" });

    // Create JWT Token
    const token = jwt.sign({ id: admin.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      msg: "Login successful",
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
        phone: admin.phone,
        full_name: admin.full_name,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// --------------------------- PROFILE ---------------------------
router.get("/profile", async (req, res) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ msg: "Authorization header missing" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const [rows] = await db.query(
      "SELECT id, username, email, phone, full_name FROM admins WHERE id=?",
      [decoded.id]
    );

    res.json(rows[0]);
  } catch (err) {
    res.status(401).json({ msg: "Invalid or expired token" });
  }
});

// --------------------------- LOGOUT ---------------------------
router.post("/logout", (req, res) => {
  res.json({ msg: "Logged out" });
});

export default router;
