"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { en } from "./en";
import { bn } from "./bn";

type Language = "en" | "bn";

type I18nContextValue = {
 language: Language;
 setLanguage: (language: Language) => void;
 t: typeof en;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
 const [language, setLanguage] = useState<Language>("en");

 const t = language === "en" ? en : bn;

 useEffect(() => {
 document.documentElement.lang = language === "en" ? "en" : "bn";
 document.documentElement.dir = "ltr";
 }, [language]);

 return (
 <I18nContext.Provider value={{ language, setLanguage, t }}>
 {children}
 </I18nContext.Provider>
 );
}

export function useI18n() {
 const context = useContext(I18nContext);

 if (!context) {
 throw new Error("useI18n must be used inside I18nProvider");
 }

 return context;
}