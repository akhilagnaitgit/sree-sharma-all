// // middleware/authMiddleware.js
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// module.exports = function (req, res, next) {
//   const header = req.headers.authorization;

//   if (!header || !header.startsWith("Bearer "))
//     return res.status(401).json({ message: "Unauthorized" });

//   const token = header.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;   // attach user info (id, email, role)
//     next();
//   } catch (err) {
//     console.error("Auth error:", err);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
