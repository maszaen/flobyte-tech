import { articles } from "../data/blog";
import { careers } from "../data/careers";
import { guides } from "../data/guides";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { sitemapGroups } from "../data/navigation";
import type { SearchRecord } from "./types";

function buildIndex(): SearchRecord[] {
  const records: SearchRecord[] = [];

  for (const s of services) {
    records.push({
      title: s.name,
      description: s.description,
      to: `/services/${s.slug}`,
      type: "Service",
      keywords: [s.tagline, ...s.capabilities, ...s.useCases].join(" "),
    });
  }
  for (const p of projects) {
    records.push({
      title: p.name,
      description: p.summary,
      to: `/projects/${p.slug}`,
      type: "Project",
      keywords: [p.sector, ...p.stack, ...p.outcomes].join(" "),
    });
  }
  for (const a of articles) {
    records.push({
      title: a.title,
      description: a.description,
      to: `/blog/${a.slug}`,
      type: "Article",
      keywords: a.tags.join(" "),
    });
  }
  for (const g of guides) {
    records.push({
      title: g.title,
      description: g.description,
      to: `/guides`,
      type: "Guide",
      keywords: g.topics.join(" "),
    });
  }
  for (const c of careers) {
    records.push({
      title: c.title,
      description: c.summary,
      to: `/careers/${c.slug}`,
      type: "Career",
      keywords: [c.team, c.type, c.location].join(" "),
    });
  }
  for (const group of sitemapGroups) {
    for (const item of group.items) {
      if (records.some((r) => r.to === item.to)) continue;
      records.push({
        title: item.label,
        description: `${group.label} — ${item.label} page`,
        to: item.to,
        type: "Page",
        keywords: group.label,
      });
    }
  }
  return records;
}

export const searchIndex = buildIndex();

export function searchContent(query: string): SearchRecord[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/);
  return searchIndex
    .map((record) => {
      const haystackTitle = record.title.toLowerCase();
      const haystackRest = (
        record.description +
        " " +
        record.keywords +
        " " +
        record.type
      ).toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (haystackTitle.includes(term)) score += 3;
        else if (haystackRest.includes(term)) score += 1;
        else return { record, score: 0 };
      }
      return { record, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.record);
}
