import { PageHeader } from "../components/layouts";
import {
  CardShell,
  CheckList,
  FinalCTA,
  ProcessSteps,
  Section,
  SectionHeader,
  TestimonialCard,
} from "../components/sections";
import { Alert, Badge, ButtonLink } from "../components/ui";
import {
  industries,
  partnerEcosystems,
  processSteps,
  techCategories,
  testimonials,
} from "../data/misc";
import { usePageMeta } from "../lib/usePageMeta";

/* ---------------------------------- Approach ---------------------------------- */

const approachPrinciples = [
  {
    title: "Scope in writing, always",
    body: "Every engagement starts with a written scope: what's included, what's explicitly not, and how changes are handled. Ambiguity is where projects go to die.",
  },
  {
    title: "Small iterations, visible progress",
    body: "We ship in one-to-two-week iterations, each ending with a demo of working software. You never wonder what you're paying for.",
  },
  {
    title: "Architecture for the second year",
    body: "We design for the team that maintains the system after launch — clear boundaries, documented decisions, and dependencies chosen for longevity.",
  },
  {
    title: "Honest estimates, updated openly",
    body: "Estimates are ranges with stated assumptions. When reality diverges from the plan, you hear it immediately — with options, not excuses.",
  },
  {
    title: "Quality as a process, not a phase",
    body: "Tests on critical paths, review on every change, CI that builds production artifacts, and monitoring from the first deployment.",
  },
  {
    title: "Exit-ready by default",
    body: "Documentation, repository access, and knowledge transfer are structured so you could leave us at any milestone. We'd rather earn the next phase.",
  },
];

