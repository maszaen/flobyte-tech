import { Link } from "react-router-dom";
import {
  CompactHero,
  FAQAccordion,
  FinalCTA,
  ProcessSteps,
  ProjectGrid,
  Section,
  SectionHeader,
  ServiceGrid,
} from "../components/sections";
import { Badge, ButtonLink } from "../components/ui";
import { faqs } from "../data/faqs";
import { processSteps, techCategories } from "../data/misc";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { usePageMeta } from "../lib/usePageMeta";

export function HomePage() {
  usePageMeta(
    "Flobyte — Software built for real-world needs",
    "Flobyte designs and develops reliable digital products, applications, and systems for growing businesses: web, mobile, backend, integration, and cloud."
  );

  return (
    <>
      <CompactHero
        eyebrow="Software development & technology services"
        title="Software built for real-world needs."
        lead="Flobyte designs and develops reliable digital products, applications, and systems for growing businesses — and keeps them running after launch."
        primary={{ label: "Request a quote", to: "/contact/quote" }}
        secondary={{ label: "Explore services", to: "/services" }}
      />

      {/* Introduction */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold tracking-tight">
              A development partner, not just a vendor
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              We build custom software end to end — from the first scoping
              workshop to a monitored production system. Web applications,
              mobile apps, backend services, integrations, and the cloud
              infrastructure underneath. We also take over and stabilize
              systems other teams built.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Our bias is toward boring, proven technology, short feedback
              loops, and software your own team can maintain. We'd rather
              talk you out of a feature than bill you for one you don't need.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-3 self-start sm:grid-cols-3 lg:grid-cols-1">
            {[
              { k: "End-to-end delivery", v: "Scoping, design, build, launch, and ongoing support under one roof." },
              { k: "Takeovers welcome", v: "We audit, stabilize, and extend inherited codebases." },
              { k: "You own the code", v: "Full IP assignment and repository history on payment." },
            ].map((item) => (
              <div key={item.k} className="rounded-md border border-line bg-surface p-4">
                <dt className="text-sm font-semibold">{item.k}</dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-muted">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Services */}
      <Section bordered>
        <SectionHeader
          title="What we build"
          description="Eight focused services covering the full lifecycle of custom software."
          action={
            <ButtonLink to="/services" size="sm">
              All services
            </ButtonLink>
          }
        />
        <ServiceGrid services={services} compact columns={4} />
      </Section>

      {/* Selected projects */}
      <Section bordered tinted>
        <SectionHeader
          title="Selected work"
          description="Illustrative case studies showing the kind of systems we deliver."
          action={
            <ButtonLink to="/projects" size="sm">
              View portfolio
            </ButtonLink>
          }
        />
        <ProjectGrid projects={projects.slice(0, 3)} />
      </Section>

      {/* Process */}
      <Section bordered>
        <SectionHeader
          title="How a project runs"
          description="Five phases, short iterations, and working software from the first weeks."
          action={
            <ButtonLink to="/how-we-work" size="sm">
              How we work
            </ButtonLink>
          }
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* Technology */}
      <Section bordered>
        <SectionHeader
          title="Technology we work with"
          description="Proven tools chosen for longevity and hiring reality — not novelty."
          action={
            <ButtonLink to="/technology" size="sm">
              Full stack
            </ButtonLink>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat) => (
            <div key={cat.name} className="rounded-md border border-line bg-canvas p-4">
              <h3 className="text-sm font-semibold">{cat.name}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
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

      {/* FAQ */}
      <Section bordered>
        <SectionHeader
          title="Common questions"
          action={
            <ButtonLink to="/faq" size="sm">
              All questions
            </ButtonLink>
          }
        />
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs.slice(0, 4)} />
          <p className="mt-3 text-sm text-muted">
            More about pricing, timelines, and collaboration in the{" "}
            <Link to="/faq" className="text-accent hover:underline">
              full FAQ
            </Link>
            .
          </p>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
