import { Metadata } from "next";
import { BlogHero, Mermaid } from "@/components/blog";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("hipaa-compliance")!;

export const metadata: Metadata = {
  title: `${post.title} | StartupVision Blog`,
  description: post.subtitle,
  openGraph: {
    title: post.title,
    description: post.subtitle,
    type: "article",
  },
};

export default function HIPAACompliancePage() {
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
            You're building health tech. That means you're building on HIPAA ground.
            HIPAA isn't optional for products that handle Protected Health Information.
            Violations aren't just fines—they're reputational damage, criminal liability,
            and potentially the end of your company.
          </p>

          <p>
            But here's what most founders don't realize: building HIPAA-compliant from
            the start isn't significantly harder than building non-compliant. The retrofit,
            however, is brutal.
          </p>

          <hr className="my-12" />

          <h2>Does HIPAA Apply to You?</h2>

          <Mermaid
            chart={`flowchart TD
    A[Does HIPAA Apply?] --> B{Handle PHI for Covered Entity?}
    B -->|Yes| C[HIPAA Applies]
    B -->|No| D{Are you a Covered Entity?}
    D -->|Yes| C
    D -->|No| E{Business Associate?}
    E -->|Yes| C
    E -->|No| F[May Not Apply]

    style C fill:#fecaca
    style F fill:#dcfce7`}
          />

          <p><strong>HIPAA applies if you:</strong></p>
          <ul>
            <li>Handle PHI on behalf of a Covered Entity (hospitals, clinics, insurers)</li>
            <li>Are a Covered Entity yourself</li>
            <li>Are a Business Associate of a Covered Entity</li>
          </ul>

          <p><strong>PHI includes:</strong></p>
          <ul>
            <li>Names, addresses, dates, phone numbers, emails</li>
            <li>Medical record numbers, health plan numbers, SSNs</li>
            <li>Biometric data, photos, any unique identifier</li>
            <li>Any data that identifies an individual AND relates to health</li>
          </ul>

          <p><strong>If you're building:</strong> Patient portals, telehealth, healthcare scheduling, medical records, health tracking apps, insurance/billing systems—HIPAA almost certainly applies.</p>

          <hr className="my-12" />

          <h2>The Three Rules You Need to Know</h2>

          <Mermaid
            chart={`graph TB
    subgraph Privacy["Privacy Rule"]
        P1[How PHI is used/disclosed]
        P2[Patient access rights]
        P3[Documentation requirements]
    end

    subgraph Security["Security Rule"]
        S1[Administrative safeguards]
        S2[Physical safeguards]
        S3[Technical safeguards]
    end

    subgraph Breach["Breach Notification Rule"]
        B1[Individual notification]
        B2[HHS notification]
        B3[Media notification]
    end`}
          />

          <h3>The Privacy Rule</h3>
          <p>Controls how PHI is used and disclosed:</p>
          <ul>
            <li>Only collect PHI you need</li>
            <li>Only use PHI for purposes disclosed to the patient</li>
            <li>Allow patients to access and correct their records</li>
            <li>Document all disclosures</li>
            <li>Train employees on privacy policies</li>
          </ul>

          <h3>The Security Rule</h3>
          <p>Specifies how to protect electronic PHI (ePHI):</p>
          <ul>
            <li>Administrative safeguards (policies, training, risk assessment)</li>
            <li>Physical safeguards (facility access, workstation security)</li>
            <li>Technical safeguards (access control, encryption, audit logs)</li>
          </ul>

          <h3>The Breach Notification Rule</h3>
          <p>Specifies what happens if PHI is exposed:</p>
          <ul>
            <li>Notify affected individuals within 60 days</li>
            <li>Notify HHS (immediately for breaches over 500 individuals)</li>
            <li>Notify media for breaches over 500 in a state</li>
            <li>Document all breaches and response actions</li>
          </ul>

          <hr className="my-12" />

          <h2>The Technical Requirements</h2>

          <Mermaid
            chart={`graph TB
    subgraph Access["Access Control"]
        A1[Unique user IDs]
        A2[Automatic logoff]
        A3[MFA - best practice]
        A4[Role-based access]
    end

    subgraph Audit["Audit Controls"]
        AU1[Record all access]
        AU2[Tamper-proof logs]
        AU3[Regular review]
        AU4[Suspicious alerts]
    end

    subgraph Transmission["Transmission Security"]
        T1[TLS 1.2+]
        T2[E2E encryption]
        T3[VPN for internal]
        T4[Certificate management]
    end

    subgraph Encryption["Encryption"]
        E1[AES-256 at rest]
        E2[TLS in transit]
        E3[Key management]
        E4[Encrypted backups]
    end`}
          />

          <hr className="my-12" />

          <h2>The Business Associate Agreement (BAA)</h2>

          <p>
            If you're handling PHI for a Covered Entity, you need a BAA. This contract
            defines permitted uses, requires safeguards, makes you liable for breaches,
            and allows audits.
          </p>

          <blockquote>
            <p>
              "Critical: Your vendors also need BAAs. Every third party that handles
              PHI needs a BAA with you. No BAA = HIPAA violation."
            </p>
          </blockquote>

          <Mermaid
            chart={`graph LR
    subgraph BAA["Services with BAAs"]
        B1[AWS, GCP, Azure]
        B2[MongoDB Atlas]
        B3[Auth0, Clerk]
        B4[SendGrid, Twilio]
    end

    subgraph NoBAA["No BAAs"]
        N1[Most free tiers]
        N2[Many analytics]
        N3[Consumer email]
        N4[Many SaaS tools]
    end`}
          />

          <hr className="my-12" />

          <h2>The Compliance-First Approach</h2>

          <Mermaid
            chart={`flowchart TB
    subgraph Day1["Build HIPAA-Compliant from Day 1"]
        A[Infrastructure Setup] --> B[Architecture Design]
        B --> C[Development Practices]
        C --> D[Operational Procedures]
    end

    A --> A1[HIPAA-eligible cloud]
    A --> A2[Encryption by default]
    A --> A3[Sign all BAAs]

    B --> B1[Minimize PHI collection]
    B --> B2[Isolate PHI storage]
    B --> B3[Design for audit trails]

    C --> C1[Security code reviews]
    C --> C2[Dependency scanning]
    C --> C3[Penetration testing]

    D --> D1[Incident response plan]
    D --> D2[Risk assessments]
    D --> D3[Employee training]`}
          />

          <blockquote>
            <p>
              "This adds maybe 15-20% to initial development. The ROI is immediate in
              avoided retrofits, accelerated sales, and reduced risk."
            </p>
          </blockquote>

          <hr className="my-12" />

          <h2>The Retrofit Nightmare</h2>

          <p>Building first, complying later:</p>

          <Mermaid
            chart={`graph TD
    A[Typical Discoveries] --> B[PHI scattered across 15 systems]
    A --> C[No audit logging]
    A --> D[Vendors without BAAs]
    A --> E[Missing encryption]
    A --> F[Inadequate access controls]

    B --> G["3-6 months engineering"]
    C --> G
    D --> G
    E --> G
    F --> G

    G --> H["3-5x compliance-first cost"]`}
          />

          <h3>Typical costs:</h3>
          <ul>
            <li>3-6 months of engineering time</li>
            <li>Significant infrastructure changes</li>
            <li>Potential data migration</li>
            <li>Delayed sales during compliance work</li>
            <li>Legal review of past practices</li>
          </ul>

          <blockquote>
            <p>
              "The retrofit typically costs 3-5x what compliance-first would have cost.
              And it delays your market entry while you fix it."
            </p>
          </blockquote>

          <hr className="my-12" />

          <h2>Getting Started</h2>

          <ol>
            <li><strong>Determine if HIPAA applies:</strong> If handling identifiable health data, it probably does</li>
            <li><strong>Choose HIPAA-eligible infrastructure:</strong> AWS, GCP, Azure all offer HIPAA services</li>
            <li><strong>Sign BAAs with all vendors:</strong> Before using any service with PHI</li>
            <li><strong>Implement technical controls:</strong> Encryption, access control, logging from the start</li>
            <li><strong>Document everything:</strong> Policies, procedures, training—HIPAA requires it</li>
            <li><strong>Conduct a risk assessment:</strong> Identify risks and document how you address them</li>
            <li><strong>Train your team:</strong> Everyone handling PHI must understand requirements</li>
          </ol>

          <hr className="my-12" />

          <h2>The Bottom Line</h2>

          <p>
            HIPAA isn't the enemy—uncertainty about HIPAA is. When you understand the
            requirements and build for them from the start, compliance becomes part of
            development rather than an obstacle.
          </p>

          <p>
            Your product is safer, your sales are smoother, and your risk is contained.
          </p>

          <blockquote>
            <p>
              "If you're building health tech, you're building for HIPAA. Embrace it early."
            </p>
          </blockquote>

          <hr className="my-12" />

          <p className="text-sm text-zinc-500 italic">
            StartupVision builds HIPAA-compliant products from day one. Our team has deep
            expertise in healthcare compliance and security requirements. Learn more at{" "}
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
