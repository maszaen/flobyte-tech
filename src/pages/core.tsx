import { Link } from "react-router-dom";
import { PageHeader, TwoColumn } from "../components/layouts";
import { ContactForm } from "../components/forms";
import {
  CardShell,
  CheckList,
  FAQAccordion,
  FinalCTA,
  ProjectGrid,
  RelatedLinkList,
  Section,
  SectionHeader,
  ServiceGrid,
} from "../components/sections";
import { Alert, Badge, ButtonLink, ImagePlaceholder } from "../components/ui";
import { careers } from "../data/careers";
import { faqs } from "../data/faqs";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { siteConfig } from "../lib/config";
import { usePageMeta } from "../lib/usePageMeta";

/* ----------------------------------- About ----------------------------------- */

export function AboutPage() {
  usePageMeta(
    "About Us",
    "Flobyte is a software development company building web, mobile, and backend systems for growing businesses."
  );
  return (
    <>
      <PageHeader
        title="About Flobyte"
        lead="A software development company focused on building systems that keep working after the launch party ends."
        crumbs={[{ label: "About" }]}
      />
      <Section>
        <TwoColumn
          main={
            <div className="prose-flo max-w-2xl">
              <h2>What we do</h2>
              <p>
                Flobyte designs and develops custom software: web applications,
                mobile apps, backend systems and APIs, system integrations, and
                the cloud infrastructure that supports them. We work with
                businesses that have outgrown spreadsheets, off-the-shelf
                tools, or a previous codebase — and need software shaped around
                how they actually operate.
              </p>
              <h2>Our mission</h2>
              <p>
                Most software projects don't fail at launch; they fail slowly,
                through unmaintainable code, undocumented decisions, and
                vendors who disappear. Our mission is to build software that
                stays healthy: understandable by the next engineer, documented
                for the next team, and honest about its own tradeoffs.
              </p>
              <h2>Working principles</h2>
              <ul>
                <li>
                  <strong>Working software over reports.</strong> Every
                  iteration ends in a demo of something that runs.
                </li>
                <li>
                  <strong>Boring technology, deliberately.</strong> We choose
                  stacks for longevity and hiring reality, not novelty.
                </li>
                <li>
                  <strong>Written scope, written changes.</strong> Decisions
                  live in documents, not in someone's memory.
                </li>
                <li>
                  <strong>You own the result.</strong> Code, designs, and full
                  repository history are assigned to you.
                </li>
                <li>
                  <strong>Say no early.</strong> If a feature, deadline, or
                  approach is a bad idea, you'll hear it before it costs money.
                </li>
              </ul>
              <h2>How we think about quality</h2>
              <p>
                Quality isn't a final QA phase — it's automated tests on
                critical paths, code review on every change, monitoring from
                the first deployment, and a production build that runs in CI
                before anything ships. We document systems assuming someone
                else will maintain them, because eventually someone else will.
              </p>
            </div>
          }
          aside={
            <>
              <ImagePlaceholder
                path="/assets/company/team.jpg"
                alt="Flobyte team photo placeholder"
                ratio="4/3"
              />
              <RelatedLinkList
                title="Learn more"
                items={[
                  { label: "Our Approach", to: "/approach", description: "The principles behind every engagement." },
                  { label: "How We Work", to: "/how-we-work", description: "Process, cadence, and communication." },
                  { label: "Technology Stack", to: "/technology", description: "What we build with, and why." },
                  { label: "Careers", to: "/careers", description: "Open roles at Flobyte." },
                ]}
              />
            </>
          }
        />
      </Section>
      <FinalCTA
        title="Want to work with us?"
        description="Start with a short conversation about what you're building."
      />
    </>
  );
}

/* ---------------------------------- Services ---------------------------------- */

export function ServicesPage() {
  usePageMeta(
    "Services",
    "Custom software development services: web, mobile, backend & API, UI/UX design, cloud & DevOps, integration, and maintenance."
  );
  return (
    <>
      <PageHeader
        title="Services"
        lead="Eight focused services covering the full lifecycle of custom software — from first design workshop to long-term maintenance."
        crumbs={[{ label: "Services" }]}
        actions={<ButtonLink to="/contact/quote" variant="primary">Request a quote</ButtonLink>}
      />
      <Section>
        <ServiceGrid services={services} columns={4} />
      </Section>
      <Section bordered tinted>
        <SectionHeader
          title="Not sure which service fits?"
          description="Most engagements combine several services. Describe the problem and we'll propose the right shape."
        />
        <div className="flex flex-wrap gap-2.5">
          <ButtonLink to="/contact/consultation" variant="primary">
            Book a consultation
          </ButtonLink>
          <ButtonLink to="/how-we-work">See how we work</ButtonLink>
        </div>
      </Section>
    </>
  );
}

/* ---------------------------------- Projects ---------------------------------- */

