"use client";

import { AppShell } from "@/components/app-shell";
import { useProfileStore } from "@/hooks/use-profile-store";
import { useI18n } from "@/i18n/provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { X } from "lucide-react";

export default function ComparePage() {
  const { t } = useI18n();
  const { profiles, comparisonList, clearComparison } = useProfileStore();
  
  const selectedProfiles = profiles.filter(p => comparisonList.includes(p.id));

  if (selectedProfiles.length === 0) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
          <h1 className="text-2xl font-semibold">No Profiles Selected</h1>
          <p className="text-muted-foreground">Go back to the matrix and select up to 3 profiles to compare.</p>
          <Button onClick={clearComparison}>Clear Selection</Button>
        </div>
      </AppShell>
    );
  }

  const fields = [
    { label: "English Overview", key: "englishOverview" },
    { label: "Core Features", key: "coreFeatures" },
    { label: "Priority", key: "phase1Priority" },
    { label: "Monetization", key: "monetization" },
    { label: "Local Integration", key: "localGatewayIntegration" },
    { label: "UX Approach", key: "uxApproach" },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Comparison Matrix</h1>
          <Button variant="outline" onClick={clearComparison}>Clear All</Button>
        </div>

        <div className="overflow-x-auto rounded-xl border bg-background">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-64 font-bold">Feature</TableHead>
                {selectedProfiles.map(p => (
                  <TableHead key={p.id} className="text-center font-bold">
                    <div className="flex items-center justify-center gap-2">
                      {p.profile}
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => {}}>
                        <X className="size-3" />
                      </Button>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map(field => (
                <TableRow key={field.key}>
                  <TableCell className="font-medium">{field.label}</TableCell>
                  {selectedProfiles.map(p => (
                    <TableCell key={p.id} className="text-center text-sm">
                      {(p as any)[field.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppShell>
  );
}
