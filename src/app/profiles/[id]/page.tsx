import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { competitorProfiles } from "@/data/competitor-matrix";

export const instant = false;

export default async function ProfilePage({
 params,
}: {
 params: Promise<{ id: string }>;
}) {
 const { id } = await params;
 const profile = competitorProfiles.find((item) => item.id === id);

 if (!profile) notFound();

 return (
 <AppShell>
 <div className="space-y-6">
 <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
 <div>
 <p className="text-sm text-muted-foreground">Gateway profile</p>
 <h1 className="text-3xl font-semibold">{profile.profile}</h1>
 </div>

 <Badge>{profile.phase1Priority}</Badge>
 </div>

 <Card>
 <CardHeader>
 <CardTitle>English overview</CardTitle>
 </CardHeader>
 <CardContent>{profile.englishOverview}</CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle>বল সকষপত ববরণ</CardTitle>
 </CardHeader>
 <CardContent>{profile.banglaSnippet}</CardContent>
 </Card>

 <div className="grid gap-6 md:grid-cols-2">
 <Card>
 <CardHeader>
 <CardTitle>Core features</CardTitle>
 </CardHeader>
 <CardContent>{profile.coreFeatures}</CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle>UX approach</CardTitle>
 </CardHeader>
 <CardContent>{profile.uxApproach}</CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle>Monetization</CardTitle>
 </CardHeader>
 <CardContent>{profile.monetization}</CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle>Local gateway integration</CardTitle>
 </CardHeader>
 <CardContent>{profile.localGatewayIntegration}</CardContent>
 </Card>
 </div>

 <Card>
 <CardHeader>
 <CardTitle>Implementation notes</CardTitle>
 </CardHeader>
 <CardContent>{profile.implementationNotes}</CardContent>
 </Card>
 </div>
 </AppShell>
 );
}
