import type { Career } from "../lib/types";

/** Illustrative sample openings. Replace with real roles before publishing. */
export const careers: Career[] = [
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    type: "Full-time",
    location: "Remote",
    team: "Engineering",
    summary:
      "Build accessible, maintainable web applications for client projects, and help shape our shared frontend standards.",
    responsibilities: [
      "Deliver production frontend features across client projects",
      "Contribute to shared component libraries and tooling",
      "Review code and mentor mid-level engineers",
      "Work directly with designers and client stakeholders",
    ],
    requirements: [
      "5+ years building production web applications",
      "Deep TypeScript and modern React experience",
      "Working knowledge of accessibility standards",
      "Comfortable communicating directly with clients",
    ],
    niceToHave: [
      "Design-system experience",
      "SSR framework experience (Next.js or similar)",
      "Performance profiling experience",
    ],
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    type: "Full-time",
    location: "Remote",
    team: "Engineering",
    summary:
      "Design and build APIs, data models, and integrations that client products depend on.",
    responsibilities: [
      "Design and implement REST and GraphQL APIs",
      "Model data and manage schema evolution safely",
      "Build integrations with third-party systems",
      "Instrument services with useful observability",
    ],
    requirements: [
      "3+ years of backend development experience",
      "Strong SQL and data-modeling fundamentals",
      "Experience with Node.js, Python, or .NET",
      "Pragmatic approach to testing",
    ],
    niceToHave: [
      "Event-driven architecture experience",
      "Cloud infrastructure experience (AWS/Azure/GCP)",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    type: "Full-time",
    location: "Remote",
    team: "Design",
    summary:
      "Design clear, structured interfaces for business software, from discovery workshops to developer handoff.",
    responsibilities: [
      "Run discovery sessions and map user flows",
      "Produce wireframes, prototypes, and final designs",
      "Maintain component-based design files and tokens",
      "Validate designs with usability reviews",
    ],
    requirements: [
      "3+ years designing digital products",
      "Portfolio showing complex, workflow-heavy interfaces",
      "Fluency with component-based design tools",
      "Understanding of frontend implementation constraints",
    ],
    niceToHave: ["Accessibility audit experience", "Basic HTML/CSS literacy"],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    type: "Contract / Full-time",
    location: "Remote",
    team: "Platform",
    summary:
      "Build and maintain the cloud infrastructure, pipelines, and observability behind client systems.",
    responsibilities: [
      "Define infrastructure as code for client environments",
      "Design CI/CD pipelines and release processes",
      "Set up monitoring, logging, and alerting",
      "Support incident response and postmortems",
    ],
    requirements: [
      "Hands-on Terraform and container experience",
      "Experience operating production workloads in the cloud",
      "Scripting proficiency (Bash, Python, or similar)",
      "Security-conscious by default",
    ],
    niceToHave: ["Kubernetes operations experience", "Cost-optimization work"],
  },
];

export const getCareer = (slug: string) => careers.find((c) => c.slug === slug);
