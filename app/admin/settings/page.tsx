"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import {
  defaultSettings,
  type SiteSettings,
} from "@/lib/settings";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /*
   * Load settings
   */

  useEffect(() => {
    async function loadSettings() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/settings", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load settings.");
        }

        const data = await response.json();

        if (data && typeof data === "object") {
          setSettings({
            ...defaultSettings,
            ...data,
          });
        }
      } catch (error) {
        console.error("Failed to load settings:", error);

        /*
         * We keep the default values if settings
         * have not been created yet.
         */
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, []);

  /*
   * Update field
   */

  const updateField = (
    field: keyof SiteSettings,
    value: string
  ) => {
    setSettings((current) => ({
      ...current,
      [field]: value,
    }));

    setSuccess("");
    setError("");
  };

  /*
   * Save settings
   */

  const saveSettings = async () => {
    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const response = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to save settings."
        );
      }

      setSuccess("Settings saved successfully.");

      if (data && typeof data === "object") {
        setSettings({
          ...settings,
          ...data,
        });
      }
    } catch (error) {
      console.error("Failed to save settings:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while saving settings."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-8">

        {/* Header */}

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b57]">
            Administration
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Website Settings
          </h1>

          <p className="mt-3 text-slate-600">
            Manage your company information, contact details,
            social links and website SEO.
          </p>
        </div>

        {/* Loading */}

        <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
          <div className="text-center">

            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#c89b57]" />

            <p className="mt-4 text-sm text-slate-500">
              Loading settings...
            </p>

          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* ====================================================== */}
      {/* PAGE HEADER */}
      {/* ====================================================== */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b57]">
            Administration
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Website Settings
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Manage your company information, contact details,
            social links and website SEO from one place.
          </p>

        </div>

        {/* Save Button */}

        <button
          type="button"
          onClick={saveSettings}
          disabled={saving}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162F55] disabled:cursor-not-allowed disabled:opacity-60"
        >

          <Save className="h-4 w-4" />

          {saving ? "Saving..." : "Save Settings"}

        </button>

      </div>

      {/* ====================================================== */}
      {/* SUCCESS / ERROR */}
      {/* ====================================================== */}

      {success && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
          {success}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      {/* ====================================================== */}
      {/* COMPANY INFORMATION */}
      {/* ====================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-7">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
            COMPANY
          </p>

          <h2 className="mt-2 text-xl font-bold text-[#0B1F3A]">
            Company Information
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Basic information about your company used throughout
            the website.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Company Name */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              Company Name
            </label>

            <input
              type="text"
              value={settings.companyName}
              onChange={(e) =>
                updateField("companyName", e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
              placeholder="Company name"
            />

          </div>

          {/* Tagline */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              Company Tagline
            </label>

            <input
              type="text"
              value={settings.tagline}
              onChange={(e) =>
                updateField("tagline", e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
              placeholder="Global Commodity Trading & Supply"
            />

          </div>

          {/* Website */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              Website URL
            </label>

            <input
              type="url"
              value={settings.website}
              onChange={(e) =>
                updateField("website", e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
              placeholder="https://www.agrosyne.com"
            />

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* CONTACT INFORMATION */}
      {/* ====================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-7">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
            CONTACT
          </p>

          <h2 className="mt-2 text-xl font-bold text-[#0B1F3A]">
            Contact Information
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Contact details displayed across the website.
          </p>

        </div>

        <div className="space-y-6">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                Email Address
              </label>

              <input
                type="email"
                value={settings.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                placeholder="info@agrosyne.com"
              />

            </div>

            {/* Phone */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                Phone Number
              </label>

              <input
                type="text"
                value={settings.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                placeholder="+91 82904 45442"
              />

            </div>

          </div>

          {/* Address */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              Office Address
            </label>

            <textarea
              rows={4}
              value={settings.address}
              onChange={(e) =>
                updateField("address", e.target.value)
              }
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
              placeholder="Enter office address"
            />

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* SOCIAL MEDIA */}
      {/* ====================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-7">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
            SOCIAL MEDIA
          </p>

          <h2 className="mt-2 text-xl font-bold text-[#0B1F3A]">
            Social Media Links
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Add your official social media profile URLs.
          </p>

        </div>

        <div className="space-y-5">

          {/* LinkedIn */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              LinkedIn URL
            </label>

            <div className="flex gap-3">

              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-sm font-bold text-white">
                in
              </div>

              <input
                type="url"
                value={settings.linkedin}
                onChange={(e) =>
                  updateField("linkedin", e.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                placeholder="https://www.linkedin.com/company/agrosyne-global-commodity/"
              />

            </div>

          </div>

          {/* Instagram */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              Instagram URL
            </label>

            <div className="flex gap-3">

              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-xs font-bold text-white">
                IG
              </div>

              <input
                type="url"
                value={settings.instagram}
                onChange={(e) =>
                  updateField("instagram", e.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                placeholder="https://www.instagram.com/agrosyneglobal/"
              />

            </div>

          </div>

          {/* Facebook */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              Facebook URL
            </label>

            <div className="flex gap-3">

              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-sm font-bold text-white">
                f
              </div>

              <input
                type="url"
                value={settings.facebook}
                onChange={(e) =>
                  updateField("facebook", e.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                placeholder="https://www.facebook.com/share/1BvF4Lk9Ke/"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* FOOTER */}
      {/* ====================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-7">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
            FOOTER
          </p>

          <h2 className="mt-2 text-xl font-bold text-[#0B1F3A]">
            Footer Settings
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Control the company description and copyright
            information shown in the website footer.
          </p>

        </div>

        <div className="space-y-6">

          {/* Footer Description */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              Footer Description
            </label>

            <textarea
              rows={5}
              value={settings.footerDescription}
              onChange={(e) =>
                updateField(
                  "footerDescription",
                  e.target.value
                )
              }
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
              placeholder="Short description about your company"
            />

          </div>

          {/* Copyright */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
              Copyright Text
            </label>

            <input
              type="text"
              value={settings.copyrightText}
              onChange={(e) =>
                updateField(
                  "copyrightText",
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
              placeholder="© 2026 Agrosyne Global Commodity Pvt Ltd. All rights reserved."
            />

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* SEO */}
      {/* ====================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-7">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
            SEARCH OPTIMIZATION
          </p>

          <h2 className="mt-2 text-xl font-bold text-[#0B1F3A]">
            Website SEO
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Default SEO information for the website homepage
            and pages without their own SEO settings.
          </p>

        </div>

        <div className="space-y-6">

          {/* SEO Title */}

          <div>

            <div className="flex items-center justify-between gap-4">

              <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                SEO Title
              </label>

              <span className="text-xs text-slate-400">
                {settings.seoTitle.length}/60
              </span>

            </div>

            <input
              type="text"
              maxLength={60}
              value={settings.seoTitle}
              onChange={(e) =>
                updateField("seoTitle", e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
              placeholder="Agrosyne | Global Commodity Trading"
            />

            <p className="mt-2 text-xs text-slate-400">
              Recommended: 50–60 characters.
            </p>

          </div>

          {/* Meta Description */}

          <div>

            <div className="flex items-center justify-between gap-4">

              <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                Meta Description
              </label>

              <span className="text-xs text-slate-400">
                {settings.metaDescription.length}/160
              </span>

            </div>

            <textarea
              rows={5}
              maxLength={160}
              value={settings.metaDescription}
              onChange={(e) =>
                updateField(
                  "metaDescription",
                  e.target.value
                )
              }
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
              placeholder="Describe your website for search engines..."
            />

            <p className="mt-2 text-xs text-slate-400">
              Recommended: 140–160 characters.
            </p>

            <div>
  <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
    Open Graph Image
  </label>

  <input
    type="text"
    value={settings.ogImage}
    onChange={(e) =>
      updateField("ogImage", e.target.value)
    }
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
    placeholder="/og-image.jpg"
  />

  <p className="mt-2 text-xs text-slate-400">
    Image used when your website is shared on social media.
    Recommended size: 1200 × 630.
  </p>
</div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* BOTTOM SAVE */}
      {/* ====================================================== */}

      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-sm text-slate-500">
          Changes are saved when you click Save Settings.
        </p>

        <button
          type="button"
          onClick={saveSettings}
          disabled={saving}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162F55] disabled:cursor-not-allowed disabled:opacity-60"
        >

          <Save className="h-4 w-4" />

          {saving ? "Saving..." : "Save Settings"}

        </button>

      </div>

    </div>
  );
}