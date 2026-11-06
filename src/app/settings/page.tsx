"use client";

import { AppShell } from "@/components/app-shell";
import { useI18n } from "@/i18n/provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
 const { t } = useI18n();

 return (
 <AppShell>
 <div className="space-y-6">
 <section>
 <h1 className="text-3xl font-semibold">{t.settings}</h1>
 </section>
 <Card>
 <CardHeader>
 <CardTitle>General Settings</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground">Configure your preferences for the Gateway Matrix.</p>
 </CardContent>
 </Card>
 </div>
 </AppShell>
 );
}