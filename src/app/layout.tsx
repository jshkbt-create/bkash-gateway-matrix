import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
});

const notoBengali = Noto_Sans_Bengali({
 subsets: ["bengali"],
 variable: "--font-bengali",
});

export const metadata: Metadata = {
 title: "Gateway Matrix",
 description: "Bilingual payment gateway competitor matrix",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en" suppressHydrationWarning>
 <body className={`${inter.variable} ${notoBengali.variable}`}>
 <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 <I18nProvider>
 <TooltipProvider>
 {children}
 </TooltipProvider>
 </I18nProvider>
 </ThemeProvider>
 </body>
 </html>
);
