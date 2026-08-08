import React from "react";
import "./globals.css";
import type {Metadata} from "next";

export const metadata: Metadata =
{
  title: "Agrosyne",
  description: "Global Commodity Trading",
};

export default function
RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}