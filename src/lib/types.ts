export interface Service {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  capabilities: string[];
  useCases: string[];
  deliverables: string[];
  related: string[]; // slugs of related services
}

export interface Project {
  slug: string;
  name: string;
  sector: string;
  summary: string;
  description: string;
  services: string[];
  stack: string[];
  outcomes: string[];
  year: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: ArticleSection[];
}

export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  code?: { language: string; content: string };
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  level: "Introductory" | "Intermediate" | "Advanced";
  topics: string[];
}

export interface Career {
  slug: string;
  title: string;
  type: string;
  location: string;
  team: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  context: string;
}

export interface TechCategory {
  name: string;
  description: string;
  items: string[];
}

export interface Industry {
  name: string;
  description: string;
  needs: string[];
}

export interface ChangelogEntry {
  version: string;
  date: string;
  type: "Added" | "Improved" | "Fixed" | "Security";
  items: string[];
}

export interface NavLinkItem {
  label: string;
  to: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavLinkItem[];
}

export interface SearchRecord {
  title: string;
  description: string;
  to: string;
  type: string;
  keywords: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  description: string;
  effectiveDate?: string;
  lastUpdated?: string;
  sections: LegalSection[];
}
