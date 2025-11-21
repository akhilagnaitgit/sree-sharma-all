// routes/userAuth.js
import express from "express";
import bcrypt from "bcryptjs"; // use v2.4.3 or bcrypt
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, phone, password, full_name } = req.body;
    if (!password || (!email && !phone && !username)) {
      return res.status(400).json({ msg: "Missing required fields" });
    }
    const hashed = bcrypt.hashSync(password, 10);
    const sql = `INSERT INTO users (username, email, phone, password_hash, full_name) VALUES (?, ?, ?, ?, ?)`;
    const [result] = await db.query(sql, [username, email, phone, hashed, full_name]);
    res.json({ msg: "User registered", id: result.insertId });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    if (!login || !password) return res.status(400).json({ msg: "Missing login/password" });

    const sql = `SELECT * FROM users WHERE email=? OR phone=? OR username=? LIMIT 1`;
    const [rows] = await db.query(sql, [login, login, login]);
    if (rows.length === 0) return res.status(404).json({ msg: "User not found" });

    const user = rows[0];
    const valid = bcrypt.compareSync(password, user.password_hash);
    if (!valid) return res.status(401).json({ msg: "Invalid password" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
    res.json({
      msg: "Login successful",
      token,
      user: { id: user.id, username: user.username, email: user.email, phone: user.phone, full_name: user.full_name }
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// get profile
router.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Token missing" });
    const decoded = jwt.verify(token, JWT_SECRET);
    const [rows] = await db.query(`SELECT id, username, email, phone, full_name FROM users WHERE id=?`, [decoded.id]);
    res.json(rows[0]);
  } catch (err) {
    res.status(401).json({ msg: "Invalid or expired token" });
  }
});

// logout (frontend clears token)
router.post("/logout", (req, res) => res.json({ msg: "Logged out" }));

export default router;
