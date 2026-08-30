export type SiteSettings = {
  companyName: string;
  tagline: string;

  email: string;
  phone: string;
  address: string;
  website: string;

  linkedin: string;
  instagram: string;
  facebook: string;

  footerDescription: string;
  copyrightText: string;

  seoTitle: string;
  metaDescription: string;
  ogImage: string;
};

export const defaultSettings: SiteSettings = {
  companyName: "Agrosyne Global Commodity Pvt Ltd",

  tagline: "Global Commodity Trading & Supply",

  email: "info@agrosyne.com",

  phone: "+91 82904 45442",

  address:
    "Plot No. 3, Park House, Infront of Akashwani, MI Road, Jaipur, Rajasthan 302001, India",

  website: "https://www.agrosyne.com",

  linkedin: "",
  instagram: "",
  facebook: "",

  footerDescription:
    "Agrosyne is a global commodity trading company dealing in agriculture, oil & gas, metals & scrap, and fertilizers.",

  copyrightText:
    "© 2026 Agrosyne Global Commodity Pvt Ltd. All rights reserved.",

  seoTitle: "Agrosyne | Global Commodity Trading",

  metaDescription:
    "Agrosyne is a global commodity trading company specializing in agriculture, oil & gas, metals & scrap, and fertilizers.",

  ogImage: "/og-image.jpg",
};

/*
 * Temporary settings storage.
 *
 * This will be replaced with MongoDB before
 * production deployment.
 */

let settings: SiteSettings = {
  ...defaultSettings,
};

/*
 * GET CURRENT SETTINGS
 */

export function getSettings(): SiteSettings {
  return settings;
}

/*
 * UPDATE SETTINGS
 */

export function updateSettings(
  newSettings: Partial<SiteSettings>
): SiteSettings {
  settings = {
    ...settings,
    ...newSettings,
  };

  return settings;
}