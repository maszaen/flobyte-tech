import { Link, useParams } from "react-router-dom";
import { NotFoundContent } from "../components/errors";
import { PageHeader, TwoColumn } from "../components/layouts";
import {
  BlogCard,
  CardShell,
  FinalCTA,
  GuideCard,
  RelatedLinkList,
  Section,
  SectionHeader,
} from "../components/sections";
import {
  Alert,
  Badge,
  ButtonLink,
  CodeBlock,
  Divider,
  StatusIndicator,
} from "../components/ui";
import { articles, getArticle } from "../data/blog";
import { guides } from "../data/guides";
import { changelog } from "../data/misc";
import { sitemapGroups } from "../data/navigation";
import { usePageMeta } from "../lib/usePageMeta";

/* ---------------------------------- Resources ---------------------------------- */

const resourceEntries = [
  {
    title: "Blog",
    to: "/blog",
    description: "Practical engineering articles on architecture, process, and delivery.",
    label: "articles",
    count: articles.length,
  },
  {
    title: "Guides",
    to: "/guides",
    description: "Structured guides for planning and running software projects.",
    label: "guides",
    count: guides.length,
  },
  {
    title: "Documentation",
    to: "/docs",
    description: "How we document projects, and what clients receive at handover.",
    label: "sections",
    count: 4,
  },
  {
    title: "Changelog",
    to: "/changelog",
    description: "A dated record of changes to this website.",
    label: "releases",
    count: changelog.length,
  },
  {
    title: "System Status",
    to: "/status",
    description: "Availability overview for this website and related services.",
    label: "components",
    count: 4,
  },
  {
    title: "FAQ",
    to: "/faq",
    description: "Answers about services, process, pricing, and collaboration.",
    label: "questions",
    count: 12,
  },
];

