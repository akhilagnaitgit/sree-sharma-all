// async function signin(req, res) {
//   try {
//     const { email, password } = req.body;

//     const [rows] = await pool.query(
//       "SELECT * FROM users WHERE email = ? LIMIT 1",
//       [email]
//     );

//     if (!rows.length) return res.status(400).json({ message: "Invalid credentials" });

//     const user = rows[0];

//     const match = await bcrypt.compare(password, user.password_hash);
//     if (!match) return res.status(400).json({ message: "Invalid credentials" });

//     // ----- Update login info -----
//     await pool.query(
//       "UPDATE users SET last_login = NOW(), is_online = 1 WHERE id = ?",
//       [user.id]
//     );

//     const token = jwt.sign(
//       { id: user.id, email: user.email, role: user.role },
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN }
//     );

//     return res.json({
//       message: "Signed in",
//       token,
//       user: {
//         id: user.id,
//         full_name: user.full_name,
//         email: user.email,
//         phone: user.phone,
//         role: user.role,
//         is_online: 1,
//         last_login: new Date()
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// }

// async function signout(req, res) {
//   try {
//     await pool.query(
//       "UPDATE users SET is_online = 0 WHERE id = ?",
//       [req.user.id]
//     );

//     return res.json({ message: "Signed out successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// }

// async function signup(req, res) {
//   try {
//     const { full_name, email, phone, password } = req.body;

//     const [existing] = await pool.query(
//       "SELECT id FROM users WHERE email = ? OR phone = ?",
//       [email, phone || null]
//     );

//     if (existing.length)
//       return res.status(400).json({ message: "Email or phone already exists" });

//     const hash = await bcrypt.hash(password, SALT_ROUNDS);

//     const [result] = await pool.query(
//       "INSERT INTO users (full_name, email, phone, password_hash, role) VALUES (?, ?, ?, ?, 'user')",
//       [full_name, email, phone || null, hash]
//     );

//     const token = jwt.sign({ id: result.insertId, email, role: "user" }, JWT_SECRET);

//     return res.status(201).json({
//       message: "User created",
//       token,
//       user: {
//         id: result.insertId,
//         full_name,
//         email,
//         phone,
//         role: "user"
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// }



// const pool = require("../db");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// exports.signup = async (req, res) => {
//   try {
//     const { full_name, email, phone, password } = req.body;

//     const [exists] = await pool.query(
//       "SELECT id FROM users WHERE email=? OR phone=?",
//       [email, phone]
//     );

//     if (exists.length > 0)
//       return res.status(400).json({ message: "Email/Phone already exists" });

//     const hash = await bcrypt.hash(password, 10);

//     const [result] = await pool.query(
//       "INSERT INTO users (full_name, email, phone, password_hash, role) VALUES (?, ?, ?, ?, 'user')",
//       [full_name, email, phone, hash]
//     );

//     const token = jwt.sign(
//       {
//         id: result.insertId,
//         email,
//         role: "user",
//       },
//       process.env.JWT_SECRET
//     );

//     res.json({
//       message: "User created",
//       token,
//       user: { id: result.insertId, full_name, email, role: "user" },
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.signin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const [rows] = await pool.query("SELECT * FROM users WHERE email=?", [
//       email,
//     ]);

//     if (rows.length === 0)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const user = rows[0];

//     const valid = await bcrypt.compare(password, user.password_hash);
//     if (!valid)
//       return res.status(400).json({ message: "Invalid credentials" });

//     await pool.query(
//       "UPDATE users SET last_login=NOW(), is_online=1 WHERE id=?",
//       [user.id]
//     );

//     const token = jwt.sign(
//       { id: user.id, email, role: user.role },
//       process.env.JWT_SECRET
//     );

//     res.json({
//       message: "Logged in",
//       token,
//       user: {
//         id: user.id,
//         full_name: user.full_name,
//         email: user.email,
//         role: user.role,
//         is_online: 1,
//         last_login: new Date(),
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.signout = async (req, res) => {
//   try {
//     await pool.query("UPDATE users SET is_online=0 WHERE id=?", [req.user.id]);
//     res.json({ message: "Signed out" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.me = async (req, res) => {
//   try {
//     const [rows] = await pool.query(
//       "SELECT id, full_name, email, role, is_online, last_login, created_at FROM users WHERE id=?",
//       [req.user.id]
//     );

//     res.json({ user: rows[0] });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

export const signup = async (req, res) => {
  try {
    const { full_name, email, phone, password } = req.body;

    const [userExists] = await db.query(
      "SELECT id FROM users WHERE email = ? OR phone = ?",
      [email, phone]
    );

    if (userExists.length > 0) {
      return res.status(400).json({ message: "Email or phone already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (full_name, email, phone, password_hash, role) VALUES (?, ?, ?, ?, 'user')",
      [full_name, email, phone, hash]
    );

    const [user] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    const token = jwt.sign(
      { id: user[0].id, email: user[0].email, role: user[0].role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Signup success", token, user: user[0] });

  } catch (error) {
    console.error("❌ SIGNUP ERROR:", error);
    // res.status(500).json({ message: "Signup failed", error });
    return res.status(500).json({
    message: "Signup failed",
    error: error.message   // <-- show real error
  });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = rows[0];

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    await db.query(
      "UPDATE users SET last_login = NOW(), is_online = 1 WHERE id = ?",
      [user.id]
    );

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Login success", token, user });

  } catch (error) {
    res.status(500).json({ message: "Signin failed", error });
  }
};

export const me = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [req.user.id]
    );

    res.json({ user: rows[0] });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

export const signout = async (req, res) => {
  try {
    await db.query("UPDATE users SET is_online = 0 WHERE id = ?", [
      req.user.id,
    ]);
    res.json({ message: "Logged out" });
  } catch (error) {
    res.status(500).json({ message: "Signout failed", error });
  }
};
