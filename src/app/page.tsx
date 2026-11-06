"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { DashboardStats } from "@/components/dashboard-stats";
import { CompetitorTable } from "@/components/competitor-table";
import { CsvActions } from "@/components/csv-actions";
import { useProfileStore } from "@/hooks/use-profile-store";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function HomePage() {
 const { t } = useI18n();
 const { profiles, comparisonList } = useProfileStore();
 const [externalFilter, setExternalFilter] = useState<string>("All");

 const handleStatClick = (filter: string) => {
   setExternalFilter(filter);
 };

 return (
 <AppShell>
 <div className="space-y-8">
 <section className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
 <div className="space-y-1">
 <p className="text-sm text-muted-foreground">{t.subtitle}</p>
 <h1 className="text-3xl font-semibold tracking-tight">
 {t.dashboard}
 </h1>
 </div>
 <div className="flex items-center gap-3">
 <ThemeSwitcher />
 <CsvActions />
 {comparisonList.length > 0 && (
 <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
 <Link href="/compare">
 Compare ({comparisonList.length})
 </Link>
 </Button>
 )}
 </div>
 </section>

 <DashboardStats profiles={profiles} onFilterClick={handleStatClick} />

 <section className="space-y-4">
 <div className="flex flex-col gap-1">
 <h2 className="text-xl font-semibold">{t.matrix} {externalFilter !== "All" && ` - ${externalFilter}`}</h2>
 <p className="text-sm text-muted-foreground">
 Compare gateway capabilities, localization, and implementation readiness.
 </p>
 </div>

 <CompetitorTable externalFilter={externalFilter} onFilterReset={() => setExternalFilter("All")} />
 </section>
 </div>
 </AppShell>
 );
}
