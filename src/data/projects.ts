import type { Project } from "../lib/types";

/**
 * NOTE: These are illustrative sample case studies that demonstrate the kind
 * of work Flobyte delivers. They are clearly labeled as illustrative in the
 * UI and must not be presented as real client engagements.
 */
export const projects: Project[] = [
  {
    slug: "freight-operations-platform",
    name: "Freight Operations Platform",
    sector: "Logistics",
    summary:
      "A dispatch and tracking platform replacing spreadsheet-based planning for a regional carrier.",
    description:
      "An illustrative engagement: a logistics operator coordinating hundreds of weekly shipments through spreadsheets and phone calls needed a single operational view. The platform centralizes dispatch, driver assignment, and shipment status, with a mobile companion app for drivers that works offline in low-coverage areas.",
    services: ["web-development", "mobile-development", "backend-api"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "React Native"],
    outcomes: [
      "Dispatching consolidated into one real-time board",
      "Offline-capable driver app replacing paper manifests",
      "Automated customer status notifications",
    ],
    year: "Sample",
  },
  {
    slug: "clinic-scheduling-system",
    name: "Clinic Scheduling System",
    sector: "Healthcare",
    summary:
      "Appointment scheduling and patient intake for a multi-location outpatient clinic group.",
    description:
      "An illustrative engagement: a clinic group running separate calendars per location needed unified scheduling with waitlists, reminders, and digital intake forms. The system integrates with the group's existing practice-management software rather than replacing it.",
    services: ["custom-software", "system-integration", "ui-ux-design"],
    stack: ["React", "TypeScript", ".NET", "SQL Server", "Azure"],
    outcomes: [
      "One scheduling view across all locations",
      "Digital intake replacing paper forms",
      "Two-way sync with practice-management records",
    ],
    year: "Sample",
  },
  {
    slug: "b2b-ordering-portal",
    name: "B2B Ordering Portal",
    sector: "Manufacturing",
    summary:
      "A self-service ordering portal connected directly to a manufacturer's ERP.",
    description:
      "An illustrative engagement: a manufacturer taking wholesale orders by email and phone needed a portal where distributors could see live stock, contract pricing, and order history. The portal reads and writes directly to the existing ERP, so no data is maintained twice.",
    services: ["web-development", "system-integration", "backend-api"],
    stack: ["Next.js", "TypeScript", "Node.js", "Redis", "ERP integration"],
    outcomes: [
      "Order entry moved from email to self-service",
      "Live stock and customer-specific pricing",
      "ERP remains the single source of truth",
    ],
    year: "Sample",
  },
  {
    slug: "field-inspection-app",
    name: "Field Inspection App",
    sector: "Energy & Utilities",
    summary:
      "An offline-first mobile app for infrastructure inspections with photo evidence and reporting.",
    description:
      "An illustrative engagement: field engineers performing site inspections in areas without connectivity needed structured checklists, photo capture, and automatic report generation once back online. The app syncs conflict-free and produces audit-ready PDF reports.",
    services: ["mobile-development", "backend-api", "cloud-devops"],
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    outcomes: [
      "Inspections completed fully offline",
      "Automatic, consistent report generation",
      "Audit trail with timestamps and photo evidence",
    ],
    year: "Sample",
  },
  {
    slug: "subscription-billing-migration",
    name: "Subscription Billing Migration",
    sector: "SaaS",
    summary:
      "Migrating a SaaS product from homegrown invoicing to a modern billing provider without downtime.",
    description:
      "An illustrative engagement: a SaaS business had outgrown its homegrown invoicing scripts. The work covered mapping legacy plans to a modern billing provider, migrating active subscriptions in controlled batches, and reconciling every invoice before and after cutover.",
    services: ["system-integration", "backend-api", "maintenance"],
    stack: ["Node.js", "TypeScript", "Stripe-style billing API", "PostgreSQL"],
    outcomes: [
      "Zero-downtime migration in staged batches",
      "Full reconciliation of historical invoices",
      "Dunning and tax handling moved off custom code",
    ],
    year: "Sample",
  },
  {
    slug: "analytics-dashboard-suite",
    name: "Analytics Dashboard Suite",
    sector: "Retail",
    summary:
      "Internal dashboards consolidating sales, stock, and fulfillment data from five systems.",
    description:
      "An illustrative engagement: a retail operator pulled weekly numbers manually from five separate tools. A nightly data pipeline now consolidates sales, inventory, and fulfillment data into a warehouse, surfaced through role-based dashboards for store, regional, and head-office views.",
    services: ["custom-software", "cloud-devops", "ui-ux-design"],
    stack: ["React", "TypeScript", "Python", "BigQuery", "dbt"],
    outcomes: [
      "Manual weekly reporting eliminated",
      "Single consistent definition of key metrics",
      "Role-based views from store level to head office",
    ],
    year: "Sample",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
