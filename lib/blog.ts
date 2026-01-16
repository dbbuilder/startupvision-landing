export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  gradient: string;
  pattern: "dots" | "grid" | "waves" | "circuit";
  tags: string[];
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-augmented-development",
    title: "AI-Augmented Development: The Human-AI Partnership",
    subtitle: "Why the best products come from humans directing AI, not AI replacing humans.",
    category: "Engineering",
    readTime: "8 min read",
    gradient: "blue",
    pattern: "circuit",
    tags: ["AI", "Software Development", "Engineering", "Productivity"],
    publishedAt: "2026-01-15",
  },
  {
    slug: "platform-vs-partnership",
    title: "Platform vs. Partnership: Choosing Your Development Path",
    subtitle: "Understanding when self-service tools work and when you need a development partner.",
    category: "Strategy",
    readTime: "7 min read",
    gradient: "purple",
    pattern: "grid",
    tags: ["Strategy", "Product Development", "Startup"],
    publishedAt: "2026-01-14",
  },
  {
    slug: "fractional-cto",
    title: "When Your Startup Needs a Fractional CTO",
    subtitle: "The signals, the value, and how to make fractional leadership work.",
    category: "Leadership",
    readTime: "9 min read",
    gradient: "teal",
    pattern: "dots",
    tags: ["Leadership", "CTO", "Startup", "Fractional"],
    publishedAt: "2026-01-13",
  },
  {
    slug: "mvp-success",
    title: "The 5 Things That Actually Determine MVP Success",
    subtitle: "Beyond 'ship fast'—what separates MVPs that become companies from lessons learned.",
    category: "Product",
    readTime: "8 min read",
    gradient: "green",
    pattern: "waves",
    tags: ["MVP", "Product", "Startup", "Strategy"],
    publishedAt: "2026-01-12",
  },
  {
    slug: "soc2-compliance",
    title: "SOC 2 Compliance for Startups: A No-BS Guide",
    subtitle: "What it actually takes, what it costs, and whether you need it yet.",
    category: "Compliance",
    readTime: "10 min read",
    gradient: "slate",
    pattern: "circuit",
    tags: ["SOC 2", "Compliance", "Security", "Enterprise"],
    publishedAt: "2026-01-11",
  },
  {
    slug: "tech-stack-2026",
    title: "Choosing Your Startup's Tech Stack in 2026",
    subtitle: "The boring, correct choices versus the exciting, risky ones.",
    category: "Engineering",
    readTime: "9 min read",
    gradient: "indigo",
    pattern: "grid",
    tags: ["Tech Stack", "Architecture", "Engineering", "2026"],
    publishedAt: "2026-01-10",
  },
  {
    slug: "code-review-roi",
    title: "The ROI of Expert Code Review",
    subtitle: "Why external code review pays for itself—and the hidden costs of skipping it.",
    category: "Engineering",
    readTime: "7 min read",
    gradient: "rose",
    pattern: "dots",
    tags: ["Code Review", "Quality", "Engineering", "ROI"],
    publishedAt: "2026-01-09",
  },
  {
    slug: "prototype-to-production",
    title: "From Prototype to Production: What Actually Changes",
    subtitle: "The 10x complexity increase nobody talks about—and how to navigate it.",
    category: "Engineering",
    readTime: "10 min read",
    gradient: "orange",
    pattern: "waves",
    tags: ["Prototype", "Production", "Scale", "Engineering"],
    publishedAt: "2026-01-08",
  },
  {
    slug: "hipaa-compliance",
    title: "HIPAA Compliance for Health Tech Startups",
    subtitle: "Building compliant from day one beats the expensive retrofit.",
    category: "Compliance",
    readTime: "11 min read",
    gradient: "cyan",
    pattern: "circuit",
    tags: ["HIPAA", "Healthcare", "Compliance", "Security"],
    publishedAt: "2026-01-07",
  },
  {
    slug: "tech-team-strategy",
    title: "Building Your Startup's Technical Team Strategy",
    subtitle: "Full-time vs fractional vs agency vs hybrid—what works at each stage.",
    category: "Leadership",
    readTime: "9 min read",
    gradient: "amber",
    pattern: "grid",
    tags: ["Team", "Hiring", "Leadership", "Strategy"],
    publishedAt: "2026-01-06",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
