import { createContext, useContext, useEffect, useState } from "react";
import enTranslations from "../../locales/en.json";

const TranslationContext = createContext(null);

// cookie helper function
function setLanguageCookie(lang) {
  const days = 30;
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `language=${encodeURIComponent(
    lang
  )}; expires=${expires}; path=/`;
}

function getLanguageCookie() {
  const name = "language=";
  const cookies = document.cookie.split(";");
  for (let c of cookies) {
    c = c.trim();
    if (c.startsWith(name)) return decodeURIComponent(c.substring(name.length));
  }
  return null;
}

export const TranslationProvider = ({ children, defaultLanguage = "en" }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(enTranslations);
  const [loading, setLoading] = useState(true);

  //   fetch translation from server
  useEffect(() => {
    const fetchLanguageData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/translations/${language}`
        );
        const data = await response.json();

        const lang = data.language || "en";
        const serverTranslations = data.translations || {};

        const mergedTranslations = { ...enTranslations, ...serverTranslations };

        setLanguage(lang);
        setTranslations(mergedTranslations);
        setLanguageCookie(lang);
      } catch (error) {
        console.error("Failed to load translations:", error);
        const savedLang = getLanguageCookie() || "en";
        setLanguage(savedLang);
        setTranslations(enTranslations);
      } finally {
        setLoading(false);
      }
    };
    fetchLanguageData();
  }, [language]);

  const changeLanguage = async (lang) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/translations/${lang}`
      );
      const data = await response.json();
      const serverTranslations = data.translations || {};

      const mergedTranslations = { ...enTranslations, ...serverTranslations };

      setLanguage(lang);
      setTranslations(mergedTranslations);
      setLanguageCookie(lang);
    } catch (error) {
      console.error("Error switching language:", error);
    }
  };

  const t = (key) => translations[key] || key;

  if (loading) return <p>Loading translations...</p>;

  return (
    <TranslationContext.Provider
      value={{
        language,
        t,
        changeLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useLanguage = () => useContext(TranslationContext);
