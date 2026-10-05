"use client";

import { useState } from "react";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";
import {
  ArrowLeft,
  Image as ImageIcon,
  Save,
  Send,
} from "lucide-react";

import type {
  Insight,
  InsightStatus,
} from "@/lib/insights";

export default function NewInsightPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const [status, setStatus] =
    useState<InsightStatus>("draft");

  const [category, setCategory] = useState(
    "Market Analysis"
  );

  const [author, setAuthor] =
    useState("Agrosyne");

  const [readTime, setReadTime] =
    useState("");

    const [image, setImage] =
    useState("");

  const [imageAlt, setImageAlt] =
    useState("");

  const [imagePreview, setImagePreview] =
    useState("");

  const [uploadingImage, setUploadingImage] =
    useState(false);

  const [featured, setFeatured] =
    useState(false);

  const [seoTitle, setSeoTitle] =
    useState("");

  const [metaDescription, setMetaDescription] =
    useState("");

  const [focusKeyword, setFocusKeyword] =
    useState("");

  const [canonicalUrl, setCanonicalUrl] =
    useState("");

  const [socialTitle, setSocialTitle] =
    useState("");

  const [socialDescription, setSocialDescription] =
    useState("");

  const [noIndex, setNoIndex] =
    useState(false);

  /*
   * Build insight object
   */

  const buildInsight = (): Insight => {
    return {
      id: crypto.randomUUID(),

      title: title.trim(),

      slug: slug.trim(),

      excerpt: excerpt.trim(),

      content: content.trim(),

       image,

      imageAlt:
        imageAlt.trim(),

      category,

      author: author.trim(),

      publishedAt:
        new Date().toISOString(),

      readTime: readTime.trim(),

      featured,

      status,

      seoTitle:
        seoTitle.trim(),

      metaDescription:
        metaDescription.trim(),

      focusKeyword:
        focusKeyword.trim(),

      canonicalUrl:
        canonicalUrl.trim(),

      socialTitle:
        socialTitle.trim(),

      socialDescription:
        socialDescription.trim(),

      noIndex,
    };
  };

  /*
   * Upload featured image
   */

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    /*
     * Client-side validation
     */

    if (
      ![
        "image/jpeg",
        "image/png",
        "image/webp",
      ].includes(file.type)
    ) {
      alert(
        "Please choose a JPG, PNG or WEBP image."
      );

      event.target.value = "";

      return;
    }

    if (
      file.size >
      4.5 * 1024 * 1024
    ) {
      alert(
        "Image must be smaller than 4.5 MB."
      );

      event.target.value = "";

      return;
    }

    /*
     * Create temporary preview
     */

    const previewUrl =
      URL.createObjectURL(file);

    setImagePreview(previewUrl);

    try {
      setUploadingImage(true);

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      const response =
        await fetch(
          "/api/insights/upload",
          {
            method: "POST",
            body: formData,
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        setImagePreview("");

        alert(
          data.error ||
            "Unable to upload image."
        );

        return;
      }

      /*
       * Store permanent server URL
       */

      setImage(data.url);

    } catch (error) {
      console.error(
        "Image upload failed:",
        error
      );

      setImagePreview("");

      alert(
        "Something went wrong while uploading the image."
      );

    } finally {
      setUploadingImage(false);

      /*
       * Allow selecting the same
       * image again later.
       */

      event.target.value = "";
    }
  };

  /*
   * Save / Publish insight
   */

  const saveInsight = async (
    publish = false
  ) => {
    if (!title.trim()) {
      alert(
        "Please enter an article title."
      );

      return;
    }

    if (!slug.trim()) {
      alert(
        "Please enter a URL slug."
      );

      return;
    }

    if (!category) {
      alert(
        "Please select a category."
      );

      return;
    }

    if (uploadingImage) {
      alert(
        "Please wait for the image upload to finish."
      );

      return;
    }

    try {
      const insight =
        buildInsight();

      insight.status =
        publish
          ? "published"
          : "draft";

      const response =
        await fetch(
          "/api/insights",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              insight
            ),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        alert(
          data.error ||
            "Unable to save insight."
        );

        return;
      }

      alert(
        publish
          ? "Insight published successfully."
          : "Insight saved as draft."
      );

      window.location.href =
        "/admin/insights";

    } catch (error) {
      console.error(
        "Failed to save insight:",
        error
      );

      alert(
        "Something went wrong while saving the insight."
      );
    }
  };

  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <Link
            href="/admin/insights"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#c89b57]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c89b57]">
            CONTENT MANAGEMENT
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0B1F3A]">
            New Insight
          </h1>

          <p className="mt-3 text-base text-slate-500">
            Create and publish a new article for the Agrosyne website.
          </p>

        </div>

        <div className="flex items-center gap-3">

          {/* Save Draft */}

          <button
            type="button"
            onClick={() =>
              saveInsight(false)
            }
            disabled={uploadingImage}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#c89b57] hover:text-[#c89b57] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            Save Draft
          </button>

          {/* Publish */}

          <button
            type="button"
            onClick={() =>
              saveInsight(true)
            }
            disabled={uploadingImage}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#152f50] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            Publish
          </button>

        </div>

      </div>

      {/* Main Editor */}

      <div className="grid gap-8 xl:grid-cols-[1fr_360px]">

        {/* Left Column */}

        <div className="space-y-8">

          {/* Basic Information */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-7">

              <h2 className="text-lg font-bold text-[#0B1F3A]">
                Article Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Basic information about your insight.
              </p>

            </div>

            <div className="space-y-6">

              {/* Title */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Article Title
                </label>

                <input
                  type="text"
                  placeholder="Enter article title"
                  value={title}
                  onChange={(e) =>
                    setTitle(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                />

              </div>

              {/* Slug */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  URL Slug
                </label>

                <input
                  type="text"
                  placeholder="article-url-slug"
                  value={slug}
                  onChange={(e) =>
                    setSlug(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Example: /insights/article-url-slug
                </p>

              </div>

              {/* Excerpt */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Short Description
                </label>

                <textarea
                  rows={4}
                  placeholder="Write a short description for the article..."
                  value={excerpt}
                  onChange={(e) =>
                    setExcerpt(
                      e.target.value
                    )
                  }
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                />

              </div>

            </div>

          </section>

          {/* Article Content */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-7">

              <h2 className="text-lg font-bold text-[#0B1F3A]">
                Article Content
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Write the main content of your insight.
              </p>

            </div>

            <RichTextEditor
  value={content}
  onChange={setContent}
/>

          </section>

        </div>

        {/* Right Column */}

        <div className="space-y-8">

          {/* Publishing */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-lg font-bold text-[#0B1F3A]">
              Publishing
            </h2>

            <div className="mt-6 space-y-5">

              {/* Status */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Status
                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(
                      e.target.value as InsightStatus
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c89b57]"
                >
                  <option value="draft">
                    Draft
                  </option>

                  <option value="published">
                    Published
                  </option>
                </select>

              </div>

              {/* Category */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c89b57]"
                >
                  <option value="Market Analysis">
                    Market Analysis
                  </option>

                  <option value="Trade Guides">
                    Trade Guides
                  </option>

                  <option value="Industry Insights">
                    Industry Insights
                  </option>

                  <option value="Company News">
                    Company News
                  </option>
                </select>

              </div>

              {/* Author */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Author
                </label>

                <input
                  type="text"
                  value={author}
                  onChange={(e) =>
                    setAuthor(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c89b57]"
                />

              </div>

              {/* Read Time */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Read Time
                </label>

                <input
                  type="text"
                  placeholder="5 min read"
                  value={readTime}
                  onChange={(e) =>
                    setReadTime(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c89b57]"
                />

              </div>

            </div>

          </section>

          {/* Featured Image */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-lg font-bold text-[#0B1F3A]">
              Featured Image
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add the main image for this article.
            </p>

            <div className="mt-5">

              {imagePreview ? (

                <div className="relative overflow-hidden rounded-2xl border border-slate-200">

                  <img
                    src={imagePreview}
                    alt="Featured image preview"
                    className="aspect-[16/10] w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-black/60 px-4 py-3">

                    <span className="text-xs font-medium text-white">
                      {uploadingImage
                        ? "Uploading..."
                        : "Image uploaded"}
                    </span>

                    <label className="cursor-pointer rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#0B1F3A] transition hover:bg-slate-100">

                      Change Image

                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={
                          handleImageUpload
                        }
                        className="hidden"
                        disabled={
                          uploadingImage
                        }
                      />

                    </label>

                  </div>

                </div>

              ) : (

                <label className="flex min-h-[180px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-[#c89b57] hover:bg-[#c89b57]/5">

                  <div className="text-center">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">

                      <ImageIcon className="h-5 w-5 text-[#c89b57]" />

                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#0B1F3A]">
                      {uploadingImage
                        ? "Uploading image..."
                        : "Upload featured image"}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      JPG, PNG or WEBP · Max 4.5 MB
                    </p>

                    <span className="mt-4 inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0B1F3A]">
                      Choose Image
                    </span>

                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={
                        handleImageUpload
                      }
                      className="hidden"
                      disabled={
                        uploadingImage
                      }
                    />

                  </div>

                </label>

              )}

            </div>

            {/* Image Alt Text */}

            <div className="mt-6">

              <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                Image Alt Text
              </label>

              <p className="mb-3 text-xs leading-5 text-slate-500">
                Describe the image for accessibility and search engines.
              </p>

              <input
                type="text"
                value={imageAlt}
                onChange={(e) =>
                  setImageAlt(e.target.value)
                }
                placeholder="Describe what the image shows"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c89b57]"
              />

            </div>

          </section>

          {/* Featured */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start justify-between gap-4">

              <div>

                <h2 className="text-sm font-bold text-[#0B1F3A]">
                  Featured Article
                </h2>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Show this article as the featured insight.
                </p>

              </div>

              <input
                type="checkbox"
                checked={featured}
                onChange={(e) =>
                  setFeatured(
                    e.target.checked
                  )
                }
                className="mt-1 h-5 w-5 accent-[#c89b57]"
              />

            </div>

          </section>

          {/* SEO Settings */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
                SEARCH OPTIMIZATION
              </p>

              <h2 className="mt-2 text-lg font-bold text-[#0B1F3A]">
                SEO Settings
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Control how this article appears in search engines and when shared online.
              </p>

            </div>

            <div className="space-y-6">

              {/* SEO Title */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  SEO Title
                </label>

                <input
                  type="text"
                  placeholder="Enter SEO title"
                  maxLength={60}
                  value={seoTitle}
                  onChange={(e) =>
                    setSeoTitle(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Recommended: 50–60 characters.
                </p>

              </div>

              {/* Meta Description */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Meta Description
                </label>

                <textarea
                  rows={4}
                  placeholder="Write a concise description for search engines..."
                  maxLength={160}
                  value={metaDescription}
                  onChange={(e) =>
                    setMetaDescription(
                      e.target.value
                    )
                  }
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Recommended: 140–160 characters.
                </p>

              </div>

              {/* Focus Keyword */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Focus Keyword
                </label>

                <input
                  type="text"
                  placeholder="Example: global fertilizer market"
                  value={focusKeyword}
                  onChange={(e) =>
                    setFocusKeyword(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                />

                <p className="mt-2 text-xs text-slate-400">
                  The main search phrase you want this article to target.
                </p>

              </div>

              {/* Canonical URL */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                  Canonical URL
                </label>

                <input
                  type="url"
                  placeholder="https://www.agrosyne.com/insights/article-slug"
                  value={canonicalUrl}
                  onChange={(e) =>
                    setCanonicalUrl(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Leave blank to automatically use the article URL.
                </p>

              </div>

              {/* Social Sharing */}

              <div className="border-t border-slate-200 pt-6">

                <h3 className="text-sm font-bold text-[#0B1F3A]">
                  Social Sharing
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Optional titles and descriptions for LinkedIn, WhatsApp and other platforms.
                </p>

                <div className="mt-5 space-y-5">

                  {/* Social Title */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                      Social Title
                    </label>

                    <input
                      type="text"
                      placeholder="Title when shared on social media"
                      maxLength={70}
                      value={socialTitle}
                      onChange={(e) =>
                        setSocialTitle(
                          e.target.value
                        )
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                    />

                  </div>

                  {/* Social Description */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#0B1F3A]">
                      Social Description
                    </label>

                    <textarea
                      rows={3}
                      placeholder="Description when the article is shared..."
                      maxLength={200}
                      value={socialDescription}
                      onChange={(e) =>
                        setSocialDescription(
                          e.target.value
                        )
                      }
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-[#c89b57] focus:ring-2 focus:ring-[#c89b57]/10"
                    />

                  </div>

                </div>

              </div>

              {/* No Index */}

              <div className="border-t border-slate-200 pt-6">

                <label className="flex cursor-pointer items-start gap-3">

                  <input
                    type="checkbox"
                    checked={noIndex}
                    onChange={(e) =>
                      setNoIndex(
                        e.target.checked
                      )
                    }
                    className="mt-1 h-5 w-5 accent-[#c89b57]"
                  />

                  <span>

                    <span className="block text-sm font-semibold text-[#0B1F3A]">
                      No Index
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      Prevent search engines from indexing this article.
                    </span>

                  </span>

                </label>

              </div>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}