"use client";

import { AppShell } from "@/components/app-shell";
import { useI18n } from "@/i18n/provider";
import { ProfileForm } from "@/components/profile-form";
import { useProfileStore } from "@/hooks/use-profile-store";
import { useRouter, useParams } from "next/navigation";
import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProfileFormValues } from "@/lib/validation";

function EditProfileContent() {
  const { t } = useI18n();
  const { profiles, updateProfile } = useProfileStore();
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === "string" ? params.id : params.id?.[0];
  const profile = profiles.find((p) => p.id === id);

  const handleSubmit = (data: ProfileFormValues) => {
    if (profile) {
      updateProfile(profile.id, { ...data, id: profile.id });
      router.push(`/profiles/${profile.id}`);
    }
  };

  if (!profile) return <AppShell><div>Profile not found</div></AppShell>;

  return (
    <AppShell>
      <div className="space-y-6">
        <section>
          <h1 className="text-3xl font-semibold">{t.editProfile}</h1>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Edit {profile.profile}</CardTitle>
          </CardHeader>
          <CardContent>
            <ProfileForm initialData={profile} onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

export default function EditProfilePage() {
  return (
    <Suspense fallback={<AppShell><div>Loading...</div></AppShell>}>
      <EditProfileContent />
    </Suspense>
  );
}
