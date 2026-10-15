import type { LegalDoc } from "../lib/types";

/**
 * Legal document content.
 *
 * Bracketed values such as "[legal entity name — to be configured]" are
 * intentional placeholders. Replace them with verified business facts
 * before production use. Nothing fictional should be published silently.
 */

const ENTITY = "[legal entity name — to be configured]";
const JURISDICTION = "[governing jurisdiction — to be configured]";
const CONTACT = "[contact email — to be configured]";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "How Flobyte collects, uses, and protects personal information.",
    lastUpdated: "TODO: set on publication",
    sections: [
      {
        id: "scope",
        heading: "1. Scope",
        paragraphs: [
          `This policy describes how ${ENTITY} ("Flobyte", "we") handles personal information collected through this website and in the course of providing software development services.`,
        ],
      },
      {
        id: "data-we-collect",
        heading: "2. Information we collect",
        paragraphs: [
          "We collect only the information needed to respond to you and deliver our services:",
        ],
        list: [
          "Contact details you submit through our forms (name, email, company, and the content of your message).",
          "Project information you choose to share when requesting a quote or consultation.",
          "Basic technical information required to serve the website securely (such as server logs maintained by our hosting provider).",
        ],
      },
      {
        id: "no-tracking",
        heading: "3. Cookies and tracking",
        paragraphs: [
          "This website does not currently use advertising cookies, third-party analytics, or cross-site tracking. The only client-side storage used is a consent record and functional preferences, stored locally in your browser. See the Cookie Policy for details.",
        ],
      },
      {
        id: "use",
        heading: "4. How we use information",
        list: [
          "To respond to inquiries, quotes, and consultation requests.",
          "To prepare and perform contracts for our services.",
          "To meet legal and accounting obligations.",
          "To maintain the security of our website and systems.",
        ],
      },
      {
        id: "sharing",
        heading: "5. Sharing",
        paragraphs: [
          "We do not sell personal information. We share it only with service providers necessary to operate our business (such as hosting and email providers), under appropriate agreements, or where required by law. A current list of processors is available on request.",
        ],
      },
      {
        id: "retention",
        heading: "6. Retention",
        paragraphs: [
          "We keep personal information only as long as needed for the purposes above or as required by law. Specific retention periods depend on the nature of the engagement and will be confirmed in project agreements. [Retention schedule — to be configured.]",
        ],
      },
      {
        id: "rights",
        heading: "7. Your rights",
        paragraphs: [
          "Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information, and to lodge a complaint with a supervisory authority. To exercise any of these rights, contact us at " +
            CONTACT +
            ".",
        ],
      },
      {
        id: "contact",
        heading: "8. Contact",
        paragraphs: [
          `Privacy questions can be directed to ${CONTACT}. Controller: ${ENTITY}.`,
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description: "The terms governing use of the Flobyte website.",
    lastUpdated: "TODO: set on publication",
    sections: [
      {
        id: "agreement",
        heading: "1. Agreement",
        paragraphs: [
          `These terms govern your use of this website, operated by ${ENTITY}. By using the website you accept these terms. Professional services are governed by separate written agreements, which take precedence over these terms for those services.`,
        ],
      },
      {
        id: "website-use",
        heading: "2. Use of the website",
        paragraphs: [
          "You may use this website for lawful purposes only, and in accordance with our Acceptable Use Policy. We may suspend or restrict access where misuse is detected.",
        ],
      },
      {
        id: "content",
        heading: "3. Content and accuracy",
        paragraphs: [
          "Website content is provided for general information. Sample projects, articles, and testimonials marked as illustrative are examples of the type of work we do and are not claims about specific past engagements. We may update or remove content at any time.",
        ],
      },
      {
        id: "ip",
        heading: "4. Intellectual property",
        paragraphs: [
          "The website and its content are protected by applicable intellectual property laws. See the Intellectual Property Policy for details, including ownership of project deliverables under service agreements.",
        ],
      },
      {
        id: "liability",
        heading: "5. Liability",
        paragraphs: [
          "The website is provided \"as is\" without warranties of any kind to the extent permitted by law. We are not liable for indirect or consequential loss arising from use of the website. Nothing in these terms limits liability that cannot lawfully be limited.",
        ],
      },
      {
        id: "law",
        heading: "6. Governing law",
        paragraphs: [
          `These terms are governed by the laws of ${JURISDICTION}. Disputes are subject to the competent courts of that jurisdiction.`,
        ],
      },
      {
        id: "changes",
        heading: "7. Changes",
        paragraphs: [
          "We may update these terms from time to time. The current version is always published on this page, with its last-updated date shown above.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    description:
      "What this website stores in your browser, and the choices you have.",
    lastUpdated: "TODO: set on publication",
    sections: [
      {
        id: "summary",
        heading: "1. Summary",
        paragraphs: [
          "This website is deliberately light on client-side storage. We do not use advertising cookies, third-party analytics cookies, or cross-site tracking of any kind.",
        ],
      },
      {
        id: "what-we-store",
        heading: "2. What we actually store",
        list: [
          "Consent record (localStorage, key `flobyte.consent.v1`): remembers the choice you made in the cookie banner so we don't ask again. Strictly necessary.",
          "Functional preferences (localStorage, only if you allow them): small interface preferences. Optional.",
        ],
      },
      {
        id: "analytics",
        heading: "3. Analytics",
        paragraphs: [
          "No analytics scripts are currently loaded on this website. If analytics are introduced in the future, they will load only after you opt in via Cookie Preferences, and this policy will be updated first.",
        ],
      },
      {
        id: "managing",
        heading: "4. Managing your choices",
        paragraphs: [
          "You can change your choices at any time on the Cookie Preferences page, or clear this site's data in your browser settings, which removes all stored values immediately.",
        ],
      },
    ],
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    description: "Rules for acceptable use of the Flobyte website and services.",
    lastUpdated: "TODO: set on publication",
    sections: [
      {
        id: "purpose",
        heading: "1. Purpose",
        paragraphs: [
          "This policy defines acceptable use of the Flobyte website, and of systems we operate on behalf of clients where this policy is incorporated into a service agreement.",
        ],
      },
      {
        id: "prohibited",
        heading: "2. Prohibited activities",
        list: [
          "Attempting to gain unauthorized access to systems, accounts, or data.",
          "Probing, scanning, or testing the vulnerability of systems without written authorization (see Responsible Disclosure for the authorized route).",
          "Transmitting malware, or content that is unlawful, infringing, or deceptive.",
          "Interfering with service availability, including denial-of-service activity.",
          "Scraping at volumes that degrade service for others.",
          "Misrepresenting your identity or affiliation when contacting us.",
        ],
      },
      {
        id: "enforcement",
        heading: "3. Enforcement",
        paragraphs: [
          "We may restrict or terminate access for violations of this policy and may report unlawful activity to relevant authorities. For services under contract, enforcement follows the applicable service agreement.",
        ],
      },
      {
        id: "reporting",
        heading: "4. Reporting misuse",
        paragraphs: [
          `Report suspected misuse to ${CONTACT}. Security vulnerabilities should be reported via the Responsible Disclosure process instead.`,
        ],
      },
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property Policy",
    description:
      "Ownership of website content, project deliverables, and third-party components.",
    lastUpdated: "TODO: set on publication",
    sections: [
      {
        id: "website",
        heading: "1. Website content",
        paragraphs: [
          `Unless otherwise noted, the content of this website — text, design, and code — is owned by ${ENTITY}. You may view and link to it freely; republishing substantial portions requires written permission.`,
        ],
      },
      {
        id: "deliverables",
        heading: "2. Client project deliverables",
        paragraphs: [
          "Our standard position, confirmed in each service agreement: upon full payment, project-specific source code, designs, and documentation created for a client are assigned to that client.",
        ],
        list: [
          "Flobyte retains ownership of pre-existing generic tools and libraries, which are licensed to the client for use within the delivered work.",
          "Clients receive full repository history, not just a final snapshot.",
          "Neither party uses the other's trademarks without permission.",
        ],
      },
      {
        id: "open-source",
        heading: "3. Open-source components",
        paragraphs: [
          "Delivered software typically includes open-source components under their own licenses. We track these dependencies and provide a license inventory on request, and we avoid licenses incompatible with a client's intended use.",
        ],
      },
      {
        id: "infringement",
        heading: "4. Infringement claims",
        paragraphs: [
          `If you believe content on this website infringes your rights, contact ${CONTACT} with sufficient detail for us to assess the claim. We respond to substantiated notices promptly.`,
        ],
      },
    ],
  },
  {
    slug: "data-processing",
    title: "Data Processing Agreement",
    description:
      "Standard terms for processing personal data on behalf of clients.",
    lastUpdated: "TODO: set on publication",
    sections: [
      {
        id: "role",
        heading: "1. Roles",
        paragraphs: [
          `Where Flobyte processes personal data on behalf of a client in the course of providing services, the client acts as controller and ${ENTITY} acts as processor. This page summarizes our standard processing terms; the executed DPA attached to each service agreement is the binding document.`,
        ],
      },
      {
        id: "instructions",
        heading: "2. Processing on instructions",
        paragraphs: [
          "We process client personal data only on documented instructions from the client, including with regard to transfers, unless required to do otherwise by law — in which case we inform the client where legally permitted.",
        ],
      },
      {
        id: "measures",
        heading: "3. Security measures",
        list: [
          "Access to client data restricted to personnel who need it, under confidentiality obligations.",
          "Encryption in transit; encryption at rest where the hosting environment supports it.",
          "Separation of client environments; no production data in development environments without written approval.",
          "Prompt notification of personal data breaches affecting client data.",
        ],
      },
      {
        id: "subprocessors",
        heading: "4. Subprocessors",
        paragraphs: [
          "Any subprocessors (for example, cloud hosting providers chosen for a project) are listed in the project-specific DPA and engaged under equivalent obligations. [Standard subprocessor list — to be configured per engagement.]",
        ],
      },
      {
        id: "end",
        heading: "5. End of engagement",
        paragraphs: [
          "At the end of an engagement, client personal data is returned or deleted at the client's choice, except where retention is required by law.",
        ],
      },
      {
        id: "request",
        heading: "6. Requesting the full DPA",
        paragraphs: [
          `Clients and prospective clients can request our full standard DPA at ${CONTACT}.`,
        ],
      },
    ],
  },
];

export const getLegalDoc = (slug: string) =>
  legalDocs.find((d) => d.slug === slug);
