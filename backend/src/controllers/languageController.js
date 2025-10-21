import { fileURLToPath } from "url";
import { existsSync, readFileSync } from "fs";
import path, { dirname } from "path";

export const getTranslations = async (req, res) => {
  try {
    const { lang } = req.params;

    // validate language
    const validLanguage = ["en", "sv"];

    if (!validLanguage.includes(lang)) {
      return res.status(400).json({
        successs: false,
        message: `Language ${lang} is not supported. Available: ${validLanguage.join(
          ", "
        )}`,
      });
    }

    // read JSON file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, `../locales/${lang}.json`);

    // check if file exsits
    if (!existsSync(filePath)) {
      return res.status(404).json({
        successs: false,
        message: `Translation file for ${lang} not found`,
      });
    }

    // read and parse JSON file
    const translations = JSON.parse(readFileSync(filePath, "utf-8"));

    res.json(translations);
  } catch (error) {
    console.error("Get translations error:", error);
    return res.status(500).json({
      successs: false,
      message: "Server error",
    });
  }
};
