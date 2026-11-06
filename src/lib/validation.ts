import { z } from "zod";

export const profileSchema = z.object({
 profile: z.string().min(1),
 englishOverview: z.string().min(1),
 banglaTouchpoints: z.string().min(1),
 coreFeatures: z.string().min(1),
 contentModel: z.string().min(1),
 uxApproach: z.string().min(1),
 monetization: z.string().min(1),
 localGatewayIntegration: z.string().min(1),
 implementationNotes: z.string().min(1),
 phase1Priority: z.enum(["High", "Medium-High", "Medium", "Low"]),
 englishSnippet: z.string().min(1),
 banglaSnippet: z.string().min(1),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;