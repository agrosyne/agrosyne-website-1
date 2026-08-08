import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/insights";

interface Props {
  currentSlug: string;
}

export default function RelatedArticles({ currentSlug }: Props) {
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- READ MORE -----
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Related Insights
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore more market intelligence, trade analysis and global
            commodity insights from Agrosyne.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {relatedPosts.map((post) => (

            <article
              key={post.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <span className="inline-flex rounded-full bg-[#c89b57]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c89b57]">

                  {post.category}

                </span>

                <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-900">

                  {post.title}

                </h3>

                <p className="mt-4 text-slate-600 leading-7">

                  {post.excerpt}

                </p>

                <Link
                  href={`/insights/${post.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#c89b57] transition group-hover:gap-4"
                >

                  Read Article →

                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}