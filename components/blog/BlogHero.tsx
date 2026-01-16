import { cn } from "@/lib/utils";

interface BlogHeroProps {
  title: string;
  subtitle: string;
  gradient?: string;
  pattern?: "dots" | "grid" | "waves" | "circuit";
}

const patterns = {
  dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
  grid: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.1'%3E%3Cpath d='M0 20h40M20 0v40'/%3E%3C/g%3E%3C/svg%3E")`,
  waves: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 T100 10' fill='none' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='2'/%3E%3C/svg%3E")`,
  circuit: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.08' stroke-width='1'%3E%3Cpath d='M30 0v20M30 40v20M0 30h20M40 30h20'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
};

const gradients: Record<string, string> = {
  blue: "from-blue-600 via-blue-700 to-indigo-800",
  purple: "from-purple-600 via-purple-700 to-indigo-800",
  green: "from-emerald-600 via-teal-700 to-cyan-800",
  orange: "from-orange-500 via-red-600 to-rose-700",
  teal: "from-teal-600 via-cyan-700 to-blue-800",
  slate: "from-slate-700 via-slate-800 to-zinc-900",
  rose: "from-rose-500 via-pink-600 to-purple-700",
  amber: "from-amber-500 via-orange-600 to-red-700",
  indigo: "from-indigo-600 via-violet-700 to-purple-800",
  cyan: "from-cyan-500 via-teal-600 to-emerald-700",
};

export function BlogHero({
  title,
  subtitle,
  gradient = "blue",
  pattern = "circuit",
}: BlogHeroProps) {
  return (
    <div
      className={cn(
        "relative w-full py-20 md:py-28 bg-gradient-to-br overflow-hidden",
        gradients[gradient] || gradients.blue
      )}
      style={{
        backgroundImage: patterns[pattern],
        backgroundSize: pattern === "waves" ? "100px 20px" : undefined,
      }}
    >
      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: patterns[pattern] }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-zinc-950" />
    </div>
  );
}
