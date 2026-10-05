import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RelatedArticles from "@/components/insights/RelatedArticles";
import ViewTracker from "@/components/insights/ViewTracker";

import type { Insight } from "@/lib/insights";
import { getPublishedInsightBySlug } from "@/lib/insights";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const article = await getPublishedInsightBySlug(slug);

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
                {new Date(
                  article.publishedAt
                ).toLocaleDateString(
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

              {Array.isArray(article.content) ? (

                /*
                 * Legacy structured content blocks
                 */

                article.content.map(
                  (block, index) => {

                    if (
                      block.type === "heading"
                    ) {
                      return (
                        <h2
                          key={index}
                          className="pt-4 text-3xl font-bold leading-tight text-slate-900"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    if (
                      block.type === "paragraph"
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
                      block.type === "list" &&
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

                /*
                 * String content
                 *
                 * The Admin rich-text editor stores
                 * formatted content as HTML.
                 *
                 * Older articles may still contain
                 * Markdown/plain text, so those are
                 * handled separately below.
                 */

                /<\/?[a-z][\s\S]*>/i.test(
                  article.content
                ) ? (

                  /*
                   * Rich HTML content
                   */

                  <div
                    className="
                      text-lg
                      leading-9
                      text-slate-700

                      [&_p]:mb-6
                      [&_p:last-child]:mb-0

                      [&_h2]:mt-10
                      [&_h2]:mb-5
                      [&_h2:first-child]:mt-0
                      [&_h2]:text-3xl
                      [&_h2]:font-bold
                      [&_h2]:leading-tight
                      [&_h2]:text-slate-900

                      [&_h3]:mt-8
                      [&_h3]:mb-4
                      [&_h3]:text-2xl
                      [&_h3]:font-bold
                      [&_h3]:leading-tight
                      [&_h3]:text-slate-900

                      [&_strong]:font-semibold
                      [&_b]:font-semibold

                      [&_em]:italic
                      [&_i]:italic

                      [&_ul]:mb-6
                      [&_ul]:list-disc
                      [&_ul]:space-y-3
                      [&_ul]:pl-7

                      [&_ol]:mb-6
                      [&_ol]:list-decimal
                      [&_ol]:space-y-3
                      [&_ol]:pl-7

                      [&_li]:pl-1

                      [&_a]:font-semibold
                      [&_a]:text-[#c89b57]
                      [&_a]:underline

                      [&_blockquote]:my-8
                      [&_blockquote]:border-l-4
                      [&_blockquote]:border-[#c89b57]
                      [&_blockquote]:pl-6
                      [&_blockquote]:italic
                      [&_blockquote]:text-slate-600
                    "
                    dangerouslySetInnerHTML={{
                      __html: article.content,
                    }}
                  />

                ) : (

                  /*
                   * Legacy Markdown / plain-text content
                   */

                  <div className="space-y-8">

                    {article.content
                      .split(/\n\s*\n/)
                      .map(
                        (block, index) => {

                          const lines =
                            block
                              .split("\n")
                              .map(
                                (line) =>
                                  line.trim()
                              )
                              .filter(Boolean);

                          if (!lines.length) {
                            return null;
                          }

                          /*
                           * Heading 2
                           */

                          if (
                            lines.length === 1 &&
                            lines[0].startsWith(
                              "## "
                            )
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
                            lines[0].startsWith(
                              "### "
                            )
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
                            lines.every(
                              (line) =>
                                line.startsWith(
                                  "- "
                                )
                            )
                          ) {
                            return (
                              <ul
                                key={index}
                                className="list-disc space-y-3 pl-7 text-lg leading-8 text-slate-700"
                              >
                                {lines.map(
                                  (
                                    line,
                                    itemIndex
                                  ) => (
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

                        }
                      )}

                  </div>

                )

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