export function ProjectsPage() {
  usePageMeta(
    "Projects & Portfolio",
    "Illustrative case studies showing the kind of software systems Flobyte designs and delivers."
  );
  return (
    <>
      <PageHeader
        title="Projects & Portfolio"
        lead="Case studies showing the kind of systems we design and deliver."
        crumbs={[{ label: "Projects" }]}
      />
      <Section>
        <Alert tone="accent" title="About these case studies" className="mb-6">
          The projects below are <strong>illustrative samples</strong> that
          demonstrate typical engagements and outcomes. They are not
          presented as real client work. Real references are available on
          request during a scoping conversation.
        </Alert>
        <ProjectGrid projects={projects} />
      </Section>
      <FinalCTA
        title="Have a similar problem?"
        description="Tell us about your system — we'll tell you honestly whether and how we'd approach it."
      />
    </>
  );
}

/* ----------------------------------- Contact ----------------------------------- */

export function ContactPage() {
  usePageMeta(
    "Contact",
    "Get in touch with Flobyte about a software project, maintenance takeover, or technical question."
  );
  return (
    <>
      <PageHeader
        title="Contact"
        lead="Tell us what you're trying to build or fix. We usually reply within a couple of business days."
        crumbs={[{ label: "Contact" }]}
      />
      <Section>
        <TwoColumn
          main={
            <div className="max-w-xl">
              <ContactForm />
            </div>
          }
          aside={
            <>
              <div className="rounded-md border border-line bg-surface p-4">
                <h2 className="text-sm font-semibold">Direct contact</h2>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  Prefer email? Reach us at{" "}
                  <span className="font-mono text-[12px] text-fg">
                    {siteConfig.contactEmail}
                  </span>
                  .
                </p>
                <p className="mt-2 text-[12px] text-faint">
                  Contact details shown in brackets are configuration
                  placeholders pending real business information.
                </p>
              </div>
              <RelatedLinkList
                title="Looking for something specific?"
                items={[
                  { label: "Request a Quote", to: "/contact/quote", description: "Structured form for project estimates." },
                  { label: "Book a Consultation", to: "/contact/consultation", description: "A short call about your situation." },
                  { label: "Careers", to: "/careers", description: "Applying for a role? Start here." },
                  { label: "Responsible Disclosure", to: "/security/disclosure", description: "Reporting a security issue." },
                ]}
              />
              <div className="rounded-md border border-line bg-canvas p-4">
                <h2 className="text-sm font-semibold">What happens next?</h2>
                <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-[13px] text-muted">
                  <li>We read your message and reply with questions.</li>
                  <li>A short call to understand scope and constraints.</li>
                  <li>A written proposal — approach, team, estimate.</li>
                </ol>
              </div>
            </>
          }
        />
      </Section>
    </>
  );
}

/* ----------------------------------- Careers ----------------------------------- */

export function CareersPage() {
  usePageMeta(
    "Careers",
    "Open roles at Flobyte — engineering, design, and platform positions for people who like building maintainable software."
  );
  return (
    <>
      <PageHeader
        title="Careers"
        lead="We hire people who like shipping maintainable software and saying what they actually think."
        crumbs={[{ label: "Careers" }]}
      />
      <Section>
        <Alert tone="accent" className="mb-6" title="Sample listings">
          The roles below are illustrative sample listings demonstrating the
          careers section. Replace them with real openings before publishing.
        </Alert>
        <SectionHeader title="Open positions" description={`${careers.length} open roles`} />
        <div className="grid gap-4 sm:grid-cols-2">
          {careers.map((role) => (
            <CardShell key={role.slug} to={`/careers/${role.slug}`}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="accent">{role.team}</Badge>
                <Badge>{role.type}</Badge>
                <Badge>{role.location}</Badge>
              </div>
              <h3 className="mt-2 text-[15px] font-semibold">{role.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">{role.summary}</p>
              <p className="mt-2.5 text-[13px] font-medium text-accent">View role →</p>
            </CardShell>
          ))}
        </div>
      </Section>
      <Section bordered tinted>
        <SectionHeader title="How we work together" />
        <CheckList
          items={[
            "Remote-first, async-friendly collaboration",
            "Written decisions and documented systems",
            "Code review as mentorship, not gatekeeping",
            "Sustainable pace — no heroics culture",
            "Direct client contact for every engineer",
            "Time for learning built into the schedule",
          ]}
        />
      </Section>
      <FinalCTA
        title="Don't see your role?"
        description="If you think you'd make us better, write to us anyway."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "About Flobyte", to: "/about" }}
      />
    </>
  );
}

/* ------------------------------------- FAQ ------------------------------------- */

export function FAQPage() {
  usePageMeta(
    "Frequently Asked Questions",
    "Answers about Flobyte's services, process, timelines, pricing, communication, maintenance, and collaboration."
  );
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        lead="Straight answers about services, process, pricing, and collaboration."
        crumbs={[{ label: "FAQ" }]}
      />
      <Section>
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} showCategory />
          <p className="mt-6 text-sm text-muted">
            Didn't find your question?{" "}
            <Link to="/contact" className="text-accent hover:underline">
              Ask us directly
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
