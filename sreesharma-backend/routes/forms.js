// routes/forms.js
import express from "express";
import db from "../config/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();

// submit form (user must be logged in)
router.post("/submit", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Please login to submit" });

    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.id;

    // form body: name,email,phone,service_type,message,extra (object)
    const { name, email, phone, service_type, message, extra } = req.body;
    const sql = `INSERT INTO forms (user_id, name, email, phone, service_type, message, extra) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await db.query(sql, [userId, name, email, phone, service_type, message, JSON.stringify(extra || null)]);
    res.json({ msg: "Form submitted", id: result.insertId });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// admin: list all forms (protect with admin auth in admin panel)
router.get("/all", async (req, res) => {
  try {
    const [rows] = await db.query(`SELECT * FROM forms ORDER BY created_at DESC`);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

export default router;
