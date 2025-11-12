# Adding Links to Case Study Paragraphs

This guide explains how to add inline links within case study paragraphs that will be rendered using the `TextLink` component.

## Overview

Case study paragraphs now support two formats:
1. **Simple text**: Plain string paragraphs (backward compatible)
2. **Rich text**: Array of text and link segments for inline links

## Usage

### Simple Text Paragraph (No Links)

```typescript
paragraphs: [
  "This is a simple paragraph without any links."
]
```

### Rich Text Paragraph (With Links)

```typescript
paragraphs: [
  [
    { type: "text", content: "This paragraph has an " },
    { type: "link", text: "inline link", href: "https://example.com" },
    { type: "text", content: " in the middle of it." }
  ]
]
```

### Mixed Paragraphs

You can mix both formats in the same section:

```typescript
paragraphs: [
  "First paragraph is simple text.",
  [
    { type: "text", content: "Second paragraph has a " },
    { type: "link", text: "link", href: "https://example.com" },
    { type: "text", content: "." }
  ],
  "Third paragraph is simple text again."
]
```

## Complete Example

```typescript
{
  type: "text",
  title: "Research & Discovery",
  paragraphs: [
    [
      { type: "text", content: "We conducted 23 " },
      {
        type: "link",
        text: "user interviews",
        href: "https://example.com/research-methods"
      },
      {
        type: "text",
        content: " with existing customers across different age groups."
      }
    ],
    "The insights were eye-opening and led to significant design changes.",
    [
      { type: "text", content: "We used " },
      { type: "link", text: "Figma", href: "https://figma.com" },
      { type: "text", content: " for prototyping and " },
      { type: "link", text: "Miro", href: "https://miro.com" },
      { type: "text", content: " for collaboration." }
    ]
  ]
}
```

## Types

### TextSegment

```typescript
type TextSegment =
  | { type: "text"; content: string }
  | { type: "link"; text: string; href: string };
```

### Paragraph

```typescript
type Paragraph = string | TextSegment[];
```

## Rendering

Links are automatically rendered with the `TextLink` component, which includes:
- The link text
- An external link icon
- Proper styling for light/dark themes

## Spacing and Breakpoints

The case study layout now includes responsive spacing between paragraphs and sections:

### Paragraph Spacing
- **Mobile**: 6 units between paragraphs (`space-y-6`)
- **Small screens and up**: 8 units between paragraphs (`space-y-8`)

### Section Spacing
- **Mobile**: 12 units between sections (`mb-12`)
- **Small screens**: 16 units between sections (`mb-16`)
- **Medium screens and up**: 20 units between sections (`mb-20`)

### Notes Section Spacing
- **Top margin**: 20 units (mobile), 24 units (sm), 32 units (md+)
- **Between notes**: 8 units (mobile), 10 units (sm+)

These responsive breakpoints ensure optimal readability across all device sizes.

## Tips

1. **Break text naturally**: Split text segments at natural boundaries for readability
2. **Keep it simple**: Only use rich text format when you actually need links
3. **Consistent spacing**: Include spaces in text content as needed (before/after links)
4. **Valid URLs**: Always provide complete, valid URLs for links
5. **Responsive design**: The layout automatically adjusts spacing for different screen sizes

## Component Files

- **Type definitions**: `src/constants/case_studies.ts`
- **Rich text renderer**: `src/components/rich-text-paragraph.astro`
- **Text link component**: `src/components/ui/text_link.astro`
- **Case study page**: `src/pages/case-study/[study].astro`
