import type { Service } from "../lib/types";

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    short: "Web apps",
    tagline: "Fast, maintainable web applications.",
    description:
      "We build web applications that are fast to load, straightforward to operate, and built on technology your team can maintain long after launch.",
    capabilities: [
      "Single-page and server-rendered applications",
      "Customer portals and internal dashboards",
      "Progressive web apps",
      "Performance auditing and optimization",
      "Accessibility remediation (WCAG 2.2)",
      "Frontend architecture and design systems",
    ],
    useCases: [
      "Replacing a legacy web application with a modern stack",
      "Building a customer-facing portal on top of existing systems",
      "Turning a validated prototype into a production product",
      "Standardizing a fragmented frontend into one design system",
    ],
    deliverables: [
      "Production-ready application code with documentation",
      "Component library aligned with your brand",
      "Automated test coverage for critical paths",
      "CI/CD pipeline and deployment runbook",
    ],
    related: ["ui-ux-design", "backend-api", "maintenance"],
  },
  {
    slug: "mobile-development",
    name: "Mobile App Development",
    short: "Mobile apps",
    tagline: "Native-quality apps for iOS and Android.",
    description:
      "We develop mobile applications that feel at home on each platform, share code where it makes sense, and stay stable across OS releases.",
    capabilities: [
      "Cross-platform development (React Native, Flutter)",
      "Native iOS and Android development",
      "Offline-first data synchronization",
      "Push notifications and deep linking",
      "App Store and Play Store release management",
      "Mobile analytics and crash reporting setup",
    ],
    useCases: [
      "Extending an existing web product to mobile",
      "Field-service and logistics apps that work offline",
      "Consumer apps with real-time features",
      "Internal workforce apps distributed privately",
    ],
    deliverables: [
      "Published, store-compliant applications",
      "Shared codebase with platform-specific refinements",
      "Release pipeline with signed builds",
      "Monitoring and crash-reporting configuration",
    ],
    related: ["backend-api", "ui-ux-design", "maintenance"],
  },
  {
    slug: "backend-api",
    name: "Backend & API Development",
    short: "Backend & APIs",
    tagline: "Reliable services and well-designed APIs.",
    description:
      "We design and build the systems behind the interface: APIs, data models, background processing, and integrations that other teams can depend on.",
    capabilities: [
      "REST and GraphQL API design and implementation",
      "Database design, migration, and tuning",
      "Authentication, authorization, and SSO",
      "Event-driven architecture and queues",
      "Third-party API integration",
      "API documentation and versioning strategy",
    ],
    useCases: [
      "Exposing a stable public API for partners",
      "Decomposing a monolith into maintainable services",
      "Building a data layer for web and mobile clients",
      "Automating workflows between internal tools",
    ],
    deliverables: [
      "Documented API with OpenAPI specification",
      "Database schema and migration tooling",
      "Load-tested, monitored services",
      "Integration and contract test suites",
    ],
    related: ["cloud-devops", "system-integration", "web-development"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "UI/UX design",
    tagline: "Interfaces that are clear before they are clever.",
    description:
      "We design interfaces around real tasks and real constraints — structured, consistent, and ready for developers to implement without guesswork.",
    capabilities: [
      "Product discovery and user flows",
      "Wireframing and interactive prototyping",
      "Design systems and component libraries",
      "Usability reviews and accessibility audits",
      "Information architecture",
      "Design-to-development handoff",
    ],
    useCases: [
      "Redesigning a dated product without disrupting users",
      "Creating a design system for multiple products",
      "Validating a concept with prototypes before building",
      "Improving conversion on key product flows",
    ],
    deliverables: [
      "Component-based design files with tokens",
      "Clickable prototypes for key journeys",
      "Accessibility and usability findings report",
      "Developer-ready specifications",
    ],
    related: ["web-development", "mobile-development", "custom-software"],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    short: "Cloud & DevOps",
    tagline: "Infrastructure that deploys itself.",
    description:
      "We set up cloud infrastructure, automated pipelines, and observability so releases are routine events rather than risky ones.",
    capabilities: [
      "Cloud architecture (AWS, Azure, GCP)",
      "Infrastructure as code (Terraform)",
      "Containerization and orchestration (Docker, Kubernetes)",
      "CI/CD pipeline design",
      "Monitoring, logging, and alerting",
      "Cost review and right-sizing",
    ],
    useCases: [
      "Migrating workloads from on-premise to cloud",
      "Reducing deployment time from days to minutes",
      "Establishing environments for a growing team",
      "Improving reliability with proper observability",
    ],
    deliverables: [
      "Version-controlled infrastructure definitions",
      "Automated build, test, and deploy pipelines",
      "Dashboards and alert rules",
      "Operational runbooks",
    ],
    related: ["backend-api", "maintenance", "system-integration"],
  },
  {
    slug: "system-integration",
    name: "System Integration",
    short: "Integration",
    tagline: "Make your systems talk to each other.",
    description:
      "We connect CRMs, ERPs, payment providers, and internal tools so data flows automatically instead of being re-typed between systems.",
    capabilities: [
      "ERP, CRM, and e-commerce integration",
      "Payment and billing provider integration",
      "Data synchronization and ETL pipelines",
      "Legacy system adapters",
      "Webhook and event-bridge architecture",
      "Integration monitoring and retry handling",
    ],
    useCases: [
      "Synchronizing orders between a shop and an ERP",
      "Unifying customer data across departmental tools",
      "Automating invoicing and reconciliation",
      "Bridging a legacy system to modern applications",
    ],
    deliverables: [
      "Documented integration layer with error handling",
      "Data mapping specifications",
      "Monitoring for every integration path",
      "Failure and replay procedures",
    ],
    related: ["backend-api", "cloud-devops", "custom-software"],
  },
  {
    slug: "maintenance",
    name: "Software Maintenance",
    short: "Maintenance",
    tagline: "Keep shipped software healthy.",
    description:
      "We take responsibility for existing systems: dependency updates, security patches, bug fixes, performance work, and measured improvements over time.",
    capabilities: [
      "Dependency and framework upgrades",
      "Security patching and vulnerability response",
      "Bug triage and resolution",
      "Performance profiling and optimization",
      "Codebase audits and refactoring plans",
      "Documentation of inherited systems",
    ],
    useCases: [
      "Taking over a codebase after a previous vendor",
      "Keeping a stable product current and secure",
      "Reducing incident frequency in a critical system",
      "Preparing a legacy application for new features",
    ],
    deliverables: [
      "Agreed response targets and reporting cadence",
      "Monthly maintenance summaries",
      "Up-to-date dependency and security posture",
      "A prioritized technical-debt register",
    ],
    related: ["cloud-devops", "backend-api", "web-development"],
  },
  {
    slug: "custom-software",
    name: "Custom Software Development",
    short: "Custom software",
    tagline: "Purpose-built systems for specific problems.",
    description:
      "When off-the-shelf tools don't fit, we design and build software around your actual process — from first workshop to supported production system.",
    capabilities: [
      "Requirements analysis and technical discovery",
      "Domain modeling and system architecture",
      "Workflow and process automation tools",
      "Reporting and data products",
      "Multi-tenant SaaS foundations",
      "Long-term product partnership",
    ],
    useCases: [
      "Replacing spreadsheets that run a core process",
      "Building an internal tool no vendor offers",
      "Launching a software product as a new revenue line",
      "Consolidating several aging tools into one system",
    ],
    deliverables: [
      "A production system matched to your process",
      "Architecture documentation and diagrams",
      "Training and handover for internal teams",
      "A roadmap for future iterations",
    ],
    related: ["ui-ux-design", "backend-api", "maintenance"],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
