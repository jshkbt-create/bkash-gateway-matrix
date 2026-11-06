"use client";

import { AppShell } from "@/components/app-shell";
import { CompetitorTable } from "@/components/competitor-table";
import { competitorProfiles } from "@/data/competitor-matrix";
import { useI18n } from "@/i18n/provider";

export default function MatrixPage() {
 const { t } = useI18n();

 return (
 <AppShell>
 <div className="space-y-6">
 <section>
 <h1 className="text-3xl font-semibold">{t.matrix}</h1>
 <p className="text-muted-foreground">Full competitor matrix analysis</p>
 </section>
 <CompetitorTable profiles={competitorProfiles} />
 </div>
 </AppShell>
 );
}