export function ApproachPage() {
  usePageMeta(
    "Our Approach",
    "The principles behind every Flobyte engagement: written scope, short iterations, maintainable architecture, and honest estimates."
  );
  return (
    <>
      <PageHeader
        title="Our Approach"
        lead="Six principles that apply to every engagement, whether it's a two-week audit or a multi-year product partnership."
        crumbs={[{ label: "Our Approach" }]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {approachPrinciples.map((p, i) => (
            <div key={p.title} className="rounded-md border border-line bg-canvas p-5">
              <span className="font-mono text-[12px] font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1.5 text-[15px] font-semibold">{p.title}</h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section bordered tinted>
        <SectionHeader
          title="What this looks like in practice"
          description="The delivery process every project moves through."
          action={<ButtonLink to="/how-we-work" size="sm">How we work</ButtonLink>}
        />
        <ProcessSteps steps={processSteps} />
      </Section>
      <FinalCTA
        title="Sound like a fit?"
        description="The fastest way to find out is a short scoping conversation."
      />
    </>
  );
}

/* --------------------------------- How we work --------------------------------- */

export function HowWeWorkPage() {
  usePageMeta(
    "How We Work",
    "Flobyte's delivery process: discovery, design, iterative build, launch, and support — with weekly demos and written decisions."
  );
  return (
    <>
      <PageHeader
        title="How We Work"
        lead="A predictable process with short feedback loops. Here's what an engagement actually looks like, week by week."
        crumbs={[{ label: "How We Work" }]}
      />
      <Section>
        <SectionHeader title="The five phases" />
        <ProcessSteps steps={processSteps} />
      </Section>
      <Section bordered>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader title="Your weekly rhythm" />
            <CheckList
              columns={1}
              items={[
                "A demo of working software at the end of each iteration",
                "A written status update: done, next, blocked",
                "A shared channel for day-to-day questions",
                "Roughly one hour of decision-maker time needed per week",
                "A living scope document that records every change",
              ]}
            />
          </div>
          <div>
            <SectionHeader title="What we need from you" />
            <CheckList
              columns={1}
              items={[
                "One person empowered to make product decisions",
                "Access to the systems we're integrating with",
                "Honest feedback on demos — early and often",
                "Realistic availability for review sessions",
                "Patience for questions that seem obvious — they rarely are",
              ]}
            />
          </div>
        </div>
      </Section>
      <Section bordered tinted>
        <SectionHeader
          title="Engagement models"
          description="Stated in every proposal before work begins."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              name: "Fixed price",
              fit: "Well-defined scope",
              body: "A fixed fee for a fixed, written scope. Changes go through a lightweight change-request process.",
            },
            {
              name: "Time & materials",
              fit: "Evolving products",
              body: "Transparent weekly billing against a prioritized backlog. You control the throttle.",
            },
            {
              name: "Retainer",
              fit: "Maintenance & support",
              body: "A monthly allocation for maintenance, fixes, and improvements, with agreed response targets.",
            },
          ].map((m) => (
            <div key={m.name} className="rounded-md border border-line bg-canvas p-5">
              <Badge tone="accent">{m.fit}</Badge>
              <h3 className="mt-2 text-[15px] font-semibold">{m.name}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}

/* ---------------------------------- Industries ---------------------------------- */

export function IndustriesPage() {
  usePageMeta(
    "Industries",
    "Sectors where Flobyte builds software: logistics, healthcare, manufacturing, financial services, retail, and utilities."
  );
  return (
    <>
      <PageHeader
        title="Industries"
        lead="Custom software is shaped by domain constraints. These are sectors whose constraints we understand well."
        crumbs={[{ label: "Industries" }]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-md border border-line bg-canvas p-5">
              <h2 className="text-[15px] font-semibold">{ind.name}</h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{ind.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {ind.needs.map((n) => (
                  <Badge key={n}>{n}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Working in a different sector? Domain expertise transfers faster
          than engineering discipline. If your problem involves workflows,
          data, and integrations, we can likely help —{" "}
          <a href="#/contact" className="text-accent hover:underline">
            ask us
          </a>
          .
        </p>
      </Section>
      <FinalCTA />
    </>
  );
}

/* ---------------------------------- Technology ---------------------------------- */

export function TechnologyPage() {
  usePageMeta(
    "Technology Stack",
    "The technologies Flobyte builds with: TypeScript, React, Node.js, .NET, PostgreSQL, AWS, Terraform, and more — chosen for longevity."
  );
  return (
    <>
      <PageHeader
        title="Technology Stack"
        lead="We pick technology for longevity, hiring reality, and operational simplicity — not for conference talks."
        crumbs={[{ label: "Technology" }]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat) => (
            <div key={cat.name} className="rounded-md border border-line bg-canvas p-5">
              <h2 className="text-[15px] font-semibold">{cat.name}</h2>
              <p className="mt-1 text-[13px] text-muted">{cat.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge key={item} mono>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section bordered tinted>
        <SectionHeader title="How we choose technology" />
        <div className="max-w-2xl">
          <CheckList
            columns={1}
            items={[
              "Will this still be maintained — and hireable — in five years?",
              "Can the client's own team realistically operate it?",
              "Does it reduce total system complexity, or move it around?",
              "Is there a boring, proven option that does 90% of the job?",
              "What does the migration path away from it look like?",
            ]}
          />
        </div>
      </Section>
      <FinalCTA
        title="Have a stack constraint?"
        description="We regularly work within existing technology decisions. Tell us yours."
      />
    </>
  );
}

/* ----------------------------------- Partners ----------------------------------- */

export function PartnersPage() {
  usePageMeta(
    "Partners",
    "Technology ecosystems Flobyte works within: cloud platforms, payment providers, business systems, and developer platforms."
  );
  return (
    <>
      <PageHeader
        title="Partners & Ecosystems"
        lead="The platforms and ecosystems we build on and integrate with every week."
        crumbs={[{ label: "Partners" }]}
      />
      <Section>
        <Alert tone="accent" className="mb-6" title="A note on terminology">
          Listing a technology here indicates hands-on engineering experience
          with it — not a formal partnership, reseller status, or
          certification, unless explicitly stated.
        </Alert>
        <div className="grid gap-4 sm:grid-cols-2">
          {partnerEcosystems.map((eco) => (
            <div key={eco.name} className="rounded-md border border-line bg-canvas p-5">
              <h2 className="text-[15px] font-semibold">{eco.name}</h2>
              <p className="mt-1 text-[13px] text-muted">{eco.note}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {eco.items.map((item) => (
                  <Badge key={item} mono>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section bordered tinted>
        <SectionHeader
          title="Interested in partnering with Flobyte?"
          description="Agencies, consultancies, and product teams occasionally need extra engineering capacity. We're open to white-label and subcontract arrangements."
        />
        <ButtonLink to="/contact" variant="primary">
          Start a conversation
        </ButtonLink>
      </Section>
    </>
  );
}

/* --------------------------------- Testimonials --------------------------------- */

export function TestimonialsPage() {
  usePageMeta(
    "Testimonials",
    "What working with Flobyte is like — illustrative feedback examples, with real references available on request."
  );
  return (
    <>
      <PageHeader
        title="Testimonials"
        lead="What clients value about working with us — and how to verify it."
        crumbs={[{ label: "Testimonials" }]}
      />
      <Section>
        <Alert tone="accent" className="mb-6" title="Illustrative examples">
          The quotes below are illustrative examples representing the themes
          of typical client feedback — they are <strong>not</strong> quotes
          from real customers. Real, verifiable references are shared
          directly during scoping conversations.
        </Alert>
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.quote} testimonial={t} />
          ))}
        </div>
      </Section>
      <FinalCTA
        title="Want to speak to a real reference?"
        description="Ask during your scoping conversation — we'll connect you directly."
        primary={{ label: "Book a consultation", to: "/contact/consultation" }}
        secondary={{ label: "Contact us", to: "/contact" }}
      />
    </>
  );
}

export { CardShell };
