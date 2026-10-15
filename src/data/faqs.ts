import type { FAQ } from "../lib/types";

export const faqs: FAQ[] = [
  {
    category: "Services",
    question: "What kind of projects does Flobyte take on?",
    answer:
      "We build custom software: web applications, mobile apps, backend systems and APIs, system integrations, and the cloud infrastructure behind them. We also take over and maintain existing systems. We work with both new builds and inherited codebases.",
  },
  {
    category: "Services",
    question: "Do you work with existing codebases, or only new projects?",
    answer:
      "Both. A significant part of our work is taking over, stabilizing, and extending systems built by other teams. We start inherited projects with a structured audit so we understand the system before changing it.",
  },
  {
    category: "Process",
    question: "How does a project start?",
    answer:
      "With a scoping conversation. We discuss your goals, constraints, and existing systems, then prepare a written proposal covering approach, scope, team, and an estimate. There is no charge for the initial conversation.",
  },
  {
    category: "Process",
    question: "How involved do we need to be during development?",
    answer:
      "We work in short iterations with a demo at the end of each one. You'll need a decision-maker available for roughly an hour per week to review progress and resolve open questions. More involvement is welcome, but that is the practical minimum.",
  },
  {
    category: "Timelines",
    question: "How long does a typical project take?",
    answer:
      "It depends entirely on scope. Small, focused tools can be delivered in weeks; platforms take months. We break larger projects into milestones so you see working software early rather than waiting for a single final delivery. We don't promise fixed dates before scoping is done.",
  },
  {
    category: "Pricing",
    question: "How do you price projects?",
    answer:
      "Fixed-price for well-defined scopes, time-and-materials for evolving ones, and monthly retainers for ongoing maintenance. Every proposal states the model, what's included, and how changes are handled before work begins.",
  },
  {
    category: "Pricing",
    question: "Can you work within a fixed budget?",
    answer:
      "Often, yes. If the budget is fixed, we scope to the budget: we'll identify the most valuable subset of the project that fits, and a sensible sequence for the rest.",
  },
  {
    category: "Communication",
    question: "How do you communicate during a project?",
    answer:
      "A shared channel (Slack or similar) for day-to-day questions, a weekly written status update, and a demo at the end of each iteration. You always know what was done, what's next, and what's blocked.",
  },
  {
    category: "Ownership",
    question: "Who owns the code and designs?",
    answer:
      "You do. On payment, all project-specific code, designs, and documentation are assigned to you. We retain only our pre-existing generic tooling, which is licensed to you for the project.",
  },
  {
    category: "Maintenance",
    question: "What happens after launch?",
    answer:
      "Every delivery includes a handover period for stabilization. After that, most clients choose a maintenance retainer covering updates, security patches, monitoring, and small improvements. You can also hand the system to an internal team — we document for that outcome from day one.",
  },
  {
    category: "Collaboration",
    question: "Can you work alongside our in-house developers?",
    answer:
      "Yes. We regularly embed with internal teams, follow existing conventions and review processes, and aim to leave the team stronger — not dependent on us.",
  },
  {
    category: "Collaboration",
    question: "Do you sign NDAs?",
    answer:
      "Yes. We're happy to sign a mutual NDA before any detailed discussion of your project.",
  },
];
