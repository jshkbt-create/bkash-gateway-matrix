import Papa from "papaparse";
import { CompetitorProfile } from "@/types/competitor";

export function exportProfilesToCsv(profiles: CompetitorProfile[]) {
 const csv = Papa.unparse(profiles);
 const blob = new Blob([csv], {
 type: "text/csv;charset=utf-8;",
 });

 const url = URL.createObjectURL(blob);
 const link = document.createElement("a");

 link.href = url;
 link.download = "competitor-matrix.csv";
 link.click();

 URL.revokeObjectURL(url);
}