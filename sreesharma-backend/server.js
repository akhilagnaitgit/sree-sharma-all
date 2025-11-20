// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import db from "./config/db.js";
// import homaRoutes from "./routes/homaRoutes.js";
// import muhurtaRoutes from "./routes/muhurtaRoutes.js";
// import vastuRouter from "./routes/vastuRouter.js";
// // import express from "express";
// import authRoutes from "./routes/authRoutes.js";


// const authRoutes = require("./routes/authRoutes");
// const adminRoutes = require("./routes/adminRoutes");

// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.get("/", (req, res) => res.json({ message: "Sree Sharma API Running" }));

// dotenv.config();
// const app = express();


// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/homas", homaRoutes);
// app.use("/api/muhurta", muhurtaRoutes);
// app.use("/api/vastu", vastuRouter);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(` Server running on port ${PORT}`));



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import db from "./config/db.js";

// // ROUTES
// import homaRoutes from "./routes/homaRoutes.js";
// import muhurtaRoutes from "./routes/muhurtaRoutes.js";
// import vastuRouter from "./routes/vastuRouter.js";
// import authRoutes from "./routes/authRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";
// import adminAuth from "./routes/adminAuth.js";


// dotenv.config();

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => {
//   res.json({ message: "Sree Sharma API Running" });
// });

// // API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/homas", homaRoutes);
// app.use("/api/muhurta", muhurtaRoutes);
// app.use("/api/vastu", vastuRouter);

// // const adminAuth = require("./routes/adminAuth");
// app.use("/admin", adminAuth);


// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/db.js";

import homaRoutes from "./routes/homaRoutes.js";
import muhurtaRoutes from "./routes/muhurtaRoutes.js";
import vastuRouter from "./routes/vastuRouter.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import adminAuth from "./routes/adminAuth.js";

import bcrypt from "bcryptjs";
console.log(bcrypt.hashSync("admin123", 10));

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Sree Sharma API Running" });
});

// API ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.use("/api/homas", homaRoutes);
app.use("/api/muhurta", muhurtaRoutes);
app.use("/api/vastu", vastuRouter);

// OUR ADMIN AUTH ROUTES
app.use("/admin", adminAuth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
