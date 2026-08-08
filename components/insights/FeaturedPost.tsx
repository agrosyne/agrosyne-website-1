import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/insights";

export default function FeaturedPost() {
const featuredPost = posts.find((post) => post.featured);

if (!featuredPost) return null;
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}

        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            FEATURED INSIGHT
          </p>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Editor's Pick
          </h2>

        </div>

        {/* Featured Article */}

        <div className="group grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl aspect-[16/10]">

            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              width={1200}
              height={750}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          {/* Content */}

          <div>

            {/* Category */}

            <span className="inline-flex rounded-full bg-[#c89b57]/10 px-4 py-2 text-sm font-semibold text-[#c89b57]">

              {featuredPost.category}

            </span>

            {/* Title */}

            <h3 className="mt-6 text-4xl font-bold leading-tight text-slate-900">

              {featuredPost.title}

            </h3>

            {/* Summary */}

            <p className="mt-6 text-lg leading-9 text-slate-600">

              {featuredPost.excerpt}

            </p>

            {/* Meta */}

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">

              <span>{featuredPost.publishedAt}</span>

              <span>•</span>

              <span>{featuredPost.readTime}</span>

            </div>

            {/* Button */}

            <Link
              href={`/insights/${featuredPost.slug}`}
              className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-[#c89b57] transition-all duration-300 hover:gap-5"
            >

              Read Article

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
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}