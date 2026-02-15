import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DoDat | Data Engineer",
    description: "Portfolio of DoDat - Data Engineer at VNPAY",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang?: string }>;
}>) {
    // Await params to get lang if available, default to 'en'
    const resolvedParams = await params;
    const lang = resolvedParams?.lang || 'en';

    return (
        <html lang={lang} suppressHydrationWarning>
            <body
                className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground font-sans min-h-screen flex flex-col`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
