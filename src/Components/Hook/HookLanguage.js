import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const HookLanguage = () => {
  const { i18n } = useTranslation();

  const initialForm = [
    {
      idLanguage: 2,
      name: "English",
      shortName: "EN",
    },
    {
      idLanguage: 1,
      name: "Español",
      shortName: "ES",
    },
    {
      idLanguage: 3,
      name: "Portugués",
      shortName: "PO",
    },
  ];

  const [languages, setLanguages] = useState(initialForm);
  const [selectedLenguage, setSelectedLenguage] = useState(
    i18n.use(LanguageDetector).language
  );

  const handleLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setSelectedLenguage(event.target.value);
  };

  return {
    languages,
    selectedLenguage,
    handleLanguage,
  };
};
