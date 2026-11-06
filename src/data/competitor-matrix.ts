import { CompetitorProfile } from "@/types/competitor";

export const competitorProfiles: CompetitorProfile[] = [
 {
 id: "bkash",
 profile: "bkash",
 englishOverview:
 "Market-leading mobile wallet with broad consumer reach, merchant acceptance, and strong QR and onboarding capabilities.",
 banglaTouchpoints:
 "বল onboarding wizard; বল FAQs; বল safety tips; বল help center",
 coreFeatures: "Wallet; merchant payments; QR; P2P; BNPL pilots",
 contentModel: "News/education hub; bilingual support content",
 uxApproach: "Mobile-first; Bengali onboarding prompts",
 monetization: "Transaction fees; merchant commissions; VAS",
 localGatewayIntegration:
 "Native bkash rails; API for wallet-to-wallet; reconciliation in Taka",
 implementationNotes:
 "Use bkash APIs for wallet top-ups, merchant payments, and QR flows; test endpoints; align with bkash docs",
 phase1Priority: "High",
 englishSnippet:
 "bkash enables broad merchant reach with native wallet rails.",
 banglaSnippet:
 "bkash বসতত মরচনট রচ ও নটভ ওয়লট রইলস পরদন কর",
 },
 {
 id: "nagad",
 profile: "Nagad",
 englishOverview:
 "Digital wallet ecosystem with growing merchant adoption and local payment capabilities.",
 banglaTouchpoints:
 "বল UX prompts; বল customer support; বল merchant onboarding content",
 coreFeatures:
 "Wallet; QR payments; merchant payments; remittance",
 contentModel: "Multichannel education; bilingual FAQs",
 uxApproach: "Bengali prompts with concise English gloss when needed",
 monetization: "Transaction fees; merchant services; VAS",
 localGatewayIntegration:
 "Native Nagad rails; merchant API integration and settlement flows",
 implementationNotes:
 "Coordinate merchant onboarding APIs and verify settlement currency and reconciliation.",
 phase1Priority: "Medium-High",
 englishSnippet: "Nagad supports local wallet and merchant payment flows.",
 banglaSnippet:
 "নগদ সথনয় ওয়লট ও মরচনট পমনট ফল সমরথন কর",
 },
 {
 id: "rocket",
 profile: "Rocket Wallet",
 englishOverview:
 "Local wallet with broad user coverage and merchant payment capabilities.",
 banglaTouchpoints: "বল UX elements; বল help center",
 coreFeatures: "Wallet; merchant payments; QR; acquiring capabilities",
 contentModel: "Support articles and onboarding guides in Bangla",
 uxApproach: "Bengali-first critical flows; English developer documentation",
 monetization: "Transaction fees and merchant services",
 localGatewayIntegration:
 "Wallet-to-merchant flows with local settlement and reconciliation",
 implementationNotes:
 "Confirm API availability, settlement in Taka, and reconciliation requirements.",
 phase1Priority: "Medium",
 englishSnippet: "Rocket offers local payment rails for merchants.",
 banglaSnippet:
 "রকট মরচনটদর জনয সথনয় পমনট রইল পরদন কর",
 },
 {
 id: "surecash",
 profile: "SureCash",
 englishOverview:
 "Local payment and remittance provider with merchant onboarding capabilities.",
 banglaTouchpoints: "বল onboarding flows; বল FAQs",
 coreFeatures: "QR payments; merchant onboarding; remittance",
 contentModel: "Bangla tutorials and education content",
 uxApproach: "Bengali-centric journeys with English partner summaries",
 monetization: "Transaction fees; integration services",
 localGatewayIntegration:
 "Local PSP connectivity and merchant onboarding support",
 implementationNotes:
 "Map QR and merchant onboarding flows to the gateway reconciliation model.",
 phase1Priority: "Medium",
 englishSnippet: "SureCash supports multi-channel merchant onboarding.",
 banglaSnippet:
 "SureCash বহ-চযনল মরচনট অনবরড সমরথন কর",
 },
 {
 id: "shikha",
 profile: "Shikha",
 englishOverview:
 "Local PSP and gateway focused on SME onboarding and local settlements.",
 banglaTouchpoints: "বল UX elements and merchant guidance",
 coreFeatures: "Merchant onboarding; payment gateway; analytics; reports",
 contentModel: "Bangla education modules for merchants",
 uxApproach: "Bengali on critical steps; English for partner documentation",
 monetization: "PSP fees; add-ons; data insights",
 localGatewayIntegration:
 "Local gateway connectivity and Taka-denominated settlement reporting",
 implementationNotes:
 "Use gateway onboarding and settlement reporting APIs where available.",
 phase1Priority: "Medium-High",
 englishSnippet: "Shikha enables SME onboarding and local settlements.",
 banglaSnippet:
 "শখ এসএমই অনবরড ও সথনয় সটলমনট সহজ কর",
 },
 {
 id: "remittance",
 profile: "Cross-border remittance enablers",
 englishOverview:
 "Interoperability rails for cross-border remittance with local wallet settlement.",
 banglaTouchpoints:
 "বল risk notes; বল compliance guides; বল onboarding",
 coreFeatures: "FX/remittance rails; wallet credits in Taka; local settlement",
 contentModel: "Risk and compliance documentation",
 uxApproach: "Bengali remittance journeys; English developer documentation",
 monetization: "FX margins; remittance fees",
 localGatewayIntegration:
 "Requires robust wallet reconciliation and local settlement handling",
 implementationNotes:
 "Document FX handling, local-currency settlement, and compliance checkpoints.",
 phase1Priority: "Medium",
 englishSnippet: "Cross-border rails connect wallets to local markets.",
 banglaSnippet:
 "করস-বরডর রইল ওয়লটক সথনয় বজরর সঙগ যকত কর",
 },
 {
 id: "card-gateways",
 profile: "Card Payment Gateways",
 englishOverview: "Providers for credit/debit card processing with local acquiring support.",
 banglaTouchpoints: "বল payment pages; বল security badges",
 coreFeatures: "Card processing; 3DS; recurring billing",
 contentModel: "Merchant guides in Bangla",
 uxApproach: "Standardized checkout flows with Bangla translations",
 monetization: "Percentage per transaction; monthly fees",
 localGatewayIntegration: "Integration with local acquiring banks; Taka settlement",
 implementationNotes: "Focus on PCI-DSS compliance and local bank connectivity.",
 phase1Priority: "Medium-High",
 englishSnippet: "Card gateways enable secure local and intl payments.",
 banglaSnippet: "কার্ড গটওয সখরকর সথনয় ও আন্তর্জাতিক পমনট পরদন কর",
 },
 {
 id: "bank-transfers",
 profile: "Bank Transfer Gateways",
 englishOverview: "Direct bank-to-bank payment rails for high-value transactions.",
 banglaTouchpoints: "বল transfer instructions; বল confirmation screens",
 coreFeatures: "EFT; RTGS; BEFTN; direct API",
 contentModel: "Step-by-step guides for bank transfers",
 uxApproach: "Instructional Bengali guides for manual transfers",
 monetization: "Fixed fee per transfer",
 localGatewayIntegration: "NPSB connectivity; bank API hooks",
 implementationNotes: "Ensure reconciliation of manual transfer references.",
 phase1Priority: "Medium",
 englishSnippet: "Bank transfer rails support high-value B2B flows.",
 banglaSnippet: "বঙ্ক ট্রানসফর রইল উচচ মূল্যের B2B পমনট সমরথন কর",
 },
 {
 id: "psp-aggregators",
 profile: "Payment Service Providers",
 englishOverview: "Aggregators providing a single API for multiple local payment methods.",
 banglaTouchpoints: "বল unified dashboard; বল API docs",
 coreFeatures: "Unified API; multi-method support; settlement",
 contentModel: "Technical docs in English; merchant guides in Bangla",
 uxApproach: "Modular checkout options in Bengali",
 monetization: "Platform fees; transaction markups",
 localGatewayIntegration: "Aggregation of multiple local rails",
 implementationNotes: "Verify settlement latency across different methods.",
 phase1Priority: "High",
 englishSnippet: "PSPs simplify integration by aggregating local rails.",
 banglaSnippet: "PSP-সমূহ সথনয় রইলস একত্রিত করে ইনটগরশন সহজ কর",
 },
 {
 id: "ecom-checkout",
 profile: "E-commerce Checkout Platforms",
 englishOverview: "Checkout-focused platforms optimizing conversion and local payment options.",
 banglaTouchpoints: "বল cart summaries; বল checkout prompts",
 coreFeatures: "One-click checkout; local payment variety; cart recovery",
 contentModel: "Conversion optimization guides",
 uxApproach: "Conversion-centric journeys in Bengali",
 monetization: "SaaS subscription; transaction fees",
 localGatewayIntegration: "API bridge to local gateways",
 implementationNotes: "Analyze conversion rates for different local methods.",
 phase1Priority: "Medium",
 englishSnippet: "Checkout platforms optimize the local payment journey.",
 banglaSnippet: "চেকআউট প্ল্যাটফ্রম সথনয় পমনট জার্নি অপটিমাইজ কর",
 },
 {
 id: "agent-banking",
 profile: "Agent Banking Networks",
 englishOverview: "Physical agent networks facilitating cash-in/cash-out for digital wallets.",
 banglaTouchpoints: "বল agent prompts; বল physical voucher printouts",
 coreFeatures: "Cash-in; cash-out; agent-led onboarding",
 contentModel: "Agent training manuals in Bangla",
 uxApproach: "Simplified agent-facing interfaces in Bengali",
 monetization: "Agent commissions",
 localGatewayIntegration: "Physical-to-digital settlement rails",
 implementationNotes: "Map agent cash-in flows to digital wallet credits.",
 phase1Priority: "Medium-High",
 englishSnippet: "Agent networks bridge the gap for unbanked users.",
 banglaSnippet: "এজেন্ট বঙ্কিং নেটওয়ার্ক আনবঙ্কড ব্যবহারকারীদের সংযুক্ত কর",
 },
 {
 id: "intl-processors",
 profile: "International Payment Processors",
 englishOverview: "Global processors enabling cross-border payments into local wallets.",
 banglaTouchpoints: "বল currency conversion notes; বল intl support",
 coreFeatures: "Cross-border processing; FX management; global reach",
 contentModel: "Global compliance and FX guides",
 uxApproach: "English-first with Bengali conversion summaries",
 monetization: "FX spreads; processing fees",
 localGatewayIntegration: "External rails mapping to local settlement",
 implementationNotes: "Manage currency volatility and cross-border compliance.",
 phase1Priority: "Low",
 englishSnippet: "International processors connect local markets to the globe.",
 banglaSnippet: "আন্তর্জাতিক প্রসেসর সথনয় বজরর সঙগ গ্লোবাল কানেক্ট কর",
 },
];
