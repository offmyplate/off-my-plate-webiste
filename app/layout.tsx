import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const siteUrl = "https://offmyplate.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Off My Plate | Custom AI Workflow Automation",
  description:
    "Off My Plate builds custom AI workflows that connect your tools, data, and processes—so your team spends less time on manual work.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Off My Plate",
    title: "We automate repetitive work with AI.",
    description:
      "Custom AI workflows that connect your existing tools, data, and processes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "We automate repetitive work with AI.",
    description:
      "Custom AI workflows that connect your existing tools, data, and processes.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
