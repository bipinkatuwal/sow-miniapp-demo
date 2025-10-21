import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "../entities/User.js";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true, // Auto-create tables (dev only!)
  // logging: true, // See SQL queries in console
  entities: [User],
  ssl: true, // Enable SSL globally
  extra: {
    ssl: {
      rejectUnauthorized: false, // Important for Render external DB
    },
  },
});
