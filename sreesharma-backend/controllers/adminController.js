// const pool = require("../db");
// const bcrypt = require("bcrypt");

// exports.getUsers = async (req, res) => {
//   const [rows] = await pool.query(
//     "SELECT id, full_name, email, phone, role, created_at, last_login, is_online FROM users WHERE role='user'"
//   );
//   res.json(rows);
// };

// exports.getAdmins = async (req, res) => {
//   const [rows] = await pool.query(
//     "SELECT id, full_name, email, phone, role, created_at, last_login, is_online FROM users WHERE role='admin'"
//   );
//   res.json(rows);
// };

// exports.addAdmin = async (req, res) => {
//   const { full_name, email, phone, password } = req.body;

//   const hash = await bcrypt.hash(password, 10);

//   await pool.query(
//     "INSERT INTO users (full_name, email, phone, password_hash, role, is_verified) VALUES (?, ?, ?, ?, 'admin', 1)",
//     [full_name, email, phone, hash]
//   );

//   res.json({ message: "Admin created" });
// };


import db from "../config/db.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE role = 'user' ORDER BY created_at DESC"
  );
  res.json(rows);
};

export const getAdmins = async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE role = 'admin' ORDER BY created_at DESC"
  );
  res.json(rows);
};

export const addAdmin = async (req, res) => {
  try {
    const { full_name, email, phone, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (full_name, email, phone, password_hash, role) VALUES (?, ?, ?, ?, 'admin')",
      [full_name, email, phone, hash]
    );

    res.json({ message: "Admin added successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error adding admin", error });
  }
};
