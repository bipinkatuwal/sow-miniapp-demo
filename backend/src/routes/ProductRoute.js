import { Router } from "express";
import {
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.get("/", authMiddleware, getProducts);
router.patch("/:id", authMiddleware, updateProduct);

export default router;
