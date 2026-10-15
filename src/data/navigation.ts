import type { NavGroup, NavLinkItem } from "../lib/types";

export const headerNav: {
  label: string;
  to?: string;
  items?: NavLinkItem[];
}[] = [
  {
    label: "Services",
    items: [
      { label: "Web Development", to: "/services/web-development" },
      { label: "Mobile Development", to: "/services/mobile-development" },
      { label: "Backend & API", to: "/services/backend-api" },
      { label: "UI/UX Design", to: "/services/ui-ux-design" },
      { label: "Cloud & DevOps", to: "/services/cloud-devops" },
      { label: "System Integration", to: "/services/system-integration" },
      { label: "Maintenance", to: "/services/maintenance" },
      { label: "Custom Software", to: "/services/custom-software" },
      { label: "All services →", to: "/services" },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", to: "/blog" },
      { label: "Guides", to: "/guides" },
      { label: "Documentation", to: "/docs" },
      { label: "Changelog", to: "/changelog" },
      { label: "System Status", to: "/status" },
      { label: "All resources →", to: "/resources" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Our Approach", to: "/approach" },
      { label: "How We Work", to: "/how-we-work" },
      { label: "Technology", to: "/technology" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Partners", to: "/partners" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

export const footerGroups: NavGroup[] = [
  {
    label: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
      { label: "Partners", to: "/partners" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Web Development", to: "/services/web-development" },
      { label: "Mobile Development", to: "/services/mobile-development" },
      { label: "Backend & API", to: "/services/backend-api" },
      { label: "UI/UX Design", to: "/services/ui-ux-design" },
      { label: "Cloud & DevOps", to: "/services/cloud-devops" },
      { label: "Maintenance", to: "/services/maintenance" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", to: "/blog" },
      { label: "Guides", to: "/guides" },
      { label: "Documentation", to: "/docs" },
      { label: "Changelog", to: "/changelog" },
      { label: "System Status", to: "/status" },
    ],
  },
  {
    label: "Legal",
    items: [
      { label: "Privacy Policy", to: "/legal/privacy" },
      { label: "Terms of Service", to: "/legal/terms" },
      { label: "Cookie Policy", to: "/legal/cookies" },
      { label: "Acceptable Use", to: "/legal/acceptable-use" },
      { label: "Security", to: "/security" },
    ],
  },
];

export const legalNav: NavLinkItem[] = [
  { label: "Privacy Policy", to: "/legal/privacy" },
  { label: "Terms of Service", to: "/legal/terms" },
  { label: "Cookie Policy", to: "/legal/cookies" },
  { label: "Acceptable Use Policy", to: "/legal/acceptable-use" },
  { label: "Intellectual Property", to: "/legal/intellectual-property" },
  { label: "Data Processing Agreement", to: "/legal/data-processing" },
  { label: "Security Policy", to: "/security" },
  { label: "Responsible Disclosure", to: "/security/disclosure" },
  { label: "Accessibility Statement", to: "/accessibility" },
  { label: "Cookie Preferences", to: "/cookie-preferences" },
];

export const sitemapGroups: NavGroup[] = [
  {
    label: "Company",
    items: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Our Approach", to: "/approach" },
      { label: "How We Work", to: "/how-we-work" },
      { label: "Industries", to: "/industries" },
      { label: "Technology Stack", to: "/technology" },
      { label: "Partners", to: "/partners" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "All Services", to: "/services" },
      { label: "Web Development", to: "/services/web-development" },
      { label: "Mobile App Development", to: "/services/mobile-development" },
      { label: "Backend & API Development", to: "/services/backend-api" },
      { label: "UI/UX Design", to: "/services/ui-ux-design" },
      { label: "Cloud & DevOps", to: "/services/cloud-devops" },
      { label: "System Integration", to: "/services/system-integration" },
      { label: "Software Maintenance", to: "/services/maintenance" },
      { label: "Custom Software", to: "/services/custom-software" },
    ],
  },
  {
    label: "Work & Resources",
    items: [
      { label: "Projects & Portfolio", to: "/projects" },
      { label: "Resources", to: "/resources" },
      { label: "Blog", to: "/blog" },
      { label: "Guides", to: "/guides" },
      { label: "Documentation", to: "/docs" },
      { label: "Changelog", to: "/changelog" },
      { label: "System Status", to: "/status" },
      { label: "Search", to: "/search" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Contact", to: "/contact" },
      { label: "Request a Quote", to: "/contact/quote" },
      { label: "Book a Consultation", to: "/contact/consultation" },
    ],
  },
  {
    label: "Legal & Trust",
    items: [
      { label: "Privacy Policy", to: "/legal/privacy" },
      { label: "Terms of Service", to: "/legal/terms" },
      { label: "Cookie Policy", to: "/legal/cookies" },
      { label: "Acceptable Use Policy", to: "/legal/acceptable-use" },
      { label: "Intellectual Property Policy", to: "/legal/intellectual-property" },
      { label: "Data Processing Agreement", to: "/legal/data-processing" },
      { label: "Security Policy", to: "/security" },
      { label: "Responsible Disclosure", to: "/security/disclosure" },
      { label: "Accessibility Statement", to: "/accessibility" },
      { label: "Cookie Preferences", to: "/cookie-preferences" },
    ],
  },
];
