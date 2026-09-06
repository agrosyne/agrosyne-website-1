import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { getSettings } from "@/lib/settings";
import ScrollToTop from "@/components/ScrollToTop";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const settings = getSettings();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    settings.website ||
    "http://localhost:3000";

  const ogImage =
    settings.ogImage || "/og-image.jpg";

  return {
    title: settings.seoTitle,
    description: settings.metaDescription,

    metadataBase: new URL(siteUrl),

    openGraph: {
      title: settings.seoTitle,
      description: settings.metaDescription,
      url: siteUrl,
      siteName: settings.companyName,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: settings.companyName,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: settings.seoTitle,
      description: settings.metaDescription,
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
    },

    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <ScrollToTop />
       {children}
      </body>
    </html>
  );
}