import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { NotFoundContent, ServerErrorContent } from "../components/errors";
import { ConsultationForm, QuoteRequestForm } from "../components/forms";
import { PageHeader, TwoColumn } from "../components/layouts";
import { RelatedLinkList, Section } from "../components/sections";
import {
  Alert,
  Badge,
  Button,
  ButtonLink,
  Container,
  EmptyState,
  Switch,
} from "../components/ui";
import { useConsent } from "../lib/consent";
import { searchContent } from "../lib/search";
import { usePageMeta } from "../lib/usePageMeta";

/* --------------------------------- Request quote --------------------------------- */

export function QuotePage() {
  usePageMeta(
    "Request a Quote",
    "Describe your software project and receive a written proposal with approach, team, and estimate."
  );
  return (
    <>
      <PageHeader
        title="Request a Quote"
        lead="The more context you give, the more accurate the first estimate. Rough ideas are fine — we'll refine together."
        crumbs={[{ label: "Contact", to: "/contact" }, { label: "Request a Quote" }]}
      />
      <Section>
        <TwoColumn
          main={
            <div className="max-w-xl">
              <QuoteRequestForm />
            </div>
          }
          aside={
            <>
              <div className="rounded-md border border-line bg-surface p-4">
                <h2 className="text-sm font-semibold">What you'll receive</h2>
                <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[13px] text-muted">
                  <li>Clarifying questions within a few business days</li>
                  <li>A short scoping call if the project is a potential fit</li>
                  <li>A written proposal: approach, team, estimate range</li>
                </ul>
                <p className="mt-3 text-[12px] text-faint">
                  No obligation, and no automated follow-up sequences.
                </p>
              </div>
              <RelatedLinkList
                title="Before you write"
                items={[
                  { label: "FAQ: pricing & timelines", to: "/faq" },
                  { label: "How We Work", to: "/how-we-work" },
                  { label: "Guide: scoping a project", to: "/guides" },
                ]}
              />
            </>
          }
        />
      </Section>
    </>
  );
}

/* -------------------------------- Consultation -------------------------------- */

export function ConsultationPage() {
  usePageMeta(
    "Book a Consultation",
    "Request a short, free consultation call with a Flobyte engineer about your project or system."
  );
  return (
    <>
      <PageHeader
        title="Book a Consultation"
        lead="A short call with an engineer — not a salesperson — about your project, system, or technical decision."
        crumbs={[{ label: "Contact", to: "/contact" }, { label: "Book a Consultation" }]}
      />
      <Section>
        <TwoColumn
          main={
            <div className="max-w-xl">
              <ConsultationForm />
            </div>
          }
          aside={
            <>
              <div className="rounded-md border border-line bg-surface p-4">
                <h2 className="text-sm font-semibold">How it works</h2>
                <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-[13px] text-muted">
                  <li>Submit the request with a short context summary.</li>
                  <li>We propose concrete times by email.</li>
                  <li>30–45 minutes with the right engineer for your topic.</li>
                </ol>
                <p className="mt-3 text-[12px] text-faint">
                  Free of charge. If we're not the right fit, we'll say so and
                  point you somewhere better.
                </p>
              </div>
              <RelatedLinkList
                title="Prefer writing?"
                items={[
                  { label: "Request a Quote", to: "/contact/quote" },
                  { label: "General contact", to: "/contact" },
                ]}
              />
            </>
          }
        />
      </Section>
    </>
  );
}

/* ---------------------------------- Thank you ---------------------------------- */

const formLabels: Record<string, string> = {
  contact: "message",
  quote: "quote request",
  consultation: "consultation request",
};

