import { Metadata } from "next";
import { BlogHero, Mermaid } from "@/components/blog";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("tech-team-strategy")!;

export const metadata: Metadata = {
  title: `${post.title} | StartupVision Blog`,
  description: post.subtitle,
  openGraph: {
    title: post.title,
    description: post.subtitle,
    type: "article",
  },
};

export default function TechTeamStrategyPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-zinc-950">
      <BlogHero
        title={post.title}
        subtitle={post.subtitle}
        gradient={post.gradient}
        pattern={post.pattern}
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-zinc-600 dark:text-zinc-400">
            "Should I hire a full-time engineer or work with an agency?" It's the
            wrong question—because the answer changes with your stage, your product,
            and your capabilities. The right team structure for a pre-seed startup
            isn't right for a Series A company.
          </p>

          <hr className="my-12" />

          <h2>The Four Models</h2>

          <Mermaid
            chart={`graph TB
    subgraph Models["Team Structure Models"]
        M1[Full-Time Team]
        M2[Fractional Team]
        M3[Agency/Partner]
        M4[Hybrid]
    end

    M1 --> S1[Deep context, slow to scale]
    M2 --> S2[Senior expertise, divided attention]
    M3 --> S3[Fast ramp-up, less context]
    M4 --> S4[Optimized mix, more coordination]`}
          />

          <h3>Model 1: Full-Time Team</h3>
          <p>Engineers as employees, working exclusively on your product.</p>
          <ul>
            <li><strong>Strengths:</strong> Deep context, cultural alignment, knowledge retention</li>
            <li><strong>Weaknesses:</strong> Slow to scale (3-6 months hiring), full compensation cost, limited experience diversity</li>
          </ul>

          <h3>Model 2: Fractional Team</h3>
          <p>Part-time senior leaders (fractional CTO, CISO, CPO) across multiple companies.</p>
          <ul>
            <li><strong>Strengths:</strong> Senior experience immediately, flexible engagement, broader perspective</li>
            <li><strong>Weaknesses:</strong> Divided attention, not available for day-to-day</li>
          </ul>

          <h3>Model 3: Agency/Partner Team</h3>
          <p>External companies build your product. You direct; they execute.</p>
          <ul>
            <li><strong>Strengths:</strong> Fast ramp-up, scalable capacity, no recruiting burden</li>
            <li><strong>Weaknesses:</strong> Less context, knowledge leaves when engagement ends</li>
          </ul>

          <h3>Model 4: Hybrid</h3>
          <p>Combination: small full-time core, fractional leadership, agency for specific work.</p>
          <ul>
            <li><strong>Strengths:</strong> Optimizes for each function, flexibility with stability</li>
            <li><strong>Weaknesses:</strong> Coordination complexity, more relationships to manage</li>
          </ul>

          <hr className="my-12" />

          <h2>The Stage-Appropriate Structure</h2>

          <Mermaid
            chart={`graph TB
    subgraph PreSeed["Pre-Seed / Idea"]
        PS[Founder-led + Agency prototype]
        PS --> PS1[Fractional advisor optional]
    end

    subgraph Seed["Seed Stage"]
        S[2-4 FT engineers + Fractional CTO]
        S --> S1[Agency for specialized work]
    end

    subgraph SeriesA["Series A"]
        A[8-15 FT engineers + Full-time CTO]
        A --> A1[Fractional specialists]
        A --> A2[Strategic agency relationships]
    end

    subgraph SeriesB["Series B+"]
        B[Full internal organization]
        B --> B1[Agency for overflow only]
    end

    PreSeed --> |"PMF signals"| Seed
    Seed --> |"Scaling"| SeriesA
    SeriesA --> |"At scale"| SeriesB`}
          />

          <h3>Pre-Seed / Idea Stage</h3>
          <p><strong>Recommended:</strong> Founder-led with agency for prototype, possibly fractional advisor</p>
          <p>
            You're validating, not building for scale. Speed matters more than optimization.
            Don't commit to structure before you know what you're building.
          </p>

          <h3>Seed Stage</h3>
          <p><strong>Recommended:</strong> Small full-time core (2-4 engineers) + fractional leadership + agency for surge</p>
          <p>
            You have product-market fit signals. Need committed people building the foundation,
            but also flexibility as priorities shift.
          </p>

          <h3>Series A</h3>
          <p><strong>Recommended:</strong> Larger full-time team (8-15 engineers) + fractional specialists + strategic agency</p>
          <p>
            You're scaling. Need dedicated teams, but also specialized expertise you
            can't yet justify full-time.
          </p>

          <h3>Series B+</h3>
          <p><strong>Recommended:</strong> Full-time as the default + agency for overflow</p>
          <p>
            You're at scale. Culture and execution matter. Long-term knowledge matters.
            Full-time makes sense for core functions.
          </p>

          <hr className="my-12" />

          <h2>The Decision Factors</h2>

          <Mermaid
            chart={`graph TB
    A[Decision Factors] --> B[Work Predictability]
    A --> C[Specialization Required]
    A --> D[Hiring Capability]
    A --> E[Capital Efficiency]

    B --> |"High"| F[Full-time makes sense]
    B --> |"Low"| G[Flexibility valuable]

    C --> |"Specialized"| H[Agency/Fractional]
    C --> |"General"| I[Full-time often better]

    D --> |"Strong"| J[Full-time accessible]
    D --> |"Weak"| K[External bridges gap]

    E --> |"Tight"| L[Optimize flexibility]
    E --> |"Well-funded"| M[Invest in ownership]`}
          />

          <h3>Factor 1: Predictability of Work</h3>
          <ul>
            <li><strong>High predictability:</strong> Know what you're building for 12 months? Full-time can plan and execute.</li>
            <li><strong>Low predictability:</strong> Pivoting or uncertain? Paying for flexibility makes sense.</li>
          </ul>

          <h3>Factor 2: Specialization Required</h3>
          <ul>
            <li><strong>Specialized skills:</strong> ML engineers, security specialists—expensive full-time, may not be needed constantly.</li>
            <li><strong>General engineering:</strong> Core product work benefits from full-time context that compounds.</li>
          </ul>

          <h3>Factor 3: Hiring Capability</h3>
          <ul>
            <li><strong>Strong hiring:</strong> Can attract and evaluate talent? Building your team makes sense.</li>
            <li><strong>Weak hiring:</strong> External help lets you move while improving recruiting.</li>
          </ul>

          <h3>Factor 4: Capital Efficiency</h3>
          <ul>
            <li><strong>Tight capital:</strong> Agencies and fractional = pay for what you use.</li>
            <li><strong>Well-funded:</strong> Full-time teams build compounding assets.</li>
          </ul>

          <hr className="my-12" />

          <h2>Common Mistakes</h2>

          <Mermaid
            chart={`graph TD
    A[Common Mistakes] --> B[Hiring full-time too early]
    A --> C[Never building full-time]
    A --> D[Choosing agencies on price]
    A --> E[Ignoring the transition]
    A --> F[Underestimating management]

    B --> G[Every hire is a bet before PMF]
    C --> H[Lack institutional knowledge]
    D --> I[Quality > hourly rate]
    E --> J[Plan knowledge transfer]
    F --> K[5-7 engineers need a manager]`}
          />

          <h3>Mistake 1: Hiring Full-Time Too Early</h3>
          <p>
            Before product-market fit, every hire is a bet. If you pivot, that engineer
            may not be right for the new direction.
          </p>

          <h3>Mistake 2: Never Building Full-Time</h3>
          <p>
            At some point, you need core engineering ownership. Companies that stay
            agency-dependent too long lack institutional knowledge.
          </p>

          <h3>Mistake 3: Choosing Agencies on Price</h3>
          <blockquote>
            <p>
              "The cheapest agency is rarely the best value. A more expensive agency
              that delivers is cheaper than a bargain agency that doesn't."
            </p>
          </blockquote>

          <h3>Mistake 4: Ignoring the Transition</h3>
          <p>
            The transition from agency-led to full-time-led is a specific challenge.
            Plan for knowledge transfer, documentation, and overlap.
          </p>

          <h3>Mistake 5: Underestimating Management</h3>
          <p>
            Full-time employees need management. Every 5-7 engineers need a layer of
            management. Budget for that time or those people.
          </p>

          <hr className="my-12" />

          <h2>The Honest Assessment</h2>

          <p>Ask yourself:</p>
          <ol>
            <li><strong>What are we building in the next 6 months?</strong> Is it defined enough to hire for?</li>
            <li><strong>Can we recruit well?</strong> Do we know how to find, evaluate, and close talent?</li>
            <li><strong>What do we truly need full-time?</strong> What could be fractional or agency without loss?</li>
            <li><strong>What's our capital situation?</strong> How much flexibility do we need?</li>
            <li><strong>Where are we weakest?</strong> What capabilities are missing?</li>
          </ol>

          <p>The answers point toward your structure.</p>

          <hr className="my-12" />

          <h2>The Bottom Line</h2>

          <p>
            There's no universally right team structure—only the right structure for
            your stage, your product, and your capabilities.
          </p>

          <blockquote>
            <p>
              "Most successful companies evolve through multiple structures as they grow.
              The mistake is locking in too early or refusing to evolve when circumstances change."
            </p>
          </blockquote>

          <p>Match your structure to your reality. Adjust as reality changes. That's the strategy.</p>

          <hr className="my-12" />

          <p className="text-sm text-zinc-500 italic">
            StartupVision works with founders at every stage, from agency development to
            fractional leadership to team building. We meet you where you are. Learn more at{" "}
            <a href="https://startupvision.net" className="text-blue-600 hover:underline">
              startupvision.net
            </a>
            .
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <a
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Back to all articles
          </a>
        </div>
      </div>
    </article>
  );
}
