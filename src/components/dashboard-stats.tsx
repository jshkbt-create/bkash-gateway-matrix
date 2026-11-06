"use client";

import { Banknote, Globe2, Layers3, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompetitorProfile } from "@/types/competitor";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";

interface DashboardStatsProps {
  profiles: CompetitorProfile[];
  onFilterClick: (filter: string) => void;
}

export function DashboardStats({
 profiles,
 onFilterClick,
}: DashboardStatsProps) {
 const { t } = useI18n();

 const stats = [
 {
 title: t.totalProfiles,
 value: profiles.length,
 icon: Layers3,
 filter: "All",
 },
 {
 title: t.highPriority,
 value: profiles.filter((p) => p.phase1Priority === "High").length,
 icon: ShieldCheck,
 filter: "High",
 },
 {
 title: t.localIntegrations,
 value: profiles.filter((p) => p.localGatewayIntegration).length,
 icon: Banknote,
 filter: "Local",
 },
 {
 title: t.bilingualProfiles,
 value: profiles.filter((p) => p.banglaSnippet).length,
 icon: Globe2,
 filter: "Bilingual",
 },
 ];

 return (
 <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
 {stats.map((stat) => {
 const Icon = stat.icon;

 return (
 <Card 
   key={stat.title} 
   className="cursor-pointer transition-all hover:ring-2 hover:ring-emerald-500 group"
   onClick={() => onFilterClick(stat.filter)}
 >
 <CardHeader className="flex flex-row items-center justify-between pb-2">
 <CardTitle className="text-sm font-medium group-hover:text-emerald-600 transition-colors">
 {stat.title}
 </CardTitle>
 <Icon className="size-4 text-muted-foreground" />
 </CardHeader>
 <CardContent>
 <p className="text-3xl font-bold">{stat.value}</p>
 </CardContent>
 </Card>
 );
 })}
 </div>
 );
}
