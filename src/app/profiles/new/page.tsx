"use client";

import { AppShell } from "@/components/app-shell";
import { useI18n } from "@/i18n/provider";
import { ProfileForm } from "@/components/profile-form";
import { useProfileStore } from "@/hooks/use-profile-store";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProfileFormValues } from "@/lib/validation";

export default function NewProfilePage() {
  const { t } = useI18n();
  const { addProfile } = useProfileStore();
  const router = useRouter();

  const handleSubmit = (data: ProfileFormValues) => {
    addProfile({ ...data, id: crypto.randomUUID() });
    router.push("/");
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <section>
          <h1 className="text-3xl font-semibold">{t.addProfile}</h1>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Create New Competitor Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <ProfileForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
