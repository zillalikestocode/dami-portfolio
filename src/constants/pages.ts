// Type definitions and the local fallback content live in `pages.data.ts`
// (kept free of top-level await so plain Node tooling can import it). This file
// resolves the actual page content at build time and exposes it per page.

export type {
  Experience,
  LinkEntry,
  HomeContent,
  AboutContent,
  SpeakingContent,
  PagesContent,
} from "./pages.data";

import type { PagesContent } from "./pages.data";
import { fallbackPages } from "./pages.data";

/**
 * Build-time data source.
 *
 * When `PAGES_API_URL` is set (the portfolio-admin `/api/public/pages`
 * endpoint), the page content is fetched from there at build time. Otherwise we
 * fall back to the local content so dev and existing builds keep working. Each
 * page falls back individually, so an unpublished page never blanks the site.
 * When the API URL is configured but the request fails, we throw so a broken
 * build is loud rather than silently shipping stale content.
 */
const API_URL =
  import.meta.env?.PAGES_API_URL ?? process.env.PAGES_API_URL;

async function loadPages(): Promise<PagesContent> {
  if (!API_URL) return fallbackPages;

  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch pages from ${API_URL}: ${res.status} ${res.statusText}`,
    );
  }

  const data = (await res.json()) as Partial<PagesContent>;
  return {
    home: data.home ?? fallbackPages.home,
    about: data.about ?? fallbackPages.about,
    speaking: data.speaking ?? fallbackPages.speaking,
  };
}

export const pages: PagesContent = await loadPages();

export const homePage = pages.home;
export const aboutPage = pages.about;
export const speakingPage = pages.speaking;