export function ThankYouPage() {
  const location = useLocation();
  const state = (location.state ?? {}) as { form?: string; demo?: boolean };
  const label = formLabels[state.form ?? ""] ?? "submission";

  usePageMeta("Thank You", "Your submission has been received.");

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-lg text-center">
        <div
          aria-hidden
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-success/40 bg-success-subtle text-success"
        >
          <svg className="h-6 w-6" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
        </div>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Thank you</h1>
        {state.demo ? (
          <Alert tone="warning" role="status" className="mt-4 text-left" title="Demo mode — nothing was sent">
            Your {label} was validated locally, but this demo environment has
            no form backend configured, so <strong>it was not transmitted
            anywhere</strong>. In production, this page confirms successful
            delivery and outlines next steps.
          </Alert>
        ) : (
          <p className="mt-2 text-[15px] text-muted" role="status">
            Your {label} has been received. We typically reply within a couple
            of business days.
          </p>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          <ButtonLink to="/" variant="primary">
            Back to Home
          </ButtonLink>
          <ButtonLink to="/blog">Read the blog</ButtonLink>
        </div>
      </div>
    </Container>
  );
}

/* ------------------------------------ Search ------------------------------------ */

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);

  useEffect(() => {
    const t = setTimeout(() => {
      setParams(query ? { q: query } : {}, { replace: true });
    }, 250);
    return () => clearTimeout(t);
  }, [query, setParams]);

  const results = useMemo(() => searchContent(query), [query]);

  usePageMeta("Search", "Search services, projects, articles, guides, and pages on the Flobyte website.");

  return (
    <>
      <PageHeader
        title="Search"
        lead="Search across services, projects, articles, guides, roles, and pages."
        crumbs={[{ label: "Search" }]}
      />
      <Section>
        <div className="max-w-2xl">
          <label htmlFor="site-search" className="mb-1.5 block text-sm font-semibold">
            Search query
          </label>
          <input
            id="site-search"
            type="search"
            autoFocus
            placeholder="e.g. API, maintenance, mobile, privacy…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-10 w-full rounded-md border border-line bg-canvas px-3 text-sm placeholder:text-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          <p className="mt-2 text-[13px] text-muted" role="status" aria-live="polite">
            {query.trim().length < 2
              ? "Type at least two characters to search."
              : `${results.length} result${results.length === 1 ? "" : "s"} for “${query.trim()}”`}
          </p>

          <div className="mt-6">
            {query.trim().length >= 2 && results.length === 0 && (
              <EmptyState
                title="No results found"
                description="Try different keywords, or browse the full site via the sitemap."
                action={
                  <>
                    <ButtonLink to="/sitemap" size="sm">
                      Open sitemap
                    </ButtonLink>
                    <ButtonLink to="/services" size="sm">
                      Browse services
                    </ButtonLink>
                  </>
                }
              />
            )}
            {results.length > 0 && (
              <ul className="divide-y divide-line-subtle rounded-md border border-line bg-canvas">
                {results.map((r) => (
                  <li key={r.to + r.title}>
                    <Link to={r.to} className="block px-4 py-3 hover:bg-surface">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-accent">{r.title}</span>
                        <Badge>{r.type}</Badge>
                      </div>
                      <p className="mt-0.5 text-[13px] text-muted">{r.description}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-faint">{r.to}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

/* ------------------------------- Error pages ------------------------------- */

export function NotFoundPage() {
  usePageMeta("Page Not Found", "The requested page does not exist on the Flobyte website.");
  return <NotFoundContent />;
}

export function ServerErrorPage() {
  usePageMeta("Server Error", "An unexpected error occurred.");
  return <ServerErrorContent />;
}

/* -------------------------------- Maintenance -------------------------------- */

export function MaintenancePage() {
  usePageMeta("Maintenance", "The Flobyte website is temporarily unavailable for maintenance.");
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-[13px] font-semibold uppercase tracking-widest text-warning">
          Scheduled maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          We'll be back shortly
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          This website is temporarily unavailable while we perform
          maintenance. We don't publish restoration estimates we can't
          guarantee — please check back soon.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          <Button variant="primary" onClick={() => window.location.reload()}>
            Check again
          </Button>
          <ButtonLink to="/status">System status</ButtonLink>
        </div>
        <p className="mt-6 text-[12px] text-faint">
          (This page is a preview of the maintenance state at{" "}
          <code className="font-mono">/maintenance</code>; the rest of the
          site remains available.)
        </p>
      </div>
    </Container>
  );
}

/* ----------------------------- Cookie preferences ----------------------------- */

export function CookiePreferencesPage() {
  const { consent, update } = useConsent();
  const [functional, setFunctional] = useState(consent.functional);
  const [saved, setSaved] = useState(false);

  useEffect(() => setFunctional(consent.functional), [consent.functional]);

  usePageMeta(
    "Cookie Preferences",
    "Manage the consent choices for client-side storage on the Flobyte website."
  );

  const save = (nextFunctional: boolean) => {
    update({ functional: nextFunctional, analytics: false });
    setSaved(true);
  };

  return (
    <>
      <PageHeader
        title="Cookie Preferences"
        lead="This site is deliberately light on storage. Review and change your choices below at any time."
        crumbs={[{ label: "Cookie Preferences" }]}
      />
      <Section>
        <div className="max-w-2xl space-y-5">
          {saved && (
            <Alert tone="success" role="status" title="Preferences saved">
              Your choices have been stored in this browser and apply
              immediately.
            </Alert>
          )}

          <div className="divide-y divide-line-subtle rounded-md border border-line bg-canvas">
            <div className="flex items-start justify-between gap-4 px-4 py-4">
              <div>
                <h2 className="text-sm font-semibold">Strictly necessary</h2>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  The consent record itself (localStorage key{" "}
                  <code className="rounded-xs bg-surface px-1 font-mono text-[11px]">
                    flobyte.consent.v1
                  </code>
                  ). Required for the site to remember your choice.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[12px] font-medium text-muted">Always on</span>
                <Switch checked disabled label="Strictly necessary storage (always on)" />
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 px-4 py-4">
              <div>
                <h2 className="text-sm font-semibold">Functional preferences</h2>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  Small interface preferences stored locally in your browser.
                  Nothing is sent to any server.
                </p>
              </div>
              <div className="pt-0.5">
                <Switch
                  checked={functional}
                  onChange={(v) => {
                    setFunctional(v);
                    save(v);
                  }}
                  label="Allow functional preference storage"
                />
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 px-4 py-4">
              <div>
                <h2 className="text-sm font-semibold">Analytics</h2>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  <strong>Not in use.</strong> This website currently loads no
                  analytics or tracking scripts of any kind. If that ever
                  changes, analytics will remain off until you opt in here,
                  and the Cookie Policy will be updated first.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[12px] font-medium text-muted">Unavailable</span>
                <Switch checked={false} disabled label="Analytics (not in use)" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Button variant="primary" onClick={() => save(functional)}>
              Save preferences
            </Button>
            <Button onClick={() => { setFunctional(false); save(false); }}>
              Essential only
            </Button>
          </div>

          <p className="text-[13px] text-muted">
            Details in the{" "}
            <Link to="/legal/cookies" className="text-accent hover:underline">
              Cookie Policy
            </Link>
            . Clearing this site's data in your browser removes everything
            immediately.
          </p>
        </div>
      </Section>
    </>
  );
}
