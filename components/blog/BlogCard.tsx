import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  gradient?: string;
}

const gradients: Record<string, string> = {
  blue: "from-blue-500 to-indigo-600",
  purple: "from-purple-500 to-indigo-600",
  green: "from-emerald-500 to-teal-600",
  orange: "from-orange-500 to-red-600",
  teal: "from-teal-500 to-cyan-600",
  slate: "from-slate-600 to-zinc-700",
  rose: "from-rose-500 to-pink-600",
  amber: "from-amber-500 to-orange-600",
  indigo: "from-indigo-500 to-violet-600",
  cyan: "from-cyan-500 to-teal-600",
};

export function BlogCard({
  slug,
  title,
  subtitle,
  category,
  readTime,
  gradient = "blue",
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:-translate-y-1">
        {/* Gradient header */}
        <div
          className={cn(
            "h-32 bg-gradient-to-br relative overflow-hidden",
            gradients[gradient] || gradients.blue
          )}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.3' stroke-width='1'%3E%3Cpath d='M30 0v20M30 40v20M0 30h20M40 30h20'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
            {subtitle}
          </p>
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>{readTime}</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
