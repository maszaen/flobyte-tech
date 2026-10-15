import type {
  ChangelogEntry,
  Industry,
  TechCategory,
  Testimonial,
} from "../lib/types";

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    description: "Interfaces that are fast, accessible, and maintainable.",
    items: ["TypeScript", "React", "Next.js", "Vue", "Tailwind CSS", "Vite"],
  },
  {
    name: "Mobile",
    description: "Cross-platform first, native where it matters.",
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    name: "Backend",
    description: "Services and APIs designed for long-term operation.",
    items: ["Node.js", "Python", ".NET", "Go", "GraphQL", "REST / OpenAPI"],
  },
  {
    name: "Data",
    description: "Reliable storage, modeling, and movement of data.",
    items: ["PostgreSQL", "SQL Server", "Redis", "BigQuery", "dbt", "Kafka"],
  },
  {
    name: "Cloud & DevOps",
    description: "Automated, observable, reproducible infrastructure.",
    items: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes"],
  },
  {
    name: "Quality & Tooling",
    description: "The practices that keep delivery predictable.",
    items: ["GitHub Actions", "Playwright", "Vitest", "Sentry", "Grafana"],
  },
];

export const industries: Industry[] = [
  {
    name: "Logistics & Transport",
    description:
      "Dispatch systems, tracking platforms, and driver-facing mobile tools for operations that can't stop.",
    needs: ["Real-time visibility", "Offline-capable field apps", "ERP/TMS integration"],
  },
  {
    name: "Healthcare",
    description:
      "Scheduling, intake, and workflow tools that respect clinical processes and data sensitivity.",
    needs: ["Practice-system integration", "Audit trails", "Access control"],
  },
  {
    name: "Manufacturing & B2B",
    description:
      "Ordering portals, product configurators, and integrations that connect the shop floor to the front office.",
    needs: ["ERP connectivity", "Contract pricing", "Self-service portals"],
  },
  {
    name: "Financial Services",
    description:
      "Internal tools, reporting systems, and integrations where correctness and traceability come first.",
    needs: ["Reconciliation", "Reporting", "Secure integrations"],
  },
  {
    name: "Retail & E-commerce",
    description:
      "Data pipelines, dashboards, and integrations that unify sales, stock, and fulfillment.",
    needs: ["Multi-system sync", "Analytics", "Order automation"],
  },
  {
    name: "Energy & Utilities",
    description:
      "Field-service applications and asset-inspection tooling built for low-connectivity environments.",
    needs: ["Offline-first apps", "Asset data capture", "Compliance reporting"],
  },
];

/**
 * Illustrative testimonials. These demonstrate layout and are clearly
 * labeled in the UI — they are not quotes from real customers.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "They inherited a system two previous vendors had struggled with, stabilized it within a quarter, and documented it well enough that our own team could finally contribute.",
    author: "Operations Director",
    role: "Logistics company",
    context: "Maintenance takeover",
  },
  {
    quote:
      "The weekly demos kept everyone honest — including us. Scope discussions happened early, in writing, instead of as surprises at the end.",
    author: "Head of Product",
    role: "B2B SaaS company",
    context: "Product development",
  },
  {
    quote:
      "What stood out was restraint. They talked us out of features we didn't need and shipped the ones we did, on a stack our team can actually maintain.",
    author: "IT Manager",
    role: "Manufacturing group",
    context: "Ordering portal",
  },
  {
    quote:
      "The integration simply works. Orders flow between the shop and the ERP without anyone re-typing anything, and when something fails we get alerted before customers notice.",
    author: "E-commerce Lead",
    role: "Retail company",
    context: "System integration",
  },
];

/** Sample website changelog entries (illustrative). */
export const changelog: ChangelogEntry[] = [
  {
    version: "1.4.0",
    date: "2026-01-12",
    type: "Added",
    items: [
      "Published guides section with six practical client-facing guides",
      "Added searchable site-wide content index",
      "New consultation booking request flow",
    ],
  },
  {
    version: "1.3.2",
    date: "2025-12-03",
    type: "Fixed",
    items: [
      "Corrected focus order in the mobile navigation drawer",
      "Fixed breadcrumb truncation on narrow viewports",
    ],
  },
  {
    version: "1.3.0",
    date: "2025-11-10",
    type: "Improved",
    items: [
      "Reworked service detail pages with capability and deliverable sections",
      "Reduced initial bundle size by deferring noncritical assets",
    ],
  },
  {
    version: "1.2.0",
    date: "2025-09-28",
    type: "Security",
    items: [
      "Added security.txt and responsible disclosure policy page",
      "Tightened Content Security Policy headers",
    ],
  },
  {
    version: "1.1.0",
    date: "2025-08-14",
    type: "Added",
    items: [
      "Project portfolio with detailed case-study pages",
      "Cookie preference management panel",
    ],
  },
  {
    version: "1.0.0",
    date: "2025-07-01",
    type: "Added",
    items: ["Initial public release of the Flobyte website"],
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We learn your goals, constraints, users, and existing systems. Output: a written scope and an honest estimate.",
  },
  {
    title: "Design",
    description:
      "Flows, wireframes, and technical architecture — reviewed with you before significant code is written.",
  },
  {
    title: "Build",
    description:
      "Short iterations with a working demo at the end of each. Progress is visible, not reported.",
  },
  {
    title: "Launch",
    description:
      "Staged rollout, monitoring from day one, and a stabilization period included in every delivery.",
  },
  {
    title: "Support",
    description:
      "Maintenance, measured improvements, and documentation — whether we operate the system or your team does.",
  },
];

/**
 * Technology ecosystems we build with. Listing a technology indicates
 * engineering experience, not a formal partnership or certification.
 */
export const partnerEcosystems = [
  {
    name: "Cloud platforms",
    items: ["Amazon Web Services", "Microsoft Azure", "Google Cloud"],
    note: "We design, deploy, and operate client workloads on all three major clouds.",
  },
  {
    name: "Payments & billing",
    items: ["Stripe", "Adyen", "PayPal"],
    note: "Integration experience with major payment and subscription-billing providers.",
  },
  {
    name: "Business systems",
    items: ["Salesforce", "HubSpot", "SAP", "Microsoft Dynamics"],
    note: "We connect custom software to the CRMs and ERPs businesses already run on.",
  },
  {
    name: "Developer platforms",
    items: ["GitHub", "GitLab", "Atlassian"],
    note: "Daily tooling for source control, CI/CD, and project collaboration.",
  },
];
