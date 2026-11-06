"use client";

import Link from "next/link";
import { LayoutDashboard, Settings, Table2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { useI18n } from "@/i18n/provider";

export function AppShell({ children }: { children: React.ReactNode }) {
 const { t } = useI18n();

 return (
 <div className="min-h-screen bg-muted/30">
 <header className="border-b bg-background">
 <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
 <Link href="/" className="flex items-center gap-3">
 <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white">
 G
 </div>
 <div>
 <p className="font-semibold">{t.appName}</p>
 <p className="text-xs text-muted-foreground">bKash-first MVP</p>
 </div>
 </Link>

 <LanguageSwitcher />
 </div>
 </header>

 <div className="mx-auto flex max-w-7xl">
 <aside className="hidden min-h-[calc(100vh-73px)] w-64 border-r bg-background p-4 lg:block">
 <nav className="space-y-2">
 <Button asChild variant="secondary" className="w-full justify-start">
 <Link href="/">
 <LayoutDashboard className="mr-2 size-4" />
 {t.dashboard}
 </Link>
 </Button>

 <Button asChild variant="ghost" className="w-full justify-start">
 <Link href="/matrix">
 <Table2 className="mr-2 size-4" />
 {t.matrix}
 </Link>
 </Button>

 <Button asChild variant="ghost" className="w-full justify-start">
 <Link href="/settings">
 <Settings className="mr-2 size-4" />
 {t.settings}
 </Link>
 </Button>
 </nav>
 </aside>

 <main className="w-full p-4 lg:p-8">{children}</main>
 </div>
 </div>
 );
}