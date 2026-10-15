import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { legalNav } from "../data/navigation";
import type { LegalDoc } from "../lib/types";
import { cn } from "../utils/cn";
import { Alert, Badge, Container, Divider } from "./ui";

/* -------------------------------- Breadcrumbs -------------------------------- */

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="flex flex-wrap items-center gap-1 text-[13px] text-muted">
        <li>
          <Link to="/" className="hover:text-accent hover:underline">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden className="text-faint">/</span>
            {crumb.to ? (
              <Link to={crumb.to} className="hover:text-accent hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-fg">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* -------------------------------- Page header -------------------------------- */

export function PageHeader({
  title,
  lead,
  crumbs,
  meta,
  actions,
}: {
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  meta?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="border-b border-line bg-surface">
      <Container className="py-8 md:py-10">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight md:text-[28px]">
              {title}
            </h1>
            {lead && <p className="mt-2 text-[15px] leading-relaxed text-muted">{lead}</p>}
            {meta && <div className="mt-3">{meta}</div>}
          </div>
          {actions && <div className="flex shrink-0 gap-2">{actions}</div>}
        </div>
      </Container>
    </div>
  );
}

/* ------------------------------ Section header ------------------------------ */

export function SectionHeader({
  title,
  description,
  action,
  as: Tag = "h2",
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  as?: "h2" | "h3";
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <Tag className="text-lg font-semibold tracking-tight">{title}</Tag>
        {description && <p className="mt-1 max-w-xl text-sm text-muted">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Section({
  children,
  className,
  bordered = false,
  tinted = false,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  tinted?: boolean;
}) {
  return (
    <section
      className={cn(
        "py-10 md:py-12",
        bordered && "border-t border-line-subtle",
        tinted && "bg-surface",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

/* ------------------------------ Legal document ------------------------------ */

export function LegalDocumentLayout({
  doc,
  crumbRoot = { label: "Legal" },
}: {
  doc: Pick<LegalDoc, "title" | "description" | "effectiveDate" | "lastUpdated" | "sections">;
  crumbRoot?: Crumb;
}) {
  return (
    <>
      <PageHeader
        title={doc.title}
        lead={doc.description}
        crumbs={[crumbRoot, { label: doc.title }]}
        meta={
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
            {doc.effectiveDate && <Badge mono>Effective: {doc.effectiveDate}</Badge>}
            {doc.lastUpdated && <Badge mono>Last updated: {doc.lastUpdated}</Badge>}
          </div>
        }
      />
      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)_200px]">
          {/* Table of contents */}
          <aside className="order-2 lg:order-1">
            <nav
              aria-label="Table of contents"
              className="lg:sticky lg:top-20 rounded-md border border-line bg-surface p-4"
            >
              <h2 className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-muted">
                On this page
              </h2>
              <ul className="space-y-1.5">
                {doc.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-[13px] text-muted hover:text-accent hover:underline"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Body */}
          <div className="order-1 lg:order-2 min-w-0">
            {(doc.lastUpdated?.startsWith("TODO") || doc.effectiveDate?.startsWith("TODO")) && (
              <Alert tone="warning" title="Draft document" className="mb-6">
                This document contains configuration placeholders (shown in
                brackets). Replace them with verified business information
                before production use.
              </Alert>
            )}
            <div className="prose-flo">
              {doc.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                  {section.list && (
                    <ul>
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>

          {/* Related legal links */}
          <aside className="order-3">
            <div className="lg:sticky lg:top-20">
              <h2 className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-muted">
                Legal & trust
              </h2>
              <ul className="space-y-1.5">
                {legalNav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block text-[13px] text-muted hover:text-accent hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}

/* ------------------------------ Two-column page ------------------------------ */

export function TwoColumn({
  main,
  aside,
  className,
}: {
  main: ReactNode;
  aside: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]", className)}>
      <div className="min-w-0">{main}</div>
      <aside className="space-y-6">{aside}</aside>
    </div>
  );
}

export { Divider };
