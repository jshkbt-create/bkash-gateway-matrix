"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { Search, Trash2 } from "lucide-react";
import { CompetitorProfile } from "@/types/competitor";
import { useI18n } from "@/i18n/provider";
import { useProfileStore } from "@/hooks/use-profile-store";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox as ShadCheckbox } from "@/components/ui/checkbox";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";

function priorityVariant(priority: CompetitorProfile["phase1Priority"]) {
 if (priority === "High") return "destructive";
 if (priority === "Medium-High") return "default";
 return "secondary";
}

interface CompetitorTableProps {
  externalFilter?: string;
  onFilterReset?: () => void;
}

export function CompetitorTable({ externalFilter, onFilterReset }: CompetitorTableProps) {
 const { t, language } = useI18n();
 const { profiles, deleteProfile, comparisonList, toggleComparison } = useProfileStore();
 const [query, setQuery] = useState("");
 const [filterPriority, setFilterPriority] = useState<string>("All");

 // Sync internal filter with external stat click
 useEffect(() => {
   if (externalFilter && externalFilter !== "All") {
     if (externalFilter === "Local") {
       // "Local" is a custom stat filter, not a priority
       // We can't map it 1:1 to priority, so we'll handle it in the filteredProfiles logic
     } else {
       setFilterPriority(externalFilter);
     }
   } else {
     setFilterPriority("All");
   }
 }, [externalFilter]);

 const priorities = ["All", "High", "Medium-High", "Medium", "Low"];

 const filteredProfiles = useMemo(() => {
 const normalizedQuery = query.toLowerCase().trim();
 
 return profiles.filter((profile) => {
 const matchesSearch = !normalizedQuery || [
 profile.profile,
 profile.englishOverview,
 profile.banglaTouchpoints,
 profile.coreFeatures,
 profile.localGatewayIntegration,
 ]
.join(" ")
.toLowerCase()
.includes(normalizedQuery);

 let matchesPriority = true;
 if (filterPriority !== "All") {
   matchesPriority = profile.phase1Priority === filterPriority;
 }
 
 if (externalFilter === "Local") {
   matchesPriority = !!profile.localGatewayIntegration;
 } else if (externalFilter === "Bilingual") {
   matchesPriority = !!profile.banglaSnippet;
 }

 return matchesSearch && matchesPriority;
 });
 }, [profiles, query, filterPriority, externalFilter]);

 return (
 <div className="space-y-4">
 <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
 <div className="relative max-w-md">
 <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
 <Input
 value={query}
 onChange={(event) => setQuery(event.target.value)}
 placeholder={t.search}
 className="pl-9"
 />
 </div>

 <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
 {priorities.map((p) => (
 <Button
 key={p}
 variant={filterPriority === p ? "default" : "outline"}
 size="sm"
 onClick={() => {
   setFilterPriority(p);
   onFilterReset?.();
 }}
 >
 {p}
 </Button>
 ))}
 </div>
 </div>

 <div className="overflow-hidden rounded-xl border bg-background">
 <Table>
 <TableHeader>
 <TableRow>
 <TableHead className="w-12"></TableHead>
 <TableHead>{t.profiles}</TableHead>
 <TableHead>{t.features}</TableHead>
 <TableHead>{t.priority}</TableHead>
 <TableHead>{t.gatewayIntegration}</TableHead>
 <TableHead className="text-right">Actions</TableHead>
 </TableRow>
 </TableHeader>

 <TableBody>
 {filteredProfiles.map((profile) => (
 <TableRow key={profile.id}>
 <TableCell>
 <ShadCheckbox 
   checked={comparisonList.includes(profile.id)} 
   onCheckedChange={() => toggleComparison(profile.id)}
 />
 </TableCell>
 <TableCell className="font-medium">
 <div className="flex flex-col">
 <p>{profile.profile}</p>
 <p className="line-clamp-1 max-w-sm text-xs text-muted-foreground">
 {language === "bn"
 ? profile.banglaSnippet
 : profile.englishSnippet}
 </p>
 </div>
 </TableCell>

 <TableCell className="max-w-xs">
 <p className="line-clamp-2 text-sm">{profile.coreFeatures}</p>
 </TableCell>

 <TableCell>
 <Badge variant={priorityVariant(profile.phase1Priority)}>
 {profile.phase1Priority}
 </Badge>
 </TableCell>

 <TableCell>
 <p className="line-clamp-2 max-w-sm text-sm">
 {profile.localGatewayIntegration}
 </p>
 </TableCell>

 <TableCell className="text-right">
 <div className="flex justify-end gap-2">
 <Button asChild size="sm" variant="outline">
 <Link href={`/profiles/${profile.id}`}>
 {t.viewDetails}
 </Link>
 </Button>
 <Button 
 size="sm" 
 variant="ghost" 
 className="text-destructive hover:text-destructive"
 onClick={() => {
   if(confirm("Delete this profile?")) deleteProfile(profile.id);
 }}
 >
 <Trash2 className="size-4" />
 </Button>
 </div>
 </TableCell>
 </TableRow>
 ))}

 {filteredProfiles.length === 0 && (
 <TableRow>
 <TableCell
 colSpan={6}
 className="h-24 text-center text-muted-foreground"
 >
 {t.noResults}
 </TableCell>
 </TableRow>
 )}
 </TableBody>
 </Table>
 </div>
 </div>
);
}