export function ResourcesPage() {
  usePageMeta(
    "Resources",
    "Flobyte resources: engineering blog, practical guides, documentation practices, changelog, and system status."
  );
  return (
    <>
      <PageHeader
        title="Resources"
        lead="Articles, guides, and reference material for teams planning or running software projects."
        crumbs={[{ label: "Resources" }]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceEntries.map((r) => (
            <CardShell key={r.to} to={r.to}>
              <div className="flex items-center justify-between">
                <h2 className="text-[15px] font-semibold">{r.title}</h2>
                <span className="font-mono text-[11px] text-faint">
                  {r.count} {r.label}
                </span>
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">{r.description}</p>
              <p className="mt-2.5 text-[13px] font-medium text-accent">Open →</p>
            </CardShell>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}

/* ------------------------------------ Blog ------------------------------------ */

export function BlogPage() {
  usePageMeta(
    "Blog",
    "Practical engineering articles from Flobyte: architecture decisions, API design, maintenance, mobile sync, and delivery process."
  );
  return (
    <>
      <PageHeader
        title="Blog"
        lead="Short, practical articles on building and maintaining software. Sample editorial content — not company announcements."
        crumbs={[{ label: "Blog" }]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <BlogCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>
    </>
  );
}

export function BlogArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  usePageMeta(
    article ? article.title : "Article not found",
    article ? article.description : "The requested article does not exist."
  );

  if (!article) {
    return (
      <NotFoundContent
        title="Article not found"
        message="This article doesn't exist or was removed. Browse all articles on the Blog page."
      />
    );
  }

  const index = articles.findIndex((a) => a.slug === article.slug);
  const prev = articles[index - 1];
  const next = articles[index + 1];
  const related = articles
    .filter((a) => a.slug !== article.slug && a.tags.some((t) => article.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={article.title}
        lead={article.description}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: article.title }]}
        meta={
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
            <time dateTime={article.date} className="font-mono">
              {article.date}
            </time>
            <span aria-hidden>·</span>
            <span>{article.readingTime} read</span>
            {article.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        }
      />
      <Section>
        <TwoColumn
          main={
            <article className="max-w-2xl">
              <div className="prose-flo">
                {article.body.map((section, i) => (
                  <section key={i}>
                    {section.heading && <h2>{section.heading}</h2>}
                    {section.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
                    {section.list && (
                      <ul>
                        {section.list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.code && (
                      <div className="mb-4">
                        <CodeBlock code={section.code.content} language={section.code.language} />
                      </div>
                    )}
                  </section>
                ))}
              </div>
              <Divider className="my-8" />
              <nav aria-label="Article navigation" className="flex items-center justify-between gap-4">
                {prev ? (
                  <Link to={`/blog/${prev.slug}`} className="text-sm font-medium text-accent hover:underline">
                    ← {prev.title}
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link to={`/blog/${next.slug}`} className="text-right text-sm font-medium text-accent hover:underline">
                    {next.title} →
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            </article>
          }
          aside={
            <>
              {related.length > 0 && (
                <RelatedLinkList
                  title="Related articles"
                  items={related.map((a) => ({
                    label: a.title,
                    to: `/blog/${a.slug}`,
                    description: `${a.date} · ${a.readingTime}`,
                  }))}
                />
              )}
              <RelatedLinkList
                title="More resources"
                items={[
                  { label: "All articles", to: "/blog" },
                  { label: "Guides", to: "/guides" },
                  { label: "Our services", to: "/services" },
                ]}
              />
            </>
          }
        />
      </Section>
    </>
  );
}

/* ------------------------------------ Docs ------------------------------------ */

export function DocsPage() {
  usePageMeta(
    "Documentation",
    "How Flobyte documents client projects: architecture records, runbooks, API references, and handover material."
  );
  return (
    <>
      <PageHeader
        title="Documentation"
        lead="Every project ships with documentation. This page describes what clients receive — and shows the formats we use."
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Documentation" }]}
      />
      <Section>
        <TwoColumn
          main={
            <div className="max-w-2xl space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Architecture decision records",
                    body: "Every significant technical decision is recorded with context, options considered, and consequences — so future maintainers understand why, not just what.",
                  },
                  {
                    title: "Operational runbooks",
                    body: "Step-by-step procedures for deployment, rollback, backup restoration, and common incidents. Written to be followed at 3 a.m.",
                  },
                  {
                    title: "API references",
                    body: "OpenAPI specifications generated from code, kept current by CI. Human-readable guides for authentication and common flows.",
                  },
                  {
                    title: "Handover documentation",
                    body: "Environment setup, access inventory, dependency map, and a prioritized technical-debt register — everything an internal team needs to take over.",
                  },
                ].map((d) => (
                  <div key={d.title} className="rounded-md border border-line bg-canvas p-4">
                    <h2 className="text-sm font-semibold">{d.title}</h2>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{d.body}</p>
                  </div>
                ))}
              </div>
              <div>
                <SectionHeader
                  title="Example: decision record format"
                  description="A sample of the lightweight ADR format used in project repositories."
                />
                <CodeBlock
                  language="markdown"
                  code={`# ADR-012: Use PostgreSQL for the core datastore

Status: Accepted
Date: <project date>

## Context
The system needs transactional integrity across orders
and inventory, with moderate write volume.

## Decision
PostgreSQL, managed by the cloud provider.

## Consequences
+ Mature tooling, easy hiring, strong consistency
- Horizontal write scaling deferred until measured need`}
                />
              </div>
            </div>
          }
          aside={
            <RelatedLinkList
              title="Related"
              items={[
                { label: "Guides", to: "/guides", description: "Planning and process guides." },
                { label: "How We Work", to: "/how-we-work" },
                { label: "Software Maintenance", to: "/services/maintenance" },
              ]}
            />
          }
        />
      </Section>
    </>
  );
}

/* ----------------------------------- Guides ----------------------------------- */

export function GuidesPage() {
  usePageMeta(
    "Guides",
    "Practical guides for planning software projects: scoping, build-vs-buy, handovers, integrations, accessibility, and cloud migration."
  );
  return (
    <>
      <PageHeader
        title="Guides"
        lead="Structured, practical guides for teams planning or running software projects. Illustrative sample content."
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Guides" }]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Full guide content is being prepared. Want one of these topics
          prioritized?{" "}
          <Link to="/contact" className="text-accent hover:underline">
            Let us know
          </Link>
          .
        </p>
      </Section>
      <FinalCTA
        title="Need hands-on help instead?"
        description="Guides get you oriented; a consultation gets you unblocked."
        primary={{ label: "Book a consultation", to: "/contact/consultation" }}
        secondary={{ label: "Browse services", to: "/services" }}
      />
    </>
  );
}

/* ---------------------------------- Changelog ---------------------------------- */

const changelogTone = {
  Added: "success",
  Improved: "accent",
  Fixed: "warning",
  Security: "danger",
} as const;

export function ChangelogPage() {
  usePageMeta(
    "Changelog",
    "A dated record of changes to the Flobyte website: new sections, improvements, fixes, and security updates."
  );
  return (
    <>
      <PageHeader
        title="Changelog"
        lead="A dated record of changes to this website. Sample entries illustrating the format."
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Changelog" }]}
      />
      <Section>
        <div className="max-w-2xl">
          <ol className="relative space-y-6 border-l border-line pl-6">
            {changelog.map((entry) => (
              <li key={entry.version} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-accent"
                />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm font-semibold">v{entry.version}</span>
                  <Badge tone={changelogTone[entry.type]}>{entry.type}</Badge>
                  <time dateTime={entry.date} className="font-mono text-[12px] text-muted">
                    {entry.date}
                  </time>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}

/* ------------------------------------ Status ------------------------------------ */

const statusComponents = [
  { name: "Website", description: "This website and its content" },
  { name: "Contact forms", description: "Contact, quote, and consultation forms" },
  { name: "Email delivery", description: "Inbound and outbound email handling" },
  { name: "Client project hosting", description: "Varies per client environment" },
];

export function StatusPage() {
  usePageMeta(
    "System Status",
    "Availability overview for the Flobyte website and related services."
  );
  return (
    <>
      <PageHeader
        title="System Status"
        lead="Availability overview for this website and related services."
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Status" }]}
      />
      <Section>
        <div className="max-w-2xl space-y-6">
          <Alert tone="warning" title="Static demo display">
            This page is a <strong>static status display</strong>, not a live
            monitoring feed. No real-time health checks are connected yet. To
            make it live, wire it to an uptime-monitoring provider or an
            internal health endpoint.
          </Alert>
          <div className="divide-y divide-line-subtle rounded-md border border-line bg-canvas">
            {statusComponents.map((c) => (
              <div key={c.name} className="flex items-center justify-between gap-4 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{c.name}</p>
                  <p className="text-[12px] text-muted">{c.description}</p>
                </div>
                <StatusIndicator tone="default" label="Not monitored" />
              </div>
            ))}
          </div>
          <p className="text-[13px] text-muted">
            Experiencing an issue with this website?{" "}
            <Link to="/contact" className="text-accent hover:underline">
              Report it
            </Link>
            . Security issues should go through{" "}
            <Link to="/security/disclosure" className="text-accent hover:underline">
              responsible disclosure
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}

/* ------------------------------------ Sitemap ------------------------------------ */

export function SitemapPage() {
  usePageMeta("Sitemap", "A complete map of every page on the Flobyte website.");
  return (
    <>
      <PageHeader
        title="Sitemap"
        lead="Every page on this website, grouped by section."
        crumbs={[{ label: "Sitemap" }]}
      />
      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sitemapGroups.map((group) => (
            <nav key={group.label} aria-label={`Sitemap: ${group.label}`}>
              <h2 className="mb-2.5 border-b border-line-subtle pb-2 text-sm font-semibold">
                {group.label}
              </h2>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-[13px] text-muted hover:text-accent hover:underline">
                      {item.label}
                    </Link>
                    <span className="ml-2 font-mono text-[11px] text-faint">{item.to}</span>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink to="/search" size="sm">
            Search the site instead
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
