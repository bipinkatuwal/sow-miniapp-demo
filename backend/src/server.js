import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./config/database.js";

// import routes
import authRoutes from "./routes/AuthRoute.js";
import languageRoutes from "./routes/LanguageRoute.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/locals", languageRoutes);

// Initialize database and start server
const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully✅");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
