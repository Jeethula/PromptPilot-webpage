import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://promptpilot.tech"),
  title: {
    default: "PromptPilot | The #1 AI Prompt Extension & Add-in",
    template: "%s | PromptPilot Extension",
  },
  description: "Download PromptPilot: The intelligent browser extension (add-in) that transforms simple prompts into powerful AI instructions. Works on Chrome, Edge & Brave.",
  applicationName: "PromptPilot Extension",
  authors: [{ name: "Jeethu", url: "https://www.linkedin.com/in/jeethula/" }],
  generator: "Next.js",
  keywords: ["promptpilot", "promptpilot extension", "promptpilot addin", "browser extension", "chrome addin", "AI prompt tool", "prompt engineering extension", "ChatGPT addin", "Claude extension"],
  referrer: "origin-when-cross-origin",
  creator: "Jeethu",
  publisher: "Jeethu",
  verification: {
    google: "UtDsQIYqpcgSIfW_N2MyIfE0DROQ5ATe7YxG7ibbkfw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PromptPilot - The Best AI Prompt Extension",
    description: "The open-source browser add-in that fixes your prompts instantly. Available for Chrome, Edge, and Brave.",
    url: "https://promptpilot.tech",
    siteName: "PromptPilot Extension",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "PromptPilot Extension Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptPilot Extension",
    description: "The essential browser add-in for ChatGPT and Claude users.",
    images: ["/logo.png"],
    creator: "@promptpilot", // Update if you have a specific handle
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
