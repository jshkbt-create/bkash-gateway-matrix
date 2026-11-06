"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/provider";

export function LanguageSwitcher() {
 const { language, setLanguage, t } = useI18n();

 return (
 <div className="flex items-center gap-1 rounded-lg border p-1">
 <Button
 size="sm"
 variant={language === "en" ? "secondary" : "ghost"}
 onClick={() => setLanguage("en")}
 >
 {t.english}
 </Button>

 <Button
 size="sm"
 variant={language === "bn" ? "secondary" : "ghost"}
 onClick={() => setLanguage("bn")}
 >
 {t.bangla}
 </Button>
 </div>
 );
}