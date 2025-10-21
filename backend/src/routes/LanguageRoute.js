import { Router } from "express";
import { getTranslations } from "../controllers/languageController.js";

const router = Router();

router.get("/:lang", getTranslations);

export default router;
