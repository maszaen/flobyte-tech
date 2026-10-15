import { useParams } from "react-router-dom";
import { NotFoundContent } from "../components/errors";
import { LegalDocumentLayout } from "../components/layouts";
import { getLegalDoc } from "../data/legal";
import { siteConfig } from "../lib/config";
import type { LegalDoc } from "../lib/types";
import { usePageMeta } from "../lib/usePageMeta";

/* ---------------------------- Legal document pages ---------------------------- */

export function LegalDocPage() {
  const { slug } = useParams();
  const doc = slug ? getLegalDoc(slug) : undefined;

  usePageMeta(
    doc ? doc.title : "Document not found",
    doc ? doc.description : "The requested legal document does not exist."
  );

  if (!doc) {
    return (
      <NotFoundContent
        title="Document not found"
        message="This legal document doesn't exist. All policies are linked from the footer and the sitemap."
      />
    );
  }

  return <LegalDocumentLayout doc={doc} crumbRoot={{ label: "Legal" }} />;
}

/* -------------------------------- Security policy -------------------------------- */

const securityDoc: Pick<LegalDoc, "title" | "description" | "lastUpdated" | "sections"> = {
  title: "Security Policy",
  description:
    "How Flobyte approaches security in its own operations and in client work.",
  lastUpdated: "TODO: set on publication",
  sections: [
    {
      id: "commitment",
      heading: "1. Our commitment",
      paragraphs: [
        "Security is a default engineering practice at Flobyte, not an optional add-on. This page summarizes the practices we apply to our own systems and to software we build for clients. It describes practices, not certifications — we do not claim compliance badges we have not earned.",
      ],
    },
    {
      id: "engineering",
      heading: "2. Secure engineering practices",
      list: [
        "Dependency scanning and timely patching of known vulnerabilities.",
        "Code review on every change; no direct pushes to production branches.",
        "Secrets kept in managed secret stores — never in source code.",
        "Principle of least privilege for all system and personnel access.",
        "Encryption in transit (TLS) for all services we deploy.",
        "Security considerations recorded in architecture decision records.",
      ],
    },
    {
      id: "data",
      heading: "3. Data handling",
      paragraphs: [
        "Client data is accessed only when required for the engagement, under confidentiality obligations. Production data is not copied into development environments without explicit written approval and appropriate masking. See the Data Processing Agreement for processing terms.",
      ],
    },
    {
      id: "incidents",
      heading: "4. Incident response",
      paragraphs: [
        "Suspected incidents affecting client systems are escalated immediately, investigated, and communicated to the affected client without undue delay. Postmortems are blameless, written, and shared with the client.",
      ],
    },
    {
      id: "reporting",
      heading: "5. Reporting a vulnerability",
      paragraphs: [
        "If you believe you've found a security issue in this website or in a system we operate, please report it through our Responsible Disclosure process (linked in the sidebar). We appreciate good-faith research and will not pursue legal action against researchers who follow that policy.",
      ],
    },
  ],
};

export function SecurityPage() {
  usePageMeta("Security Policy", securityDoc.description);
  return <LegalDocumentLayout doc={securityDoc} crumbRoot={{ label: "Security" }} />;
}

/* ----------------------------- Responsible disclosure ----------------------------- */

const disclosureDoc: Pick<LegalDoc, "title" | "description" | "lastUpdated" | "sections"> = {
  title: "Responsible Disclosure",
  description:
    "How to report security vulnerabilities in Flobyte systems, and what to expect from us.",
  lastUpdated: "TODO: set on publication",
  sections: [
    {
      id: "scope",
      heading: "1. Scope",
      paragraphs: [
        "This policy covers this website and systems operated directly by Flobyte. Client systems we maintain are covered only where the client's own disclosure policy says so — when in doubt, contact us first and we will route the report correctly.",
      ],
    },
    {
      id: "how-to-report",
      heading: "2. How to report",
      paragraphs: [
        `Email ${siteConfig.contactEmail} with the subject line "Security report". Include: a description of the issue, steps to reproduce, the affected URL or component, and any proof-of-concept material. Please use encrypted channels for sensitive details where possible. [Dedicated security contact and PGP key — to be configured.]`,
      ],
    },
    {
      id: "rules",
      heading: "3. Rules of engagement",
      list: [
        "Do not access, modify, or delete data that is not yours.",
        "Do not degrade service availability (no DoS testing).",
        "Do not use social engineering against our personnel or clients.",
        "Give us reasonable time to remediate before public disclosure.",
        "Test only against systems in scope.",
      ],
    },
    {
      id: "our-commitment",
      heading: "4. What we commit to",
      list: [
        "Acknowledging your report promptly.",
        "Keeping you informed about remediation progress.",
        "Not pursuing legal action against good-faith research that follows this policy.",
        "Crediting you for the find, if you want credit.",
      ],
    },
  ],
};

export function DisclosurePage() {
  usePageMeta("Responsible Disclosure", disclosureDoc.description);
  return <LegalDocumentLayout doc={disclosureDoc} crumbRoot={{ label: "Security", to: "/security" }} />;
}

/* ----------------------------- Accessibility statement ----------------------------- */

const accessibilityDoc: Pick<LegalDoc, "title" | "description" | "lastUpdated" | "sections"> = {
  title: "Accessibility Statement",
  description:
    "Flobyte's accessibility commitments for this website, the current conformance status, and how to report barriers.",
  lastUpdated: "TODO: set on publication",
  sections: [
    {
      id: "commitment",
      heading: "1. Commitment",
      paragraphs: [
        "We want this website to be usable by everyone, regardless of ability or technology. We target WCAG 2.2 Level AA as our working standard, both for this site and for software we build for clients.",
      ],
    },
    {
      id: "measures",
      heading: "2. Measures on this website",
      list: [
        "Semantic HTML with a logical heading hierarchy on every page.",
        "Full keyboard operability, including menus, accordions, and forms.",
        "Visible focus indicators on all interactive elements.",
        "Form fields with programmatic labels and described error messages.",
        "Color is never the only carrier of meaning; contrast meets AA targets.",
        "Reduced-motion preferences are respected.",
      ],
    },
    {
      id: "status",
      heading: "3. Conformance status",
      paragraphs: [
        "This website has been built against WCAG 2.2 AA criteria but has not yet undergone an independent third-party audit. [Formal audit — to be scheduled.] Known limitations will be documented here as they are identified.",
      ],
    },
    {
      id: "feedback",
      heading: "4. Feedback",
      paragraphs: [
        `If you encounter an accessibility barrier on this website, contact us at ${siteConfig.contactEmail} or via the contact form. Describing the page and the assistive technology involved helps us fix it faster.`,
      ],
    },
  ],
};

export function AccessibilityPage() {
  usePageMeta("Accessibility Statement", accessibilityDoc.description);
  return <LegalDocumentLayout doc={accessibilityDoc} crumbRoot={{ label: "Accessibility" }} />;
}
