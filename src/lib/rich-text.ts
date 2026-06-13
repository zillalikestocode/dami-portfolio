/**
 * Minimal inline-link parser for page copy.
 *
 * Page content stores inline links as `[label](https://url)` markdown (the
 * shape produced by the admin). This splits a paragraph string into plain-text
 * and link segments so it can be rendered with the portfolio's `TextLink`.
 */

export type InlineSegment =
  | { type: "text"; content: string }
  | { type: "link"; text: string; href: string };

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function parseInlineLinks(input: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(input)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", content: input.slice(lastIndex, match.index) });
    }
    segments.push({ type: "link", text: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < input.length) {
    segments.push({ type: "text", content: input.slice(lastIndex) });
  }

  return segments;
}
