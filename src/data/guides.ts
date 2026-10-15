import type { Guide } from "../lib/types";

/** Illustrative sample guides for prospective clients and technical readers. */
export const guides: Guide[] = [
  {
    slug: "scoping-a-software-project",
    title: "Scoping a software project",
    description:
      "How to describe a project so a development partner can estimate it accurately — what to include, what can wait.",
    level: "Introductory",
    topics: ["Requirements", "Estimation", "Planning"],
  },
  {
    slug: "build-vs-buy-checklist",
    title: "The build-vs-buy checklist",
    description:
      "A structured way to decide between custom software and off-the-shelf tools, including total-cost factors teams forget.",
    level: "Introductory",
    topics: ["Strategy", "Custom software"],
  },
  {
    slug: "preparing-for-a-codebase-handover",
    title: "Preparing for a codebase handover",
    description:
      "What to collect before transferring a codebase between vendors or teams: access, documentation, environments, and history.",
    level: "Intermediate",
    topics: ["Maintenance", "Process"],
  },
  {
    slug: "api-integration-readiness",
    title: "API integration readiness",
    description:
      "The questions to answer before connecting two systems: data ownership, error handling, rate limits, and reconciliation.",
    level: "Intermediate",
    topics: ["Integration", "APIs"],
  },
  {
    slug: "web-accessibility-fundamentals",
    title: "Web accessibility fundamentals",
    description:
      "The WCAG concepts that matter most in practice, and how to bake them into a project from the first sprint.",
    level: "Introductory",
    topics: ["Accessibility", "Frontend"],
  },
  {
    slug: "planning-a-cloud-migration",
    title: "Planning a cloud migration",
    description:
      "Sequencing a migration from on-premise to cloud: inventory, dependencies, pilot workloads, and rollback planning.",
    level: "Advanced",
    topics: ["Cloud", "DevOps"],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
