import { Metadata } from "next";
import { BlogCard } from "@/components/blog";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | StartupVision",
  description:
    "Insights on product development, engineering, compliance, and building successful startups. Expert perspectives from 20+ years of experience.",
  openGraph: {
    title: "Blog | StartupVision",
    description:
      "Insights on product development, engineering, compliance, and building successful startups.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0v20M30 40v20M0 30h20M40 30h20'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insights & Perspectives
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Practical knowledge from building 180+ products. No fluff, no
            theory—just what actually works.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-zinc-950" />
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {["All", "Engineering", "Strategy", "Leadership", "Compliance", "Product"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === "All"
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                subtitle={post.subtitle}
                category={post.category}
                readTime={post.readTime}
                gradient={post.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Ready to Build Something Real?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Whether you're starting from scratch or scaling an existing product,
            we can help. Let's talk about your project.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
