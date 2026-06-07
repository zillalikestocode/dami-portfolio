// Type definitions and the local fallback data live in `case_studies.data.ts`
// (kept free of top-level await so plain Node tooling can import it). This file
// resolves the actual case study data at build time and exposes the helpers.

export type {
  TextSegment,
  Paragraph,
  SideParagraph,
  SlideImage,
  TeamMember,
  SectionContent,
  CaseStudy,
} from "./case_studies.data";

import type { CaseStudy } from "./case_studies.data";
import { fallbackCaseStudies } from "./case_studies.data";

/**
 * Build-time data source.
 *
 * When `CASE_STUDIES_API_URL` is set (the portfolio-admin public endpoint), the
 * case studies are fetched from there at build time. Otherwise we fall back to
 * the local data so dev and existing builds keep working. When the API URL is
 * configured but the request fails, we throw so a broken build is loud rather
 * than silently shipping an empty site.
 */
const API_URL =
  import.meta.env?.CASE_STUDIES_API_URL ?? process.env.CASE_STUDIES_API_URL;

async function loadCaseStudies(): Promise<CaseStudy[]> {
  if (!API_URL) return fallbackCaseStudies;

  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch case studies from ${API_URL}: ${res.status} ${res.statusText}`,
    );
  }
  return (await res.json()) as CaseStudy[];
}

export const caseStudies: CaseStudy[] = await loadCaseStudies();

// Helper function to get a case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

// Helper function to get all case study slugs (useful for static path generation)
export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

// Helper function to check if a case study has content
export function caseStudyHasContent(caseStudy: CaseStudy): boolean {
  return caseStudy.sections.length > 0;
}
