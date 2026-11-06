"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, ProfileFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useI18n } from "@/i18n/provider";

interface ProfileFormProps {
  initialData?: ProfileFormValues;
  onSubmit: (data: ProfileFormValues) => void;
}

export function ProfileForm({ initialData, onSubmit }: ProfileFormProps) {
  const { t } = useI18n();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialData || {
      profile: "",
      englishOverview: "",
      banglaTouchpoints: "",
      coreFeatures: "",
      contentModel: "",
      uxApproach: "",
      monetization: "",
      localGatewayIntegration: "",
      implementationNotes: "",
      phase1Priority: "Medium",
      englishSnippet: "",
      banglaSnippet: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="profile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Name</FormLabel>
                <FormControl><Input placeholder="e.g. bkash" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phase1Priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium-High">Medium-High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="englishOverview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>English Overview</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="banglaTouchpoints"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bangla Touchpoints</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="coreFeatures"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Core Features</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="monetization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monetization</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="localGatewayIntegration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Local Gateway Integration</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="englishSnippet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>English Snippet</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="banglaSnippet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bangla Snippet</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button type="submit">{t.save}</Button>
        </div>
      </form>
    </Form>
  );
}
