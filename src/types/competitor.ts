export type Priority = "High" | "Medium-High" | "Medium" | "Low";

export type CompetitorProfile = {
 id: string;
 profile: string;
 englishOverview: string;
 banglaTouchpoints: string;
 coreFeatures: string;
 contentModel: string;
 uxApproach: string;
 monetization: string;
 localGatewayIntegration: string;
 implementationNotes: string;
 phase1Priority: Priority;
 englishSnippet: string;
 banglaSnippet: string;
};