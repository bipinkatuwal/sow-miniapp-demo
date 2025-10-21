import { Router } from "express";
import { getProducts } from "../controllers/productController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.get("/", authMiddleware, getProducts);

export default router;
