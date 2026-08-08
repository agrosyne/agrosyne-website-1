import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/insights";

export default function ArticleGrid() {
  const articles = posts.filter((post) => !post.featured);

  return (
    <section className="bg-white pb-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {articles.map((post) => (

            <article
              key={post.id}
              className="group"
            >

              <Link href={`/insights/${post.slug}`}>

                {/* Image */}

                <div className="overflow-hidden rounded-2xl aspect-[16/10]">

                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Content */}

                <div className="mt-6">

                  <span className="text-sm font-semibold uppercase tracking-widest text-[#c89b57]">

                    {post.category}

                  </span>

                  <h3 className="mt-3 text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-[#c89b57]">

                    {post.title}

                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">

                    {post.excerpt}

                  </p>

                  <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">

                    <span>{post.publishedAt}</span>

                    <span>•</span>

                    <span>{post.readTime}</span>

                  </div>

                </div>

              </Link>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}