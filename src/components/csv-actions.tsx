"use client";

import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import { useProfileStore } from "@/hooks/use-profile-store";
import { exportProfilesToCsv } from "@/lib/csv";
import Papa from "papaparse";
import { CompetitorProfile } from "@/types/competitor";
import { useI18n } from "@/i18n/provider";

export function CsvActions() {
  const { t } = useI18n();
  const { profiles, importProfiles } = useProfileStore();

  const handleExport = () => {
    exportProfilesToCsv(profiles);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const imported = results.data.map((row: any, index: number) => ({
          ...row,
          id: row.id || `imported-${index}-${Date.now()}`,
        })) as CompetitorProfile[];
        
        if (confirm(`Import ${imported.length} profiles? This will replace current data.`)) {
          importProfiles(imported);
        }
      },
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={handleExport}>
        <Download className="mr-2 size-4" />
        {t.exportCsv}
      </Button>
      <div className="relative">
        <Button variant="outline" size="sm" asChild>
          <label className="cursor-pointer">
            <Upload className="mr-2 size-4" />
            {t.importCsv}
            <input type="file" accept=".csv" className="sr-only" onChange={handleImport} />
          </label>
        </Button>
      </div>
    </div>
  );
}
