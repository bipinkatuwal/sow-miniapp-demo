import { fileURLToPath } from "url";
import { existsSync, readFileSync } from "fs";
import path, { dirname } from "path";
import { AppDataSource } from "../config/database.js";
import { Translation } from "../entities/Translation.js";

export const getTranslations = async (req, res) => {
  try {
    const { lang } = req.params;

    if (!lang) {
      return res.status(400).json({
        success: false,
        message: "Language parameter is required",
      });
    }

    const translationsRepository = AppDataSource.getRepository(Translation);

    const translations = await translationsRepository.find({
      where: {
        languageCode: lang,
      },
    });

    if (!translations.length) {
      return res
        .status(404)
        .json({ success: false, message: "No translations found" });
    }

    const translationsObj = {};
    translations.forEach((t) => {
      translationsObj[t.key] = t.text;
    });

    res.json({
      success: true,
      language: lang,
      translations: translationsObj,
    });
  } catch (error) {
    console.error("Get translations error:", error);
    return res.status(500).json({
      successs: false,
      message: "Server error",
    });
  }
};
