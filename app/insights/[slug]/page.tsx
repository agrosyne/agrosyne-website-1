import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RelatedArticles from "@/components/insights/RelatedArticles";
import ViewTracker from "@/components/insights/ViewTracker";

interface InsightContentBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

interface Insight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: InsightContentBlock[] | string;
  image: string;
  imageAlt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  status: "draft" | "published";

  seoTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  canonicalUrl?: string;
  socialTitle?: string;
  socialDescription?: string;
  noIndex?: boolean;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function getArticle(
  slug: string
): Promise<Insight | undefined> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const response = await fetch(
      `${baseUrl}/api/insights?public=true`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Unable to load insights from API."
      );

      return undefined;
    }

    const insights: Insight[] =
      await response.json();

    return insights.find(
      (post) =>
        post.slug === slug &&
        post.status === "published"
    );
  } catch (error) {
    console.error(
      "Failed to load article from API:",
      error
    );

    return undefined;
  }
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = await getArticle(slug);

  /*
   * MongoDB/API is now the only source of
   * public article data.
   *
   * If the article does not exist or is not
   * published, show the normal 404 page.
   */

  if (!article) {
    notFound();
  }

  return (
    <>
      <ViewTracker slug={article.slug} />

      <Header />

      <main className="bg-white">

        {/* Hero */}

        <section className="pt-15">

          <div className="mx-auto max-w-5xl px-6">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
              {article.category}
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              {article.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">

              <span>
                {article.author}
              </span>

              <span>•</span>

              <span>
                {new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )}
              </span>

              <span>•</span>

              <span>
                {article.readTime}
              </span>

            </div>

          </div>

        </section>

        {/* Hero Image */}

        <div className="mx-auto mt-14 max-w-6xl px-6">

          <div className="aspect-[16/8] overflow-hidden rounded-3xl bg-slate-100">

            {article.image ? (
              <Image
               src={article.image}
               alt={
                 article.imageAlt ||
                 article.title ||
                 "Agrosyne Global Commodity insight"
                   }
               width={1600}
               height={900}
               priority
               className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-slate-100">

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Agrosyne Insights
                </span>

              </div>
            )}

          </div>

        </div>

        {/* Article */}

        <section className="py-14">

          <div className="mx-auto max-w-3xl px-6">

            <div className="space-y-8">

              {Array.isArray(
                article.content
              ) ? (

                article.content.map(
                  (block, index) => {

                    if (
                      block.type ===
                      "heading"
                    ) {
                      return (
                        <h2
                          key={index}
                          className="text-3xl font-bold text-slate-900"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    if (
                      block.type ===
                      "paragraph"
                    ) {
                      return (
                        <p
                          key={index}
                          className="text-lg leading-9 text-slate-700"
                        >
                          {block.text}
                        </p>
                      );
                    }

                    if (
                      block.type ===
                        "list" &&
                      block.items
                    ) {
                      return (
                        <ul
                          key={index}
                          className="list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700"
                        >
                          {block.items.map(
                            (
                              item,
                              itemIndex
                            ) => (
                              <li
                                key={`${item}-${itemIndex}`}
                              >
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      );
                    }

                    return null;
                  }
                )

               ) : (

                <div className="space-y-8">

                  {article.content
                    .split(/\n\s*\n/)
                    .map((block, index) => {

                      const lines =
                        block
                          .split("\n")
                          .map((line) => line.trim())
                          .filter(Boolean);

                      if (!lines.length) {
                        return null;
                      }

                      /*
                       * Heading 2
                       */

                      if (
                        lines.length === 1 &&
                        lines[0].startsWith("## ")
                      ) {
                        return (
                          <h2
                            key={index}
                            className="pt-4 text-3xl font-bold leading-tight text-slate-900"
                          >
                            {lines[0].replace(
                              /^## /,
                              ""
                            )}
                          </h2>
                        );
                      }

                      /*
                       * Heading 3
                       */

                      if (
                        lines.length === 1 &&
                        lines[0].startsWith("### ")
                      ) {
                        return (
                          <h3
                            key={index}
                            className="pt-2 text-2xl font-bold leading-tight text-slate-900"
                          >
                            {lines[0].replace(
                              /^### /,
                              ""
                            )}
                          </h3>
                        );
                      }

                      /*
                       * Bullet list
                       */

                      if (
                        lines.every((line) =>
                          line.startsWith("- ")
                        )
                      ) {
                        return (
                          <ul
                            key={index}
                            className="list-disc space-y-3 pl-7 text-lg leading-8 text-slate-700"
                          >
                            {lines.map(
                              (line, itemIndex) => (
                                <li
                                  key={`${index}-${itemIndex}`}
                                >
                                  {line.replace(
                                    /^- /,
                                    ""
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        );
                      }

                      /*
                       * Normal paragraph
                       */

                      return (
                        <p
                          key={index}
                          className="text-lg leading-9 text-slate-700"
                        >
                          {lines.join(" ")}
                        </p>
                      );

                    })}

                </div>

              )}

            </div>

          </div>

        </section>

        {/* Back To Insights */}

        <section className="pb-15">

          <div className="mx-auto max-w-3xl px-6">

            <Link
              href="/insights"
              className="inline-flex items-center gap-3 text-lg font-semibold text-[#c89b57] transition-all duration-300 hover:gap-5"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5m6-6l-6 6 6 6"
                />
              </svg>

              Back to Insights

            </Link>

          </div>

        </section>

      </main>

      <RelatedArticles
        currentSlug={article.slug}
      />

      <Footer />
    </>
  );
}