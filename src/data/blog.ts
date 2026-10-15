import type { Article } from "../lib/types";

/**
 * Sample editorial content. These are illustrative engineering articles,
 * not real company announcements.
 */
export const articles: Article[] = [
  {
    slug: "choosing-between-spa-and-ssr",
    title: "Choosing between SPA and server rendering",
    description:
      "A practical decision framework for picking a rendering strategy based on what the application actually needs.",
    date: "2025-11-18",
    readingTime: "6 min",
    tags: ["Architecture", "Web"],
    body: [
      {
        paragraphs: [
          "Rendering strategy is one of the first architectural decisions in a web project, and one of the most over-argued. The right answer rarely comes from benchmarks — it comes from the shape of the product.",
        ],
      },
      {
        heading: "When a SPA is the right call",
        paragraphs: [
          "Single-page applications shine when the product is an application first: authenticated, interaction-heavy, and long-lived in a browser tab. Dashboards, admin tools, and editors fit this profile. SEO is usually irrelevant behind a login, and users tolerate one meaningful initial load in exchange for instant subsequent navigation.",
        ],
      },
      {
        heading: "When server rendering earns its complexity",
        paragraphs: [
          "Server rendering matters when first paint and crawlability drive outcomes: marketing sites, content platforms, e-commerce. If the page must be meaningful before JavaScript executes, render it on the server.",
        ],
        list: [
          "Public content that must be indexed → server rendering",
          "Authenticated tools used daily → SPA is usually fine",
          "Mixed products → render the public shell, hydrate the app",
        ],
      },
      {
        heading: "The decision in one sentence",
        paragraphs: [
          "Choose based on who arrives at the page cold: if it's crawlers and first-time visitors, render on the server; if it's returning, signed-in users, optimize for in-app responsiveness instead.",
        ],
      },
    ],
  },
  {
    slug: "api-versioning-without-pain",
    title: "API versioning without the pain",
    description:
      "Most teams version their APIs too early and too coarsely. Here's a lighter approach that preserves compatibility.",
    date: "2025-10-02",
    readingTime: "7 min",
    tags: ["APIs", "Backend"],
    body: [
      {
        paragraphs: [
          "The instinct to put /v1/ in every URL on day one is understandable — and usually premature. Versioning is a tool for breaking changes, and the best versioning strategy is needing it rarely.",
        ],
      },
      {
        heading: "Additive changes don't need a version",
        paragraphs: [
          "Adding optional fields, new endpoints, or new enum values handled gracefully by clients are all backward compatible. A well-written client ignores fields it doesn't know. Document this contract explicitly so client teams build tolerant parsers.",
        ],
      },
      {
        heading: "When you must break, break narrowly",
        paragraphs: [
          "Prefer versioning a single resource over the whole API. A header-based or per-endpoint version lets 95% of your surface stay stable while one contested resource evolves.",
        ],
        code: {
          language: "http",
          content:
            "GET /orders/8731\nAccept: application/json; version=2",
        },
      },
      {
        heading: "Sunset with data, not dates alone",
        paragraphs: [
          "Before removing an old version, measure who still calls it. Deprecation headers plus usage metrics turn a risky removal into a routine cleanup.",
        ],
      },
    ],
  },
  {
    slug: "design-tokens-in-practice",
    title: "Design tokens in practice",
    description:
      "How a small, centralized token system keeps multi-team product interfaces consistent without a heavyweight process.",
    date: "2025-08-21",
    readingTime: "5 min",
    tags: ["Design systems", "Frontend"],
    body: [
      {
        paragraphs: [
          "Design tokens are the smallest useful abstraction in a design system: named values for color, spacing, type, and radius that both designers and code consume. Done well, they are boring — and that's the point.",
        ],
      },
      {
        heading: "Start with fewer tokens than you think",
        paragraphs: [
          "A practical starter set is roughly a dozen colors, a type scale of six sizes, a four-step radius scale, and one spacing scale. Every token you add is a decision future contributors must understand. Add tokens when two components genuinely need to share a value, not before.",
        ],
      },
      {
        heading: "Name by role, not appearance",
        list: [
          "`--color-accent` survives a rebrand; `--color-blue-500` doesn't",
          "`--color-danger` explains intent at the call site",
          "`--space-inline-sm` beats `--space-6px` the moment the value changes",
        ],
      },
      {
        heading: "Enforce at the component boundary",
        paragraphs: [
          "Tokens only create consistency if raw values are kept out of components. Review for hardcoded hex values and pixel literals the same way you'd review for hardcoded secrets — they're both configuration that escaped.",
        ],
      },
    ],
  },
  {
    slug: "taking-over-a-legacy-codebase",
    title: "Taking over a legacy codebase safely",
    description:
      "A field-tested checklist for the first 30 days after inheriting a system another team built.",
    date: "2025-06-10",
    readingTime: "8 min",
    tags: ["Maintenance", "Process"],
    body: [
      {
        paragraphs: [
          "Inheriting a codebase is archaeology with a pager attached. The goal of the first month is not to improve the system — it is to make sure you can change it without breaking it.",
        ],
      },
      {
        heading: "Week one: make it run, make it deploy",
        paragraphs: [
          "Before reading code, reproduce the build and the deployment end to end. A system you cannot deploy is a system you cannot fix. Write down every undocumented step you discover; that document is the first real deliverable.",
        ],
      },
      {
        heading: "Week two: map the blast radius",
        list: [
          "Identify the entry points: cron jobs, queues, webhooks, public endpoints",
          "Find the data flows that touch money or personal data",
          "Locate the areas with zero test coverage and high change frequency",
        ],
      },
      {
        heading: "Weeks three and four: characterization tests",
        paragraphs: [
          "Write tests that pin down current behavior — even behavior that looks wrong. They convert 'we think it works like this' into executable documentation, and they are the safety net for every change that follows.",
        ],
      },
    ],
  },
  {
    slug: "offline-first-mobile-sync",
    title: "Offline-first mobile sync, minus the folklore",
    description:
      "The three sync strategies that cover almost every offline-capable business app, and how to pick between them.",
    date: "2025-04-15",
    readingTime: "7 min",
    tags: ["Mobile", "Architecture"],
    body: [
      {
        paragraphs: [
          "Every offline-capable app eventually answers the same question: what happens when two devices change the same record? The answer should be chosen deliberately, not discovered in production.",
        ],
      },
      {
        heading: "Strategy 1: last write wins",
        paragraphs: [
          "Simple and often sufficient. If records are owned by a single user — a driver's own delivery notes, an inspector's own checklist — conflicts are rare and last-write-wins with a server timestamp is honest about its tradeoffs.",
        ],
      },
      {
        heading: "Strategy 2: field-level merge",
        paragraphs: [
          "When multiple roles edit different parts of the same record, merge per field rather than per record. Two edits to different fields both survive; same-field conflicts fall back to a deterministic rule plus an audit entry.",
        ],
      },
      {
        heading: "Strategy 3: operational log",
        paragraphs: [
          "For genuinely collaborative data, sync operations instead of state. It's the most work and the most power — reach for it only when the product truly needs concurrent editing.",
        ],
      },
    ],
  },
  {
    slug: "pragmatic-ci-pipelines",
    title: "Pragmatic CI pipelines for small teams",
    description:
      "What a small product team actually needs from CI — and the pipeline stages that are usually wasted effort.",
    date: "2025-02-03",
    readingTime: "5 min",
    tags: ["DevOps", "Process"],
    body: [
      {
        paragraphs: [
          "CI advice tends to be written by platform teams at large companies. For a team of five, most of it is overhead. A good small-team pipeline optimizes for one metric: time from 'approved' to 'running in production'.",
        ],
      },
      {
        heading: "The four stages that earn their keep",
        list: [
          "Type check and lint — fast feedback on obvious errors",
          "Unit and integration tests on the critical paths",
          "A production build — catching config drift before deploy does",
          "Automated deploy to a staging environment on merge",
        ],
      },
      {
        heading: "What to skip until it hurts",
        paragraphs: [
          "Full end-to-end suites on every commit, matrix builds across runtimes you don't ship to, and bespoke pipeline frameworks all have real costs. Add them when a concrete failure justifies them, not because a blog post did.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
