import { useId, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Article, FAQ, Guide, Project, Service, Testimonial } from "../lib/types";
import { cn } from "../utils/cn";
import { Section, SectionHeader } from "./layouts";
import { Badge, ButtonLink, Container, ImagePlaceholder } from "./ui";

/* ---------------------------------- Heroes ---------------------------------- */

export function CompactHero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <div className="border-b border-line bg-surface">
      <Container className="py-12 md:py-16">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-[12px] font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{lead}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <ButtonLink to={primary.to} variant="primary">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink to={secondary.to} variant="default">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

/* ---------------------------------- Cards ---------------------------------- */

export function CardShell({
  to,
  children,
  className,
}: {
  to?: string;
  children: ReactNode;
  className?: string;
}) {
  const base = cn(
    "block h-full rounded-md border border-line bg-canvas p-4 transition-colors duration-(--transition-fast)",
    to && "hover:border-accent",
    className
  );
  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }
  return <div className={base}>{children}</div>;
}

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  return (
    <CardShell to={`/services/${service.slug}`}>
      <p className="font-mono text-[11px] uppercase tracking-wide text-faint">
        services/{service.slug}
      </p>
      <h3 className="mt-1.5 text-[15px] font-semibold text-fg">{service.name}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-muted">
        {compact ? service.tagline : service.description}
      </p>
      <p className="mt-2.5 text-[13px] font-medium text-accent">Learn more →</p>
    </CardShell>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <CardShell to={`/projects/${project.slug}`}>
      <ImagePlaceholder
        path={`/assets/projects/${project.slug}.jpg`}
        alt={`${project.name} preview image placeholder`}
        ratio="16/9"
        className="mb-3"
      />
      <div className="flex items-center gap-2">
        <Badge tone="accent">{project.sector}</Badge>
        <Badge>Illustrative sample</Badge>
      </div>
      <h3 className="mt-2 text-[15px] font-semibold text-fg">{project.name}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-muted">{project.summary}</p>
      <p className="mt-2 font-mono text-[11px] text-faint">{project.stack.slice(0, 4).join(" · ")}</p>
    </CardShell>
  );
}

export function BlogCard({ article }: { article: Article }) {
  return (
    <CardShell to={`/blog/${article.slug}`}>
      <div className="flex flex-wrap items-center gap-2 text-[12px] text-muted">
        <time dateTime={article.date} className="font-mono">
          {article.date}
        </time>
        <span aria-hidden>·</span>
        <span>{article.readingTime} read</span>
      </div>
      <h3 className="mt-1.5 text-[15px] font-semibold text-fg">{article.title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-muted">{article.description}</p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {article.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </CardShell>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <CardShell>
      <div className="flex items-center justify-between gap-2">
        <Badge tone="accent">{guide.level}</Badge>
        <span className="font-mono text-[11px] text-faint">guide</span>
      </div>
      <h3 className="mt-2 text-[15px] font-semibold text-fg">{guide.title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-muted">{guide.description}</p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {guide.topics.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </CardShell>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-md border border-line bg-canvas p-4">
      <blockquote className="flex-1 text-sm leading-relaxed text-fg">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-3 border-t border-line-subtle pt-3">
        <p className="text-[13px] font-semibold">{testimonial.author}</p>
        <p className="text-[12px] text-muted">
          {testimonial.role} · {testimonial.context}
        </p>
      </figcaption>
    </figure>
  );
}

/* ---------------------------------- Grids ---------------------------------- */

export function ServiceGrid({
  services,
  compact = false,
  columns = 4,
}: {
  services: Service[];
  compact?: boolean;
  columns?: 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      )}
    >
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} compact={compact} />
      ))}
    </div>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}

/* ------------------------------- Process steps ------------------------------- */

export function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step.title} className="rounded-md border border-line bg-canvas p-4">
          <span className="font-mono text-[12px] font-semibold text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-1.5 text-sm font-semibold">{step.title}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

/* --------------------------------- FAQ --------------------------------- */

export function FAQItem({ faq, defaultOpen = false }: { faq: FAQ; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className="border-b border-line-subtle last:border-b-0">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-sm font-semibold text-fg hover:bg-surface"
        >
          {faq.question}
          <svg
            aria-hidden
            className={cn("h-3.5 w-3.5 shrink-0 text-muted transition-transform", open && "rotate-180")}
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </button>
      </h3>
      {open && (
        <div id={`${id}-panel`} className="px-4 pb-4 text-sm leading-relaxed text-muted">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export function FAQAccordion({ faqs, showCategory = false }: { faqs: FAQ[]; showCategory?: boolean }) {
  if (!showCategory) {
    return (
      <div className="rounded-md border border-line bg-canvas">
        {faqs.map((f) => (
          <FAQItem key={f.question} faq={f} />
        ))}
      </div>
    );
  }
  const categories = [...new Set(faqs.map((f) => f.category))];
  return (
    <div className="space-y-6">
      {categories.map((cat) => (
        <div key={cat}>
          <h2 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-muted">
            {cat}
          </h2>
          <div className="rounded-md border border-line bg-canvas">
            {faqs
              .filter((f) => f.category === cat)
              .map((f) => (
                <FAQItem key={f.question} faq={f} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------- Final CTA --------------------------------- */

export function FinalCTA({
  title = "Have a project in mind?",
  description = "Tell us what you're trying to build or fix. We'll respond with honest questions, not a sales pitch.",
  primary = { label: "Request a quote", to: "/contact/quote" },
  secondary = { label: "Book a consultation", to: "/contact/consultation" },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <Section bordered>
      <div className="rounded-md border border-line bg-surface px-6 py-8 md:flex md:items-center md:justify-between md:px-8">
        <div className="max-w-xl">
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
        <div className="mt-4 flex shrink-0 gap-2.5 md:mt-0">
          <ButtonLink to={primary.to} variant="primary">
            {primary.label}
          </ButtonLink>
          <ButtonLink to={secondary.to} variant="default">
            {secondary.label}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Related links ------------------------------- */

export function RelatedLinkList({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string; description?: string }[];
}) {
  return (
    <div className="rounded-md border border-line bg-canvas p-4">
      <h2 className="mb-2.5 text-[13px] font-semibold uppercase tracking-wide text-muted">
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.to + item.label}>
            <Link to={item.to} className="text-sm font-medium text-accent hover:underline">
              {item.label}
            </Link>
            {item.description && <p className="text-[12px] text-muted">{item.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------ Definition list ------------------------------ */

export function KeyValueList({ items }: { items: { key: string; value: ReactNode }[] }) {
  return (
    <dl className="divide-y divide-line-subtle rounded-md border border-line bg-canvas">
      {items.map((item) => (
        <div key={item.key} className="grid grid-cols-[120px_1fr] gap-3 px-4 py-2.5 text-sm">
          <dt className="font-medium text-muted">{item.key}</dt>
          <dd className="min-w-0 text-fg">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------ Checklist block ------------------------------ */

export function CheckList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={cn("grid gap-x-6 gap-y-2", columns === 2 && "sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-fg">
          <svg
            aria-hidden
            className="mt-0.5 h-4 w-4 shrink-0 text-success"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

export { Section, SectionHeader };
